import React, { useState } from "react";

import { users as initialUsers } from "../../data";
import FilterUsers from "../../components/FilterUsers";
import UsersTable from "../../components/UsersTable";

const AdminUsersPage = () => {
  const [users, setUsers] = useState(initialUsers);
  const [filterRole, setFilterRole] = useState("");

  const handleRoleChange = (id, newRole) => {
    setUsers(users.map((u) => (u.id === id ? { ...u, role: newRole } : u)));
  };

  const handleToggleBan = (id) => {
    setUsers(users.map((u) => (u.id === id ? { ...u, banned: !u.banned } : u)));
  };

  const filteredUsers = filterRole ? users.filter((u) => u.role === filterRole) : users;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500 px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Users Management</h1>

      <FilterUsers filterRole={filterRole} setFilterRole={setFilterRole} />
      <UsersTable users={filteredUsers} onRoleChange={handleRoleChange} onToggleBan={handleToggleBan} />
    </div>
  );
};

export default AdminUsersPage;
