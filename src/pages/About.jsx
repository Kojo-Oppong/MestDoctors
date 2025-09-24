import React from 'react'
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className='px-4 sm:px-8 max-w-5xl mx-auto'>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-8 flex flex-col md:flex-row gap-8 md:gap-12 items-center'>
        <img
          className='w-full max-w-xs sm:max-w-sm md:max-w-[360px] h-60 sm:h-80 md:h-[445px] rounded-md object-cover mx-auto'
          src={assets.about_image}
          alt=""
        />
        <div className='flex flex-col justify-center gap-4 w-full md:w-2/4 text-sm text-gray-600'>
          <p className='text-justify'>Welcome to MestDoctors, your trusted partner in managing your healthcare needs conveniently and efficiently. At MestDoctors, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p className='text-justify'>MestDoctors is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, MestDoctors is here to support you every step of the way.
          </p>
          <b className='text-gray-800'>Our Vision</b>
          <p className='text-justify'>Our vision at MestDoctors is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>

      <div className='text-xl my-4 py-5 text-center'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row gap-6 md:gap-8 mb-20'>
        <div className='border border-gray-200 rounded-lg p-4 md:px-8 lg:px-16 py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer flex-1'>
          <b className='text-center'>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-4 md:px-8 lg:px-16 py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer flex-1'>
          <b className='text-center'>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-4 md:px-8 lg:px-16 py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer flex-1'>
          <b className='text-center'>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  )
}

export default About
