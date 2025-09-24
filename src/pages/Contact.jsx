import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>Contact <span className='text-gray-700 font-semibold'>Us</span></p>
      </div>

     <div className='flex gap-5 my-10 justify-center md:flex mb-28 text-sm'>
       <img className='w-full md:max-w-[360px] rounded-md ' src={assets.contact_image} alt="" />

       <div className='flex flex-col justify-center items-start gap-4 '>
        <p className='font-semibold text-lg text-gray-600'>Our OFFICE</p>
        <p className='text-gray-500'>9 Sorghum Street <br />Apartment 5, Dansoman, Accra</p>
        <p className='text-gray-500'>Tel: (233) 545 47‑6473 <br />Email: princedarf1@gmail.com</p>
        <p className='font-semibold text-lg text-gray-600'>Careers at Family Doctors</p>
        <p className='text-gray-500'>Learn more about our teams and job openings</p>
        <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'>Explore Jobs</button>
       </div>
     </div>
      
    </div>
  )
}

export default Contact
