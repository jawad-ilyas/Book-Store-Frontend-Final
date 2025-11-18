import UserRow from "./UserRow";

const UsersTable = ({ users, onRoleChange, onToggleBan }) => {
  return (
    <div className="overflow-x-auto rounded-2xl">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left text-gray-900 dark:text-gray-100">
            <th className="px-4 py-3">ID</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Role</th>
            <th className="px-4 py-3">Status</th>
          </tr>
        </thead>
        <tbody className="space-y-2">
          {users.map((user) => (
            <UserRow key={user.id} user={user} onRoleChange={onRoleChange} onToggleBan={onToggleBan} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
