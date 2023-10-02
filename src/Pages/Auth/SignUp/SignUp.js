import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link } from 'react-router-dom';
import '../SignUp/style.scss'
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../config/firebase';
import { useState } from 'react';
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: ""
}
export default function SignUp() {
  const [state, setState] = useState(initialState)
  const [isprocessing, setIsProcessing] = useState(false)

  const handleChange = (e) => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state)
    const {email,password}=state

    setIsProcessing(true)

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      })
      .finally(()=>{
        setIsProcessing(false)
      });

  }



  return (<div className="bg" >
    <div className="container">
      <div className="row">
        <div className="col col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <div className="card p-3 p-md-2 p-lg-3 my-5 shadow" style={{ background: "transparent" }}>
            <form onSubmit={handleSubmit}>
              <div className="row text-center">
                <div className="col  mb-3 mt-3">
                  <AccountCircleIcon
                    style={{
                      fontSize: '80px',
                      border: 'none',
                      border: "3px solid white",
                      borderRadius: "50px"
                    }} />
                </div>
              </div>
              <div className="row">
                <div className="col text-center mb-3 text-white">
                  <h2>Member Register</h2>
                </div>
              </div>
              <div className="row">
                <div className="col mb-3 mb-sm-2 mb-md-3 d-flex">
                  <DriveFileRenameOutlineIcon style={{ color: "white", marginTop: "5px" }} />
                  <input type="text" name='firstName' class="form-control" placeholder='First Name' onChange={handleChange} style={{ background: "transparent", color: "white", border: "none" }} />
                </div>
              </div>
              <div className="row">
                <div className="col mb-3 mb-sm-2 mb-md-3 d-flex" >
                  <DriveFileRenameOutlineIcon style={{ color: "white", marginTop: "5px" }} />
                  <input type="text" name='lastName' class="form-control" placeholder='Last Name' onChange={handleChange} style={{ background: "transparent", color: "white", border: "none" }} />
                </div>
              </div>
              <div className="row">
                <div className="col mb-3 mb-sm-2 mb-md-3 d-flex">
                  <MarkEmailUnreadIcon style={{ color: "white", marginTop: "5px" }} />
                  <input type="email" name='email' class="form-control" placeholder='Email' onChange={handleChange} style={{ background: "transparent", color: "white", border: "none" }} />
                </div>
              </div>
              <div class="row">
                <div className="col mb-3 mb-sm-2 mb-md-3 d-flex">
                  <LockOpenIcon style={{ color: "white", marginTop: "5px" }} />
                  <input type="password" name='password' class="form-control" placeholder='Password' onChange={handleChange} style={{ background: "transparent", color: "white", border: "none" }} />
                </div>
              </div>
              <div class="row">
                <div className="col mb-3 mb-sm-2 mb-md-3 d-flex">
                  <LockOpenIcon style={{ color: "white", marginTop: "5px" }} />
                  <input type="password" name='confirmPassword' class="form-control" placeholder='Confirm Password' onChange={handleChange} style={{ background: "transparent", color: "white", border: "none" }} />
                </div>
              </div>
              <div className="row">
                <div className="col offset-4 mb-3 mt-md-3 mt-lg-3 mt-sm-5">
                  <button type='submit' className='btn btn-secondary' onSubmit={handleSubmit} >Register</button>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label text-white" for="exampleCheck1">I agree the term and conditions of the agreement</label>
                  </div>
                </div>
              </div>
              <div className="row text-center">
                <div className="col mt-3 ">
                  <Link to='/' style={{ color: 'white', textDecoration: "none" }}>Already Login <ArrowForwardSharpIcon className='text-primary' /></Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
