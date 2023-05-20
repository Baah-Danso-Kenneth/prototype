import styled from 'styled-components';

export const NavbarAndModal=styled.div`
width:100%;

`;

export const NavbarContainer=styled.div`
   
   background-color:${(props)=>props.theme.colors.base}; 
   display:flex;
   padding-top:1.2rem;
   justify-content:space-between;
   width:93%;
   margin:auto;
   display:flex;
   flex-direction:row;
`;
export const NavBarRightSection=styled.div`
   display:flex;
   width:45%;
   justify-content:flex-start;
   align-items:center;
   padding-left:6em;
`;

export const SearchBarContent=styled.div`
border:1px solid #ccc;
width:30px;
padding:3px;
border-radius:5px;

>img{
 position:relative;
 left:0.5rem;
 top:0.2rem;
}

@media (min-width: 768px) {
height:30px;
width:300px;
}

@media (min-width: 1024px) {
  width:30%;
  height:35px;
} 
`;

export const SearchInput=styled.input`
  width:220px;
  height:4vh;
  padding-left:10px;
  position:relative;
  left:0.9rem;

   @media (min-width: 732px) {
   top:-0.2rem;
   width:180px !important;
  }


  @media (min-width: 1024px) {
    width:200px;
  } 
`;

export const FilterInput=styled(SearchInput)`
 border:1px solid #ccc;
 /* padding-left:50px; */
 /* width:255px; */
 height:5vh;
 border-radius:5px;
`;

export const AddButtonContainer=styled.div`
  background-color:${({theme})=>theme.colors.buttonColor}; 
  height:5vh;
 display:flex;
 padding:0.5rem;
 align-items:center;
 border-radius:5px;
position:relative;
left:4.5rem;
 >button{
  background-color:transparent;
  color:#fff;
  font-size:17px;
  font-weight:700;
  border-radius:10px;

 }
 >img{
  margin-left:5px;
 }

 @media (min-width: 1024px) {
     top:-0.2rem;
     width:140px;
  }
`;

export const AdminAvatar=styled.div`
  display:flex;
  align-items:center;
  position:relative;
  left:-4.5rem;

  h1{
   font-size:17px;
   color:${(props)=>props.theme.colors.primary};
   font-weight:200;
   margin-left:5px;
  }

`;

export const NotificationContent=styled.div`
  display:flex;
  align-items:center;

  >p{
    font-weight:100;
  } */

`;


export const NotificationAlert=styled.div`
   background-color:${({theme})=>theme.colors.primary};
   position:relative;
   top:-10px;
   left:-10px;
   color:${(props)=>props.theme.colors.base};
   border-radius:50px;
   height:23px;
   width:20px;
`
