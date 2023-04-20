import React, { useEffect, useState } from 'react';
import { Rings } from 'react-loader-spinner';

import SingleAmbulance from './SingleAmbulance';


const Ambulance = () => {
  const [ambulance, setAmbulance] = useState([])
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/ambulance`)
      .then(res => res.json())
      .then(data => setAmbulance(data))
  }, [])
  return (
    <div className='Container pb-12 mx-auto max-w-lg sm:px-6 md:max-w-2xl md:px-8 lg:max-w-5xl xl:max-w-7xl 2xl:container'>
      <div>
        <h2 className='text-center text-xl pt-20 uppercase pb-16 font-bold text-gray-900 md:text-4xl'>Our <span className='text-[#1b82e2]'>Ambulance</span> Services</h2>
      </div>

      {
        ambulance !== [] ?
          <div className='container  px-6 p-3 mt-[80px]'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>

              {
                ambulance.map(ambulances => <SingleAmbulance key={ambulances._id} ambulances={ambulances}>

                </SingleAmbulance>

                )
              }
            </div>
          </div> : <div className='flex justify-center'>
            <Rings
              height="100"
              width="100"
              color="#4fa94d"
              radius="6"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="rings-loading"
            />
            <Rings
              height="100"
              width="100"
              color="#4fa94d"
              radius="6"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="rings-loading"
            />
            <Rings
              height="100"
              width="100"
              color="#4fa94d"
              radius="6"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="rings-loading"
            />
          </div>
      }

    </div>
  )
}
export default Ambulance;