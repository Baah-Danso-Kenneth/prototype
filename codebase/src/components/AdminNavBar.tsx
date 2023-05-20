import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Vector from "../assets/images/Vector(22).png";
import profile from "../assets/images/user 2.png";
import * as Styles from "../styles/AdminNavBar.styled";
import * as Constants from "../constants/constant";
import { useControlPopUp } from "context/popUp";
import { useAuth } from "context/authContext";

export function AdminNavbar() {
   const [userEmail, setUserEmail] = useState<string>("")
   const Location = useLocation();
   const {user} = useAuth();

   useEffect(()=>{
      user?.email && setUserEmail(user.email)
   })
   const {
      setLogout,
      logoutPopUp
   } = useControlPopUp();

   return (
      <Styles.Nav_Bar_Container >
         <section>
            <Styles.logo>
               <img src={Vector} alt="" />
               <span className="assign">Assign</span>
               <span className="it">IT</span>
            </Styles.logo>
            <Styles.Admin_Dashboard_Links_Container>
               <Styles.List className={Location.pathname.includes(Constants.activeUrl.dashboard)
                  ? "admin_active" : ""}>
                  <Link to={Constants.activeUrl.dashboard}>
                     <Styles.Link_Text>Dashboard</Styles.Link_Text>
                  </Link>
               </Styles.List>
               <Styles.List className={Location.pathname.includes(Constants.activeUrl.students)
                  ? "admin_active" : ""}>
                  <Link to={Constants.activeUrl.students}>
                     <Styles.Link_Text>Student</Styles.Link_Text>
                  </Link>
               </Styles.List>
               <Styles.List className={Location.pathname.includes(Constants.activeUrl.lecturers)
                  ? "admin_active" : ""}>
                  <Link to={Constants.activeUrl.lecturers}>
                     <Styles.Link_Text>Lecturer</Styles.Link_Text>
                  </Link>
               </Styles.List>
            </Styles.Admin_Dashboard_Links_Container>
         </section>
         <section>
            <div className="profile">
               {
                  !logoutPopUp && <button onClick={setLogout}>Logout</button>
               }
               <span>{userEmail}</span>
               <img src={profile} alt="profile" />
            </div>
         </section>
      </Styles.Nav_Bar_Container>
   )
}
