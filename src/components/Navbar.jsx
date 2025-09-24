import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import princed from '../assets/princed.jpg';

const Navbar = () => {

  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className='relative flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 p-4 '>
      <img onClick={()=> {navigate('/'), scrollTo(0,0)}} className='w-32 cursor-pointer' src={assets.mestlogo} alt="" />

      {/* mobile toggle */}
      <button
        className='md:hidden p-2 rounded-md focus:outline-none'
        onClick={() => setShowMenu(prev => !prev)}
        aria-label='Toggle menu'
      >
        {showMenu ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        )}
      </button>

      {/* desktop nav */}
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/doctors'>
          <li className='py-1'>ALL DOCTORS</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>

      {/* mobile menu (Tailwind only) */}
      {showMenu && (
        <div className='absolute top-full left-0 right-0 bg-white shadow-md p-4 md:hidden z-40'>
          <ul className='flex flex-col gap-3 font-medium'>
            <NavLink to='/' onClick={() => setShowMenu(false)} className='block py-2'>HOME</NavLink>
            <NavLink to='/doctors' onClick={() => setShowMenu(false)} className='block py-2'>ALL DOCTORS</NavLink>
            <NavLink to='/about' onClick={() => setShowMenu(false)} className='block py-2'>ABOUT</NavLink>
            <NavLink to='/contact' onClick={() => setShowMenu(false)} className='block py-2'>CONTACT</NavLink>
            <div className='border-t mt-2 pt-2'>
              {
                token
                  ? (
                    <>
                      <div className='flex items-center gap-2 py-2'>
                        <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                        <div>
                          <p className='font-medium'>{/* optional name if available */}</p>
                          <button onClick={() => { navigate('/My-profile'); setShowMenu(false); }} className='text-sm text-gray-600'>My Profile</button>
                        </div>
                      </div>
                      <button onClick={() => { navigate('/My-appointments'); setShowMenu(false); }} className='w-full text-left py-2'>Appointments</button>
                      <button onClick={() => { setToken(false); setShowMenu(false); }} className='w-full text-left py-2'>Logout</button>
                    </>
                  )
                  : <button onClick={() => { navigate('/login'); setShowMenu(false); }} className='w-full text-left py-2'>Create account</button>
              }
            </div>
          </ul>
        </div>
      )}


        {/* Profile section */}
      <div className='flex items-center gap-4'>
        {
          token
            ? <div className=' flex items-center gap-2 cursor-pointer group relative' onClick={() => setShowMenu(!showMenu)}>
              <img className='w-8 rounded-full' src={princed} alt="" />
              <img className='w-2' src={assets.dropdown_icon} alt="" />
              <div className=' absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block' >
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 shadow-sm'>
                  <p onClick={() => navigate('/My-profile')} className='hover:text-black cursor-pointer ' >My Profile</p>
                  <p onClick={() => navigate('/My-appointments')} className='hover:text-black cursor-pointer'> Appointments</p>
                  <p onClick={() => setToken()} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
              </div>
            </div>
            : <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer'>Create account</button>
        }

      </div>
    </div>
  )
}

export default Navbar
