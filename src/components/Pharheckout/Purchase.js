import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { NavigationBar } from "../../shared/NavigationBar/NavigationBar";

const Purchase = () => {

  // use param handel
  const { id } = useParams();
  // usestate handel
  const [price, setPrice] = useState({});
  // useffecrt handel
  useEffect(() => {
    const url = `${process.env.REACT_APP_SERVER_BASE_URL}/medicine/${id}`;
    console.log(url, "aa");
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPrice(data, "got it"));
  }, []);



  //  =========&&===============
  //  hanedel usehook form  
  //===========&&=================


  // place order button handel
  const placeorder = (event) => {
    event.preventDefault()
    const customerdata = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      address: event.target.address.value,
      price: event.target.price.value,
      totalprice: event.target.totalprice.value,
    }
    console.log(customerdata, "got from here")

    const url = // here add your api shamim vai
      console.log(url);
    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify(customerdata), if add authenticaion just remove the comment
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            icon: 'success',
            title: 'Medicine buying successfully',
            text: 'Hope will come again ',

          })
        }
        console.log(data)
      })
    console.log(customerdata);


  }

  const handlePlace = () => {
    toast('Payment Successful')
  }
  return (
    <div>

      <div>
        <form onSubmit={placeorder} action="" className="my-4 mt-6 -mx-2 lg:flex">

          {/* enter shipping components */}
          <div className="lg:px-2 lg:w-1/2">
            <div className="p-3 bg-teal-50 rounded-full my-3">
              <h1 className="ml-2 font-semibold text-[#1b82e2] uppercase">
                Enter Shipping Info
              </h1>
            </div>
            <div className="px-4">
              <p className="mb-4 italic">
                Enter your delivery address where you get the product. You can
                also send any other location where you send the products.
              </p>
            </div>

            <div className="mb-3 pt-0">
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="px-3 py-4 my-1 border-white border-b-sky-300 placeholder-gray-500 text-blueGray-600 relative  rounded-lg bg-white text-base shadow-md outline-none focus:outline-none focus:shadow-outline w-full "
              />
            </div>
            <div className="mb-3 pt-0">
              <input
                name="email"
                type="text"
                placeholder="Email"
                className=" border-white px-3 py-4 my-1  border-b-sky-300 placeholder-gray-500 text-blueGray-600 relative  rounded-lg bg-white text-base shadow outline-none focus:outline-none focus:shadow-outline w-full"
              />
            </div>
            <div className="mb-3 pt-0">
              <input
                name="phone"
                type="text"
                placeholder="Phone"
                className="px-3 py-4 my-1 border-white border-b-sky-300 placeholder-gray-500 text-blueGray-600 relative  rounded-lg bg-white text-base shadow outline-none focus:outline-none focus:shadow-outline w-full"
              />
            </div>

            <div className="mb-3 pt-0">
              <input
                name="address"
                type="text"
                placeholder="Address"
                className="px-3 py-4 my-1 border-white border-b-sky-300 placeholder-gray-500 text-blueGray-600 relative  rounded-lg bg-white text-base shadow outline-none focus:outline-none focus:shadow-outline w-full"
              />
            </div>
          </div>


          {price.length > 0 &&
            price?.map((taka) => (
              <div className="lg:px-2 lg:w-1/2">
                <div className="mb-4"></div>

                <div className="p-3 bg-teal-50 rounded-full">
                  <h1 className="ml-2 font-semibold text-[#1b82e2] uppercase">
                    Order Details
                  </h1>
                </div>
                <div className="p-4">
                  <p className="mb-1 italic">
                    Shipping and additionnal costs are calculated based on
                    values you have entered
                  </p>

                  <div className="flex justify-between pt-2 border-b">
                    <div className="flex lg:px-4 lg:py-2 m-1 text-lg lg:text-xl font-medium text-sky-500">
                      <button className="mr-2 lg:mt-1">
                        <svg
                          aria-hidden="true"
                          data-prefix="far"
                          data-icon="trash-alt"
                          className="w-4 text-red-600 hover:text-red-800"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="currentColor"
                            d="M268 416h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12zM432 80h-82.41l-34-56.7A48 48 0 00274.41 0H173.59a48 48 0 00-41.16 23.3L98.41 80H16A16 16 0 000 96v16a16 16 0 0016 16h16v336a48 48 0 0048 48h288a48 48 0 0048-48V128h16a16 16 0 0016-16V96a16 16 0 00-16-16zM171.84 50.91A6 6 0 01177 48h94a6 6 0 015.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-112-48h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12z"
                          />
                        </svg>
                      </button>
                      Coupon "if any"
                    </div>

                    <div className="lg:px-4 lg:py-2 m-1 lg:text-lg font-medium text-center text-green-600">
                      ৳ 0
                    </div>
                  </div>
                  <div className="flex justify-between pt-2 border-b">
                    <div className="lg:px-4 lg:py-2 m-1 lg:text-lg font-medium text-center text-gray-800">
                      Sub Total
                    </div>

                    <div>
                      {" "}
                      <input
                        name="price"
                        className="shadow-none bg-white  text-[#444] text-1xl font-bold border-none text-right "
                        disabled
                        readOnly
                        type="text"
                        value={taka?.price}
                      />{" "}
                    </div>
                  </div>
                  <div className="flex justify-between pt-2 border-b">
                    <div className="lg:px-4 lg:py-2 m-1 text-lg lg:text-xl font-medium text-center text-gray-800">
                      Tax
                    </div>
                    <div>
                      {" "}
                      <input
                        name="tax"
                        className="shadow-none bg-white  text-[#444] text-1xl font-bold border-none text-right "
                        disabled
                        readOnly
                        type="text"
                        value={+15}
                      />{" "}
                    </div>
                  </div>
                  <div className="flex justify-between pt-2 border-b">
                    <div className="lg:px-4 lg:py-2 m-1 text-lg lg:text-xl font-medium text-center text-gray-800">
                      Total
                    </div>
                    <div>
                      {" "}
                      <input
                        name="totalprice"
                        className="shadow-none bg-white  text-[#444] text-1xl font-bold border-none text-right "
                        disabled
                        readOnly
                        type="text"
                        value={+taka?.price + 15}
                      />
                    </div>
                  </div>
                  <button type="submit" className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-[#1b82e2]  rounded-full shadow item-center hover:bg-sky-500 focus:shadow-outline focus:outline-none">
                    <svg
                      aria-hidden="true"
                      data-prefix="far"
                      data-icon="credit-card"
                      className="w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                      />
                    </svg>
                    <span onClick={handlePlace} className="ml-2 pt-1">Place Order</span>
                  </button>
                </div>
              </div>
            ))}



        </form>
      </div>
    </div>
  );
};

export default Purchase;
