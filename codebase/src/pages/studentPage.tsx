import {Outlet} from "react-router-dom";
import { useEffect } from "react";
import { StudentPageHeader } from "../components/studentsHeader";
import * as Styles from "../styles/studentPage.styled";
import { Loader } from "components/shared/loader";
import { useFilterAssignment } from "hooks/studentFilter";
import { useControlPopUp } from "context/popUp";
import { Logout } from "components/logout";


export function StudentPage() {
  const {loading} = useFilterAssignment();
  const { logoutPopUp, cancelPopUp } = useControlPopUp();

  useEffect(()=>{
    cancelPopUp();
  },[])
  return (
    <>
      {
        loading && <Loader incomingDataType="Assignments" />
      }
      {
        logoutPopUp && <Logout />
      }
      <Styles.StudentPageContainer>
       
        <StudentPageHeader />
           <div className="hide_scroll"></div>
           <main>
            {
              !loading && <Outlet />
            }
          </main>
      </Styles.StudentPageContainer>
    </>
  )
}
