import { api } from "utils/api";
import {useEffect, useState} from "react";
import * as Styles from "../styles/lecturerSubmissions.styles";
import {Link} from "react-router-dom";
import * as Interface from "../utils/types/lecturer";
import assignmentIcon from "../assets/images/folder 2.png";

export function Submissions(){
    const [allAssignments, setallAssignments] = useState<Interface.Assignment[]>([])
  
    useEffect(() => {
        const fetchSubmissions= async () => {
            try {
                const response = await api.getLecturerSubmissions();
               setallAssignments(response.data)
            } catch (error) {
                throw error;
            }
        };
        fetchSubmissions();
    }, []);

    return(
        <Styles.Container>
            <div className="items_container">
                {allAssignments && allAssignments.map((assignment, index) => (
                    <Link key={index} to={`/lecturer/submissions/submitted-assignments/${assignment._count.assignmentSubmission}/${assignment.assignmentId}`}>
                            <img src={assignmentIcon} alt="icon" />
                            <div>
                                <h3>{assignment.title}</h3>
                                <span>{`${assignment._count.assignmentSubmission} submissions`}</span>
                            </div>
                        </Link>
                ))}
            </div>
        </Styles.Container>
    )
}