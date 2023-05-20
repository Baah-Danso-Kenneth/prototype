import React from "react";
import * as Styles from "../../styles/errorMessage.styled"

interface errorMessagePropType {
    errorMeassage: string;
}
export function ErrorMesssage({errorMeassage}:errorMessagePropType){
 return(
    <Styles.errorMessage>
        {errorMeassage}
    </Styles.errorMessage>
 )
}
