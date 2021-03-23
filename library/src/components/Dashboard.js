import React, { useState } from "react";
import {Link} from 'react-router-dom';
//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaBook, FaList, FaRegHeart, FaSearch, FaUser, FaWallet } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";



//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Dashboard.css";
import  Cards from "./Cards";
//import HeroSection from "./HeroSection";


const Header = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
    <div className='dashboard-pannel'>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "DASH" : "DASHBOARD"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
                  <Link to='/'>
                Home
                </Link>
              </MenuItem>
              <MenuItem icon={<FaSearch />}>
                  <Link to='/Search'>
                  Search Books
                  </Link>
                  </MenuItem>
              <MenuItem icon={<FaBook />}>
                  <Link to='/MyBooks'>
                      My Books
                  </Link>
                  </MenuItem>
              <MenuItem icon={<FaList />}><Link to='/Books'>All Books</Link></MenuItem>
              <MenuItem icon={<FaWallet />}><Link to='/Wallet'>Wallet</Link></MenuItem>
              <MenuItem icon={<FaUser />}><Link to='/Profile'>Profile</Link></MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}><Link to='/sign-up'>Logout</Link></MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
      <div className='content'>
          <Cards/>

      </div>
      
      </div>
    </>
  );
};

export default Header;