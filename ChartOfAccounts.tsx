import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2 } from 'lucide-react';

interface Account {
  code: string;
  name: string;
  type: string;
  parentAccount: string;
  openingBalance: number;
  currentBalance: number;
}

const accountsData: Account[] = [
  { code: '1000', name: 'Assets', type: 'Asset', parentAccount: '', openingBalance: 0, currentBalance: 2500000 },
  { code: '1100', name: 'Current Assets', type: 'Asset', parentAccount: 'Assets', openingBalance: 0, currentBalance: 1500000 },
  { code: '1110', name: 'Cash in Hand', type: 'Asset', parentAccount: 'Current Assets', openingBalance: 189835, currentBalance: 189835 },
  { code: '1120', name: 'Bank Accounts', type: 'Asset', parentAccount: 'Current Assets', openingBalance: 1641449, currentBalance: 1641449 },
  { code: '1130', name: 'Accounts Receivable', type: 'Asset', parentAccount: 'Current Assets', openingBalance: 0, currentBalance: 1011838 },
  { code: '1140', name: 'Inventory', type: 'Asset', parentAccount: 'Current Assets', openingBalance: 0, currentBalance: 500000 },
  { code: '1200', name: 'Fixed Assets', type: 'Asset', parentAccount: 'Assets', openingBalance: 0, currentBalance: 1000000 },
  { code: '2000', name: 'Liabilities', type: 'Liability', parentAccount: '', openingBalance: 0, currentBalance: 155879 },
  { code: '2100', name: 'Current Liabilities', type: 'Liability', parentAccount: 'Liabilities', openingBalance: 0, currentBalance: 155879 },
  { code: '2110', name: 'Accounts Payable', type: 'Liability', parentAccount: 'Current Liabilities', openingBalance: 0, currentBalance: 155879 },
  { code: '3000', name: 'Equity', type: 'Equity', parentAccount: '', openingBalance: 0, currentBalance: 2344121 },
  { code: '3100', name: 'Capital', type: 'Equity', parentAccount: 'Equity', openingBalance: 0, currentBalance: 2344121 },
  { code: '4000', name: 'Revenue', type: 'Revenue', parentAccount: '', openingBalance: 0, currentBalance: 440124 },
  { code: '4100', name: 'Sales Revenue', type: 'Revenue', parentAccount: 'Revenue', openingBalance: 0, currentBalance: 440124 },
  { code: '5000', name: 'Expenses', type: 'Expense', parentAccount: '', openingBalance: 0, currentBalance: 150000 },
  { code: '5100', name: 'Cost of Goods Sold', type: 'Expense', parentAccount: 'Expenses', openingBalance: 0, currentBalance: 100000 },
  { code: '5200', name: 'Operating Expenses', type: 'Expense', parentAccount: 'Expenses', openingBalance: 0, currentBalance: 50000 },
];

export function ChartOfAccounts() {
  const [, setSelectedAccount] = useState<Account | null>(null);

  const columns = [
    { header: 'Code', accessorKey: 'code' as const, width: '80px' },
    { header: 'Account Name', accessorKey: 'name' as const, width: '250px' },
    { header: 'Type', accessorKey: 'type' as const, width: '120px' },
    { header: 'Parent Account', accessorKey: 'parentAccount' as const, width: '180px' },
    { header: 'Opening Balance', accessorKey: 'openingBalance' as const, width: '140px', cell: ({ row }: { row: { original: Account } }) => row.original.openingBalance.toLocaleString() },
    { header: 'Current Balance', accessorKey: 'currentBalance' as const, width: '140px', cell: ({ row }: { row: { original: Account } }) => row.original.currentBalance.toLocaleString() },
    {
      header: 'Actions',
      accessorKey: 'actions' as const,
      width: '100px',
      cell: ({ row }: { row: { original: Account } }) => (
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-[#a0a0a0] hover:text-white"
            onClick={() => setSelectedAccount(row.original)}
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-[#a0a0a0] hover:text-red-400"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Toolbar */}
      <div className="flex items-center justify-between p-1 bg-[#3a3a3a] border-b border-[#454545]">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-7 text-xs bg-[#d4855a] hover:bg-[#c4794f] text-white"
          >
            <Plus className="h-3.5 w-3.5 mr-1" />
            Add Account
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-2 overflow-auto">
        <CustomCard title="Chart of Accounts" className="h-full">
          <DataTable
            columns={columns}
            data={accountsData}
            onRowClick={(row) => setSelectedAccount(row)}
          />
        </CustomCard>
      </div>
    </div>
  );
}
