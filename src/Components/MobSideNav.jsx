import React, { useState } from 'react'
import '../Assets/CSS/MobSideNav.css'
import {GiHamburgerMenu} from "react-icons/gi"
const MobSideNav = ({open, setIsOpen}) => {

   
  return (
    <aside className={`mobnav__main__container d-flex justify-content-between pe-4 ${open?"mobnav__open":"mobnav__closed"}`} onClick={()=>setIsOpen((curr)=>!curr)}>


       <nav className='mobnav__items'>

        <ul >
            <li>
                <a href="/">Home</a>
            </li>
            <li>
            <a href="#services">Service</a>
            </li>
            <li>
            <a href="#contactus">Contact</a>
            </li>
            <li>
            <a href="">Blog</a>
            </li> 
        </ul>
       </nav>
       
    </aside>
  )
}

export default MobSideNav