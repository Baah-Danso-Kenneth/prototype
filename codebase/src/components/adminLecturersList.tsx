import React from "react";
import { AdminUsersList } from "./shared/adminUsersList";
import { useAdminUsers } from "hooks/adminUsers";
import { NoUser } from "./shared/noUser";

export function AdminLecturersList() {

    const {
        userExist,
    } = useAdminUsers();

    return (
        <>
            {
                userExist ? <AdminUsersList userType="Staff" userStatus="Lecturers" /> :
                    <NoUser user="lecturer" />
            }
        </>
    )
}
