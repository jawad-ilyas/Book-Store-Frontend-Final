import React, { useEffect, useState } from "react";

import { users as initialUsers } from "../../data";
import FilterUsers from "../../components/FilterUsers";
import UsersTable from "../../components/UsersTable";
import { useAllUserListQuery } from "../../redux/user/userApi";
import AdminLayout from "../../components/AdminLayout";

const AdminUsersPage = () => {
  const { data } = useAllUserListQuery()
  const users = data?.users || []
  const [filterRole, setFilterRole] = useState("");



  const filteredUsers = filterRole ? users.filter((u) => u.role === filterRole) : users;

  return (
    <AdminLayout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500 px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Users Management</h1>

        <FilterUsers filterRole={filterRole} setFilterRole={setFilterRole} />
        <UsersTable users={filteredUsers} />
      </div>
    </AdminLayout>
  );
};

export default AdminUsersPage;
