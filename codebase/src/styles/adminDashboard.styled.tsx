import styled from "styled-components";

export const DashboardPageContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 575px;
    gap: 20px;
    background-color: white;
    padding: 40px 100px;

    .left{
       display: flex;
       flex-direction: column;
       width: 66.66%;
       gap: 10px;
       padding: 1px 15px;
        color: #31394E;
        font-weight: 400;

    .welcome_container{
        position: relative;
        padding: 8px 25px;
       background-color: #F7F9FB;
       border-radius: 5px;
         h1{
        font-size: 25px;
        padding-bottom: 20px;
       }
       p{
        width: 75%;
        font-size: 17px;
        color: #788B9A;
       }
       img{
        position: absolute;
        width: 20%;
        top: -30px;
        left: 82%;
       }
    }  
    
          .stats{
        display: flex;
        flex-direction: column;
        gap: 10px;

        p{
            color: #9F9F9F;
            font-size: 14px;
        }
    }
      
    }

    .sutudent-progress{
        padding-left: 50px;
        margin-top: -15px;

        p{
         margin-left: -50px;
         color: #9F9F9F;
         font-size: 13px;
        }

        .graph{
            position:relative;
            margin-top: 30px;

            .y-axis{
               position: absolute;
               display: flex;
               gap: 33.2px;
               flex-direction: column;
               justify-content: flex-end;
               text-align: right;
               left: -45px;
               top: -10px;

               .indictor{
                display: flex;
                flex-direction: row;
                text-align: right;
                justify-content: flex-end;
                gap: 10px;
                
                span:nth-child(1){
                    font-size: 13px;
                    padding-top: 3px;
                }
               }
            }

            .x-axis{
                position: absolute;
                display: flex;
                flex-direction: row;
                width: 500px;
                gap: 131.5px;
                top: 200px;
                left: 65px;


                .indictor{
                    display: flex;
                    flex-direction: column;  
                    position: relative;
                    
                    span:nth-child(1){
                        transform: rotate(90deg);
                        font-size: 20px;
                    }
                    
                    span:nth-child(2){
                       position: absolute;
                       top: 15px;
                       left: -2px;
                    }
                }
            }
        }
    }

    .right{
        width: 100%;
    }
`
export const Container = styled.section`
height: 100px;
width: 100%;
display: flex; 
flex-direction: column;
`
export const DashboardContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
gap: 20px;
justify-content: space-between;
height: 70vh;
`
