import { NoUser } from "./shared/noUser";
import { AdminUsersList } from "./shared/adminUsersList";
import { useAdminUsers } from "hooks/adminUsers";

export function AdminStudentsList() {
    const {
        userExist,
    } = useAdminUsers()
    return (
        <>
            {
                userExist ? <AdminUsersList userType="Student" userStatus="Students" /> :
                    <NoUser user="student" />
            }
        </>
    )
}
