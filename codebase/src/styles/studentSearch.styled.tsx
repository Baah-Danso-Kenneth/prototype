import styled from "styled-components";

export const Fieldset = styled.fieldset`
position: relative;
  display: flex;
  color: #797676;
  height: 5vh;
  
  label{
    font-size: 12px;
    font-weight: 700;
    position: absolute;
    top: -7px;
    left: 5%;
    background-color: white;
  }

  input{
    width: 95%;
    font-size: 15px;
    font-weight: 400;
    border-radius: 3px;
    border: 0.5px solid #cecccc;
    padding: 2px 16px 2px 50px;
    outline: none;
  }

`