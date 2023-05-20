import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import * as Styles from "../styles/fileDetails.styled"

 interface FileType {
   type: string; 
   name: string;
   path: string;
   content: string;
 }

export function FileDetails() {
  const [file, setFile] = useState<FileType>({
    type: "",
    name: "",
    path: "",
    content: "",
  })
  
  const params = useParams();

 const getFile = async (owner?: string, repo?: string, path?:string) => {
   const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=main`, {
     headers: {
       Authorization: `token ${process.env.REACT_APP_GITHUB_PAT}`,
       withCredentials: false
     },
     });
     return response.data;
   };
  
   const parts = file.name.split(".");
   const extension = parts[parts.length - 1];

   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await getFile(
           params.owner, 
           params.assignment,
           params["*"]
         );
         setFile(response)
       } catch (error) {
         throw error
       };
     }      
     fetchData();
   }, []);
            
  return (
    <Styles.Container>
      <SyntaxHighlighter
        language={`${extension}`}
        showLineNumbers={true}
        customStyle={{ fontSize: "14px" }}
        lineNumberStyle={{
          paddingRight: '40px', paddingLeft: '20px',
          fontSize: "13px", color: "white"
        }}
        style={vs2015}>
        {atob(file.content)}
      </SyntaxHighlighter>
    </Styles.Container>
  )
}
