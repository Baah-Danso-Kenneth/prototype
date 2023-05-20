import { useControlPopUp } from "context/popUp";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Image from "../../assets/images/undraw_articles_wbpb 1.jpg";
import createImage from "../../assets/images/Vector(28).png";
import UploadImage from "../../assets/images/Vector(27).png";
import * as Styles from "../../styles/noUser.styled";
import { CreateLecturerViaForm } from "components/createLecturerViaForm";
import { CreateStudentViaForm } from "components/createStudentViaForm";
import { UploadStudent } from "components/createStudentViaUpload";
import { UploadLecturers } from "components/createLecturerViaUpload";
import { Logout } from "components/logout";
interface Props {
    user: string
}

export function NoUser({ user }: Props) {
    const location = useLocation();

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
        <Styles.container>
            <main>
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
                <div className="create">
                    <button onClick={setPopup}>
                        <span>{`add new ${user}`}</span>
                        <img src={createImage} alt="" />
                    </button>
                    <button onClick={setFilePopUp}>
                        <span>Upload</span>
                        <img src={UploadImage} alt="" />
                    </button>
                </div>
                <img src={Image} alt="Call to action" />
                <div className="alert_message">
                    {` Oops, no ${user}s created or uploaded. Click on any of the buttons above to get started`}
                </div>
            </main>

        </Styles.container>
    )
}
