// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {useState,useEffect} from 'react'
import { api } from 'utils/api';
import { AssignmentData } from 'utils/model';


export const useGetAssignments = () => {
  const [allAssigment, setAllAssignment] = useState<AssignmentData[]>([]);
  const [assingmentExit,setAssignmentExit]=useState<boolean>(true)


    useEffect(() => {
      const fetchData = async () => {
    try {
            
    const response = await api.getAssignments()
    setAllAssignment(response.data);

    if(response.data.length == 0){
      setAssignmentExit(false)
    }
        } catch (error) {
          throw error;
        }
      };
      fetchData();
    }, []);
    
  return {
    allAssigment,
    assingmentExit
  };
};