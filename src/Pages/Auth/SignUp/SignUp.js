import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link } from 'react-router-dom';
import '../SignUp/style.scss'

export default function SignUp() {
  return (<div className="bg" >
    <div className="container">
      <div className="row">
        <div className="col col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <div className="card p-3 p-md-2 p-lg-3 my-5 shadow" style={{ background: "transparent" }}>
            <form >
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
                  <input type="text" class="form-control" placeholder='First Name' style={{ background: "transparent", color: "white", border: "none" }} />
                </div>
              </div>
              <div className="row">
                <div className="col mb-3 mb-sm-2 mb-md-3 d-flex" >
                  <DriveFileRenameOutlineIcon style={{ color: "white", marginTop: "5px" }} />
                  <input type="text" class="form-control" placeholder='Last Name' style={{ background: "transparent", color: "white", border: "none" }} />
                </div>
              </div>
              <div className="row">
                <div className="col mb-3 mb-sm-2 mb-md-3 d-flex">
                  <MarkEmailUnreadIcon style={{ color: "white", marginTop: "5px" }} />
                  <input type="email" class="form-control" placeholder='Email' style={{ background: "transparent", color: "white", border: "none" }} />
                </div>
              </div>
              <div class="row">
                <div className="col mb-3 mb-sm-2 mb-md-3 d-flex">
                  <LockOpenIcon style={{ color: "white", marginTop: "5px" }} />
                  <input type="password" class="form-control" placeholder='Password' style={{ background: "transparent", color: "white", border: "none" }} />
                </div>
              </div>
              <div className="row">
                <div className="col offset-4 mb-3 mt-md-3 mt-lg-3 mt-sm-5">
                  <button className='btn btn-secondary' style={{ }}>Register</button>
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
