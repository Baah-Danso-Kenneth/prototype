import React from "react";
import * as Styles from "../styles/Card.styled";
import * as Interface from "../utils/types/adminPage"

export function DashboardCard({ Total, description, Src}: Interface.CardProps) {
    return (
        <Styles.Card>
            <img src={Src} alt="icon" />
           <div className="texts">
                <h2>{`${Total}`}</h2>
                <p>{description}</p>
           </div>
        </Styles.Card>
    );
}
