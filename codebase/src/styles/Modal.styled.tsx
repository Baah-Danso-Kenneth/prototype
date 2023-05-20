import styled from 'styled-components';
import { InputWithIconProps } from 'utils/styledTypes';

export const ModalContainer=styled.div`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
 >div{
  img{
    object-fit:contain;
  }
 }
`;

export const ModalContent=styled.div`
  display:flex;
  flex-direction:column;
  margin:0 auto;
  height:80vh;
  background-color:#fff;
  border-radius:10px;
`;

export const ModalHeader=styled.div`
  img{
   position:relative;
   left:-25px;
  }
`;

export const ModalBody=styled.div`
display:flex;
height:70vh;
padding:5px;
margin-left:-3%;
/* justify-content:space-between; */
gap:2%;

`;

export const ModalLeftSide=styled.div`
padding-left:5%;
h2{
  text-align:center;
  font-size:17px;
  color:#31394E;
}
>form{
   width:60%;
    display: flex;
  flex-direction:column;

 fieldset{
  width:90%;
  
  display: flex;
  flex-direction:column;
      >label{
        color:rgba(0, 0, 0, 0.6);
        font-weight:500;
        font-size:13px;
        margin-bottom:10px;
        margin-top:10px;
    }
    }
    }
`;

export const ModalRightSide=styled.div`

width:100%;
border-left:1px solid #ccc;
h2{
  text-align:center;
  font-size:17px;
  color:#31394E;
  margin-bottom:10%;
}
overflow-y: scroll;
`;


export const AssignmentDiv = styled.div`
  flex: 0.6;
  h3 {
    text-align: center;
    color:#31394E;
    font-family: "Work Sans", sans-serif;
    font-weight:800;
    font-size:26px;
    letter-spacing:0.2px;
  }
  > div {
    max-width:500px;
    margin:0 auto;

    >form{
    display: flex;
    flex-direction: column;
    >label{
        color:rgba(0, 0, 0, 0.6);
        font-weight:500;
        font-size:13px;
        margin-bottom:10px;
        margin-top:10px;
    }
    }
  }
`;

export const InviteDiv = styled(AssignmentDiv)`
  flex: 0.4;
  border-left:1px solid #ccc;
  overflow-y: scroll;
`;

export const InputWithIcon = styled.input<InputWithIconProps>`
  border: 1px solid #ccc;
  height:5vh;
  width:100%;
  border-radius:5px;
  padding-left: 30px;
  background-image: ${({ icon }) => `url(${icon})`}; 
  background-repeat: no-repeat;
  background-position: 29rem center; 
`;

export const ControllerSection=styled.div`
`;

export const InvitationContainer=styled.div`

`;

export const InvitationContent=styled.div`
display:flex;
align-items:center;
margin-bottom:10px;
margin-top:10px;

>input{
 margin-top:5%;

}

>div:nth-of-type(1){
  background-color:orange;
  margin-left:20px;
  width:35px;
  height:35px;
  border-radius:50px;
  >h1{
    font-weight:200;
    font-size:15px;
    text-align:center;
  margin-top:7px;}}
>div:nth-of-type(2){
  margin-left:20px;

  >p:nth-of-type(1){
    color:#797676;
    font-size:15px;
  }

  >p:nth-of-type(2){
    color:#797676;
    font-size:15px;
  }
}

`;
export const TextAreaContainer=styled.textarea`
  display: block;
    border:1px solid #ccc;
    height:11vh;
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
    width:36.5vw;
    outline:none;
    padding-left:10px;
    padding-right:10px;
    padding-top:10px;
    overflow: auto;
    padding-bottom:20px;
`;

export const Calender=styled.div`
display:flex;
border:1px solid #ccc;
justify-content:space-between;
width:100%;
padding:5px;
border-radius:5px;
.calender_image{
  object-fit:contain;
 padding-left:4% !important;
 position:fixed;
 left:48%;
 }
`;