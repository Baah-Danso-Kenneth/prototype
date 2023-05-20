import React from "react";
import { Link } from "react-router-dom";
import Cube from "../../assets/images/Vector(20).png";
import Plus from "../../assets/images/Vector(21).png";
import * as Styles from "../../styles/createUserButton.styled"


interface CreateUserButtonPropType {
    createLink : string
}
export function CreateUserButton({createLink}:CreateUserButtonPropType){
   
    return(
        <Styles.Create_Link>
          <Link  to={createLink}>
                  <img src={Plus} alt=""/>
                  <img src={Cube} alt=""/>
                  <span>Create</span>
          </Link>
        </Styles.Create_Link>
    )
}
