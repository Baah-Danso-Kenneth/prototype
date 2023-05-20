import styled from "styled-components"

export const List = styled.ul`
  display: flex;
  flex-direction: column ;
  width: 95%;
  border-radius: 4px;
  
 li{
    display: flex;
    flex-direction: row;
    gap: 20px;
    color: #31394E;
    border-bottom:  0.5px solid #B9BBBE;
    padding: 10px 40px;


    .folder{
        color: #FFC700;
        font-size: 120%;
    }

    img{
        width: 3%;
    }

    a{
        color: #31394E;
    }

 }
`
