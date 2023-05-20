import React from 'react'
import { InvitationContainer, InvitationContent } from 'styles/Modal.styled'
import { useCheckedStudents } from 'hooks/checkedStudent';
import { useChecked } from 'context/handleCheckedContext';

function InviteStudentForAssignment() {
  const {
    students,
    isDataSent,
  }=useCheckedStudents()

  const {handleCheck, checkedStudent} = useChecked();


  const colors = ["#FFA9A9", "#A9EAFF", "#E9A9FF"];

  return (
    <InvitationContainer>
      {students.length > 0 ? (
        students.map((student, index) => (
          <InvitationContent
            key={student.email}
          >
              <input
              type="checkbox"
              className='cheker'
              value={student.email}
              onChange={(event) => handleCheck(event, student)}
              checked={checkedStudent.some((checkedStudent) => checkedStudent === student.email)}
              disabled={isDataSent}
            /> 
            <div  style={{ backgroundColor: colors[index % colors.length] }}>
              <h1>{student.firstName.substring(0, 1)}</h1>
            </div>

            <div>
              <p>{student.firstName} {student.lastName}</p>
              <p>{student.email}</p>
            </div>   
          </InvitationContent>
        ))
      ) : (<p>not exist</p>)}
    </InvitationContainer>
  );
}

export default InviteStudentForAssignment;
