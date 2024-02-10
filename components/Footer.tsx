import React from 'react'
import { FiPhoneCall, FiClock } from "react-icons/fi";
import { FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import Link from 'next/link';

type Props = {}

function Footer({}: Props) {
  return (
    <div className='py-8 bg-[#041434]'>
        <div className='grid grid-cols-1 md:grid-cols-2 max-w-screen-2xl mx-auto gap-14 text-xs text-slate-500'>
            {/**************** CONTACT INFORMATION *****************/}
            <div className='flex flex-col gap-10'>
                <h3 className='uppercase self-center'>
                    contact & information
                </h3>
                <div className='grid grid-rows-3 gap-8 md:gap-6 self-center'>
                    <div className="flex items-center gap-4">
                        <div className='flex bg-white/10 p-2 rounded-2xl aspect-square h-16'>
                            <div className='flex bg-white rounded-xl p-3 aspect-square justify-center h-12'>
                                <FiPhoneCall className='text-xl self-center fill-purple text-purple'/>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span>You can contact here</span>
                            <span className='text-white text-sm'>07 74 76 78 38</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className='flex bg-white/10 p-2 rounded-2xl aspect-square h-16'>
                            <div className='flex bg-white rounded-xl p-2 aspect-square justify-center h-12'>
                                <FiClock className='text-2xl self-center fill-purple text-white'/>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span>Timmings</span>
                            <div className='flex flex-col'>
                                <span className='text-white text-sm'>10:00 AM - 14:00 PM</span>
                                <span className='text-white text-sm'>16:00 PM - 20:00 PM</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className='flex bg-white/10 p-2 rounded-2xl aspect-square h-16'>
                            <div className='flex bg-white rounded-xl p-3 aspect-square justify-center h-12'>
                                <FaMapMarkerAlt className='text-2xl self-center fill-purple text-white'/>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span>Address</span>
                            <span className='text-white text-sm'>35 West Rue Tanger, Tanger</span>
                        </div>
                    </div>
                </div>
            </div>
            {/**************** QUICK LINKS *****************/}
            <div className='flex flex-col gap-10'>
                <h3 className='uppercase self-center'>
                    quick links
                </h3>
                <div className='flex flex-col gap-8 md:gap-4 capitalize text-white text-sm text-center'>
                    <Link href="/">Our Firm</Link>
                    <Link href="/">Care and Services</Link>
                    <Link href="/">dentist</Link>
                    <Link href="/">FAQ</Link>
                </div>
                <div className='flex flex-col gap-8 items-center'>
                    <h3 className='uppercase self-center'>
                        follow us on
                    </h3>
                    <div className='flex gap-4'>
                        <a target="_blank" href="https://www.instagram.com" rel="noopener noreferrer"><FaInstagram className='text-white text-2xl'/></a>
                        <span><FaFacebookF className='text-white text-2xl'/></span>
                        {/* <Link href="/"><FaTiktok className='text-white text-2xl'/></Link> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer