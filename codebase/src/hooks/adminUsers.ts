import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useControlPopUp } from '../context/popUp';
import { useLocation } from 'react-router-dom';
import { api } from '../utils/api';
import * as Interface from '../utils/types/adminPage';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'context/authContext';

export const useAdminUsers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState<Interface.User[]>([]);
  const [displayedUsers, setDisplayedUsers] = useState<Interface.User[]>([]);
  const [itemsPerPage] = useState(8);
  const [userExist, setUserExist] = useState<boolean>(true);
  const [totalPages, setTotalPages] = useState<number>();
  const [Loading, setLoading] = useState<boolean>(false);
  const [User, setUser] = useState<string>("")
  const navigate = useNavigate();
  const { user } = useAuth();

  const location = useLocation();
  const { formPopUp, uploadPopUp } = useControlPopUp();


  async function fetchUsers() {
    const getEndPoint = location.pathname.includes('students') ? 'students' : 'lecturers';
    setUser(getEndPoint);
    try {
      const response = await api.getUsers(getEndPoint);
      response.data = response.data.reverse();
      const totalUsers = (response.data.length);
      totalUsers === 0 && setUserExist(false);
      setTotalPages(Math.ceil(totalUsers / itemsPerPage));
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setUsers(response.data.slice(startIndex, endIndex));
      setDisplayedUsers(response.data.slice(startIndex, endIndex));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
       if (error.response.status === 401) {
          navigate('/');
        } else {
            toast.error(error.response.message)
        }
    } 
  }

  useEffect(()=>{
      setLoading(true);
       setTimeout(() => {
         setLoading(false);
       }, 5000);
  },[])

  useEffect(() => {
    fetchUsers();
  }, [currentPage, user?.role, formPopUp, uploadPopUp]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return {
    currentPage,
    users,
    setUsers,
    handlePageChange,
    userExist,
    totalPages,
    displayedUsers,
    Loading,
    User
  };
};
