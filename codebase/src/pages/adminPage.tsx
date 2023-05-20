import React from "react";
import { Outlet } from "react-router-dom";
import * as Styles from "../styles/adminPage.styled";
import { AdminNavbar } from "../components/AdminNavBar";

export function AdminPage(){
    return(
        <Styles.adminContainer>
            <AdminNavbar/>
            <Styles.Main>
               <Outlet/>
            </Styles.Main>
        </Styles.adminContainer>
    )
}
