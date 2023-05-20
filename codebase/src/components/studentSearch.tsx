import React from "react";
import * as Interface from "../utils/types/StudentPage";
import * as Styles from "../styles/studentSearch.styled"

export function StudentSearch({label, placeholder, id, value, onchange}: Interface.inputProps){

    return(
        <Styles.Fieldset>
            <label htmlFor={id}>
                {label}
            </label>
            <input type="search" id={id} placeholder={placeholder} 
            value={value} onChange={onchange} />
        </Styles.Fieldset>
    )
}