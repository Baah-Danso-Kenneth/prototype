import styled from "styled-components";

export const CreateUserContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 8px;
position: fixed;
height: 109vh;
background-color: rgba(217, 217, 217, 0.5);

.cancelButton{
  position: absolute;
  left: 64.5%;
  top: 23%;

  button{
  color: #797676;
  font-size: 20px;
  font-weight: 400;
  background-color: inherit;
  cursor: pointer;
  }
}
`
export const form_container = styled.div`
width: 35%;
height: 63vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-self: center;
gap: 25px;
background-color: white;
border-radius: 10px;
`
export const welcome_message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #31394E;

  h2{
    font-size: 18px;
    font-weight: 700;
  }

  p{
    font-size: 13px;
    font-weight: 400;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  width: 85%;

`
export const FieldSet = styled.fieldset`
display: flex;
justify-content: space-between;
gap: 18px;
width:50%;


:nth-child(2){
flex-direction: column;
width: 90%;
align-self: center;
justify-content: center;
gap: inherit;

.Input_container{
  display: flex;
  flex-direction: column;
  width: 100%;

  .error{
  border: 1px solid red;
  color: #f54545;
}
}
}

:nth-child(3){
  width: 90%;
}


:nth-child(1){
flex-direction: column;
justify-content: space-between;
width: 90%;
}

`
export const Inputs = styled.input`
border: 0.5px solid rgba(0, 0, 0, 0.2);
border-radius: 4px;
outline: none;
padding: 0px 10px;
color: rgba(0, 0, 0, 0.6);
line-height: 23px;
font-size: 14px;
font-weight: 400;
background-color: white;
height: 38px;
width: 100%;
border-radius: 10px;

&::placeholder{
line-height: 23px;
font-size: 14px;
font-weight: 400;
}
`

export const buttons_container = styled.div`
display: flex;
flex-direction: column;
width: 70%;
align-items: center;
font-weight: 700;
margin-top: -15px;


a{
    color: #1E8DFF;
}
`

export const Create_button = styled.button`
background-color: #5D34EC;
color: white;
font-size: 17px;
padding: 11px 35px;
border-radius: 10px;
font-weight: 700;
cursor: pointer;
`
