import React from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useRole from '../../hooks/useRole';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

const Dashboard = () => {
    const [userInfo, loading] = useAuthState(auth);
    useEffect(() => {
        if (loading) return
    }, [userInfo?.email])
    const role = useRole(userInfo?.email);
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button fixed bottom-4 right-0"><BsFillArrowLeftCircleFill />Open</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay bg-black btn z-50 fixed bottom-4 lg:left-[1151px] left-[10vw]text-green-400"><BsFillArrowRightCircleFill className='text-white' />Close</label>
                {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button fixed bottom-4 right-0"><BsFillArrowLeftCircleFill />Open</label> */}
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {
                        role === "Admin" ? <><li>
                            <Link to={`/dashboard/makeadmin`}>Make Admin</Link>
                            <Link to={`/dashboard/adddoctor`}>Add Doctor</Link>
                            {/* <Link to={`/dashboard/myappointments`}>My Appointment</Link> */}
                        </li>
                        </> : null
                    }
                    {/* Do the code here */}
                    {
                        role === "Doctor" ? <><li>
                            <Link to={`/dashboard/myappointments`}>My Appointment</Link>
                            <Link to={`/dashboard/bloodDoner`}>Donate Blood</Link></li>

                        </> : null
                    }
                    {
                        role === "Patient" ? <><li>

                            <Link to={`/dashboard/bloodDoner`}>Donate BloOD</Link></li>

                        </> : null
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;