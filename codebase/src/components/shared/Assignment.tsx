import React from 'react'
import { BackgroundColor, CoursesContainer, UniqueBackground } from 'styles/CourseBanner.styled'
import { AssignmentData} from 'utils/model';
import copyImage from '../../assets/images/copyImg.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import addCourse from '../../assets/images/add_course.png'
import { Link } from 'react-router-dom';

function Assignment(props: AssignmentData) {

    const handleCopyClick = () => {
      
        navigator.clipboard.writeText(props.assignmentId || '');
    
        toast.success(`Copied code Successfully`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000
        });
      }  
const deadline = new Date(props.deadline).toLocaleDateString('en-US',{day:'numeric',month:'short',year:'numeric'})

  return (
    <Link to={`/lecturer/assignment/${props.assignmentId}`}>
    <CoursesContainer>
      <BackgroundColor>
      <h2>{props.title}</h2>
      </BackgroundColor>
       <section>
       <div>
        <h3>Description</h3>
        <p className='description'>{props.description.slice(0, 80)}...</p>
      </div>

      <div>
       <p>{deadline}</p>
       <img src={addCourse} alt="add_course" />
      </div>
      <UniqueBackground>
        <h3>Unique Code</h3>
        <div>
          <p>{props.assignmentId}</p>
          <img src={copyImage} alt="copy_image" onClick={handleCopyClick} />
        </div>
      </UniqueBackground>

      </section>
    </CoursesContainer>
    </Link>
  )
}

export default Assignment
