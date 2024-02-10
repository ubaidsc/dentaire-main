import React, { useState } from 'react'
import { HiChevronDown } from "react-icons/hi2";

type Props = {}
const services = [
    "Extraction dentaire", "Blanchiment dentaire", "Detartrage", "Implant dentaire", "Prothèse mobile", "Prothèse fixée"
];

function Appointment({}: Props) {
    // States for contact form fields
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [service, setService] = useState("");
    const [message, setMessage] = useState("");
    const sendToMail = "ranaubaidd@gmail.com" // email that will receive notifications
    const sendFromMail = "ranaubaid409@gmail.com" // email that will send these notifications, preferably a website email

    //   Form validation state
    const [errors, setErrors] = useState({});

    //   Setting button text on form submission
    const [buttonText, setButtonText] = useState("Send");

    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
    const handleValidation = () => {
        let tempErrors = {
            "fullname": false,
            "email": false,
            "number": false,
            "service": false,
            "message": false,
        };
        let isValid = true;

        if (fullname.length <= 0) {
        tempErrors["fullname"] = true;
        isValid = false;
        }
        if (email.length <= 0) {
        tempErrors["email"] = true;
        isValid = false;
        }
        if (number.length <= 0) {
        tempErrors["number"] = true;
        isValid = false;
        }
        if (service.length <= 0) {
        tempErrors["service"] = true;
        isValid = false;
        }
        if (message.length <= 0) {
        tempErrors["message"] = true;
        isValid = false;
        }

        setErrors({ ...tempErrors });
        // console.log("errors", errors);
        return isValid;
    };

    //   Handling form submit
    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        let isValidForm = handleValidation();

        if (isValidForm) {
        setButtonText("Sending");
        const res = await fetch("/api/sendgrid", {
            body: JSON.stringify({
            email: email,
            fullname: fullname,
            number: number,
            service: service,
            message: message,
            to: sendToMail,
            from: sendFromMail,
            }),
            headers: {
            "Content-Type": "application/json",
            },
            method: "POST",
        });

        const { error } = await res.json();
        if (error) {
            console.log(error);
            setShowSuccessMessage(false);
            setShowFailureMessage(true);
            setButtonText("Send");
            return;
        }
        setShowSuccessMessage(true);
        setShowFailureMessage(false);
        setButtonText("Send");
        }
        // console.log(fullname, email, number, service, message);
    };


    return (
        <form action="#" method="POST" onSubmit={handleSubmit} className="mx-auto max-w-xl text-slate-500">
            <div className="grid grid-cols-1 gap-y-6 gap-x-8 md:grid-cols-2">
                {/************************   Nom et Prenom    ************************/}
                <div> 
                    <label htmlFor="fullname" className="block text-sm leading-6 uppercase">
                    Name
                    </label>
                    <div className="mt-2.5">
                    <input
                        type="text"
                        name="fullname"
                        id="fullname"
                        value={fullname}
                        required
                        onChange={e => setFullname(e.target.value)}
                        autoComplete="given-name"
                        placeholder='Full name'
                        className="block w-full rounded-md appearance-none py-2 px-3.5 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>
                {/************************   Email    ************************/}
                <div>
                    <label htmlFor="email" className="block text-sm leading-6 uppercase">
                    Email
                    </label>
                    <div className="mt-2.5">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        required
                        onChange={e => setEmail(e.target.value)}
                        autoComplete="email"
                        placeholder='Address email'
                        className="block w-full rounded-md appearance-none py-2 px-3.5 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>
                {/************************   Services    ************************/}
                <div>
                    <label htmlFor="phone-number" className="block text-sm   leading-6 uppercase">
                    services
                    </label>
                    <div className="relative mt-2.5">
                        <label htmlFor="service" className="sr-only">
                        Service
                        </label>
                        <select
                        id="service"
                        name="service"
                        value={service}
                        required
                        onChange={e => setService(e.target.value)}
                        className="h-full w-full appearance-none rounded-md border-0 bg-transparent bg-none pl-4 pr-9 focus:ring-2 focus:ring-inset focus:ring-purple md:text-sm block py-2 px-3.5 shadow-sm ring-1 ring-inset ring-gray-300 md:leading-6 outline-none"
                        >
                            <option value="" disabled>Choisissez un service</option>
                            {services.map((e, i) => <option key={i}>{e}</option>)}
                        </select>
                        <HiChevronDown
                        className="pointer-events-none absolute top-0 right-3 h-full w-5 text-gray-400"
                        aria-hidden="true"
                        />
                    </div>
                </div>
                {/************************   Numero    ************************/}
                <div>
                    <label htmlFor="phone-number" className="block text-sm leading-6 uppercase">
                    Phone number
                    </label>
                    <div className="relative mt-2.5">
                        <input
                            type="tel"
                            name="phone-number"
                            id="phone-number"
                            value={number}
                            required
                            onChange={e => setNumber(e.target.value)}
                            autoComplete="tel"
                            className="block w-full rounded-md appearance-none py-2 px-3.5 sm:text-sm sm:leading-6"
                            placeholder='Numero de telephone'
                        />
                    </div>
                </div>
                {/************************   Message    ************************/}
                <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-sm   leading-6 uppercase">
                    Message
                    </label>
                    <div className="mt-2.5">
                    <textarea
                        name="message"
                        id="message"
                        value={message}
                        required
                        onChange={e => setMessage(e.target.value)}
                        rows={4}
                        className="block w-full rounded-md appearance-none py-2 px-3.5 sm:text-sm sm:leading-6"
                        placeholder="Type message here..."
                    />
                    </div>
                </div>
            </div>
            <div className="mt-10">
            <button
                type="submit"
                className="block w-full rounded-md bg-purple px-3.5 py-2.5 text-center text-sm text-white shadow-sm hover:bg-purple/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
            >
                {buttonText}
            </button>
            </div>
            {
                showSuccessMessage ? <span>Votre message a été envoyé avec succès!</span> :
                showFailureMessage && <span>Votre message n&apos;a pas pu être envoyé.</span>
            }
        </form>
  )
}

export default Appointment