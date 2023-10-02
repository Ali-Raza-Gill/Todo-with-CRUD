import React from 'react'
import "./style.scss"
import HomeIcon from '@mui/icons-material/Home';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import CallIcon from '@mui/icons-material/Call';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="row">
        <div className="col-auto">
          <ul>
            <li>
              <h3>Todo Sidebar</h3>
            </li>
            <li className=' '>
            <a href="" className='my-5'><HomeIcon/> Home</a>
            </li>
            <li>
              <a href=""><PersonSearchIcon/> About</a>
            </li>
            <li>
              <a href=""><CallIcon/> Contact</a>
            </li>
            <li>
              <a href=""><PlaylistAddIcon/> Todo</a>
            </li>
            <li>
              <a href=""><AppRegistrationIcon/> Show Todo</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
