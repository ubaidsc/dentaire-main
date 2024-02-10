import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import { FiPhoneCall } from "react-icons/fi";
import majd  from '../../media/majd.jpg';

type Props = {}

function Hero(myRef: any) {
  return (
    <>
        <div className='bg-blue rounded-[3rem] grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2'>
            <div className='flex flex-col lg:grid lg:grid-rows-5 items-center gap-8 lg:gap-12 p-6 pb-10 xl:p-16 2xl:pr-10 text-center lg:text-left'>
                <h1 className='lg:row-span-3 text-4xl xl:text-6xl'>Your smile is our priority</h1>
                <div className='lg:row-span-2 space-y-10'>
                    <h3 className='text-slate-600 text-base'>You will have all the good reasons to come to us.</h3>
                    <div className='grid grid-rows-2 md:grid-cols-2 place-items-center text-xs gap-2'>
                        <div className='w-full'>
                            <Link href="#location">
                                <button className='text-white w-full bg-purple rounded-2xl px-8 py-5 lg:px-6 lg:py-3 xl:py-5 2xl:px-12 text-sm'>
                                    Shall we call you back?
                                </button>
                            </Link>
                        </div>
                        <button className='flex items-center w-full bg-white/30 p-2 rounded-xl gap-4'>
                            <div className='bg-white p-3 w-fit rounded-xl'>
                                <FiPhoneCall className='text-purple text-lg'/>
                            </div>
                            <div className='grid grid-rows-2 text-left gap-2' onClick={() => {window.location.href = 'tel:0774767832'}}>
                                <span className='uppercase text-purple'>dental 24h emergency</span>
                                <span>07 74 76 78 32</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            
            <div className='bg-hero-image flex rounded-t-2xl lg:rounded-r-[3rem] lg:rounded-l-none bg-top lg:bg-center bg-cover row-start-1 lg:col-start-2 '>
                {/* <div className='self-end bg-slate-100 rounded-2xl p-2 flex text-xs items-center gap-4 pr-20 mb-12 ml-4'>
                    <div className='relative w-fit'>
                        <Image src={majd} width={64} height={64} alt="majd" className='rounded-2xl'/>
                        <div className='bg-green-600 rounded-full w-3 h-3 absolute right-0 bottom-0'></div>
                    </div>
                    <div className='capitalize flex flex-col gap-2'>
                        <span className=''>dr. majd zade</span>
                        <span className='text-slate-500'>consultant</span>
                    </div>
                </div> */}
            </div>
        </div>

        <div className='mx-auto w-[85%] lg:w-[70%] space-y-10 text-center'>
            <h2 className='text-lg lg:text-4xl text-center leading-loose'>
            The dentist is reinventing what the dental experience can be and proudly setting a new standard for patient care.
            </h2>
            <div className='h-1 w-32 bg-purple rounded-full mx-auto'></div>
        </div>
    </>
  )
}

export default Hero