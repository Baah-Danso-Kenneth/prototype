/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import { api } from 'utils/api';
import axios from "axios";
import {useParams} from "react-router-dom";
interface Student { 
  studentId: string, 
  assignmentId: string, 
  assignment: {
    tittle: string
  }
  student:{
    studentId: string,
    firstName: string,
    lastName: string
  }
}

interface SnapShot{
file: string[],
folder: string[];
}

export function useAssignments() {
  const [assignmentName, setAssignmentName] = useState<string>('');
  const [students, setStudents] = useState<Student[]>([]);
  const [snapShot, setSnapShots] = useState<SnapShot>();
  const [folders, setFolders] = useState<string[]>([]);
  const [files, setFiles] = useState<string[]>([]);
  const params = useParams();
  const getFolders = async (owner: string, repo: string, path: string) => {
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=main`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_PAT}`,
        withCredentials: false,
      },
    });
    return response.data;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getStudentsSubmissionsToAssignment(`${params?.assignmentId}`);
        setStudents(response.data);
        setAssignmentName(response);
      } catch (error) {
        throw error;
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getStudentSnapShots(`folder`, `${9304094400}`, `St00000001`);
        setSnapShots(response.data);
      } catch (error) {
        throw error;
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
       const response = await api.getSingleSnapShots(`folder`, `${students[0]?.assignmentId}`, `${students[0]?.studentId}`, "snap4");
       setFiles(response.data.files);
        setFolders(response.data.folders)
      } catch (error) {
        throw error;
      }
    };
    fetchData();
  }, []);

  return {
    getFolders,
    assignmentName,
    students,
    setAssignmentName,
    snapShot,
  };
}
