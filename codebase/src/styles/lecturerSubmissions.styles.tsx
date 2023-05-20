import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    width: 100%;
    min-height: 100vh;
    padding: 3% 1%;
    align-items:  center;
    justify-content: center;

    .items_container{
        display: flex;
        flex-direction: row;
        padding-left: 40px;
        flex-wrap: wrap;
       gap: 20px;

    }

    a{
display: flex;
flex-direction: row;
gap: 30px;
align-items: center;
justify-content: center;
cursor: pointer;
    height: 17vh;
    width: 30%;
   border: 1px solid #DEDEDE;
   border-radius: 8px;
    
   img{
        width: 25%;
    }

   div{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    h3{
        color: #31394E;
        font-weight: 400;
        font-size: 17px;
    }
    
    span{
        font-weight: 700;
        color: #1A9E27;
        font-size: 15px;
    }
   }

    }
`
