import styled from "styled-components";

export const StudentPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #F6F6FD;
  justify-content: flex-start;
  min-height: 100vh;   

  .hide_scroll{
    position: fixed;
    background-color: inherit;
    height: 7vh;
    width: 100%;
    margin-top: 4.7%;
  }

  main {
    padding: 10px 38px;
    display: flex;
    flex-direction: row;
    gap: 50px;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 5%;
  }
`;

export const Section = styled.section`
display: flex;
flex-direction: row;
margin-left: 9%;
width: 95%;
`
export const assignments = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 40px;
    align-items: stretch;
    width: 93%;
    padding-top: 48px;


    a, div{
        flex: 1;
        max-width: 250px;
        flex-basis: 22.2%;
        cursor: pointer;
    }

`


