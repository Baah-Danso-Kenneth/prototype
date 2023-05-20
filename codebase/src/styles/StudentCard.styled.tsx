import styled from "styled-components";

export const Card = styled.div`
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 10px 15px;
    border-radius: 7px;

   .icon{
    padding: 7px 0px;
    border-radius: 7px;
    background-color: rgba(204, 197, 197, 0.17);
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 50%;
        margin: auto;
    }
   }
    .details{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;
        
        p{
          color: #000;  
          font-size: 28px;
          font-weight: 700;
        }

        span{
            color: #484848;
            font-weight: 600;
            font-size: 13px;
        }
    }
`

export const assignment = styled.div`
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center ;
    gap: 12px;
    border-radius: 11px;
    padding-bottom: 20px;
    border: 1.2px solid #d1d0d0;
    cursor: pointer;

    h3{
        font-size: 17px;
        background-color: #796FEF;
        font-weight: 400;
        text-align: center;
        padding: 15px 0px;
        width: 100%;
       border-top-left-radius: 10px;
       border-top-right-radius: 10px;
       color: white;

    }
    .date{
        display: flex;
        width: 50%;
        align-self: flex-start;
        justify-content: flex-start;
        padding-left: 15px;
        gap: 15px;

        color: #F36565;
        font-size: 12px;
    }
    .description{
        color: #484848;
        font-weight: 400;
        font-size: 12px;
        padding: 1px 10px;
    }

    .profile{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: 90%;
        gap: 15px;
         p{
            color: #a7a5a5;
            font-weight: 400;
            display: flex;
            flex-direction: column;
            font-size: 13px;
         }
         img{
            height: 35px;
         }

    }
   
`
