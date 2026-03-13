import { useState } from 'react';
import { Calculator, Plus, Check, X, Trash2, Printer, RefreshCw } from 'lucide-react';
import { CustomCard as Card } from '@/components/ui/CustomCard';

const accountsData = [
  { code: '1100000001', name: 'Cash in Hand', type: 'Assets', balance: 189835 },
  { code: '1100000002', name: 'Bank Account', type: 'Assets', balance: 1641449 },
  { code: '1200000001', name: 'Accounts Receivable', type: 'Assets', balance: 1011838 },
  { code: '2100000001', name: 'Accounts Payable', type: 'Liabilities', balance: 155879 },
  { code: '3100000001', name: 'Capital Account', type: 'Equity', balance: 2672243 },
  { code: '4100000001', name: 'Sales Revenue', type: 'Revenue', balance: 440124 },
  { code: '5100000001', name: 'Purchase Expense', type: 'Expenses', balance: 220682 },
];

export function Accounts() {
  const [selectedAccount, setSelectedAccount] = useState(accountsData[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAccounts = accountsData.filter(a => 
    a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.code.includes(searchTerm)
  );

  return (
    <div className="p-4 space-y-3">
      {/* Title Bar */}
      <div className="bg-bg-tertiary border border-border-custom p-2 flex justify-between items-center">
        <h1 className="text-accent-orange font-bold text-xl">ACCOUNTS</h1>
        <div className="flex items-center gap-2">
          <input 
            type="text" 
            placeholder="Search Account"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-40 text-xs"
          />
          <button className="px-3 py-1 bg-bg-secondary border border-border-custom text-xs hover:bg-bg-tertiary flex items-center gap-1">
            <RefreshCw className="w-3 h-3" />
            Refresh
          </button>
          <span className="text-xs text-text-secondary">Total Accounts:</span>
          <span className="text-danger font-bold">{filteredAccounts.length}</span>
        </div>
        <div className="flex gap-1">
          <button className="p-2 bg-bg-secondary border border-border-custom hover:bg-bg-tertiary">
            <Calculator className="w-5 h-5" />
          </button>
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
          {/* General Info */}
          <Card>
            <div className="text-accent-teal font-bold text-sm mb-3">General Info</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Account Type</span>
                <select className="flex-1 text-xs" value={selectedAccount.type}>
                  <option value="Assets">Assets</option>
                  <option value="Liabilities">Liabilities</option>
                  <option value="Equity">Equity</option>
                  <option value="Revenue">Revenue</option>
                  <option value="Expenses">Expenses</option>
                </select>
                <button className="px-2 py-1 bg-bg-tertiary border border-border-custom text-xs">...</button>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Account Code</span>
                <input type="text" value={selectedAccount.code} className="w-28 text-xs text-[#2196f3]" readOnly />
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Account Name</span>
                <input type="text" value={selectedAccount.name} className="flex-1 text-xs text-danger" />
              </div>
              
              <div className="flex items-start gap-2">
                <span className="text-xs text-text-secondary w-28 pt-1">Description</span>
                <textarea className="flex-1 text-xs h-16 resize-none" />
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Opening Balance</span>
                <input type="text" value="0.00" className="w-24 text-xs" />
                <span className="text-xs text-text-secondary">Rs.</span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Current Balance</span>
                <input type="text" value={selectedAccount.balance.toLocaleString()} className="w-24 text-xs text-success" readOnly />
                <span className="text-xs text-text-secondary">Rs.</span>
              </div>
              
              <div className="flex items-center gap-2 justify-end">
                <span className="text-xs text-text-secondary">Inactive Account</span>
                <input type="checkbox" className="w-4 h-4" />
              </div>
            </div>
          </Card>

          {/* Remarks */}
          <Card>
            <div className="text-accent-teal font-bold text-sm mb-3">Remarks</div>
            <textarea className="w-full h-20 text-xs resize-none" />
          </Card>
        </div>

        {/* Right Column - Account List */}
        <div>
          <Card className="h-full">
            <div className="text-accent-teal font-bold text-sm mb-3">Account List</div>
            <div className="border border-border-custom overflow-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
              <table className="w-full">
                <thead className="sticky top-0">
                  <tr className="bg-bg-tertiary">
                    <th className="text-xs py-1 px-2 border border-border-custom text-white">Code</th>
                    <th className="text-xs py-1 px-2 border border-border-custom text-white">Name</th>
                    <th className="text-xs py-1 px-2 border border-border-custom text-white">Type</th>
                    <th className="text-xs py-1 px-2 border border-border-custom text-white">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAccounts.map((account, i) => (
                    <tr 
                      key={account.code} 
                      className={`cursor-pointer hover:bg-bg-tertiary ${i % 2 === 0 ? 'bg-bg-secondary' : 'bg-bg-primary'} ${selectedAccount.code === account.code ? 'bg-accent-orange' : ''}`}
                      onClick={() => setSelectedAccount(account)}
                    >
                      <td className="text-xs py-1 px-2 border border-border-custom">{account.code}</td>
                      <td className="text-xs py-1 px-2 border border-border-custom">{account.name}</td>
                      <td className="text-xs py-1 px-2 border border-border-custom">{account.type}</td>
                      <td className="text-xs py-1 px-2 border border-border-custom text-right">{account.balance.toLocaleString()}</td>
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
