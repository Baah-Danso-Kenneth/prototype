import React from "react";
import * as Styles from "../../styles/StudentCard.styled";
import * as Interface from "../../utils/types/StudentPage";

export function StudentPageCard({ Total, description, Src}: Interface.studentCard) {
    return (
        <Styles.Card>
            <div className="icon">
            <img src={Src} alt="icon" />
            </div>
          <div className="details">
          <p>{Total}</p>
            <span>{description}</span>
          </div>
        </Styles.Card>
    );
}
