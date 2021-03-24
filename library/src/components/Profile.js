import React from 'react';
//import { Link } from 'react-router-dom';
import './Profile.css'

function Profile()
{
  return(
  <>
  <div className='card'>
  <img src='images/image10.jpg' alt=""/>
  <p className="users-card__name">Suvankar Singh</p>
  <p className="users-card__username">Suvankar@06</p>
  <div className="users-card__divider"></div>
  <div className="users-card__stats">
    <div>
    <span>Email</span>
      <p>email@email.com</p>
      
    </div>
    <div>
    <span>Mobile</span>
      <p>6290186139</p>
      
    </div>
    
  </div>
  </div>
  </>
  )
}

export default Profile;