import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import fileIcon from "../assets/images/Vector(34).png"
import { FaFolder } from 'react-icons/fa';
import { Link } from "react-router-dom";
import * as Styled from "../styles/assignmentTable.styled";

interface FileType { 
    type: string; 
    name: string;
    path: string;
    content: string;
}

export function SingleFolder(){
  const [assignment, setAssignment] = useState<FileType[]>([])
   const params = useParams();
   const getFolders = async (owner?: string, repo?: string, path?:string) => {
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=main`, {
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
          const response = await getFolders(
         params.owner,
         params.assignments,
         params["*"]
          );
          setAssignment(response);
          }catch(error){
            throw error
          };
      }      
    fetchData();
  }, [params["*"]]);
    return(
      <>
        <Styled.List>
 {assignment && assignment.map((folder, index) => (
    <li key={index}>
     {folder.type === "dir" ? <FaFolder className="folder" /> : 
       <img src={fileIcon} alt="" />
        }
         { folder.type=="file" ?<Link to={`/assignment/${params.owner}/${params.assignments}/${folder.path}`}>{folder.name}</Link>
         : <Link to={`/submitted-assignments/assignment/folder/${params.owner}/${params.assignments}/${folder.path}`}>{folder.name}</Link> }
    </li>
  ))}
      </Styled.List>
     </>
    )
 }
