import { useState } from 'react';
import { Lock, Check, X } from 'lucide-react';
import { CustomCard as Card } from '@/components/ui/CustomCard';

export function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage('New password and confirm password do not match!');
      return;
    }
    if (newPassword.length < 6) {
      setMessage('Password must be at least 6 characters long!');
      return;
    }
    setMessage('Password changed successfully!');
  };

  return (
    <div className="p-4 space-y-3">
      {/* Title Bar */}
      <div className="bg-bg-tertiary border border-border-custom p-2 flex justify-between items-center">
        <h1 className="text-accent-orange font-bold text-xl">CHANGE PASSWORD</h1>
        <div className="flex gap-1">
          <button className="p-1 bg-bg-secondary border border-border-custom hover:bg-bg-tertiary">
            <div className="w-4 h-4 border border-text-secondary" />
          </button>
          <button className="p-1 bg-danger border border-danger hover:brightness-110">
            <X className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex justify-center">
        <Card className="w-full max-w-md p-6">
          <div className="text-accent-teal font-bold text-lg mb-6 text-center">Change Your Password</div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs text-text-secondary block mb-1">Current Password</label>
              <div className="flex items-center bg-white border border-border-custom">
                <Lock className="w-4 h-4 text-text-secondary ml-2" />
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="flex-1 text-xs py-2 px-2 border-0"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-text-secondary block mb-1">New Password</label>
              <div className="flex items-center bg-white border border-border-custom">
                <Lock className="w-4 h-4 text-text-secondary ml-2" />
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="flex-1 text-xs py-2 px-2 border-0"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-text-secondary block mb-1">Confirm New Password</label>
              <div className="flex items-center bg-white border border-border-custom">
                <Lock className="w-4 h-4 text-text-secondary ml-2" />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="flex-1 text-xs py-2 px-2 border-0"
                  required
                />
              </div>
            </div>

            {message && (
              <div className={`text-xs text-center py-2 ${message.includes('success') ? 'text-success' : 'text-danger'}`}>
                {message}
              </div>
            )}

            <div className="pt-4 flex gap-2">
              <button
                type="submit"
                className="flex-1 bg-accent-orange text-white py-2 px-4 text-sm font-semibold hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                Change Password
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-bg-tertiary border border-border-custom text-sm hover:bg-bg-secondary flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
            </div>
          </form>

          <div className="mt-6 pt-4 border-t border-border-custom">
            <p className="text-xs text-text-secondary text-center">
              Password must be at least 6 characters long
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
