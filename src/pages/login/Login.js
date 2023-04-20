import React, { useEffect, useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import auth from '../../firebase.init';
import './Login.css';
const Login = () => {
  const navigate = useNavigate()
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  const [userInfo] = useAuthState(auth);
  const [errorText, setErrorText] = useState('')
  const [isGoogleLogin, setIsGoogleLogin] = useState(false)
  useEffect(() => {
    if (error) {
      const msg = error?.code?.slice(5, error?.code?.length)
      setErrorText(msg)
    }
    if (errorGoogle) {
      const msg = errorGoogle?.code?.slice(5, errorGoogle?.code?.length)
      setErrorText(msg)
    }

  }, [error, errorGoogle])
  // UseEffect for google login
  useEffect(() => {
    if (userInfo) {
      console.log("google user", userInfo?.email);
      fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/api/user/?email=${userInfo?.email}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data?.text === 'No user Found') {
            setIsGoogleLogin(true)
          } else {
            navigate('/')
          }
        })
    }
  }, [userInfo, userGoogle])
  const handleRole = (e) => {
    e.preventDefault()
    let role = ''
    if (e.target.role[0].checked) {
      role = "Doctor"
    } else {
      role = "Patient"
    }
    const user = { "name": userInfo?.displayName, "email": userInfo?.email, "role": role }
    fetch("${process.env.REACT_APP_SERVER_BASE_URL}/api/users", {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user)
    }).then(res => res.json())
      .then(data => {
        navigate('/')
      })
    console.log(userInfo)
  }
  // When user is login through email and password
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(e?.target?.email?.value)
    console.log(e?.target?.password?.value)
    await signInWithEmailAndPassword(e?.target?.email?.value, e?.target?.password?.value)
    if (error) return
    console.log("normal user", user)
    if (userInfo) {
      navigate('/')
    }

  }
  // When user in Login through google
  const handleGoogleLogin = async () => {
    await signInWithGoogle();
    if (errorGoogle) return
    if (userInfo) {
      console.log("google user", userInfo?.email);
      fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/api/user/?email=${userInfo?.email}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data?.text === 'No user Found') {
            setIsGoogleLogin(true)
          } else {
            navigate('/')
          }
        })
    }
  }
  console.log("google error", errorGoogle)
  return (
    <div className='flex h-[80vh] flex-col lg:flex-row items-center justify-center pt-52 gap-20'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <img src="https://media.istockphoto.com/vectors/parents-visit-sick-son-in-bed-at-hospital-ward-vector-id1215582607?b=1&k=20&m=1215582607&s=170667a&w=0&h=ueFzXWP3WlCgZpyD_rZ8txBN6XFqrHwp6CK8w6FPb7E=" alt="" className='h-[80%] rounded-2xl lg:block hidden' />
      <div className='app__login-form rounded-2xl shadow-2xl border-white border-2'>
        <form onSubmit={isGoogleLogin === false ? handleSubmit : handleRole} className='md:w-[500px] w-[90vw] flex flex-col justify-center items-center '>
          <h2 className='text-3xl text-blue-500 font-bold mt-3'>Welcome Back</h2>
          <p className='text-lg font-medium pb-5'>Please Enter Your Credentails to Login!</p>
          {
            isGoogleLogin === false ? <>
              <input className='w-full border rounded-md bg-transparent border-gray-400 p-3' type="text" name="name" id="name" placeholder='Enter your name' required />
              <input className='w-full border rounded-md bg-transparent border-gray-400 p-3' type="email" name="email" id="email" placeholder='Enter your email' required />
              <input className='w-full border rounded-md bg-transparent border-gray-400 p-3' type="password" name="password" id="password" placeholder='Enter your password' required /></> : null
          }
          {
            isGoogleLogin === true ? <>
              <p>Please set Role to continue </p>
              <p className='flex justify-center items-center'>
                <input className='w-5' type="radio" name="role" id="Doctor" required />
                <label htmlFor="Doctor">Doctor</label>
              </p>
              <p className='flex justify-center items-center' >
                <input className='w-5' type="radio" name="role" id="Patient" required />
                <label htmlFor="Patient">Patient</label>
              </p>
            </> : null
          }
          <br />
          <input className='block bg-blue-500 hover:bg-black text-white w-full py-2 px-rounded rounded-md' type="submit" value="Login" />

          <small className='text-red-500'>{errorText}</small>
        </form>
        <Link to={'/signup'} className='block mx-auto text-center text-black text-lg mb-5 mt-3'>Don't have an account yet ? <span className='text-blue-500 cursor-pointer'>Sign Up!</span></Link>
        {
          isGoogleLogin === false ? <button className='w-30 text-medium block bg-blue-500 hover:bg-black text-white w-full py-2 px-rounded rounded-md mx-auto' onClick={handleGoogleLogin}><FcGoogle className='inline-block' />Sign with Google</button> : null
        }
        <br />
        {/* <button onClick={() => signOut(auth)}>Sign out</button> */}
      </div>
    </div>
  )
}
export default Login;
