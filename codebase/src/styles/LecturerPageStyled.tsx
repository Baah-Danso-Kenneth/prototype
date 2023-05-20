import styled from 'styled-components';
import { DistanceControllerProps } from 'utils/styledTypes';
import { LoginButton } from './LoginPage.styled';

export const HeaderContainer=styled.div`
   position:relative;
   top:-10.5rem;`;

export const LecturerPageContainer=styled.div``;

interface PublishedDraftContainerProps {
	withBorder?: boolean;
  }

export const PublishedDraftContainer = styled.div<PublishedDraftContainerProps>`
  max-width: 900px;
  position: relative;
  top: -9rem;
  margin: 0 auto;
  display: flex;
  padding-bottom: 0px;

  /* Conditionally render the border-bottom style based on the value of the withBorder prop */
  ${({ withBorder, theme }) => withBorder && `
    border-bottom: 1px solid ${theme.colors.dashboardText};
  `}

  > h3 {
    color: ${({ theme }) => theme.colors.dashboardText};
    cursor: pointer;
    font-size:15px;
  }

  > div {
    display: flex;
    align-items: center;
    margin-left: 100px;

    h3 {
      color: ${({ theme }) => theme.colors.dashboardText};
      cursor: pointer;
      font-size:15px;
    }

    p {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.base};
      margin-top: -30px;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      font-size: 13px;
      text-align: center;
    }
  }

  .active {
    border-bottom: 5px solid ${({ theme }) => theme.colors.primary};
    border-radius: 5px 5px 0 0;
  }
`;


export const CoursePublishedContainer=styled.div`
  display:flex;
  margin-left:60px;
  width:65vw;
  height:30vh;
  align-items:center;
  background-color:${(props)=>props.theme.colors.base};
  margin-top:2em;
  border-radius:10px;


`;

export const FirstSection=styled.div`

margin-left:20px;
 flex:0.6;
  display:flex;
  button{
     height:40px;
     width:22vw;
     font-size:15px;
     color:${(props)=>props.theme.colors.primary};
	   font-weight:500;
     background-color:transparent;
     border:1px solid ${(props)=>props.theme.colors.primary};
     border-radius:5px;
     position:relative;
     left:-1.2rem;
    font-size:15px;
    top:-1.5rem;}

  >div{
    h3{
    
      position:relative;
      font-size:25px;
      top:-1.5rem;
    } 

    p{
      font-size:15px;
      color:${({theme})=>theme.colors.dashboardText};
    }

  }
`;

export const Line=styled.div`
 height:20vh;
 width:1px;
 background-color:#ccc;
 position:relative;
 left:-21.7rem;
 color:red;
`;

export const SecondSection = styled.div`
flex:0.4;
 display:flex;

 `;

 export const ImageSection=styled.div`
  display:flex;
   img{
    object-fit:contain;
    position:relative;
    top:-4rem;
    left:18rem;
    margin-right:10px;
   }
 `;

 export const SubmissionSection=styled.div`
  position:relative;
  left:-2rem;
   h3{
    font-size:18px;
    color:${({theme})=>theme.colors.dashboardText};
    font-weight:500;
   }

   p{
    color: #00b500;
    font-size: 25px;
    font-weight:800;
   }
 `;

 export const DeadlineSection=styled.div`
 h3{
  color:red;
  font-weight:400;
 }

p{
    color: red;
    font-size: 25px;
    font-weight:800;
   }
   
 `;


export const DistanceController = styled.div<DistanceControllerProps>`
  position: relative;
  top: ${props => props.top}em;
`;

export const FormInputSetting=styled.div`

`;

export const FilterSection=styled.div`
 background-color:${props=>props.theme.colors.base};
 height:28vh;
 width:65vw;
 margin-left:3.5em;
 border-radius:10px;


 >div{
	display:flex;
 }
`;


export const FormDirection=styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-top:2rem;

  label{
	font-size:13px;
	color:${({theme})=>theme.colors.dashboardText};
	font-weight:300;
	position:relative;
	background-color:#fff;
	 top:-2.3rem;
	 left:3rem;
	 z-index:1;

  }



  input{
   width:230px;
	 border-radius:5px;
	 height:50px;
	 z-index:0;
   margin-left:5px;

  }
`;

export const FilterTitleImage=styled.div`
  position:relative;
  top:1.2rem;
  left:2rem;
  >p{
	margin-left:10px;
	font-size:18px;
	font-weight:800;
	color:${(props)=>props.theme.colors.dashboardText};

  }
`;

export const SubmitButton=styled(LoginButton)`
  padding:7px 30px 15px;
  position:relative;
  top:-1rem;
  left:43.4rem;
`;

export const ButtonSection=styled.div`
	display:flex;
	justify-content:space-between;
	position:relative;
	top:15em;

	button{
		padding:5px;
		width:55px;
		border:none;
		border-radius:5px;
		outline:none;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
}
`;

export const LecturerCreateTestContainer=styled.div`
   background-color:red;
`;

export const ComponentContent=styled.div`
   max-width:850px;
   margin:0 auto;
   background-color:${(props)=>props.theme.colors.base};
   height:75vh;
`;

export const DetailsInContent=styled.div`
   max-width:850px;
   position:relative;
   top:0.2rem;
   margin:0 auto;
   height:75vh;

   >input{
    background-color:transparent;
    border-bottom:1px solid red;
    display:flex;
    flex-direction:column;
    width:40vw;
}
`;

export const FormContent=styled(DetailsInContent)`
   max-width:730px;
   height:65vh;
   top:1.5rem;
   display:flex;
   flex-direction:column;
`;

export const UniqueCode=styled.p`
    font-size:30px;
	font-weight:bold;
	color:${({theme})=>theme.colors.primary}; position:relative;
    left:-8rem;
`;

export const DivInput=styled.div`
`;

export const Muse=styled.div`
 display:flex;
 flex-direction:column;

 label{
  color:${({theme})=>theme.colors.dashboardText};
  font-weight:500;
  font-size:15px;
 }
;
 >input{
  background-color:transparent;
  border-bottom:1px solid #ccc;
  width:53vw;
  outline:none;
  margin-top:20px;
 }
`;

export const Controller=styled.div`
display:flex;
justify-content:space-between;
 border-top-right-radius:10px;
 border-top-left-radius:10px;
 padding:10px;
 width:100%;
 margin-top:20px;
  display:flex;
  align-items:center;
  background-color:#f6f6f6;
  bacground-color:red;
  height:8vh;

  img{
    width:20px;
    height:10px;
    object-fit:contain;
  }

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-align: center; /* center align the text within the select */
  padding: 0.3em 0.1rem; /* add padding to the top and bottom, and left and right sides */
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: inherit;
  font-size: 0.8rem;
}

  
`;

export const RightSections = styled.div`
  display: flex;
  flex: 0.5;
  justify-content: space-between;
  margin-left: 20px;
  align-items: center;

  select {
    background-color: #fff;
    padding: 5px;
    color: #222;
    font-size: 12px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    background-image: none;
    background-position: right center;

    display: inline-block;
  }

  select:nth-of-type(2) {
     margin-left:20px;
  }

  select:nth-of-type(3) {
     margin-left:20px;
  }

  > img {
    margin-left: 20px;
    cursor: pointer;
    object-fit: contain;
    width: 20px;
  }
`;


export const LeftSections=styled(RightSections)`
  justify-content:space-between;
  margin-right:30px;

  button{
    border:none !important;
    outline:none !important;
  }

  img{
    cursor:pointer;}
`;

export const TextAreaSection=styled.div`
  div{
    display: block;
    border:1px solid #ccc;
    height:20vh;
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
    width:9%;
    outline:none;
    padding-left:50px;
    padding-right:50px;
    padding-top:20px;

  }
`;

export const ButtonLayout=styled.div`
   padding:10px;
   /* background-color:blue; */
   gap:8%;
   width:100%;
   display:flex;
   button:nth-of-type(1){
    font-weight:800;
     padding:15px 10px 10px;
     background-color:${({theme})=>theme.colors.base};
     color:${({theme})=>theme.colors.base};
     border-radius:5px;
     background-color:#5D34EC;
     cursor:pointer;
   }

   button:nth-of-type(2){
    position:relative;
    left:5rem;
    color:#5D34EC;
    border:none;
    background-color:transparent;
    outline:none;
    margin-left:25px;
    font-weight:900;}
`;

export const FontFamilyDropdown = styled.select`
  font-family: inherit;
`;

export const FontSizeInput = styled.input`
  width: 50px;
`;