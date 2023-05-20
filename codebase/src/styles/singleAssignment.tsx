import styled from "styled-components";

export const container = styled.div`
    width: 26.5%;
    border-left: 1px solid #a8a5a5;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    gap: 15px;
    min-height: 87vh;

    h2{
        color: #31394E;
        font-size: 21px;
        font-weight: 500;
    }

    .status{
        display: flex;
        width: 80%;
        justify-content: space-between;
        color:  #9F9F9F;
        align-items: center;
        font-size: 13px;

        p:nth-child(2){
            display: flex;
            align-items: center;
            gap: 10px;
        }
    }

    .date{
       color: #FF3131;
       font-size: 11.3px;
       display: flex;
       flex-direction: row;
       gap: 10px;
       width: 80%;
       justify-content: flex-start;
    }

    .description{
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
        flex-direction: column;
         width: 95%;
        font-size: 13px;
        font-weight: 400;
        color: #9F9F9F;
        span{
            color: #31394E;
            font-size: 16px;
            margin-left: 17px;
        }
       
    }

    .button{
        button{
            color: white;
            background: #5D34EC;
            padding: 10px 30px;
            border-radius: 10px;
            font-weight: 700;
        }
    }
`