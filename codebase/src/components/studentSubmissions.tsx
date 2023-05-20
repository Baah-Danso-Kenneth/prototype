import { AssignmentPageCard } from "components/assignmentCards";
import * as Styles from "../styles/studentPage.styled";
import { useFilterAssignment } from "hooks/studentFilter";

export function StudentCompletedAssignments() {
    const {
        assignments,
    } = useFilterAssignment()

    const filteredAssignments = assignments?.filter((assignment) => (assignment.assignmentSubmission.length !== 0))
    return (
        <Styles.Section>
            <Styles.assignments>
                {
                    filteredAssignments?.map((assignment, index) => {
                        return (
                            <div>
                                <AssignmentPageCard
                                    key={index}
                                    title={`${assignment.title}`}
                                    deadline={assignment.deadline}
                                    description={assignment.description}
                                    assignmentId={assignment.assignmentId}
                                    assignmentSubmission={assignment.assignmentSubmission}
                                    lecturer={assignment.lecturer}
                                />
                            </div>
                        );
                    })
                }
            </Styles.assignments>
        </Styles.Section>
    )
}
