import React from 'react';
import useRole from '../../hooks/useRole';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useQuery } from 'react-query';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RouteAthenication from '../../HOC/RouteAthenication';
import Dashboard from './Dashboard';
import { useEffect } from 'react';
const MakeAdmin = () => {
    const [userInfo, userLoading] = useAuthState(auth);
    // console.log(role)
    const { isLoading, error, data, refetch } = useQuery('alluser', () =>
        fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/api/allUsers`).then(res =>
            res.json()
        )
    )

    useEffect(() => {
    }, [isLoading, userInfo.email, userLoading])
    const role = useRole(userInfo?.email);
    if (isLoading || userLoading) return 'Loading...'



    const handleMakeAdmin = (email) => {
        const url = `${process.env.REACT_APP_SERVER_BASE_URL}/api/allUsers/?email=${email}`
        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ role: 'Admin' })
        })
            .then(res => res.json())
            .then(data => {
                toast('Status Updated')
                refetch()
            })
    }
    console.log("admin part role", role)
    return (
        <>
            {
                role !== null ? <div>
                    <section className='md:mx-10 pt-40 pb-10'>
                        <div className="overflow-x-auto" >
                            <table className="table table-zebra w-full bg-white">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((elem, index) => <tr key={uuidv4()}>
                                            <th key={uuidv4()}>{index + 1}</th>
                                            <td key={uuidv4()}>{elem?.name}</td>
                                            <td key={uuidv4()}>{elem?.email}</td>
                                            <td key={uuidv4()}>{elem?.role}</td>
                                            <td key={uuidv4()}>{elem?.role !== "Admin" ? <button onClick={() => handleMakeAdmin(elem?.email)}>Make Admin</button> : null}</td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </section>
                    <ToastContainer />
                </div> : <p>Loading</p>
            }
        </>
    );
};

export default RouteAthenication(MakeAdmin, 'Admin');