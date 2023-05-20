import styled from "styled-components";

export const container = styled.div`
    width: 100%;
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    background-color: white;

    .alert_message{
        width: 80%;
        color: #31394E;
        font-size: 14px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0.5;
    }

    main{
        background-color: white;
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
.create{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 95%;
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

    
        img{
            width: 42%;
            background-color: inherit;
            margin: auto;
        }
}
`