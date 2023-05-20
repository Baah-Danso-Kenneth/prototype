import { AssignmentPageCard } from "components/assignmentCards";
import { Link, Outlet } from "react-router-dom"
import * as Styles from "../styles/studentPage.styled";
import { useFilterAssignment } from "hooks/studentFilter";

export function StudentDashboard(){
    const {
        assignments,
    } = useFilterAssignment()

    return(
       
            <Styles.Section>
                <Styles.assignments>
                    {
                        assignments?.map((assignment, index) => {
                            return (
                                <Link to={`/student-page/dashboard/${assignment.assignmentId}`}>
                                    <AssignmentPageCard
                                        key={index}
                                        title={`${assignment.title}`}
                                        deadline={assignment.deadline}
                                        description={assignment.description}
                                        assignmentId={assignment.assignmentId}
                                        assignmentSubmission={assignment.assignmentSubmission}
                                        lecturer={assignment.lecturer}
                                    />
                                </Link>
                            );
                        })
                    }
                </Styles.assignments>
                <Outlet />
            </Styles.Section>
    )
}