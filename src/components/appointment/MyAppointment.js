import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import RouteAthenication from '../../HOC/RouteAthenication';
import { NavigationBar } from '../../shared/NavigationBar/NavigationBar';

const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [userInfo, loading] = useAuthState(auth);
  useEffect(() => {

    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/hospitaldoctorsbooking?patient=${userInfo.email}`)
      .then(res => res.json())
      .then(data => setAppointments(data))

  }, [])
  if (loading === true) {
    return
  }
  console.log(appointments);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Patient Appointment</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <NavigationBar isHome={true} />
      <section className='md:mx-10 mt-[100px] mb-10'>
        <h1>My Appointments: {appointments.length}</h1>
        <div className="overflow-x-auto">
          <table className="table w-full">

            <thead>
              <tr>
                <th></th>
                <th>Booked Doctor</th>
                <th>Date</th>
                <th>Slot</th>
                <th>Fees</th>
                <th>Pay</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                appointments?.map((a, index) => <tr key={a?._id}>
                  <th>{index + 1}</th>
                  <td>{a.doctorName}</td>
                  <td>{a.date}</td>
                  <td>{a.slot}</td>
                  <td>{a.fees}</td>
                  <td className='text-center'>
                    {
                      (a?.token && a?.channelName) ? <Link to={`/videocall/${a._id}`} className="ml-12">
                        <button className="btn btn-secondary">Start VideoCall</button>
                      </Link> : <>
                        {a.paymentStatus === "unpaid" ? <Link to={`/dashboard/payment/${a._id}`}><button className='btn bg-blue-500 text-light-400'>Pay</button></Link> :
                          <div>
                            <p className='text-green-400'>Paid</p>
                            <p className='text-green-400'>Wait for your doctor to create videoCall</p>
                            <Link to='/email'>
                            <button className='btn bg-blue-500 text-light-400 w-40'>Email Doctor</button>
                            </Link>
                          </div>
                        }</>
                    }
                  </td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </section>

    </div>

  )
}
export default MyAppointment;