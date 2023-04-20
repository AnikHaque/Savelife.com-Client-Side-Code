import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Damyp from '../../../Damy Data/Damyp'
// React Icons
import { FcSearch } from 'react-icons/fc'
import { NavigationBar } from '../../../shared/NavigationBar/NavigationBar'


const Pharmacy = () => {

  // navigate products details
  const navigates = useNavigate()

  const [medicine, setMedicine] = useState([])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/api/medicines`)
      .then(res => res.json())
      .then(data => setMedicine(data))
  }, [])


  return (
    <div>
      <div className='px-2 pr-3 navbar'>
        <NavigationBar isHome={true}></NavigationBar>
      </div>
      <div className="bg-white mt-[130px] ">
        <div className="max-w-2xl mx-auto pb-10 px-4 sm:px-6 lg:max-w-7xl lg:px-8 pt-10 sm:pt-10">
          <div className="flex justify-between align-center">
            <h2 className="text-2xl font-display font-semibold tracking-wide text-teal-700 uppercase">
              Some Rare products
            </h2>

            <div className="col-12 align-middle justify-content-center flex">
              <button
                type="button"
                className="mr-5 mr-6text-lg flex py-2 px-3 text-sm rounded hover:shadow-xl hover:rounded-xl focus:outline-none hover:bg-[#fff]  transition duration-150 ease-in-out  hover:text-black font-bold "
                data-toggle="collapse"
                data-target="#filters"
              >
                <i className='text-3xl'> <FcSearch></FcSearch> </i>
              </button>
              <input
                name='Medisearch'
                type="text"
                className="col-6 border border-1 rounded p-1 sm:p-2 text-teal-800 border-teal-300 placeholder-gray-600 focus:border-teal-500"
                placeholder="Search medicine..."
                id="search-filter"
              />
            </div>
            {/* search button */}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {medicine.map((product) => (
              <div key={product.id} className="group shadow-4xl">
                <div className="w-full min-h-80  aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>

                {/* name and price */}
                <div className="mt-4 flex justify-between px-2">
                  <div>
                    <h3 className="text-md text-gray-900 font-display tracking-wide">
                      <a className="text-[#1b82e2] font-bold " >
                        <span aria-hidden="true" className="inset-0 text-[#1b82e2] " />
                        {product.name}
                      </a>
                    </h3>
                  </div>
                  <p className="text-md font-medium text-teal-600 flex">
                    ৳{product.price}
                  </p>
                </div>

                <div>
                  <p className="text-sm mt-1 px-2 text-gray-900 font-sans tracking-wide">
                    {product.brand}
                  </p>
                </div>

                {/*   */}
                <div className="flex justify-between my-4 px-2 items-center">
                  <div>

                    <button
                      className="hover:bg-sky-500  text-gray-900 hover:text-teal-50 p-2 rounded-full transition duration-150 ease-in-out"
                      title="Quick View"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                  </div>


                  <button onClick={() => navigates(`/medcheckout/${product._id}`)} className="flex py-2 px-3 text-sm rounded shadow-lg  bg-[#1b82e2] focus:outline-none active:bg-[#1b82e2] text-white transition duration-150 ease-in-out hover:bg-sky-500 hover:text-black font-bold">
                    Buy Now
                  </button>
                  {console.log(product._id)}
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pharmacy