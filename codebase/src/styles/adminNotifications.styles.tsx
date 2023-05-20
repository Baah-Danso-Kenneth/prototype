import styled from "styled-components";


export const Container = styled.div`
    width: inherit;
    height: inherit;
    display: flex;
    flex-direction: column;
    gap: 15px;
    `
export const notifictionContainer = styled.div`
        height: inherit;
        width: inherit;
        display: flex;
        flex-direction: column;
        gap: 10px;

        h3{
            color: #1C1C1C;
            font-size: 16px;
        }

        .notification{
        display: flex;
        flex-direction: row;
         display: flex;
        align-items: center;
        gap: 10px;

        img{
            height: 20px;
            padding: 5px;
            background: #E3F5FF;
            border-radius: 50%;
        }

        p{
            display: flex;
            flex-direction: column;

            & :nth-child(1){
                font-size: 13px;
                color: #1C1C1C;
            }
            & :nth-child(2){
                font-size: 10px;
                color: rgba(0, 0, 0, 0.4);
            }
        }
    }

        
    `

export const assignmentsContainer = styled.div`
    background: #F7F9FB;
    border-radius: 5px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
        padding: 10px;

     h3{
         color: #1C1C1C;
         font-size: 16px;
     }

     ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
        height: 38vh;
       
        li{
            display: flex;
            gap: 15px;
            color: #1C1C1C;

            &:nth-child(1){
            color: rgba(0, 0, 0, 0.4)
           }

           p{
             width: 100%;
             display: flex;
             align-items: center;
             gap: 5px;
             font-size: 12px;

             .completed{
                font-size: 4px;
                padding: 1px 2px;
                border-radius: 50%;
                background: #A1E3CB;
                color: transparent;
             }
             .completed + span{
               color: #A1E3CB;
             }
             .progress{
                font-size: 4px;
                padding: 1px 2px;
                border-radius: 50%;
                background: #95A4FC;
                color: transparent;
             }

             .progress + span{
                color: #95A4FC
             }
           }
        }
     }
    `
