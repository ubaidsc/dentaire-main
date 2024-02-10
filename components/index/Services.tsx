import React from 'react'

import service1 from '../../media/service1.png';
import service2 from '../../media/service2.png';
import service3 from '../../media/service3.png';
import service4 from '../../media/service4.png';
import { FiChevronRight } from "react-icons/fi";
import Image from 'next/image';

const services = [
    {name: 'Dental appliances & fixed prosthesis', desc: 'Lorem ipsum is placeholder text commonly used in the graphic.', color: 'blue', img: service1, key: 1},
    {name: 'Implants', desc: 'Lorem ipsum is placeholder text commonly used in the graphic.', color: 'mauve', img: service2, key: 2},
    {name: 'Whitening', desc: 'Lorem ipsum is placeholder text commonly used in the graphic.', color: 'rose', img: service3, key: 3},
    {name: 'Root canal treatment', desc: 'Lorem ipsum is placeholder text commonly used in the graphic.', color: 'peach', img: service4, key: 4},
]

type Props = {}

function Services({}: Props) {
  return (
    <>
        <div className='grid grid-row-4 px-4 lg:px-8 text-xs gap-8'>
            <span className='text-purple uppercase'>services</span>
            <h2 className='text-2xl lg:text-4xl lg:max-w-[70%]'>
            Feel amazing about your oral health
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
                {services.map((service, index:number) => 
                    <div key={index} className='flex flex-col rounded-3xl border p-3 gap-3 flex-shrink'>
                        <div className={`flex p-4 bg-${service.color} rounded-2xl aspect-square w-full justify-center items-center`}>
                            <div className='bg-white/25 p-3 rounded-3xl border-t border-l border-white/50'>
                                <div className='bg-white p-4 rounded-2xl w-fit mx-auto'>
                                    <Image src={service.img} alt="icon" width={32} height={32} className="text-purple h-8 w-auto"/>
                                </div>
                            </div>
                        </div>
                        <span className='text-lg flex-grow text-center'>{service.name}</span>
                        <span className='text-slate-500 self-center text-center'>{service.desc}</span>
                    </div>
                )}
            </div>
            <div className='bg-purple/10 rounded-2xl w-56 p-2 justify-self-center'>
                <div className='flex p-2 text-purple items-center justify-center gap-2'>
                    <span>See the list of services</span>
                    <div className='p-0.5 bg-purple rounded-full'>
                        <FiChevronRight className='text-white h-4 w-auto'/>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <span className='bg-rose sr-only'></span>
            <span className='bg-peach sr-only'></span>
        </div>
    </>
  )
}

export default Services