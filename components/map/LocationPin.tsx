import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";


type Props = {lat: number, lng: number}

function LocationPin({}: Props) {
  return (
    <div className='flex absolute -translate-x-1/2 -translate-y-1/2 text-center w-fit'>
      <FaMapMarkerAlt className='text-3xl'/>
    </div>
  )
}

export default LocationPin