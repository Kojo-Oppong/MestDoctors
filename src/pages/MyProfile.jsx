import React from 'react'
import { useState } from 'react';
import { assets } from '../assets/assets';
import princed from '../assets/princed.jpg';

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: 'Prince Darfour',
    image: princed,
    email: 'princedarf1@gmail.com',
    phone: '+233 545 47 6473',
    address: { city: '9 Sorghum Street, Dansoman, Accra.', country: 'Ghana', area: 'Dansoman' },
    gender: 'Male',
    dateOfBirth: '1999-05-15',
    bloodGroup: 'O+',
  });

  const [isEdit, setIsEdit] = useState();

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      <img className='w-36 rounded' src={userData.image} alt="" />

      {
        isEdit
          ? <input className='bg-gray-100 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target, value }))} />
          : <p className='font-light text-2xl text-neutral-800 mt-4'>{userData.name}</p>
      }
      <hr className='bg-gray-400 h-[1px] border-none'/>

      <div>
        <p className='text-gray-400 underline mt-2'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-2 gap-1.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-400'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {
            isEdit
              ? <input className='bg-gray-100 max-w-50' type="text" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target, value }))} />
              : <p className='text-blue-200'>{userData.phone}</p>
          }
          <p className='font-medium'>Address:</p>
          {
            isEdit
              ? <input className='bg-gray-50 ' type="text" value={userData.address.city} onChange={e => setUserData(prev => ({ ...prev, address: { ...prev.address, city: e.target.value } }))} />
              : <p className='text-gray-400'>{userData.address.city}</p>
              
          }
          {/* {
            isEdit
              ? <input type="text" value={userData.address.country} onChange={e => setUserData(prev => ({ ...prev, address: { ...prev.address, country: e.target.value } }))} />
              : <p>{userData.address.country}</p>
          } */}
        </div>
      </div>

      <div>
        <p className='text-gray-400 underline mt-2'>BASIC INFORMATION</p>
        <div className='grid grid-cols-2 gap-1.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender</p>
          
        {
          isEdit
            ? <select className='bg-gray-50' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            : <p className='text-gray-400'>{userData.gender}</p>
        }
        <p className='font-medium'>Birthday:</p>
        <p className='text-gray-400'>{userData.dateOfBirth}</p>
        </div>
      </div>

      <div className='mt-8'>
        {
          isEdit ?
            <button  className='border border-primary px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={() => setIsEdit(false)}>Save Information</button>
            :
            <button className='border border-primary px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={() => setIsEdit(true)}>Edit Profile</button>
        }
      </div>

    </div>
  )
}

export default MyProfile
