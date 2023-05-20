import React from 'react'
import { CoursePublishedContainer,FirstSection,SecondSection,ImageSection, DeadlineSection,SubmissionSection, Line } from 'styles/LecturerPageStyled'
import { CoursePublishedProps } from 'utils/model'



function CoursePublishedContext(props: CoursePublishedProps) {
	const {
	  title,
	  description,
	  deleteImageUrl,
	  editImageUrl,
	  submissionMade,
	  submissionScore,
	  deadline,
	} = props;

	return (
	  <CoursePublishedContainer>
          <FirstSection>
			<div>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			<button>invite</button>
		  </FirstSection>

		  <SecondSection>
			<ImageSection>
			   <img src={deleteImageUrl} alt="delete_img" />
			   <img src={editImageUrl} alt="edit_img" />
			</ImageSection>

			<SubmissionSection>
				<h3>{submissionMade}</h3>
				<p>{submissionScore}</p>
			</SubmissionSection>
			
			<DeadlineSection>
			<h3>Deadline</h3>
			<p>{deadline}</p>
		 </DeadlineSection>
	  </SecondSection>
	  <Line/>
	  </CoursePublishedContainer>
	);
  }

export default CoursePublishedContext
