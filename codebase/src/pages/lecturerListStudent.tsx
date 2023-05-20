import Navbar from 'components/SearchBar'
import React, { useEffect, useState } from 'react'
import { ListStudentContainer, ListStudentContent } from 'styles/LecturerOutled.styled'
import { TableContainer,Table } from '../styles/lecturerListStudent.styled'
import { api } from 'utils/api'
import { StudentProps } from 'utils/model'

function lecturerListStudent() {
  const [listStudent, setListStudent] = useState<StudentProps[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);


  useEffect(()=>{
    (async()=>{
      const responseData=await api.getInvitedStudents()
      setListStudent(responseData.data)
    })()
  },[])
  const handleClickPrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleClickNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <ListStudentContainer>
      <Navbar />
      <ListStudentContent>
        <h3>All students</h3>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>

            {listStudent.length > 0 ? (
              <tbody>
                {listStudent.map((student)=>(
                  <>
                  <tr>
                    <td>{student.studentId}</td>
                  <td>{student.firstName} {student.lastName}</td>
                  <td>{student.email}</td>
                  </tr>
                  </>
                ))}
              </tbody>
            ) : (
              <tbody>
                <tr>
                  <td colSpan={4}>No students found.</td>
                </tr>
              </tbody>
            )}

            <tfoot>
              <tr>
                <td colSpan={4}>
                  <p>
                    Page {currentPage}/{Math.ceil(listStudent.length / 10)}
                  </p>
                  <button onClick={handleClickPrev} disabled={currentPage === 1}>
                    Prev
                    </button>

                    <button onClick={handleClickNext} disabled={currentPage === Math.ceil(listStudent.length / 10)}>
                            Next
                         </button>

                       </td>
                        </tr>
                    </tfoot>
                    </Table>
                    </TableContainer>
                    </ListStudentContent>
                </ListStudentContainer>
  )
}

export default lecturerListStudent