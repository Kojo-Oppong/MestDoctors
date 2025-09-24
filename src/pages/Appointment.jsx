import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointment = () => {

    const { docId } = useParams();
    const { doctors, currencySymbol } = useContext(AppContext);
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    const [docInfo, setDocInfo] = useState(null);
    const [docSlots, setDocSlots] = useState([]);
    const [slotIndex, setSlotIndex] = useState(0);
    const [slotTime, setSlotTime] = useState('');

    const fetchDocInfo = async () => {
        const docInfo = doctors.find(doc => doc._id === docId);
        setDocInfo(docInfo);
    }

    const getAvailableSlots = async () => {
        setDocSlots([]);

        // ger current date
        let today = new Date();

        for (let i = 0; i < 7; i++) {
            // getting date with index
            let currentDate = new Date(today);
            currentDate.setDate(today.getDate() + i);

            // setting end time of the date with index
            let endTime = new Date(today);
            endTime.setDate(today.getDate() + i);
            endTime.setHours(21, 0, 0, 0);

            // setting hours
            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 8 ? currentDate.getHours() + 1 : 8);
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
            } else {
                currentDate.setHours(10);
                currentDate.setMinutes(0);
            }

            let timeSlots = [];

            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

                // add slot to array
                timeSlots.push({
                    datetime: new Date(currentDate),
                    time: formattedTime,
                })

                // increase slot by 30 mins
                currentDate.setMinutes(currentDate.getMinutes() + 30);
            }

            setDocSlots(prev => ([...prev, timeSlots]));

        }

    }

    useEffect(() => {
        fetchDocInfo();
    }, [doctors, docId]);


    useEffect(() => {
        getAvailableSlots();
    }, [docInfo]);

    useEffect(() => {
        console.log(docSlots);
    }, [docSlots]);



    return (
        <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            {!docInfo ? (
                <div className="text-center text-red-500 py-10">
                    Doctor not found or loading...
                </div>
            ) : (
                <>
                    {/* Doctor Details */}
                    <div className='flex flex-col sm:flex-row gap-4 items-start'>
                        <div className="w-full sm:w-1/3">
                            <img className='bg-primary w-full h-auto sm:max-w-none rounded-lg object-cover max-h-56 sm:max-h-none' src={docInfo.image} alt="" />
                        </div>
                        <div className='flex-1 border border-gray-400 rounded-lg p-6 sm:p-8 bg-white mx-0 sm:mx-2 mt-4 sm:mt-0'>
                            <p className='flex items-center gap-2 text-2xl text-gray-900'>
                                {docInfo.name} <img className='w-4' src={assets.verified_icon} alt="" />
                            </p>
                            <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
                                <p>{docInfo.degree} - {docInfo.speciality}</p>
                                <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
                            </div>
                            <div>
                                <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="" /></p>
                                <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
                            </div>
                            <p className='text-gray-500 font-medium mt-2'>
                                Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
                            </p>
                        </div>
                    </div>
                    {/* Appointment Slots */}
                    <div className='sm:ml-72 sm:pl-4 mt-4 font-meduim text-gray-700'>
                        <p>Booking Slots</p>
                        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
                            {docSlots.length && docSlots.map((item, index) =>
                                item[0] ? (
                                    <div
                                        onClick={() => setSlotIndex(index)}
                                        className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex == index ? 'bg-primary text-white' : 'border border-gray-200'}`}
                                        key={index}
                                    >
                                        <p>{daysOfWeek[item[0].datetime.getDay()]}</p>
                                        <p>{item[0].datetime.getDate()}</p>
                                    </div>
                                ) : null
                            )}
                        </div>
                    </div>
                    <div className='flex gap-3 items-center w-full overflow-x-auto mt-4 pb-2'>
                        {docSlots.length && docSlots[slotIndex] && docSlots[slotIndex].map((item, index) => (
                            <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`} key={index}>
                                {item.time}
                            </p>
                        ))}
                    </div>
                    <button className='bg-primary text-white text-sm font-light px-8 sm:px-14 py-3 rounded-full my-6 w-full sm:w-auto'>Book an appointment</button>
                    {/* Listing Related Doctors */}
                    <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
                </>
            )}
        </div>
    )
}

export default Appointment
