import styled from "styled-components";

export const adminContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90.5vh;
`
export const Main = styled.main`
    width: 100%;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F6F6FD;
`;



export const lecturerContainer=styled.div`
   display: flex;
   width:100%;
   min-height:100vh;
`;
export const lecturerSidebar=styled.div`
width:15%;
position:fixed;
height:100vh;
background-color:#392c43;
`;

export const lecturerOutlet=styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  width:90%;
  margin-left:14%;
  background-color:#fff;
`;