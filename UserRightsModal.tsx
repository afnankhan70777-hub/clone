import { useState } from 'react';
import { X, Check } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface UserRightsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const voucherTypes = [
  'Accounts Opening Balances (Tax)',
  'Accounts Opening Balances (Non Tax)',
  'Products Opening Balances (Tax)',
  'Products Opening Balances (Non Tax)',
  'Purchase Orders (Federal Tax)',
  'Purchase Orders (Import)',
  'Purchase Orders (State / Provincial Tax)',
  'Purchase Orders (Non Tax)',
  'Goods Received Notes (Tax)',
  'Goods Received Notes (Non Tax)',
  'Purchase Invoices (Federal Tax)',
  'Import Purchase Invoices',
  'Purchase Invoices (State / Provincial Tax)',
  'Purchase Invoices (Non Tax)',
  'Purchase Returns (Federal Tax)',
  'Debit Notes (Federal Sales Tax)',
  'Purchase Returns (State / Provincial Tax)',
  'Debit Notes (State / Provincial Tax)',
  'Purchase Returns (Non Tax)',
  'Fixed Assets Local Purchases',
];

export function UserRightsModal({ isOpen, onClose }: UserRightsModalProps) {
  const [activeTab, setActiveTab] = useState<'Lists' | 'Vouchers' | 'Reports'>('Vouchers');
  const [permissions, setPermissions] = useState<Record<string, Record<string, number>>>({});

  const togglePermission = (voucher: string, action: string) => {
    setPermissions(prev => ({
      ...prev,
      [voucher]: {
        ...prev[voucher],
        [action]: prev[voucher]?.[action] === 1 ? 0 : 1
      }
    }));
  };

  const setAllForColumn = (action: string, value: number) => {
    const newPermissions = { ...permissions };
    voucherTypes.forEach(voucher => {
      newPermissions[voucher] = { ...newPermissions[voucher], [action]: value };
    });
    setPermissions(newPermissions);
  };

  const actions = ['View', 'Add', 'Edit', 'Delete', 'Post', 'Scan', 'Print'];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl bg-bg-primary border-2 border-accent-orange p-0 max-h-[90vh] overflow-hidden">
        <DialogHeader className="bg-accent-orange p-3 flex flex-row justify-between items-center">
          <DialogTitle className="text-white text-sm font-semibold">User Rights</DialogTitle>
          <div className="flex gap-1">
            <button className="p-1 bg-success hover:brightness-110">
              <Check className="w-5 h-5 text-white" />
            </button>
            <button onClick={onClose} className="p-1 bg-danger hover:brightness-110">
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        </DialogHeader>
        
        <div className="p-4 space-y-4 overflow-auto" style={{ maxHeight: 'calc(90vh - 80px)' }}>
          <h2 className="text-accent-cyan font-bold text-xl">USER RIGHTS</h2>
          
          {/* User Selection */}
          <div className="flex items-center gap-4">
            <select className="w-48 text-xs">
              <option value="admin">admin</option>
            </select>
            
            {/* Tabs */}
            <div className="flex gap-1">
              {(['Lists', 'Vouchers', 'Reports'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1 text-xs ${activeTab === tab ? 'bg-accent-teal text-white' : 'bg-bg-tertiary text-text-secondary'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          <p className="text-xs text-text-secondary">1 = Permission, 0 = Not Allowed</p>
          
          {/* Permissions Table */}
          <div className="border border-border-custom">
            <table className="w-full">
              <thead className="sticky top-0">
                <tr className="bg-bg-tertiary">
                  <th className="text-xs py-2 px-2 border border-border-custom text-white text-left">Particulars</th>
                  {actions.map(action => (
                    <th key={action} className="text-xs py-2 px-1 border border-border-custom text-white text-center w-16">
                      {action}
                    </th>
                  ))}
                </tr>
                <tr className="bg-bg-secondary">
                  <th className="text-xs py-1 px-2 border border-border-custom text-accent-teal text-left">
                    {activeTab}
                  </th>
                  {actions.map(action => (
                    <th key={action} className="text-xs py-1 px-1 border border-border-custom">
                      <div className="flex flex-col gap-1">
                        <button 
                          onClick={() => setAllForColumn(action, 1)}
                          className="px-1 py-0.5 bg-bg-tertiary text-[10px] hover:bg-bg-primary"
                        >
                          Select All
                        </button>
                        <button 
                          onClick={() => setAllForColumn(action, 0)}
                          className="px-1 py-0.5 bg-bg-tertiary text-[10px] hover:bg-bg-primary"
                        >
                          Clear All
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {voucherTypes.map((voucher, i) => (
                  <tr key={voucher} className={i % 2 === 0 ? 'bg-bg-secondary' : 'bg-bg-primary'}>
                    <td className="text-xs py-1.5 px-2 border border-border-custom text-text-primary">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-bg-tertiary border border-border-custom" />
                        <span className={i === 0 ? 'text-[#2196f3]' : ''}>{voucher}</span>
                      </div>
                    </td>
                    {actions.map(action => (
                      <td 
                        key={action} 
                        className="text-xs py-1.5 px-1 border border-border-custom text-center cursor-pointer hover:bg-bg-tertiary"
                        onClick={() => togglePermission(voucher, action)}
                      >
                        {permissions[voucher]?.[action] ?? 1}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
