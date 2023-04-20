import React from 'react';
import { Link } from 'react-router-dom';
import './NotAuthorized.css'
const NotAuthorized = () => {

    return (
        <div className='app__notAuthorized-container flex h-screen w-screen items-center justify-center flex-col'>
            <img style={{ "borderRadius": "50%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXCTsCf6rkvE80MEauWMzm4mrK1p-gqvmQSg&usqp=CAU" alt="" />
            <Link className='btn mt-5 btn-outline' to={'/login'}>Login</Link>
        </div>
    );
};

export default NotAuthorized;