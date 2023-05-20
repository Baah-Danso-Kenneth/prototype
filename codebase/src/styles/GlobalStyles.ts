
import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: "Poppins", sans-serif, ;
    text-decoration: none;
    border: none;
    font-family: 'Montserrat';
    outline: none;
  }



  .assignment{
    margin-left:50px;
    margin-top:20px;
    margin-bottom: 30px;
} 

  .search_icon{
    position:relative;
    top:-0.2rem;
    left:-0.5rem;
    color:#8A8A8a;
    z-index:50;
    }

  .fileIcon{
    position:relative;
    left:15rem;
  }

  .text-input{
    position:relative;
	  left:-2rem;
	  width:60vh;
    top:-0.7rem;
    height:30px;}

  .icons{
    color:#fff;
    font-size:15px;
  }
.create-btn{
	position:relative;
	top:-0.9rem;
}
.student_name, .student_id {
  display: inline-block;
  width: 200px;
  vertical-align: top;

}
.student_mail{
	width:270px;
}

.name{
	position:relative;
	left: -10.5em;
}
.email{
	position:relative;
	left:-7.8em !important;
}

.student{
	position:relative;
	left:-0.9em;
}

.upload_number{
	text-indent:-17.6rem;
}

.input_for_second_name{
	position:relative;
	left:6rem;
}

.drag_drop_text_1{
  margin-left:15px;
  color:#797676;
  font-weight:600;
}

.drag_drop_text_2{
  margin-left:8px;
  color:#1E8DFF;
  font-weight:600;
}


.text_for_csv{
	font-size:13px;
	color:#797676;
	position:relative;
	top:7.3rem;
	text-align:center;
	font-weight:100;
}

.input_text_2{
   margin-left:30px !important;
}
.text-input{
    width:285px !important;
}
.editor_textarea{
	display: block;
    border:1px solid #ccc;
    height:11vh;
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
    width:36.5vw;
    outline:none;
    padding-left:10px;
    padding-right:10px;
    padding-top:10px;
    overflow: auto;
    padding-bottom:20px;

}

.profile{
    display:flex;
    flex-direction: row-reverse;
}
.side_bar_content{
    max-width: 300px;
    margin:0 auto;
}

.align{
    display:flex;
    align-items: center;
}
.date_section{
    display:flex;
    align-items: center;
    margin-top:20px; 
}

.add_course{
    margin-top:25px;
    width:30px !important;
    object-fit: contain;
}
.due_statement{
    font-weight: 500;
    color:red;
}
.set_date{
    margin-left:20px;
    font-weight: 500;
    color:red;
}

.unique_code{
    font-weight: 800;
    color:blue;
    margin-left:20px;
    font-size:18px;
}

.description{
    color:#9F9F9F;
}

.assignment{
    margin-left:50px;
    margin-top:20px;
    margin-bottom: 30px;
} 

.App{
    overflow-x: hidden;
    height: 100vh;
}

  .close_img{
    margin-top:10px;
    margin-left:57rem;
  }
.calender{
    display:flex;
    padding:5px;
    width:20%;
    justify-content: flex-start;
    margin-left:-1%;
}

.calender_image{
    object-fit: contain;
    z-index: 100;
    position:relative;
    left:-5rem;}

    .all_student{
        font-size:13px;
        font-weight:bolder;
        position:relative;
        top:3rem;
        left:50rem;
    }


    .cheker{
     display: flex;
     align-items: center;
     position:relative;
     top:-10.5px;
     margin-left:20px;
    }
    .active{
        background-color:#5D34EC ;
        padding:10px;
        width:185px;
       
    }
`;

