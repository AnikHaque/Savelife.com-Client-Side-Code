import React, { useEffect, useState } from 'react';
import Logo from "../../assets/Logo-removed BG.png";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useRole from '../../hooks/useRole';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
export const NavigationBar = ({ isHome }) => {
    const navigate = useNavigate()
    const [userInfo, loading] = useAuthState(auth);
    console.log(userInfo?.email);
    const role = useRole(userInfo?.email)
    const handleLogout = () => {
        signOut(auth)
        navigate('/login')
    }
    if (loading) return
    return (
        <div className='md:w-[80vw] md:rounded-full md:absolute md:top-[6%] md:left-[10%] navbar w-screen text-black bg-slate-100  mx-auto z-50 h-[60px]' >
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52  bg-white">
                        <li tabIndex={0}>
                            <Link to="/" className="justify-between">
                                Home
                                {/* <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg> */}
                            </Link>
                        </li>
                        <li tabIndex={1}>
                            <Link to='/doctor' className="justify-between">
                                Specialties
                            </Link>
                        </li>
                        <li tabIndex={2}>
                            <Link to='/blog' className="justify-between">
                                Blog
                            </Link>
                        </li>
                        <li tabIndex={3}>
                            <Link to='/pharmacy' className="justify-between">
                                Pharmacy
                            </Link>
                        </li>
                        <li tabIndex={6}>
                            {/* Make the default route for differnt Role */}
                            {
                                role === "Admin" ? <Link to={"/dashboard/makeadmin"}>
                                    Dashboard
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </Link> : null
                            }
                            {
                                role === "Doctor" ? <Link to={"/dashboard/myappointments"}>
                                    Dashboard
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </Link> : null
                            }
                            {
                                role === "Patient" ? <Link to={"/dashboard/bloodDoner"}>
                                    Dashboard
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </Link> : null
                            }
                            {/* <Link to={"/dashboard/makeadmin"}>
                        Dashboard
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                    </Link> */}
                            <ul className="p-2 z-50 bg-slate-100 drop-shadow-2xl shadow-zinc-900 border-black">
                                {
                                    role === "Admin" ? <>
                                        {/* Put all other route using Link inside li */}
                                        <li><Link to="/dashboard/makeAdmin">Make Admin</Link></li>
                                    </> : null
                                }
                                {
                                    role === "Doctor" ? <>
                                        {/* Put all other route using Link inside li */}
                                        <li><Link to={`/dashboard/doctorAppointment`}>Patient Visit</Link></li>
                                        <li><Link to={`/dashboard/addnews`}>Add Blog</Link></li>
                                    </> : null
                                }
                                {
                                    role === "Patient" ? <>
                                        {/* Put all other route using Link inside li */}
                                        <li>
                                            <Link to={`/dashboard/bloodDoner`}>Donate Blood</Link>
                                            <Link to={`/dashboard/myappointments`}>My Appointment</Link>
                                        </li>
                                    </> : null
                                }
                            </ul>
                        </li>
                        <li tabIndex={4}>
                            <Link to='/bloodBank' className="justify-between">
                                Blood Bank
                            </Link>
                        </li>
                        {
                            role === "Doctor" ? <li tabIndex={5}>
                                <Link to='/doctor/add' className="justify-between">
                                    Post My Slot
                                </Link>
                            </li> : null
                        }
                    </ul>
                </div>
                <Link to="/"><img src={Logo} alt="logo" className='w-1/2' /></Link>
            </div>
            <div className="navbar-center hidden lg:flex z-50">
                <ul className="menu menu-horizontal p-0">
                    <li tabIndex={0}>
                        <Link to="/" className="justify-between">
                            Home
                            {/* <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg> */}
                        </Link>
                    </li>
                    <li tabIndex={1}>
                        <Link to='/doctor' className="justify-between">
                            Specialties
                        </Link>
                    </li>
                    <li tabIndex={2}>
                        <Link to='/pharmacy' className="justify-between">
                            Pharmacy
                        </Link>
                    </li>
                    <li tabIndex={3}>
                        <Link to='/bloodBank' className="justify-between">
                            Blood Bank
                        </Link>
                    </li>
                    <li tabIndex={4}>
                        <Link to='/blog' className="justify-between">
                            Blog
                        </Link>
                    </li>
                    {
                        role === "Doctor" ? <li tabIndex={5}>
                            <Link to='/doctor/add' className="justify-between">
                                Post My Slot
                            </Link>
                        </li> : null
                    }
                    <li tabIndex={6}>
                        {/* Make the default route for differnt Role */}
                        {
                            role === "Admin" ? <Link to={"/dashboard/makeadmin"}>
                                Dashboard
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </Link> : null
                        }
                        {
                            role === "Doctor" ? <Link to={"/dashboard/myappointments"}>
                                Dashboard
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </Link> : null
                        }
                        {
                            role === "Patient" ? <Link to={"/dashboard/bloodDoner"}>
                                Dashboard
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </Link> : null
                        }
                        {/* <Link to={"/dashboard/makeadmin"}>
                        Dashboard
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                    </Link> */}
                        <ul className="p-2 z-50 bg-slate-100 drop-shadow-2xl shadow-zinc-900 border-black">
                            {
                                role === "Admin" ? <>
                                    {/* Put all other route using Link inside li */}
                                    <li><Link to="/dashboard/makeAdmin">Make Admin</Link></li>
                                    <li><Link to="/doctor/add">Add Doctor</Link></li>
                                    <li><Link to="/nurse/add">Add Stuffs</Link></li>
                                    <li><Link to="/doctor/add">Add Speciality</Link></li>
                                    <li><Link to="/addambulance">Add Ambulance</Link></li>

                                </> : null
                            }
                            {
                                role === "Doctor" ? <>
                                    {/* Put all other route using Link inside li */}

                                    <li>
                                        <Link to={`/dashboard/doctorAppointment`}>Patient Visit</Link></li>
                                    <li>  <Link to={`/addnews`}>Add Blog</Link></li>
                                    <li><Link to="/doctor/add">Add Me as Doctor</Link></li>
                                </> : null
                            }
                            {
                                role === "Patient" ? <>
                                    {/* Put all other route using Link inside li */}
                                    <li>
                                        <Link to={`/dashboard/bloodDoner`}>Donate Blood</Link>
                                        <Link to={`/doctors/all`}>Show All Doctors</Link>
                                        <Link to={`/nurse/all`}>Show All Stuffs</Link>
                                        <Link to={`/appointment`}>Book Appointment</Link>
                                        <Link to={`/dashboard/myappointments`}>My Appointments</Link>
                                    </li>
                                </> : null
                            }
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    !userInfo?.email ? <>
                        <button className='rounded-3xl block w-32 mx-3 h-10 hover:border-sky-500 text-white hover:text-black border-[2px] bg-primary hover:bg-white hover:transition hover:delay-150 hover:backdrop-brightness-75'><Link to={'/login'}>Login</Link></button>
                        <button className='rounded-3xl block w-32 mx-3 h-10 border-blue border-[2px] hover:bg-primary hover:border-none hover:transition hover:delay-150 hover:backdrop-brightness-75 hover:text-white border-black'><Link to={'/signup'}>Signup</Link></button>
                    </> : <button className='rounded-3xl block w-32 mx-3 h-10 hover:border-sky-500 text-white hover:text-black border-[2px] bg-primary hover:bg-white hover:transition hover:delay-150 hover:backdrop-brightness-75' onClick={handleLogout}>Logout</button>
                }

            </div>
        </div>
    );
};