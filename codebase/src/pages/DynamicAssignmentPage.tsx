import React,{useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import Navbar from 'components/SearchBar';
import copyImage from '../assets/images/copyImg.png';
import { DynamicPageContainer, DynamicPageContent,AssignmentLayout, AssignmentLayoutBody, AssignmentLayoutHeader, WrapFlex, ListedStudenContainer, RetrieveStudentData} from 'styles/CourseBanner.styled'
import { toast } from 'react-toastify';
import { useGetAssignments } from 'hooks/filterAssignment';
import { api } from 'utils/api';
import { StudentProps } from 'utils/model';
import addStudentIcon from 'assets/images/add_course.png'
import avatarIcon from 'assets/images/avatar.png';

function DynamicAssignmentPage(): JSX.Element  {
  const params = useParams()
  const [students,setStudents]=useState<StudentProps[]>([])


  const handleCopyClick = () => {

    navigator.clipboard.writeText(params.assignmentId || '');

    toast.success(`Copied code Successfully`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000
    });
  }


  const {allAssigment } = useGetAssignments()
  
  const filteredAssigment=allAssigment.filter((singleAssignment)=>(
    singleAssignment.assignmentId == params.assignmentId
    ))
    
    const deadline = new Date(filteredAssigment[0]?.deadline).toLocaleDateString('en-US',{day:'numeric',month:'short',year:'numeric'})

  useEffect(()=>{
    (async()=>{
      const responseData = await api.getInvitedStudents()
      setStudents(responseData.data)
    })()
  },[])

  return (
    <DynamicPageContainer>
      <Navbar/>
     <DynamicPageContent>
        <h2>Assignment</h2>

        <AssignmentLayout>
          <AssignmentLayoutHeader>
            <h4>{filteredAssigment[0]?.title}</h4>
            <WrapFlex>
              <h5>Unique code</h5>
              <div>
                <p>{params.assignmentId}</p>
                <img src={copyImage} alt="copy_image" onClick={handleCopyClick} />
              </div>
            </WrapFlex>
          </AssignmentLayoutHeader>

          <AssignmentLayoutBody>
            <div>
              <h6>Description</h6>
              <p>{deadline}</p>
            </div>

            <h5>{filteredAssigment[0]?.description}</h5>
          </AssignmentLayoutBody>
        </AssignmentLayout>

        
      <ListedStudenContainer>
        <h2>Students</h2>
           <div>
             <p>{students.length} Students</p>
             <img src={addStudentIcon} alt="add_icon" />
           </div>
        </ListedStudenContainer> 

        {students.length > 0 ?(
          students.map((student)=>(
            <>
            <RetrieveStudentData>
              <img src={avatarIcon} alt="avatar_icon"/>
              <div>
               <p>{student.email}</p>  
                <p>(Invited)</p>
              </div>
            </RetrieveStudentData>
            </>
          ))
        ):<p>No student available</p>}

     </DynamicPageContent>
    </DynamicPageContainer>
  )
}


export default DynamicAssignmentPage;