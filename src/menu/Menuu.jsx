import React from 'react';
import { Link } from "react-router-dom";
import "/src/Menuu.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

export default function Menuu() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuth")
    navigate("/")
  }

  // const [isActive, setIsActive] = useState(false);
  // const handleHamb = () => {
  //   setIsActive(!isActive);
  // }
  // const hambClasses = `X-aside ${isActive ? "popupHambMenu" : "not"}`;
  return (
    <>
    {/* <button onClick={handleHamb}>button</button>
    <aside className={hambClasses}>
      <menu >
        
        <div>
          <ul>
            <li id='list_item_1'>Coursify</li>
            <li id='list_item_2'><Link to="/dashboard" className='menu_link'>Dashboard</Link></li>
            <li id='list_item_4'><Link to="/career_pathway" className='menu_link'>Career pathway</Link></li>
            <li id='list_item_5'><Link to="/my_tasks" className='menu_link'>My tasks</Link></li>
            <li id='list_item_4'><button onClick={handleLogout}>
              Logout
            </button></li>
          </ul>
        </div>
      </menu>
      </aside> */}
      <aside className='Y-aside'>
        <menu className='text-primary'>
          <ul>
            <li id='list_item_1'>Coursify</li>
            <li id='list_item_2'><Link to="/dashboard" className='menu_link'>Dashboard</Link></li>
            <li id='list_item_3'><Link to="/career_pathway" className='menu_link'>Career pathway</Link></li>
            <li id='list_item_4'><Link to="/my_tasks" className='menu_link'>My tasks</Link></li>
            <li id='list_item_5'><button onClick={handleLogout}>
              Logout
            </button></li>
          </ul>
        </menu>
      </aside>
    </>
  )
}
