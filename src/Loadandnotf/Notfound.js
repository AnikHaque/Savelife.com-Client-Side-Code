import React from 'react'

import Lottie from 'lottie-web';
import Animation from "./notfound.json"
import { useEffect } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Notfound = () => {
    const navigate = useNavigate()
    const container = useRef(null)
    useEffect(() => {
        const instance = Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: Animation,
        });
        return () => instance.destroy();
    }, [])
  return (
    <div>
        <button onClick={()=> navigate("/") } className=" mt-4 mx-5 btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold"> Back to Home </button>
            <div className='containersnotfound p-[-100px !important]'>
                <div ref={container} ></div>
            </div>
    </div>
  )
}

export default Notfound