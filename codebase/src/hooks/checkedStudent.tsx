import React, { useEffect, useState, useMemo } from 'react';
import { api } from 'utils/api';
import { CheckedStudents } from 'utils/model';

interface Student {
  email: string;
  firstName: string;
  lastName: string;
}  
interface CheckedStudent {
  email: string;
}

export const useCheckedStudents = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [students, setStudent] = useState<Student[]>([]);
  const [checkedStudent, setCheckedStudent] = useState<CheckedStudent[]>([]);
  const [isDataSent, setIsDataSent] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>(''); 
  const [isLoading, setIsLoading] = useState<boolean>(false);


  useEffect(() => {
      async function fetchUsers() {
        const response = await api.getInvitedStudents()
        setStudent(response.data);
      }
      fetchUsers();
    }, []);

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>, user: Student) => {
      const { checked } = event.target;
      if (checked) {
        const checkedStudents: CheckedStudents = {
          email: user.email,
        };
        setCheckedStudent([...checkedStudent, checkedStudents]);
        
    } else {
        setCheckedStudent(checkedStudent.filter((checkedStudent) => checkedStudent.email !== user.email));
      }
      
    };

    const handlePageChange = (newPage: number) => {
      setCurrentPage(newPage);
    };

    const handleSubmit = async () => {
      setIsDataSent(true);
      setIsLoading(false);
      setCheckedStudent([]);
    };

   
useEffect(() => {
  if (isDataSent) {
    setCheckedStudent([]);
    setIsDataSent(false);
  }
}, [isDataSent]);

const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  setSearchQuery(event.target.value);
};
const filteredStudent = useMemo(() => {
  if (searchQuery === '') {
    return students;
  }
  const lowercaseQuery = searchQuery.toLowerCase();
  return students.filter((students) => (
    students.email.toLowerCase().includes(lowercaseQuery) ||
    students.firstName.toLowerCase().includes(lowercaseQuery) ||
    students.lastName.toLowerCase().includes(lowercaseQuery) 
  ));
}, [students, searchQuery]);


  return {
    currentPage,
    students,
    setStudent,
    checkedStudent,
    isDataSent,
    searchQuery,
    isLoading,
    handleCheck,
    handlePageChange,
    handleSubmit,
    handleSearch,
    filteredStudent,
  };
};
