import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointments = () => {

  const { doctors } = useContext(AppContext);

  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-gray-600 border-b'>My Appointments</p>

      {doctors.slice(0, 3).map((item, index) => (
        <div className='grid grid-cols-2 gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
          <div>
            <img className='w-32 bg-indigo-50' src={item.image} alt="" />
          </div>
          <div className='flex-1 text-sm text-gray-500'>
            <p className='text-gray-500 font-semibold'>{item.name}</p>
            <p>{item.speciality}</p>
            <p className='text-gray-500 font-medium mt-1'>Address:</p>
            <p className='text-xs'>{item.city}</p>
            <p className='text-xs'>{item.address.line1}</p>
            <p className='text-xs'>{item.experience}</p>
            <p className='text-xs mt-1'><span>Date & Time:</span> 19, September, 2025 | 8:30</p>
          </div>
          <div></div>
          <div className='flex flex-col gap-3 text-sm text-gray-600'>
            <button className='text-sm text-stone-500 text-center p-1 border rounded bg-pryy hover:bg-green-300 hover:text-white transition-all duration-300'>Pay Online</button>
            <button className='text-sm text-stone-500 text-center p-1 border rounded hover:bg-red-400 hover:text-white transition-all duration-300 '>Cancel Appointment</button>
          </div>
        </div>
      ))}


    </div>
  )
}

export default MyAppointments
