import { useEffect } from "react";
import { useAdminUsers } from "../../hooks/adminUsers";
import { useLocation } from "react-router-dom";
import { useControlPopUp } from "context/popUp";
import createImage from "../../assets/images/Vector(28).png";
import UploadImage from "../../assets/images/Vector(27).png";
import * as Interface from "../../utils/types/adminPage";
import * as Styles from "../../styles/adminUsersList.styles";
import { CreateStudentViaForm } from "components/createStudentViaForm";
import { CreateLecturerViaForm } from "components/createLecturerViaForm";
import { UploadLecturers } from "components/createLecturerViaUpload";
import { UploadStudent } from "components/createStudentViaUpload";
import { Logout } from "components/logout";
import { Loader } from "./loader";

export function AdminUsersList({ userType, userStatus }: Interface.InviteUsersProps) {
  const location = useLocation();

  const {
    currentPage,
    users,
    handlePageChange,
    displayedUsers,
    totalPages,
    Loading,
    User
  } = useAdminUsers();

  const {
    formPopUp,
    setPopup,
    uploadPopUp,
    setFilePopUp,
    logoutPopUp,
    cancelPopUp
  } = useControlPopUp();

  useEffect(() => {
    cancelPopUp();

  }, [])
  return (
    <>
      {
        (formPopUp && location.pathname.includes("students")) ? <CreateStudentViaForm />
          : (formPopUp && location.pathname.includes("lecturers")) && <CreateLecturerViaForm />
      }
      {
        (uploadPopUp && location.pathname.includes("students")) ? <UploadStudent />
          : (uploadPopUp && location.pathname.includes("lecturers")) && <UploadLecturers />
      }
      {
        logoutPopUp && <Logout />
      }
      {
        Loading && <Loader incomingDataType={`${User} Data`}/>
      }
      <Styles.InviteComponentContainer>
        <Styles.InviteContainer>
          <Styles.CreateButtonContainer>
            <h1>{userStatus}</h1>
            <div className="create">
              <button onClick={setPopup}>
                <span>
                  {`add new ${location.pathname.includes("student") ? "student" : "lecturer"}`}
                </span>
                <img src={createImage} alt="" />
              </button>
              <button onClick={setFilePopUp}>
                <span>Upload</span>
                <img src={UploadImage} alt="" />
              </button>
            </div>
          </Styles.CreateButtonContainer>
          <>
          {
            !Loading  && <Styles.ListContainer>
                  <Styles.List>
                    <ul>
                      <li className="heading">
                        <span>{`${userType} ID`}</span>
                        <span>Name</span>
                        <span>Email</span>
                      </li>
                      {displayedUsers?.map((user) => (
                        <li key={user.lecturerId ? user.lecturerId : user.studentId}>
                          {user?.lecturerId && <span>{user.lecturerId}</span>}
                          {user?.studentId && <span>{user.studentId}</span>}
                          <span>{`${user?.firstName} ${user?.lastName}`}</span>
                          <span>{user?.users.email}</span>
                        </li>
                      ))}
                    </ul>
                  </Styles.List>
                </Styles.ListContainer>
          }
          </>
          <Styles.ButtonsContainer>
            <div className="page_count">
              {
                totalPages && `page ${currentPage} out of ${totalPages}`
              }
            </div>
            {
              totalPages && <div className="pagination_buttons">
                <button disabled={currentPage === 1} className="previous_button" onClick={() => handlePageChange(currentPage - 1)}>Prev</button>
                <button disabled={users?.length < 6} className="next_button" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
              </div>
            }
          </Styles.ButtonsContainer>
        </Styles.InviteContainer>
      </Styles.InviteComponentContainer>
    </>
  )
}
