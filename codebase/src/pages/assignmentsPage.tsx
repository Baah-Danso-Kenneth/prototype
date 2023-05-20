import * as Styles from "../styles/assignmentsPage.styled"  
import { FiDownload } from 'react-icons/fi';
import assignmentIcon from "../assets/images/folder 2.png"
import { useAssignments } from "hooks/assignment";
import { Link, Outlet, useParams } from "react-router-dom";
  
export function PreviewAssignments(){
  const params = useParams();
  const {
    students,
    snapShot
} = useAssignments();

  return (
    <Styles.parent_container>
    <Styles.Assignment>
        <img src={assignmentIcon} alt="icon" />
        <div>
          <h3>Javascript</h3>
          {
            params.submissions == "1" ? <span>{`${params.submissions} submission`}</span> :
              <span>{`${params.submissions} submission`}</span>
          }
         
        </div>
        </Styles.Assignment>
    <Styles.container>
      <Styles.sideBar>
          {students?.map((student, index) => (
       <Link key={index}  to={``}>
              {`${student.student?.firstName} ${student.student?.lastName}`}
       </Link>
  ))}
      </Styles.sideBar>
      <main>
      <Styles.selectContainer>
        <select name="select" id="select" >
              {snapShot?.folder.map((snapShot, index) => (
                <option value={snapShot} key={index}>
                  {snapShot}
                </option>
              ))}
        </select>
       <button>
        <span>download</span>
        <FiDownload className="download" />
       </button>
      </Styles.selectContainer>
      <Outlet/>
      </main>
      </Styles.container>
    </Styles.parent_container>
  );
};

