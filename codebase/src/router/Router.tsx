import { Routes, Route, Navigate } from "react-router-dom";
import { AdminPage } from "pages/adminPage";
import { AdminStudentsList } from "components/adminStudentsList";
import { AdminLecturersList } from "components/adminLecturersList";
import { AdminDashboard } from "components/adminDashboard";
import { StudentPage } from "pages/studentPage";
import LoginPage from "pages/LoginPage";
import ResetPasswordPage from "pages/ResetPasswordPage";
import { LecturerDashboard } from "pages/lecturerPage";
import { PreviewAssignments } from "pages/assignmentsPage";
import { FileDetails } from "components/fileDetails";
import { Assignment } from "components/assignmentTable";
import { SingleFolder } from "components/folder";
import { SingleAssignment } from "components/singleAssignment";
import DefaultLecturerPage from "pages/DefaultLecturerPage";
import LecturerListStudent from "pages/lecturerListStudent";
import DraftPage from "pages/DraftPage";
import DynamicAssignmentPage from "pages/DynamicAssignmentPage";
import ProtectedRoute from "./ProtectedRoute";
import { StudentDashboard } from "components/studentDashboard";
import ClaimAccount from "pages/claimAccount";
import { Submissions } from "components/submissions";
import {StudentCompletedAssignments} from "components/studentSubmissions";

export function Routing() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='reset-password' element={<ResetPasswordPage />} />
      <Route path='/claim' element={<ClaimAccount />} />
        <Route path="admin" element={<ProtectedRoute role="admin"><AdminPage /></ProtectedRoute>}>
          <Route path="" element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={< AdminDashboard  />}/>
          <Route path="/admin/students" element={<AdminStudentsList />} />
          <Route path="/admin/lecturers" element={<AdminLecturersList/>} />
      </Route>

      <Route path="student-page" element={<StudentPage/>} >
        <Route path="/student-page/submissions" element={<StudentCompletedAssignments />} />
        <Route path="" element={<Navigate to="dashboard"/>} />
        <Route path="dashboard" element={<StudentDashboard/>} >
          <Route path="/student-page/dashboard/:assignmentId" element={<SingleAssignment/>}/>
        </Route>
      </Route>

      <Route path="lecturer" element={<LecturerDashboard />}>
        <Route path="" element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<DefaultLecturerPage />} />

        <Route path="list/student" element={<LecturerListStudent/>} />
        <Route path="submission" element={< Submissions  />} />
        <Route path="draft" element={<DraftPage />} />
        <Route path="assignment/:assignmentId" element={<DynamicAssignmentPage/>} />
        <Route path='submissions/submitted-assignments/:submissions/:assignmentId' element={<PreviewAssignments />}>
          <Route path="assignment/folder/:owner/:assignments/*" element={<SingleFolder />} />
          <Route path="assignment/folders/:owner/:assignments" element={<Assignment />} />
        </Route>
      </Route>
     
      <Route path="/assignment/:owner/:assignment/*" element={<FileDetails />} />
    </Routes>
  )
}