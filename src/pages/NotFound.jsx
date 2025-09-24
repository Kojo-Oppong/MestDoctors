import React from 'react'
import notfound from '../assets/notfound.png'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

  const navigate = useNavigate();

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <div>
        <div className='flex justify-center text-4xl text-gray-600 mb-2'>Page Not Found</div>
        <img className='w-screen h-[450px]' src={notfound} alt="Not Found" />
      </div>

      <div className='flex justify-center my-4 text-gray-600'>
        <button onClick={() => { navigate('/'); scrollTo(0, 0) }} className='flex justify-center border px-2 rounded hover:bg-primary hover:text-white transition-all duration-300'>Go Home</button>
      </div>
    </div>

  )
}

export default NotFound
