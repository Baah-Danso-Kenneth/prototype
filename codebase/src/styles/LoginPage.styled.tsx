import styled from "styled-components";
import LoginBackgroundImge  from '../assets/images/image.jpg';
import { IconPosition } from "utils/styledTypes";


export const LoginContainer=styled.div`
   height:100vh;
    width:100%;
    display:flex;
`;

export const LoginLeftSection=styled.div`
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
    width:100%;
    height:150%;
    position:relative;
    top:8rem;
    left:-2.5rem;
  }
 }
`;

export const LoginRightSection=styled.div`
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

export const RightSection=styled.div`
   flex:0.5;
`;

export const RightSideContent=styled.div`
   display:grid;
   position:relative;
   padding:25px;
   top:3rem;
   place-items:center;

   >h1{
    color:${({theme})=>theme.colors.primary};
   }

   >p{
      font-size:13px;
      color:${(props)=>props.theme.colors.textColor};
      margin-bottom:25px;
   }

   label{
      margin-left:-0rem;
      margin-bottom:5px;
      color:${({theme})=>theme.colors.labelColor};
      font-size:14px;
      font-weight:300;

   }

   label:nth-of-type(2) {
    margin-left:-0rem;
}
`;

export const LeftSection=styled.div`
   flex:0.5;
   background-image:url(${LoginBackgroundImge});
   background-size:cover;
`;

export const LoginInput=styled.input`
  width:280px;
  padding:10px;
  padding-left:45px;
  font-size:13px;
  letter-spacing:1px;
  color:${({theme})=>theme.colors.secondary};
  border:1px solid #ccc;
  display:block;
  margin: 3px auto 7px auto;
  transition:ease-in-out 0.3s;

  &:focus{
    background-color:${(props)=>props.theme.colors.secondary}
  }

`;



export const VectorLogoBackground=styled.div`
   background-color:white;
   width:65px;
   height:70px;
   margin-left:5rem;

   >img{
    position:relative;
    top:15px;
    left:8.5px;
   }
`;

export const LoginButton=styled.button`
  background-color:${(props)=>props.theme.colors.buttonColor};
  color: white;
  border: none;
  padding: 8px 120px 10px;
  border-radius:5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;


export const CheckBox=styled.input.attrs({type:'checkbox'}) `
 width:15px;
 height:20px;
 position: relative;
 left:-8rem;
` ;

export const CheckBoxContainer=styled.div`
  display:flex;
  flex-direction:row-reverse;
  margin-bottom:20px;
  position:relative;
  top:-0.2em;
  left:-8.5em;

`;

export const ErrorMsg=styled.div`
  font-size:13px;
  margin-top:0.5rem;
  margin-top:-5px;
  margin-bottom:10px;
  text-align:left;
  color:${({theme})=>theme.colors.errorMsgColor};
`;


export const StyleIcon=styled.p`
   position:absolute;
   color:${(props)=>props.theme.colors.iconColor};
   font-size:19px;
   top:10px;

   ${(props:IconPosition)=>props.right  && `right:20px`};
   ${(props:IconPosition)=>!props.right  && `left: 20px`};
`;

export const LoginFormContent=styled(RightSideContent)`
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