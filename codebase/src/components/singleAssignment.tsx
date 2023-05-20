import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as Interface from "../utils/types/StudentPage";
import * as Styles from "../styles/singleAssignment";
import statusImage from "../assets/images/Vector(31).png";
import { useFilterAssignment } from "hooks/studentFilter";

export function SingleAssignment() {
    const [assignment, setAssignment] = useState<Interface.studentAssignment>({
        title: "",
        description: "",
        deadline: "",
        assignmentId: "",
        assignmentSubmission: [],
        lecturer: {
            firstName: "",
            lastName: ""
        }
    });
    const params = useParams();

    const { assignments } = useFilterAssignment();

    useEffect(() => {
        const singleAssignment = assignments.find(
            (assignment) => assignment.assignmentId === params.assignmentId
        );
        if (singleAssignment) {
            setAssignment(singleAssignment);
        }
    }, [assignments, params.assignmentId]);

    return (
        <Styles.container>
            {assignment ? (
                <>
                    <h2>{assignment.title}</h2>
                    <div className="status">
                        <p>100pt</p>
                        <p>
                            <img src={statusImage} alt="" />
                            <span>not submitted</span>
                        </p>
                    </div>
                    <p className="date">
                        <span>Due Date</span>
                        <span>{assignment.deadline}</span>
                    </p>
                    <div className="description">
                        <span>Description</span>
                        <p>{assignment.description}</p>
                    </div>
                    <div className="button">
                        <button>Add Submission</button>
                    </div>
                </>
            ) : (
                <p>Loading assignment...</p>
            )}
        </Styles.container>
    );
}
