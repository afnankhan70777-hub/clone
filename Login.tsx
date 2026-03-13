import { useState } from 'react';
import { Cloud, Lock, User } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

export function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('Head Office');
  const [financialYear, setFinancialYear] = useState('Jul 1, 2021 To Dec 31, 2022');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <Cloud className="w-24 h-24 text-[#1e88e5]" strokeWidth={1.5} />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-16 h-16 text-black" fill="currentColor">
                  <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.5L18.5 8 12 11.5 5.5 8 12 4.5zM5 9.5l6 3.5v6.5l-6-3.75V9.5zm14 0v6.25l-6 3.75v-6.5l6-3.5z"/>
                </svg>
              </div>
            </div>
          </div>
          <h1 className="text-white font-bold text-2xl">AFROZ SWIFT FINANCIALS</h1>
          <p className="text-text-secondary text-sm mt-1">A Project of AFROZ TECHNOLOGIES</p>
        </div>

        {/* Login Form */}
        <div className="bg-bg-secondary border border-border-custom p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs text-text-secondary block mb-1">User Name</label>
              <div className="flex items-center bg-white border border-border-custom">
                <User className="w-4 h-4 text-text-secondary ml-2" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="flex-1 text-xs py-2 px-2 border-0"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-text-secondary block mb-1">Password</label>
              <div className="flex items-center bg-white border border-border-custom">
                <Lock className="w-4 h-4 text-text-secondary ml-2" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex-1 text-xs py-2 px-2 border-0"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-text-secondary block mb-1">Company / Branch</label>
              <select
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full text-xs py-2 px-2"
              >
                <option value="Head Office">Head Office</option>
                <option value="Branch 1">Branch 1</option>
                <option value="Branch 2">Branch 2</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-text-secondary block mb-1">Financial Year</label>
              <select
                value={financialYear}
                onChange={(e) => setFinancialYear(e.target.value)}
                className="w-full text-xs py-2 px-2"
              >
                <option value="Jul 1, 2021 To Dec 31, 2022">Jul 1, 2021 To Dec 31, 2022</option>
                <option value="Jan 1, 2023 To Dec 31, 2023">Jan 1, 2023 To Dec 31, 2023</option>
              </select>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-accent-orange text-white py-2 px-4 text-sm font-semibold hover:brightness-110 transition-all"
              >
                Login
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-text-secondary">
              For support contact: <span className="text-accent-cyan">support@afroztech.com</span>
            </p>
            <p className="text-xs text-text-secondary mt-1">
              Visit: <span className="text-accent-cyan">www.afroztech.com</span>
            </p>
          </div>
        </div>

        {/* Version */}
        <div className="text-center mt-4">
          <p className="text-xs text-text-secondary">Version 2.0.1</p>
        </div>
      </div>
    </div>
  );
}
