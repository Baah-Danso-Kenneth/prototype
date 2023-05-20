import React from 'react';
import { DefaultPageContainer } from 'styles/LecturerOutled.styled';
import Navbar from 'components/SearchBar';
import { AssignmentContainer } from 'styles/CourseBanner.styled';
import Assignment from 'components/shared/Assignment';
import { useGetAssignments } from 'hooks/filterAssignment';

function DefaultLecturerPage() { 
  const {allAssigment,assingmentExit} = useGetAssignments()

  return (
    <DefaultPageContainer>
        <Navbar />
      <div>
        <h2 className="assignment">Assignment</h2>
        <AssignmentContainer>
          {assingmentExit ? (
           allAssigment.map((singleAssignment) => (
              <Assignment
                key={singleAssignment.assignmentId}
                title={singleAssignment.title}
                deadline={singleAssignment.deadline}
                description={singleAssignment.description}
                assignmentId={singleAssignment.assignmentId}
              />
            ))
          ) : (
            <p>There are no assignments.</p>
          )}
        </AssignmentContainer>
      </div>
    </DefaultPageContainer>
  );
}

export default DefaultLecturerPage;