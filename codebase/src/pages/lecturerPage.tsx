import React from 'react';
import { Outlet } from "react-router-dom";
import LecturerSideBar from 'components/shared/lecturerSideBar';
import * as Styles from "../styles/adminPage.styled";

export function LecturerDashboard(){
	return(
		<Styles.lecturerContainer>
		<Styles.lecturerSidebar>
		   <LecturerSideBar/>
			</Styles.lecturerSidebar>	
		<Styles.lecturerOutlet>
		   <Outlet/>
		</Styles.lecturerOutlet>

	</Styles.lecturerContainer>
	)}
