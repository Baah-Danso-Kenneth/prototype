import React,{useState,useEffect} from 'react'
import { ContentListItems, CoursesHeaders, ListCourseContainer, NavigationAndButton } from 'styles/Card.styled'
import { BaseLiner } from 'styles/CourseBanner.styled'
import { DistanceController } from 'styles/LecturerPageStyled'
import axios from 'axios'
import {toast} from 'react-toastify'
import { CourseProps } from 'utils/model'

function ListCourses(){
  const [currentPage, setCurrentPage] = useState(1);
  const [courses, setCourses] = useState<CourseProps[]>([]);

  const coursesPerPage = 5;

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;

  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/users/courses`)
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        toast.error(error)
      });
  }, []);

  const handlePrevPageClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPageClick = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <DistanceController top="-6">
      <ListCourseContainer>
        <CoursesHeaders>
          <h2>Name</h2>
          <h2>Email</h2>
          <h2>Student ID</h2>
        </CoursesHeaders>
        <BaseLiner />
        {currentCourses.map(course => (
          <ContentListItems key={course.id}>
            <input type="checkbox" />
            <h3>{course.name}</h3>
            <h3>{course.email}</h3>
            <h3>{course.staff_id}</h3>
          </ContentListItems>
        ))}
        <BaseLiner />

        <DistanceController top="12">
          <NavigationAndButton>
            <button onClick={handlePrevPageClick} disabled={currentPage === 1}>
              Prev
            </button>
            <button>Invite</button>
            <button onClick={handleNextPageClick} disabled={currentCourses.length < coursesPerPage}>
              Next
            </button>
          </NavigationAndButton>
        </DistanceController>
      </ListCourseContainer>
    </DistanceController>
  );
}


export default ListCourses
    
