import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div
        className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-8 sm:gap-12 lg:gap-16 my-10 mt-20 text-sm"
      >
        {/* Left Section */}
        <div className="flex justify-center lg:justify-start">
          <img
            onClick={() => {
              navigate('/')
              scrollTo(0, 0)
            }}
            className="w-32 sm:w-40 lg:w-48 mb-4 cursor-pointer"
            src={assets.mestlogo}
            alt="MestDoctors logo"
          />
        </div>

        {/* What We Do */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-lg sm:text-xl font-medium mb-3">WHAT WE DO</h1>
          <p className="mb-8 w-full sm:w-4/5 lg:w-2/3 text-gray-600 text-justify lg:text-left">
            Empowering you to find the right healthcare professional, book
            appointments with ease, and manage your health journey—all in one place.
          </p>
        </div>

        {/* Company Links */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="text-lg sm:text-xl font-medium mb-3">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li
              className="cursor-pointer hover:text-gray-800" onClick={() => { navigate('/'); scrollTo(0, 0) }} >
              Home
            </li>
            <li
              className="cursor-pointer hover:text-gray-800"
              onClick={() => {
                navigate('/about')
                scrollTo(0, 0)
              }}
            >
              About Us
            </li>
            <li
              onClick={() => {
                navigate('/contact')
                scrollTo(0, 0)
              }}
              className="cursor-pointer hover:text-gray-800"
            >
              Contact Us
            </li>
            <li className="cursor-pointer hover:text-gray-800">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="text-lg sm:text-xl font-medium mb-3">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="break-words">+233 545476473</li>
            <a href="mailto:familyandfriendsdocs@gmail.com">
              <li className="hover:text-gray-800 break-words">
                familyandfriendsdocs@gmail.com
              </li>
            </a>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto mt-8">
        <hr />
        <p className="py-4 text-sm text-center text-gray-500">
          © 2025 darfDev – All Rights Reserved
        </p>
      </div>
    </div>
  )
}

export default Footer
