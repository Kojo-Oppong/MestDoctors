import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 px-4 sm:px-6 md:mx-10">
      <h1 className="text-2xl sm:text-3xl font-medium text-center">
        Top Doctors to Book
      </h1>
      <p className="max-w-md text-center text-sm text-gray-700">
        Simply browse through our extensive list of trusted doctors
      </p>

      {/* Doctor grid */}
      <div
        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-5" >
        {doctors.slice(0, 8).map((item, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/appointments/${item._id}`)
              scrollTo(0, 0)
            }}
            className="
              border border-blue-200 rounded-xl overflow-hidden cursor-pointer
              hover:-translate-y-2 transition-transform duration-500
              bg-white
            "
          >
            <img
              className="bg-blue-50 w-full h-48 object-cover"
              src={item.image}
              alt={item.name}
            />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-green-500">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          navigate('/doctors')
          scrollTo(0, 0)
        }}
        className="
          bg-blue-50 text-gray-700 px-10 py-3 rounded-full mt-10
          hover:bg-blue-100 transition-colors cursor-pointer
        "
      >
        more
      </button>
    </div>
  )
}

export default TopDoctors;
