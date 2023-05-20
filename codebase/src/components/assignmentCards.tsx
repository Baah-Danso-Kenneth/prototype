import * as Styles from "../styles/StudentCard.styled";
import * as Interface from "../utils/types/StudentPage";
import lecturerIcon from "../assets/images/Vector(29).png";

export function AssignmentPageCard({title,description,deadline,lecturer}: Interface.studentAssignment) {
  return (
    <Styles.assignment>
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <p className="date">
        <span>Due</span>
        <span> {deadline}</span>
      </p>
      <div className="profile">
        <img
          src={lecturerIcon}
          alt="profile"
        />
         <p>
          <span>Lecturer</span>
          <span>{`Prof. ${lecturer.firstName} ${lecturer.lastName}`}</span>
         </p>
      </div>
    </Styles.assignment>
  );
}

