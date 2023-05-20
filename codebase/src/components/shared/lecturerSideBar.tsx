import React from 'react'
import { Link, useLocation } from "react-router-dom";
import profile from '../../assets/images/user 2.png'
import * as Constants from '../../constants/constant';
import LogOutButton from 'components/LogOutButton';
import { HandleAvatarAndName, Logo, PositionElements, SidebarContainer } from 'styles/LecturerSideBar.styled';
import BaseImg from '../../assets/images/base_logo.jpg'
import { getUserFromLocalStorage } from 'utils/saveToLocalStorage';


function lecturerSideBar() {
    const Location = useLocation();
   const user = getUserFromLocalStorage()

    return (
        <SidebarContainer>
         <div className="logoLinkWrapper">
         <Logo>
         <img src={BaseImg} alt="base_img"/>
          <h3>Assign</h3>  
         <h4>IT</h4>   
         </Logo>

         <ul>
         <li  className={Location.pathname.includes(Constants.lecturerUrl.dashboard)
                     ? "active" : ""}>
              <Link style={{color:'#9F9F9F'}}to={Constants.lecturerUrl.dashboard}>Dashboard</Link>
         </li>

         <li className={Location.pathname.includes(Constants.lecturerUrl.students)
                     ? "active" : ""}>
           <Link  style={{color:'#9F9F9F'}} to={Constants.lecturerUrl.students}>Student</Link>
        </li>


            <li className={Location.pathname.includes(Constants.lecturerUrl.submission)
                     ? "active" : ""}>
               <Link  style={{color:'#9F9F9F'}} to={Constants.lecturerUrl.submission}>Submission</Link>
            </li>

                <li className={Location.pathname.includes(Constants.lecturerUrl.draft )
                     ? "active" : ""}>
               <Link  style={{color:'#9F9F9F'}} to={Constants.lecturerUrl.submission}>Draft</Link>
            </li>
         </ul>
         </div>

      <PositionElements>
   
          <HandleAvatarAndName>
            <img src={profile} alt="profile"/>
            <p>{user?.lecturer?.firstName}</p>
         </HandleAvatarAndName>
         <LogOutButton/>        
      </PositionElements>
        
        </SidebarContainer>
     )
}

export default lecturerSideBar