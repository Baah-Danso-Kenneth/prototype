import styled from "styled-components";

export const Upload_component_container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: fixed;
    padding-top: 140px;
    height: 109vh;
    background-color: rgba(217, 217, 217, 0.5);
    .cancelButton{
  position: absolute;
  left: 61%;
  top: 23%;

  button{
  color: #797676;
  font-size: 20px;
  font-weight: 400;
  background-color: inherit;
  cursor: pointer;
  }
}
    .loading_message{
    position: fixed;
    align-self: flex-start;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75vw;
    height: 100vh;
    background-color: rgba(255, 255, 255 , 0.7);
    color: #0b77e2;
    font-size: 20px;
    line-height: 25px   ;
}
`
export const Container = styled.section`
height: inherit;
width:100%;
display: flex; 
flex-direction: column;
gap: 40px;
padding-top: 10px;
align-items: center;
`
export const Create_button_container = styled.div`
display: flex;
justify-content: flex-end;
align-items: flex-start;
width: 80%;
`

export const upload_container = styled.div`
width: 28%;
height: 65vh;
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
padding: 30px;
background-color: white;
border-radius: 16px;

main{
display: flex;
flex-direction: column;
align-items: center;
background-color: #FBFBFB;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;
position: relative;
width:  82%;
padding: 7px auto;

img{
    position: absolute;
    top: 20px;
    width: 17%;
}

.upload_or_browse{
                    display: flex;
                    align-items: center;
                    width: 75%;
                    height: 40vh;
                    flex-direction: column;
                    gap: 13px;
                    font-size: 17px;
                    line-height: 24px;
                    font-weight: 700;
                    color: #C7C7C7;
                    padding-top: 80px;

                 button{
                     border: none;
                     background-color: inherit;
                      border: none;
                      outline: none;
     
                      p{
                         background-color: #5D34EC;
                         color: white;
                         font-size: 13px;
                         line-height: 24px;
                         font-weight: 700;
                         padding: 5px 35px ;
                         width: 100%;
                         align-self: center;
                         border-radius: 11px;
                         cursor: pointer;
                     }

                 }
                 label{
                     display: flex;
                     flex-direction: column;
                     align-items: center;
                     justify-content: center;
                     border: none;
                     padding: 8px 12px;
                     cursor: pointer;
                     outline: none;
                     gap: 25px;

                     img{
                        padding-right: 15px;
                     }

                     input[type="file"] {
                         display: none;  
                         border: none ;
                         outline: none;
                      }
                 }

                 
                 .acceptance_creteria{
                    color: #C7C7C7;
                    line-height: 16px;
                    display: flex;
                    flex-direction: column;
                    span{
                        &:nth-child(1){
                         font-size: 14px;
                         font-weight: 700;
                        }
                        &:nth-child(2){
                            font-size: 11px;
                            font-weight: 400;
                        }
                    }
                 }
                }

            }
`

export const welcome_message = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
align-items: center;
color: #31394E;

h2{
    font-weight: 700;
    font-size: 20px;
}

p{
    font-weight: 400;
    font-size: 13px;
}
`
