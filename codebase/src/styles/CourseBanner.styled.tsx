import styled from 'styled-components';

export const CourseContentContainer=styled.div`
 display:flex;
 position:relative;
 top:-7.8rem;
 align-items:center;
 justify-content:space-between;
 background-color:${({theme})=>theme.colors.base};
 width:65vw;
 height:30vh;
 margin-left:60px;
 border-radius:10px;

 >img{
	object-fit:contain;
	width:250px;
	height:150px;
	margin-left:25px;
 }
`

export const FirstCourseContent=styled.div`
margin-left:30px;
h3{
	font-size:30px;
}

>p{
	font-size:13px;
	width:80%;
	margin-top:1rem;
	color:${({theme})=>theme.colors.dashboardText};
}

`;

export const SecondContent=styled.div`
margin-top:1rem;
margin-right:25px;
height:120px;
border-left:1px solid ${({theme})=>theme.colors.dashboardText};;
padding-left:50px;
>h3{
	width:170px;
	font-size:25px;
}

div{
	display:flex;
	align-items:center;

	>img{
		object-fit:contain;
		width:25px;
		height:25px;
		margin-left:10px;
		cursor:pointer;
	}
}
`;

export const BaseLiner=styled.div`
width:73vw;
height:1px;
background-color:black;
margin-left:10px;
margin-top:5px;
margin-bottom:5px;
`;

export const CoursesContainer=styled.div`
 max-width:330px;
 margin:0 auto;
 height:25vh;
 border-radius:10px;
 margin-bottom:45px;

 >section{
	border:1px solid #DEDEDE;
	height:25vh;
	padding:10px;
	border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;

	&:hover{
		border:1px solid #5D34EC;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	}
	>div{
		margin-left:20px;
		margin-right:20px;
		margin-top:10px;
		h3{
			color:#31394E;
			font-weight:400;
			font-size:16px;
			margin-bottom:10px;
		}
		>p{
			color:#9F9F9F;
			font-weight:400;
			font-size:12px;
		}
	}

	>div:nth-of-type(2){
       display:flex;
	   justify-content:space-between;
	   >img{
		object-fit:contain;
		margin-left:-15px;
	   }
	   >p{
		color:red;
	   }
	}
 }
`;

export const BackgroundColor=styled.div`
  color:#fff;
  padding:10px;
  background-color:#796FEF;
  border-top-left-radius:10px;
  border-top-right-radius:10px;
  h2{

	  font-weight:400;
	  font-size:20px;
	  text-align:center;

  }
`;

export const UniqueBackground=styled.div`
 display:flex;
 border-radius:5px;
 backgroud-color:#F7F9FB;
 position:relative;
 top:-0.2rem;
 padding:6px;
>h3{
	font-size:17px;
	position:relative;
	top:5px;
}
justify-content:space-between;
align-items:center;

 >div{
	display:flex;
	p{
		font-size:18px;
		font-weight:700;
	}
	>img{
		object-fit:contain;
		margin-left:10px;
	}
 }
`;

export const AssignmentContainer = styled.div`

  padding-left:1%;
  display: flex;
  width:93%;
  margin:auto;
  flex-wrap: wrap;
  justify-content: space-between;
  
  & > * {
    flex-basis: calc(33.33% - 20px);
    margin-bottom: 20px;
  }
`;


export const DynamicPageContainer=styled.div`
margin-left:1%;
width:99%;
display:flex;
flex-direction:column;
gap:50px;
`;

export const DynamicPageContent=styled.div`
/* max-width:950px; */
margin:0px auto;
display:flex;
flex-direction:column;
width:80%;
height:auto;
h2{
	margin-top:-15px;
	margin-bottom:15px;
}
`;

export const AssignmentLayout=styled.div`
 width:100%;
 margin:0px auto;
 border-radius:10px;
 height:auto;
`;
export const AssignmentLayoutHeader=styled.div`
display:flex;
border-top-left-radius:10px;
border-top-right-radius:10px;
justify-content:space-between;
background-color:#796FEF;
height:7vh;
padding:20px;
h4{
	color:#fff;
	font-size:18px;
	font-weight:400;
	margin-left:10px;
	text-transform:uppercase;
	position:relative;
	top:-0.5rem;
}
`;
export const AssignmentLayoutBody=styled.div`
 height:25vh;
 border:1px solid #ccc;
 border-bottom-right-radius:10px;
 border-bottom-left-radius:10px;
 h5{
	margin-left:30px;
	margin-right:30px;
	color:#9F9F9F;
	font-weight:400;
	font-size:13px;
 }
 >div{
	margin-top:10px;
	margin-bottom:10px;
	display:flex;
	margin-left:30px;
	margin-right:30px;
	justify-content:space-between;
	align-items:center;
	>h6{
		color:#31394E;
		font-weight:400;
		font-size:13px;
	}
	>p{
		color:red;
		font-weight:400;
		font-size:13px;
	}
 }
`;
export const  WrapFlex=styled.div`
display:flex;
margin-right:60px;
align-items:center;
background-color:#F7F9FB;
height:7.3vh;
border:1px solid #F7F9FB;
border-top-right-radius:10px;
position:relative;
left:5rem;
top:-1.3rem;
width:20vw;
>div{
	display:flex;
	margin-left:20px;
	p{
		font-size:17px;
		color:#5C34EC;
		font-weight:700;
		position:relative;
		left:-20px;

	}
	>img{
		position:relative;
		left:-10px;
	}
	
}
>h5{
	margin-left:20px;
	font-size:16px;
	color:#31394E;
	max-width:850px;
	margin:0 auto;
	font-weight:400;
}
`;

export const AssignAssignmentContainer=styled.div`
`;

export const AssignAssignmentHeader=styled.div` 
border-bottom:2px solid #B9BBBE;
padding-bottom: 5px;
h1{
	font-size:25px;
}
 display:flex;
 justify-content:space-between;
 margin-top:10px;
 >div{
	display:flex;
	align-items:center;
	>img{
		object-fit:contain;
		margin-left:10px;
	}
	p{
		color:#5C34EC;
		font-weight:600;
	}
	>p:nth-of-type(1){
      margin-right:5px;
	}
 }
`;

export const DivContainer=styled.div`
 display:flex;
 flex-direction:column;
`

export const FetchSelectedData=styled.div`
  display:flex;
  margin-left:30px;
  >div{
	>p{
		margin-left:40px;
		font-size:13px;
		color:#9F9F9F;
		font-weight:400;
	}
  }
  >img{
	object-fit:contain;
	width:30px;
  }
`;
export const Liner=styled(BaseLiner)`
 background-color:#9F9F9F;
 position:relative;
 width:70vw;
 left:-0.3rem;
 top:0.3rem;
`;

export const ListedStudenContainer=styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 margin-top:30px;
 border-bottom:2px solid #ccc;
 h2{
	position:relative;
	top:13px;
 }

 >div{ 
	p{
		color:#5C34EC;
		font-weight:700;
	}
	display:flex;
    justify-content:space-between;
    align-items:center;

	>img{
		margin-left:20px;
	}
 }
`;

export const RetrieveStudentData=styled.div`
  display:flex;
  border-bottom:1px solid #B9BBBE;
  padding:2px;
  padding-bottom:5px;
  >img{
	object-fit:contain;
  }
  >div{
	margin-left:30px;
	p{
		color:#9F9F9F;
		font-size:13px;
		font-weight:400;
	}
	 > p:nth-of-type(2){
	  font-size:12px;
	  margin-top:2px;
	}
  }
`;