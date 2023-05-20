import React from "react";
import {Link} from "react-router-dom";
import Search from "../../assets/images/Vector(18).png"
import Invite from "../../assets/images/Vector(19).png"
import Profile from "../../assets/images/Frame 179.jpg";
import * as Styles from "../../styles/createUserHeader.styled";
import * as Interface from "../../utils/types/adminPage"



export function CreateUserHeader({invitationUrl, value , onchange}:Interface.LinkPropType){

    return(
        <Styles.Header_container>
            <Styles.Search type="search" placeholder="Search" value={value} onChange={onchange}/>
            <Styles.Search_Icon src={Search}/>
            <Styles.invite_and_profile>
                <Link to={`${invitationUrl}`}>
                  <Styles.invite src={Invite} />
                </Link>
               <Styles.profile>
                  <Styles.profile_image src={Profile}/>
                  <Styles.admin_text>Admin</Styles.admin_text>
               </Styles.profile>
            </Styles.invite_and_profile>
        </Styles.Header_container>
    )
}
