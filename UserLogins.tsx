import { useState } from 'react';
import { Plus, Check, X, Trash2, Printer, RefreshCw, Lock } from 'lucide-react';
import { CustomCard as Card } from '@/components/ui/CustomCard';

const usersData = [
  { id: 1, username: 'admin', name: 'Administrator', email: 'admin@company.com', role: 'Super Admin', status: 'Active' },
  { id: 2, username: 'manager', name: 'Sales Manager', email: 'manager@company.com', role: 'Manager', status: 'Active' },
  { id: 3, username: 'accountant', name: 'Chief Accountant', email: 'accountant@company.com', role: 'Accountant', status: 'Active' },
  { id: 4, username: 'operator', name: 'Data Entry Operator', email: 'operator@company.com', role: 'Operator', status: 'Inactive' },
];

export function UserLogins() {
  const [selectedUser, setSelectedUser] = useState(usersData[0]);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="p-4 space-y-3">
      {/* Title Bar */}
      <div className="bg-bg-tertiary border border-border-custom p-2 flex justify-between items-center">
        <h1 className="text-accent-orange font-bold text-xl">USER LOGINS</h1>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 bg-bg-secondary border border-border-custom text-xs hover:bg-bg-tertiary flex items-center gap-1">
            <RefreshCw className="w-3 h-3" />
            Refresh
          </button>
          <span className="text-xs text-text-secondary">Total Users:</span>
          <span className="text-danger font-bold">{usersData.length}</span>
        </div>
        <div className="flex gap-1">
          <button className="p-2 bg-bg-secondary border border-border-custom hover:bg-bg-tertiary">
            <Plus className="w-5 h-5 text-[#2196f3]" />
          </button>
          <button className="p-2 bg-bg-secondary border border-border-custom hover:bg-bg-tertiary">
            <Check className="w-5 h-5 text-success" />
          </button>
          <button className="p-2 bg-bg-secondary border border-border-custom hover:bg-bg-tertiary">
            <X className="w-5 h-5 text-danger" />
          </button>
          <button className="p-2 bg-bg-secondary border border-border-custom hover:bg-bg-tertiary">
            <Trash2 className="w-5 h-5" />
          </button>
          <button className="p-2 bg-bg-secondary border border-border-custom hover:bg-bg-tertiary">
            <Printer className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="space-y-4">
          {/* User Info */}
          <Card>
            <div className="text-accent-teal font-bold text-sm mb-3">User Information</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Username</span>
                <input type="text" value={selectedUser.username} className="flex-1 text-xs text-danger" />
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Full Name</span>
                <input type="text" value={selectedUser.name} className="flex-1 text-xs" />
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Email</span>
                <input type="text" value={selectedUser.email} className="flex-1 text-xs" />
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Role</span>
                <select className="flex-1 text-xs" value={selectedUser.role}>
                  <option value="Super Admin">Super Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="Accountant">Accountant</option>
                  <option value="Operator">Operator</option>
                </select>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Status</span>
                <select className="w-32 text-xs" value={selectedUser.status}>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
          </Card>

          {/* Password */}
          <Card>
            <div className="text-accent-teal font-bold text-sm mb-3">Change Password</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">New Password</span>
                <div className="flex items-center flex-1 bg-white border border-border-custom">
                  <Lock className="w-4 h-4 text-text-secondary ml-2" />
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="flex-1 text-xs py-1 px-2 border-0" 
                  />
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Confirm Password</span>
                <div className="flex items-center flex-1 bg-white border border-border-custom">
                  <Lock className="w-4 h-4 text-text-secondary ml-2" />
                  <input 
                    type="password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="flex-1 text-xs py-1 px-2 border-0" 
                  />
                </div>
              </div>
              
              <div className="pt-2">
                <button className="px-4 py-2 bg-accent-orange text-white text-sm font-semibold hover:brightness-110">
                  Update Password
                </button>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column - Users List */}
        <div>
          <Card className="h-full">
            <div className="text-accent-teal font-bold text-sm mb-3">Users List</div>
            <div className="border border-border-custom overflow-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
              <table className="w-full">
                <thead className="sticky top-0">
                  <tr className="bg-bg-tertiary">
                    <th className="text-xs py-1 px-2 border border-border-custom text-white">Username</th>
                    <th className="text-xs py-1 px-2 border border-border-custom text-white">Name</th>
                    <th className="text-xs py-1 px-2 border border-border-custom text-white">Role</th>
                    <th className="text-xs py-1 px-2 border border-border-custom text-white">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {usersData.map((user, i) => (
                    <tr 
                      key={user.id} 
                      className={`cursor-pointer hover:bg-bg-tertiary ${i % 2 === 0 ? 'bg-bg-secondary' : 'bg-bg-primary'} ${selectedUser.id === user.id ? 'bg-accent-orange' : ''}`}
                      onClick={() => setSelectedUser(user)}
                    >
                      <td className="text-xs py-1 px-2 border border-border-custom">{user.username}</td>
                      <td className="text-xs py-1 px-2 border border-border-custom">{user.name}</td>
                      <td className="text-xs py-1 px-2 border border-border-custom">{user.role}</td>
                      <td className="text-xs py-1 px-2 border border-border-custom">
                        <span className={`px-2 py-0.5 text-xs ${user.status === 'Active' ? 'bg-success text-white' : 'bg-danger text-white'}`}>
                          {user.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
