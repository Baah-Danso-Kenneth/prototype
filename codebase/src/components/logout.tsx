import { useControlPopUp } from "context/popUp";
import { useAuth } from "context/authContext";
import * as Styles from "../styles/logOut.styled";

export function Logout() {

    const {
        cancelPopUp,
    } = useControlPopUp();

    const {
        logout,
    } = useAuth();

    function hanldeLogOut(){
            logout()
            cancelPopUp()
    }

    return (
        <Styles.LogOutContainer>
            <div className="content">
                <h1>Confirm Logout</h1>
                <p>
                    Are you sure you want to logout from <b> Assign IT Dashboard? </b>
                </p>

                <div className="buttons">
                    <button onClick={cancelPopUp}>Cancel</button><button onClick={hanldeLogOut}>Logout</button>
                </div>
            </div>

        </Styles.LogOutContainer>
    )
}