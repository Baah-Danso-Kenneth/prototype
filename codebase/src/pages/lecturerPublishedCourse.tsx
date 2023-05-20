
import CoursePublishedContext from 'components/shared/coursePublishedContext'
import React from 'react'
import { DistanceController } from 'styles/LecturerPageStyled'
import deleteImage from '../assets/images/deleteIcon.jpg'
import editImage from '../assets/images/editIcon.jpg'
import PublishedDraftComponent from 'components/shared/PublishedDraft'
import LecturerFormInput from 'components/shared/LecturerFormInput'

function LecturerPublishedCourse() {
  return (
	<div>
      <DistanceController top="-4">
		     </DistanceController>

         <DistanceController top="-2">
		  <LecturerFormInput/>
		</DistanceController>

        <DistanceController top='9'>
		   <PublishedDraftComponent />
		</DistanceController>

		<CoursePublishedContext
           title="HTML"
           description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo eaque minima, autem earum amet possimus quia, modi sequi assumenda ipsa dolorum iure nihil sed saepe alias? Doloribus, ab. Ad, repel"
           deleteImageUrl={deleteImage}
           editImageUrl={editImage}
           submissionMade="Submission made"
           submissionScore="100/200"
           deadline="20/03/23"
        />
	</div>
  )
}

export default LecturerPublishedCourse