import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import fileIcon from "../assets/images/Vector(34).png"
import { FaFolder } from 'react-icons/fa';
import { Link } from "react-router-dom";
import * as Styled from "../styles/assignmentTable.styled";
interface fileType { 
    type: string; 
    name: string;
    path: string;
    content: string;
}

export function Assignment(){
  const [assignment, setAssignment] = useState<fileType[]>([])
   const params = useParams();
   const getAssignment = async (owner?:string, assignmentName?:string) => {
    const response = await axios.get(`https://api.github.com/repos/${owner}/${assignmentName}/contents/`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_PAT}`,
        withCredentials: false
      },
    });
    return response.data;
  };
   
  useEffect(() => {
    const fetchData = async () => {
      try{
          const response = await getAssignment(
         params.owner,
         params.assignments
          );
          setAssignment(response);
          }catch(error){
            throw error
          };
      }      
    fetchData();
  }, []);
    return(
      <>
        <Styled.List>
          {assignment && assignment.map((folder, index) => (
            <li key={index}>
              {folder.type === "dir" ? <FaFolder className="folder" /> : 
                <img src={fileIcon} alt="" />
              }
              {folder.type == "file" ? <Link to={`/assignment/${params.owner}/${params.assignments}/${folder.path}`}>{folder.name}</Link>
                : <Link to={`/submitted-assignments/assignment/folder/${params.owner}/${params.assignments}/${folder.path}`}>{folder.name}</Link>}
            </li>
          ))}
        </Styled.List>
     </>
    )
}
