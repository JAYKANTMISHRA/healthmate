import React from 'react'
import Appointment from './../pages/Appointment';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div>
        {/* leftside */}
        <div >
           <p>
            Book Appointment <br /> With Trusted Doctors
           </p>
           <div>
            <img src={assets.group_profiles} alt="" />
            <p>Simply browse through our extension list of trusted doctor,<br /> schedule your appointment hassle-free.
            </p>
           </div>
           <a href="">
            Book appointment <img src={assets.arrow_icon} alt="" />
            </a>
        </div>
           {/* right side  */}
           <div>
              <img src={assets.header_img} alt="" />
           </div>
    </div>
  )
}

export default Header
