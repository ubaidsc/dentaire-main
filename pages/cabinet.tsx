import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

import cabinet1 from '../media/cabinet/IMG_4445.jpg'
import cabinet2 from '../media/cabinet/IMG_4447.jpg'
import cabinet3 from '../media/cabinet/IMG_4341.jpg'
import doc1 from '../media/docs/doc1.png'
import doc2 from '../media/docs/doc2.png'
import doc3 from '../media/docs/doc3.png'
import doc4 from '../media/docs/doc4.png'

const docs = [
    {name: "Dr. majd", color: "blue", img: doc2},
    {name: "Dr. taha", color: "mauve", img: doc3},
    {name: "Assistante Kaouthar", color: "rose", img: doc4},
    {name: "Assistante Souad", color: "peach", img: doc1},
];

type Props = {}

function cabinet({}: Props) {
  return (
    <>
        <Header />
        <main className='max-w-screen-2xl md:px-8 sm:py-14 mx-auto'>
            <section className='flex flex-col gap-28'>
                <div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-8 lg:gap-16'>
                    <div className='p-2 flex flex-col gap-8 self-center'>
                        <h1 className='text-4xl'>A propos de nous</h1>
                        <p className='text-sm text-slate-500'>
                            Nous voulons que vous vous sentiez bien dans votre
                            bien-être bucco-dentaire. Pas seulement deux fois par
                            an, mais chaque fois que vous prenez une bouchée,
                            racontez une blague, riez ou partagez un baiser.
                        </p>
                        <button className='text-white text-sm capitalize bg-purple w-fit px-8 py-4 rounded-2xl'>
                            contactez nous
                        </button>
                    </div>
                    <div className='flex gap-6 justify-center'>
                        <Image src={cabinet1} width={390} height={500} alt="majd" className='rounded-2xl h-5/6 max-w-[70%] object-contain place-self-start'/>
                        <Image src={cabinet2} width={390} height={500} alt="majd" className='rounded-2xl h-5/6 max-w-[50%] object-cover place-self-end'/>
                    </div>
                </div>
                <div className='flex flex-col md:grid md:grid-cols-2 gap-2 lg:gap-16'>
                    <Image src={cabinet3} width={390} height={500} alt="majd" className='rounded-2xl w-full h-full object-cover'/>
                    <div className='p-2 flex flex-col gap-8 self-center'>
                        <span className='uppercase text-purple text-[12px]'>our priority</span>
                        <h2 className='text-4xl'>Nos patients sont notre priorite</h2>
                        <p className='text-sm text-slate-500'>
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                        </p>
                        <button className='text-white text-sm capitalize bg-purple w-fit px-8 py-4 rounded-2xl'>
                            Prendre un Rendez-vous
                        </button>
                    </div>
                </div>

                <div className='p-2 flex flex-col gap-8 self-center'>
                        <span className='uppercase text-purple text-[12px]'>meet our team</span>
                        <div className='grid grid-cols-8'>
                            <h2 className='text-4xl col-span-4'>Apprenez à connaître notre équipe</h2>
                            <p className='text-sm text-slate-500 col-span-3 col-end-9'>
                                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                            </p>
                        </div>
                        <div className='grid grid-rows-1 grid-cols-4 text-center text-sm gap-8'>
                            {/* <div className='flex flex-col gap-4'>
                                <div className={`rounded-2xl bg-${docs[2].color}`}>
                                    <Image src={doc1} width={390} height={500} alt="majd" className='pt-6 px-8 object-cover'/>
                                </div>
                                <span className='capitalize'>majd zade</span>
                            </div> */}

                            {
                                docs.map((doc, index) => (
                                    <div key={index} className='flex flex-col gap-4'>
                                        <div className={`flex rounded-2xl justify-center h-full bg-${doc.color}`}>
                                            <Image src={doc.img} width={290} height={402} alt="majd" className='p-4 pb-0 object-cover'/>
                                        </div>
                                        <span className='capitalize'>{doc.name}</span>
                                    </div>
                                ))
                            }
                        </div>
                </div>

                <div className='flex flex-col gap-8 text-center max-w-screen-lg mx-auto'>
                    <span className='uppercase text-purple text-[12px]'>faq</span>
                    <h2 className='text-4xl col-span-4'>Frequently asked question</h2>
                    <div className='border-t-4 border-purple w-full'>
                        <div></div>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </>
  )
}

export default cabinet