import styled from "styled-components";

export const SidebarContainer=styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
height:100vh;
box-sizing:border-box;
padding-bottom:50px;
width:100%;

div.logoLinkWrapper{
  width:100%;
  display:flex;
  flex-direction:column;
  gap:50px;
}
 ul{
  width:100%;
  list-style-type: none;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  gap:30px;
  

  li{
    color:#9F9F9F;
    width:100%;
    font-size:13px;
    padding-left:4rem;

  }
 }
`;

export const Logo = styled.div`
  display:flex;
  padding-top:2em;
  color:#fff;
  padding-left:2em;
h3{
  font-family: 'Jura', sans-serif;
    font-weight: 600;
    line-height: 43px;
    font-size:25px;
    padding-top:-5em;
}
  h4{
   padding-top:2em;
   font-family: 'Jura', sans-serif;
  }
`;



export const HandleAvatarAndName=styled.div`
  display:flex;
  align-items:center;
  gap:20px;
>p{
  color:#9F9F9F;
}

`;

export const PositionElements=styled.div`
padding-left:2em;
display:flex;
flex-direction:column;
gap:30px;

`;

