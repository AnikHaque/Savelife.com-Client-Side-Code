import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { NavigationBar } from '../../shared/NavigationBar/NavigationBar'
import Purchase from './Purchase'


const Phercheckout = () => {

  const { id } = useParams()

  // usestate handel
  const [medicine, setMedicine] = useState({})
  // useffecrt handel
  useEffect(() => {
    const url = `${process.env.REACT_APP_SERVER_BASE_URL}/api/medicine/${id}`
    console.log(url, "aa")
    fetch(url)
      .then(res => res.json())
      .then(data => setMedicine(data, "got it"))
  }, [])



  return (
    <div >
      <div className=' navbar px-2 pr-3'>
        <NavigationBar isHome={true}></NavigationBar>
      </div>
      <div className='mt-[70px]'>
        <div>
          {medicine.length > 0 &&
            medicine.map(med => <div>
              <div className="container px-6 mx-auto flex flex-wrap justify-between">
                <img
                  alt="ecommerce"
                  className="lg:w-1/3 w-full h-auto  object-cover object-center rounded"
                  src={med.image}
                />
                <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h1 className="text-[#1b82e2]  text-3xl font-display title-font font-medium mb-2">
                    {med.name}
                  </h1>
                  <h2 className="text-sm title-font text-gray-800 tracking-widest mb-2">
                    Brand: {med.brand}
                  </h2>
                  <div className="mb-2">

                  </div>
                  <p className="leading-relaxed tracking-wide text-gray-800 font-sans h-20 overflow-hidden">
                    {med.description}
                  </p>
                  <div className="flex mt-4 items-center pb-4 border-b-2 border-gray-100 mb-4">
                    <span className="title-font font-medium text-2xl text-gray-900">
                      ৳ {med.price}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 align-center">


                    {/* <Link to="checkout">
            <button class="flex flex-wrap items-center py-2 px-4 text-lg rounded shadow-lg bg-teal-500 focus:outline-none active:bg-teal-500 text-white transition duration-150 ease-in-out hover:bg-teal-700">
              <i class="fas fa-cart-plus"></i> &nbsp; 
            </button>
          </Link> */}
                  </div>
                </div>
              </div>
            </div>)
          }
        </div>
      </div>
      <div className='mt-[70px]'>
        <hr className='container mx-auto px-6 p-3' />
        <div className='container mx-auto p-3 px-6'>
          <Purchase  ></Purchase>
        </div>
      </div>

    </div>
  )
}

export default Phercheckout