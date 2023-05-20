import styled from "styled-components"


export const parent_container = styled.div`
display: flex;
 align-items: flex-start;
 justify-content: flex-start;
 width: 100%;
 padding: 2% 7%;
 gap: 20px;
 min-height: 100vh;
 background-color:  #FFFFFF;
 flex-direction: column;
`
export const container = styled.div`
 display: flex;
 flex-direction: row;
width: 99%;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border: 1px solid #DEDEDE;
border-radius: 8px;
height: 68vh;


 main{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding-top: 30px;
      width: 80%;
      overflow-y: auto;

      

 h1{
    color: #396ef3;
    font-size: 20px;
 }


 }
`

export const Assignment = styled.div`
display: flex;
flex-direction: row;
gap: 30px;
align-items: center;
justify-content: center;
    height: 20vh;
    width: 50%;
   border: 1px solid #DEDEDE;
   border-radius: 8px;

   div{
    display: flex;
    flex-direction: column;
    gap: 20px;

    h3{
        color: #31394E;
        font-weight: 400;
    }

    span{
        font-weight: 700;
        color: #1A9E27;
    }
   }
`
export const selectContainer = styled.div`
    width: 95%;
     display: flex;
     flex-direction: row;
     align-self: flex-end;
     justify-content: flex-end;
     gap: 15px;
     padding-bottom: 10px;
     margin:  0px auto;
     border-bottom:  0.5px solid #B9BBBE;

     button{
       display: flex;
       align-items: center;
       gap: 5px;
       background-color:#1A9E27;
       border-radius: 7px;
       padding: 9px 10px;
       color: white;
       font-size: 15px;
     }

     select{
        width: 20%;
        background-color: #19291A;
        color: #eeebeb;
        padding: 7px 15px;
        border-radius: 6px;
        cursor: pointer;

        option{
            cursor: pointer;
        }
     }
`

export const sideBar = styled.div`
    width: 27%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 20px;
    gap: 10px;  
    overflow-y: scroll;
    border-top: 1px solid white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)

    h3{
        color: #31394E;
        border-bottom: 1px solid #5c5ce6;
        padding: 10px 15px;
        display: flex;
        justify-content: center ;
        width: 100%;
    }
    a{
        background-color: inherit;
        font-weight: 500;
        cursor: pointer;
        color: #31394E;
        font-size: 15px;
        padding: 0px 10px;
    }

    .active{
        background: #F2F2F2;
        border-radius: 8px;
    }
`