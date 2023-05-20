import { Link, useLocation } from "react-router-dom";
import Vector from "../assets/images/Vector(22).png";
import profile from "../assets/images/user 2.png";
import * as Styles from "../styles/AdminNavBar.styled";
import * as Constants from "../constants/constant";
import { useAuth } from "context/authContext";
import { useFilterAssignment } from "hooks/studentFilter";
import { useControlPopUp } from "context/popUp";

export function StudentPageHeader() {
    const Location = useLocation();
    const {user} = useAuth();
    const {loading} = useFilterAssignment();
    const { setLogout, logoutPopUp } = useControlPopUp()

    return (
        <Styles.Container>
            {
                loading && <div className="blur"></div>
            }
        <Styles.Nav_Bar_Container >
            <section>
                <Styles.logo>
                    <img src={Vector} alt="" />
                    <span className="assign">Assign</span>
                    <span className="it">IT</span>
                </Styles.logo>
                <Styles.Admin_Dashboard_Links_Container>
                    <Styles.List>
                        <Link to={Constants.activeUrl.studentPage}
                                className={location.pathname.includes("dashboard") ? "admin_active" : ""}>
                            <Styles.Link_Text>Dashboard</Styles.Link_Text>
                        </Link>
                    </Styles.List>
                    <Styles.List className={Location.pathname.includes(Constants.activeUrl.studentSubmission)
                        ? "admin_active" : ""}>
                        <Link to={Constants.activeUrl.studentSubmission}>
                            <Styles.Link_Text>Submissions</Styles.Link_Text>
                        </Link>
                    </Styles.List>
                </Styles.Admin_Dashboard_Links_Container>
            </section>
            <section>
                <div className="profile">
                        {
                            !logoutPopUp && <button onClick={setLogout}>Logout</button>
                        }
                    <span>{user?.email}</span>
                    <img src={profile} alt="profile" />
                </div>
            </section>
        </Styles.Nav_Bar_Container>
        </Styles.Container>
    )
}
