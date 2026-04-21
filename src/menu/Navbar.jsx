import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "/src/Menuu.css";

export default function Navbar() {
  const location = useLocation();
  const getTitle = () => {
    switch (location.pathname) {
      case "/dashboard":
        return "dashboard";
      case "/career_pathway":
        return "Career Pathway";
      case "/my_tasks":
        return "My Tasks"
    }
  }
  const [isActive, setIsActive] = useState(false);
  const handleHamb = () => {
    setIsActive(!isActive);
  }
  const hambClasses = `X-aside ${isActive ? "popupHambMenu" : "not"}`;

  const closeSidebar = () => {
        setIsActive(false)
    }
  return (
    <header>

      <nav>
        <ul>
            <li><button onClick={handleHamb}><img src="menu-burger (2).png" alt="Menu Burger" /></button></li>
            <li className='page_name'>{getTitle()}</li>
        </ul>
        <ul>
            {/* <li><Link className='icons'><img src="public/bell-ring.png" alt="" /></Link></li>
                        <li><Link className='icons'><img src="public/globe (1).png" alt="" /></Link></li>
                        <li><Link className='icons'><img src="public/user (1).png" alt="" /></Link></li> */}
            <li><Link className='icons'><img src="public/menu-dots-vertical (1).png" alt="Menu Dots" /></Link></li>
        </ul>
      </nav>


      <aside className={hambClasses}>
        <menu >
          <div>
            <ul>
              <li id='list_item_2'><Link to="/dashboard" className='menu_link'>Dashboard</Link></li>
              <li id='list_item_3'><Link to="/career_pathway" className='menu_link'>Career pathway</Link></li>
              <li id='list_item_4'><Link to="/my_tasks" className='menu_link'>My tasks</Link></li>
              <li id='list_item_6' className='bg-none'><button className='bg-none' onClick={closeSidebar}><img src="angle-small-left.png" alt="Angle Left"/></button></li>
              {/* <li id='list_item_4'><button onClick={handleLogout}>
                          Logout
                        </button></li> */}
            </ul>
          </div>
        </menu>
      </aside>
    </header>
  )
}
