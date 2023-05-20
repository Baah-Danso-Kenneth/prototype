import {useState, useEffect} from "react";
import { api } from "utils/api";
import * as Interface from "../utils/types/StudentPage";

export function useFilterAssignment(){
    const [assignments, setAssignments] = useState<Interface.studentAssignment[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
   
      useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
          try {
            const response = await api.studentGetAssignments();
            setAssignments(response.data);
          } catch (error) {
            setLoading(false)
            throw error;
          }finally{
            setTimeout(()=>{
              setLoading(false);
            }, 10000)
          }
        };
        fetchData();
      }, []);

  return {
   assignments,
   loading
  };
}