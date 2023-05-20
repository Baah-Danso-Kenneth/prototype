import styled from "styled-components";

export const Card = styled.div`
    background-color: #F7F9FB;
    width: 195px;
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    padding: 10px 15px 0px;
    height: 80px;
    border-radius: 10px;

    img{
        width: 30px;
        padding: 8px;
        background:  rgba(96, 92, 255, 0.3);
        border-radius: 50%;
    }

    .texts{
      h2{
        font-size: 17px;
        font-weight: 700;
        color: #06152B;
    }

    p{
        font-size: 13px !important;
        font-weight: 400;
        color: #788B9A;
    }  
    }
`
export const InvitationCard = styled.div`
 background-color:${({ theme }) => theme.colors.base};
 max-width:700px;
 margin:0 auto;
 height:60vh;
 position:relative;
 top:8em;
 >div{
    position:relative;
    left:18em;
    top:5em;

    >img{
        position:relative;
        top:1.2rem;
    }

    >h3{
        position:relative;
        left:-3rem;
        top:3rem;
        font-size:18px;
        color:${({ theme }) => theme.colors.dashboardText};
        font-weight:800
    }
 }
`;
export const ListCourseContainer = styled.div`
  max-width:1100px;
  height:auto;
  margin:0 auto;
`;

export const CoursesHeaders = styled.div`
  max-width:700px;
  margin:auto;
  display:flex;
  font-size:13px;
  color:${({ theme }) => theme.colors.dashboardText};
 
  justify-content:space-between;
  h2{
    font-weight:900;
  }
  h2:nth-child(2){
    margin-left:-5px;
  }
`;

export const ContentListItems = styled.div`
  display: flex;
  max-width: 900px;
  justify-content: space-between;
  margin: 0 auto;
  font-size:13px;
  color:${({ theme }) => theme.colors.dashboardText};
  h3{

      font-weight:400;
  }
  h3:nth-of-type(1) {
    position: relative;
    margin-top: 5px;
    left: -5.5rem;
    margin-bottom: 5px;
    text-align: right;
  }
  h3:nth-of-type(2) {
    text-align: center; 
    position: relative;
    left: -4rem;
    
  }
  h3:nth-of-type(3) {
    text-align: left;
    position: relative;
    left: -8rem;
  }
`;

export const NavigationAndButton = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
 
  button:nth-child(3) {
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
    border-radius:5px;
    position:relative;
    left:16rem;
  }

  button:first-child{
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
    border-radius:5px;
    position:relative;
    left:-16rem;
   
  }

  button:nth-child(2){
    background-color:${({ theme }) => theme.colors.primary};
    padding:15px 80px  25px 80px;
    color:${({ theme }) => theme.colors.base};


  }

`;

export const AppLogoContainer = styled.span`
  position:relative;
  left:23.5rem; 
  top:2rem;
  display: flex;
  width: 150px;

  > img {
    width: 305px;
    object-fit:contain;

 
  }

  h3{
    font-family: 'Jura', sans-serif;
    font-weight: 600;
    line-height: 43px;
    font-size:25px;
    position:relative;
    top:-0.8rem;
  }
  h4 {
    font-family: 'Jura', sans-serif;
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    font-size:25px;

  }

  @media (min-width:732px) and (max-width:1024px){
    left:15.5rem; 
    }

`;

