import styled from 'styled-components'
import { LeftSection, LoginButton, RightSideContent } from './LoginPage.styled';


export const ResetPasswordContainer=styled.div`
    height:100vh;
    width:100%;
    display:flex;
`;

export const ResetLeftSection=styled.div`
 flex:0.3;
 background-color:${({theme})=>theme.colors.base};
 >div{

  h3{
    width:360px;
    font-size:18px;
    font-weight:600;
    position:relative;
    left:4rem;
    top:2rem;
  }
  >p{
    font-size:12px;
    width:70%;
    position:relative;
    left:4rem;
    top:5.5rem;
  }

  >img{
    width:60%;
    height:50%;
    object-fit:contain;
    position:absolute;
    top:8rem;
    left:-11.5rem;

    @media (min-width:732px) and (max-width:1024px){
      width:43%;
      left:-5rem;
    }

  }

 }



`;

export const ResetRightSection = styled.div`
  flex: 0.7;
  background-color: ${({ theme }) => theme.colors.primary};
  > div {
    max-width: 500px;
    margin: 0 auto;
    border-radius:5px;
    position:relative;
    top:5rem;
    height:75vh;
    background-color: ${({ theme }) => theme.colors.base};
  }
`;



export const ResetPasswordFormContent=styled(RightSideContent)`
   margin-top:-1em;

  >h1{
    font-weight:300;
    font-size:25px;
    font-weight:800;
    margin-bottom:30px;
    color:#000;
  }

  label{
    color:#31394E;
    font-weight:600;
  }
  label:nth-of-type(2){
    margin-left:0rem;
  }

  label:nth-of-type(3){
    margin-left:0rem;
  }
`;

export const ResetPasswordBackgroundImage=styled(LeftSection)``;

export const ResetPasswordButton=styled(LoginButton)`
  padding:8px 115px 10px;
  margin-top:20px;
  font-size:15px;
  position:relative;
  top:-0.8rem;
  background-color:${(props)=>props.theme.colors.buttonColor};
`;
interface IconPosition{
  right?:string | boolean
}

export const StyleIcon=styled.p`
   position:absolute;
   color:${(props)=>props.theme.colors.iconColor};
   font-size:19px;
   top:10px;

   ${(props:IconPosition)=>props.right  && `right:20px`};
   ${(props:IconPosition)=>!props.right  && `left: 20px`};
`;
