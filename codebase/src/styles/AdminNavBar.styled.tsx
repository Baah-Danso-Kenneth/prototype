import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   height: 10vh;
   position: fixed;

   .blur{
      position: absolute;
      top: 3px;
      height: 10vh;
      width: 100%;
      background-color: rgba(217, 217, 217, 0.3);
      z-index: 2;
   }
`

export const Nav_Bar_Container = styled.nav`
width: 100%;
position: relative;
height: 10vh;
display: flex;
flex-direction: row;
align-items: center;
background-color:   #363143;
justify-content: space-between;
padding: 10px 110px;
z-index: 0;

section{
   display: flex;
   align-items: center;
   justify-content: center;

   &:nth-child(2){
      .profile{
         display: flex;
         flex-direction: row;
         align-items: center;
         justify-content: center;
         gap: 20px;
         color: white;
         font-size: 14px;
         font-weight: 400;
         font-family: 'Work Sans';
         img{
            width: 13%;
            min-width:25px;
         }

        button{
            background: inherit;
            color: white;
            padding: 8px 18px;
            border: 1px solid white;
            border-radius: 10px;
            cursor: pointer;
         }
      }
   }
}
`
export const logo = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row;
color: white;
width: 500%;
font-weight: 400;
font-size: 16px;
margin-right: 30px;

.assign{
    margin-top: 4px;
}

.it{
   margin: 20px 0px 0px -5px ;
}

img{
background-color: white;
padding: 13px 7px 5px 5px;
display: flex;
align-self: flex-end;
width: 30%;
}

  
`
export const Admin_Dashboard_Links_Container = styled.ul`
display: flex;
flex-direction: row;
justify-content: space-between;
list-style: none;
gap: 50px;

.admin_active{
border-bottom: 2px solid #5D34EC;
padding-bottom: 6px;
}
`
export const List = styled.li`

:nth-child(3){
}

a{
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
cursor: pointer;
}

.active{
border-bottom: 2px solid #5D34EC;
padding-bottom: 6px;
}
`
export const Link_Text = styled.p`
font-size: 14px;
text-align: left;
line-height: 23px;
font-weight: 400;
color: #9F9F9F;
`
export const Links_image = styled.img`
 width: 13%;
`

export const LogoutStyle = styled.div`
 display:flex;
 cursor:pointer;
 font-size:13px;
 >h3{
    color: #9F9F9F;
    font-weight:300;
 }

`;
