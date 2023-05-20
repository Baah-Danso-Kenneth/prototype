import React from 'react'
import { AssignStudentProps } from 'utils/model'
import AvatarImage from 'assets/images/avatar.png';
import { FetchSelectedData, Liner } from 'styles/CourseBanner.styled';

function AssignedStudents(props:AssignStudentProps) {
    const {email,invited}=props
  return (
    <div>
    <FetchSelectedData>
      <img src={AvatarImage} alt="avatar_image"/>
      <div>
        <p>{email}</p>
        <p>{invited}</p>
      </div>
    </FetchSelectedData>
    <Liner/>
    </div>
  )
}

export default AssignedStudents
