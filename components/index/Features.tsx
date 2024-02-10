import React from 'react'

import shield from '../../media/shield.svg';
import hand from '../../media/hand.svg';
import can from '../../media/can.svg';
import tooth from '../../media/tooth.svg';
import Image, { StaticImageData } from 'next/image';

const features = [
    {title: "Certified doctors", desc: "We prioritize safety with health checks and more", img: shield},
    {title: "Warm setting", desc: "We’re in network with major insurers like Delta Dental, Aetna, and Cigna.", img: hand},
    {title: "Personalized approach", desc: "Our clinic offer a full  of dental service, from exams to implants and veneers.", img: can},
    {title: "Minimal waiting time", desc: "From floss bosses to sweet tooths, every mouth is welcome.", img: tooth},
];

type Props = {}
type feature = {
    title: string, desc: string, img: StaticImageData
}

function Features({}: Props) {
  return (
    <div className='flex flex-col bg-mauve rounded-2xl p-4 md:p-6 lg:px-14 text-xs gap-8 lg:gap-16'>
        <span className='uppercase text-purple text-xs -ml-4'>features</span>
        <h2 className='text-3xl pl-3 -ml-4'>You will have all the good reasons to come to us.</h2>
        <p className='text-sm text-slate-700 pl-3'>
            Lorem ipsum is placeholder text commonly used in the graphic, 
            print, and publishing industries for 
            previewing layouts and visual mockups.
        </p>
        <div className='grid md:grid-cols-2 gap-4 lg:gap-16 lg:p-4'>
            {features.map((feature:feature, index:number) => (
                <div key={index} className="flex items-center gap-4">
                    <div className='flex bg-white/20 p-2 rounded-2xl aspect-square h-16'>
                        <div className='flex bg-white rounded-2xl p-4 aspect-square'>
                            <Image src={feature.img} width={40} height={40} alt="icon" className='h-6 self-center'/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <span className='text-lg'>{feature.title}</span>
                        <span className='text-slate-500'>{feature.desc}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Features