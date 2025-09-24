import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useContext, useState, } from 'react'
import { AppContext } from '../context/AppContext'
import Footer from '../components/Footer'

const Doctors = () => {

    const { speciality } = useParams();
    const [filterDoc, setFilterDoc] = useState([]);
    const [showFilter, setShowFilter] = useState(false);

    const navigate = useNavigate();

    const { doctors } = useContext(AppContext);

    const applyFilter = () => {
        if (speciality) {
            setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
        } else {
            setFilterDoc(doctors)
        }
    };

    useEffect(() => {
        applyFilter()
    }, [speciality]);


    return (
        <div className="px-2 sm:px-6 max-w-7xl mx-auto">
            <p className='text-gray-600 text-base sm:text-lg mt-4'>Browse through the doctors specialist</p>
            <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
                {/* Mobile Filter Toggle */}
                <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={() => setShowFilter(prev => !prev)}>Filters</button>

                {/* Filters List */}
                <div className={`flex flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
                    <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border  border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""} `}>Gynecologist</p>
                    <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""} `}>Dermatologist</p>
                    <p onClick={() => speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""} `}>Pediatricians</p>
                    <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""}`}>Neurologist</p>
                    <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-indigo-100 text-black" : ""}`}>Gastroenterologist</p>
                    <p onClick={() => speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General physician" ? "bg-indigo-100 text-black" : ""}`}>General Physician</p>
                </div>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-5 gap-y-6 px-0 sm:px-3'>

                    {/* Doctors Grid */}
                    {
                        filterDoc.map((item, index) => (
                            <div onClick={() => navigate(`/appointments/${item._id}`)} key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                                <img className='bg-blue-50 w-full h-40 object-cover' src={item.image} alt="" />
                                <div className='p-4'>
                                    <div className='flex items-center gap-2 text-sm text-green-500'>
                                        <span className='w-2 h-2 bg-green-500 rounded-full'></span><p>Available</p>
                                    </div>
                                    <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                                    <p className='text-gray-600 text-sm'>{item.speciality}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        
        </div>
        
    )
}

export default Doctors
