import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Plus, Save, Printer } from 'lucide-react';
import { CustomSelect } from '@/components/ui/CustomSelect';

interface AccountOpeningBalance {
  accountCode: string;
  accountName: string;
  debit: number;
  credit: number;
}

const accountsOpeningData: AccountOpeningBalance[] = [
  { accountCode: '1110', accountName: 'Cash in Hand', debit: 100000, credit: 0 },
  { accountCode: '1120', accountName: 'Bank Accounts', debit: 500000, credit: 0 },
  { accountCode: '1130', accountName: 'Accounts Receivable', debit: 300000, credit: 0 },
  { accountCode: '2110', accountName: 'Accounts Payable', debit: 0, credit: 100000 },
  { accountCode: '3100', accountName: 'Capital Account', debit: 0, credit: 800000 },
];

export function AccountsOpeningBalancesNonTax() {
  const [selectedYear, setSelectedYear] = useState('2024-2025');
  const [data] = useState(accountsOpeningData);

  const yearOptions = [
    { value: '2024-2025', label: '2024-2025' },
    { value: '2023-2024', label: '2023-2024' },
    { value: '2022-2023', label: '2022-2023' },
  ];

  const columns = [
    { header: 'Account Code', accessorKey: 'accountCode' as const, width: '120px' },
    { header: 'Account Name', accessorKey: 'accountName' as const, width: '350px' },
    { header: 'Debit', accessorKey: 'debit' as const, width: '150px', cell: ({ row }: { row: { original: AccountOpeningBalance } }) => row.original.debit.toLocaleString() },
    { header: 'Credit', accessorKey: 'credit' as const, width: '150px', cell: ({ row }: { row: { original: AccountOpeningBalance } }) => row.original.credit.toLocaleString() },
  ];

  const totalDebit = data.reduce((sum, item) => sum + item.debit, 0);
  const totalCredit = data.reduce((sum, item) => sum + item.credit, 0);

  return (
    <div className="h-full flex flex-col">
      {/* Toolbar */}
      <div className="flex items-center justify-between p-1 bg-[#3a3a3a] border-b border-[#454545]">
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#a0a0a0]">Financial Year:</span>
          <CustomSelect
            value={selectedYear}
            onValueChange={setSelectedYear}
            options={yearOptions}
            className="w-32"
          />
          <Button
            variant="ghost"
            size="sm"
            className="h-7 text-xs bg-[#d4855a] hover:bg-[#c4794f] text-white"
          >
            <Plus className="h-3.5 w-3.5 mr-1" />
            Add Entry
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-7 text-xs bg-[#00bfa5] hover:bg-[#00a893] text-white"
          >
            <Save className="h-3.5 w-3.5 mr-1" />
            Save
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 text-xs bg-[#454545] hover:bg-[#555555] text-white"
          >
            <Printer className="h-3.5 w-3.5 mr-1" />
            Print
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-2 overflow-auto">
        <CustomCard title="Accounts Opening Balances (Non-Tax)" className="h-full">
          <DataTable
            columns={columns}
            data={data}
          />
        </CustomCard>
      </div>

      {/* Footer Summary */}
      <div className="p-2 bg-[#3a3a3a] border-t border-[#454545]">
        <div className="flex justify-end gap-8 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-[#a0a0a0]">Total Debit:</span>
            <span className="text-white font-medium">{totalDebit.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#a0a0a0]">Total Credit:</span>
            <span className="text-white font-medium">{totalCredit.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#a0a0a0]">Difference:</span>
            <span className={`font-medium ${totalDebit === totalCredit ? 'text-green-400' : 'text-red-400'}`}>
              {(totalDebit - totalCredit).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
