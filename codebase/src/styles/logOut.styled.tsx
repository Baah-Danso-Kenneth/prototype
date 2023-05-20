import styled from "styled-components";

export const LogOutContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 50px;
position: fixed;
height: 109vh;
margin-top: -80px;
z-index: 1;
background-color: rgba(59, 59, 64, 0.8);

.cancelButton{
  position: absolute;
  left: 77%;
  top: 20%;

  button{
  color: #797676;
  font-size: 20px;
  font-weight: 700;
  background-color: inherit;
  cursor: pointer;
  }
}

.content{
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 43vh;
    width: 39%;
    padding: 25px 17px;
    border-radius: 10px;
    background-color: white;
    color: #5A5A5F;
    font-size: 19px;


    h1{
     font-size: 22px;
     font-weight: 400;
    }

    p{
        font-weight: 500;
        margin-bottom: 20px;

        b{
            font-weight: 700;
            color: #31394E;
            line-height: 30px;
        }
    }

    .buttons{
        width: 93%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-right: 70px;
        gap: 50px;

        button{
            background: inherit;
            width: 25%;
            height: 40px;
            border-radius: 10px;
            cursor: pointer;
            font-size: 17px;
            font-weight: 400;

            &:nth-child(1){
                color: #5D34EC;
                border: 1px solid #5D34EC;
            }

            &:nth-child(2){
                color: white;
                background: #5D34EC;
                border: 1px solid #5D34EC;
            }
        }
    }
}
`

