import styled from "styled-components";

export const InviteComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 90.5vh;
    padding-top: 10px;
    background-color: #FFFFFF;
`
export const InviteContainer = styled.section`
height: inherit;
width:66%;
display: flex; 
flex-direction: column;
padding: 25px 0px;
justify-content: space-between;
align-items: center;
`
export const CreateButtonContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
width: 90%;
margin-bottom: 155px;

h1{
    color: #31394E;
}

.create{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;

    button{
        background-color: white;
        cursor: pointer;
        font-weight: 700;

        &:nth-child(1){
         background-color: #5D34EC;
        color: white;
        padding: 7px 13px;
        border-radius: 9px;
        font-size: 13px;
        display: flex;
        gap: 10px;
        img{
        width: 9%;
        }
    }
        &:nth-child(2){
        color: #5D34EC;
        font-size: 13px;
        display: flex;
        align-items: center;
        gap: 10px;

        img{
            width: 25%;
        }
    }
    }

}
`
export const ListContainer = styled.div` 
display: flex;
align-items: flex-start;
justify-content: center;
width: 90%;
border-collapse: collapse;   
 margin-top: -270px;   
 font-family: 'Montserrat';
height: 40vh;
`
export const List = styled.div`
width: 100%;
ul{
    list-style: none;
     display: flex;
     flex-direction: column;
     gap: 10px;

       .heading{
                border-bottom: 2px solid #B9BBBE;

                span{
                font-size: 17px;
                font-weight: 700;
                color: #797676;
                
                &:nth-child(3){
                    padding-left: 50px;
                }
            }
        }

     li{
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-bottom: 0.546887px solid #B9BBBE;
        align-items: center;
        padding: 0px 0px 10px 50px;
        color: #797676;

        span{
            text-align: left;
            width: 40%;
            font-size: 15px;
            font-weight: 400;
        }

    }
}
`
export const ButtonsContainer = styled.div`
       display: flex;
       flex-direction: row;
       justify-content: space-between;
       width: 90%;
      height: 50px;
      flex-direction: row;
      align-items: flex-end; 
      color: #31394E ;
      font-weight: 600;
      font-size: 13px;

  .pagination_buttons{
    gap: 10px;
    display : flex;
    width: 150px;
     button{
    cursor: pointer;
    padding: 8px 19px;
    background-color: #fdfbfb;
    color: #31394E ;
    font-weight: 600;
    font-size: 13px;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 2px 10px -2px rgba(0, 0, 0, 0.25);

    &:disabled{
        cursor: default;
        background: #F7F7F7;
       box-shadow: 0px 2px 10px -2px rgba(0, 0, 0, 0.25);
       }
  }
  }

`
