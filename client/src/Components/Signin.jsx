import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
// import './Signin.css'

const Signin = () => {

    const [Emaildata, setEmaildata] = useState([])
    const [Password, setPassword] = useState([])
    const [SigninData, setSigninData] = useState([])
    const [handleHidden, sethandleHidden] = useState(false)

    const handleChange = (e) => {
        setEmaildata(e.target.value)
        return e.target.value
    }

    const handlePass = (e) => {
        setPassword(e.target.value)
        return e.target.value
    }

    const handleShow = () => {
        sethandleHidden(oldval => !oldval)
    }
    console.log(handleHidden)

    const hanldeSignin = () => {
        setSigninData([
            {
                email: Emaildata,
                password: Password
            }
        ])
    }
    console.log(SigninData)



    return (
        <div className='Signin-container bg-blue-300 flex items-center justify-center h-screen'>
            <div className="signin-inner w-[25vw] rounded-3xl bg-violet-400 flex justify-center items-center flex-col align-middle">
                <div className="sign-head text-4xl m-7 font-semibold">Sign In</div>
                <div className="email">
                    <input className='m-2 border-black border-2 rounded-lg w-72 h-11' onChange={handleChange} type="email" placeholder='Email or mobile number' name="email" id="Sign-in" />
                </div>
                <div className="password">
                    <input className='m-2 border-black border-2 rounded-lg w-72 h-11' onChange={handlePass} type={handleHidden === false ? ("password") : (" ")} placeholder='Password' name="password" id="Password" />
                    <span className='show'><button className='w-14 absolute left-[55vw] top-[58.5vh]' onClick={handleShow}>Show</button></span>
                </div>
                <div className="signbtn">
                    <button className='border-2 rounded-lg m-2 border-black w-28 h-10 bg-blue-600' onClick={hanldeSignin}>
                        Sign In
                    </button>
                </div>
                <div className="forgotpass m-2">
                    <Link>Forgot Password?</Link>
                </div>
                <div className="remember m-2">
                    <input type="checkbox" name="" id="" /> <span>Remember me</span>
                </div>
            </div>
        </div>
    )
}

export default Signin