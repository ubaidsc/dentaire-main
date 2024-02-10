import React from 'react'
import Appointment from '../Appointment'
import Map from '../map/Map'

type Props = {}

function Location({}: Props) {
  return (
    <div className='grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 h-fit'>
        <Map />
        <div className='flex flex-col rounded-2xl p-4 md:p-6 lg:px-14 text-xs gap-8 lg:gap-16'>
            <span className='uppercase text-purple text-xs -ml-4'>
                book appointment
            </span>    
            <h2 className='text-3xl pl-3 -ml-4'>
            Make an appointment
            </h2>
            <p className='text-sm text-slate-700 pl-3'>
                Lorem ipsum is placeholder text commonly used in the graphic, 
                print, and publishing industries for previewing layouts and visual 
            </p>
            <Appointment />
        </div>
    </div>
  )
}

export default Location