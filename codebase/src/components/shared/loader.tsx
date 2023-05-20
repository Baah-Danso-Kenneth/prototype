import React from "react";
import * as Styles from "../../styles/loader.styled"

interface UsersProps {
    incomingDataType: string
}
export function Loader({ incomingDataType }: UsersProps){

    return(
        <Styles.parentContainer>
          <div className="container">
                <div className="message">
                    {`Loading ${incomingDataType}`}
                </div>
                <div className="loader_container">
                    <div className="parent-circle">
                        <div className="spiner">

                        </div>
                    </div>
                </div>

          </div>
        </Styles.parentContainer>
    )
}