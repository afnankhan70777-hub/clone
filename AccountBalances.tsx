import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Printer, Download } from 'lucide-react';
import { CustomSelect } from '@/components/ui/CustomSelect';

interface AccountBalance {
  accountCode: string;
  accountName: string;
  accountType: string;
  openingDebit: number;
  openingCredit: number;
  currentDebit: number;
  currentCredit: number;
  closingDebit: number;
  closingCredit: number;
}

const balancesData: AccountBalance[] = [
  { accountCode: '1110', accountName: 'Cash in Hand', accountType: 'Asset', openingDebit: 189835, openingCredit: 0, currentDebit: 110000, currentCredit: 4000, closingDebit: 295835, closingCredit: 0 },
  { accountCode: '1120', accountName: 'Bank Accounts', accountType: 'Asset', openingDebit: 1641449, openingCredit: 0, currentDebit: 250000, currentCredit: 40000, closingDebit: 1851449, closingCredit: 0 },
  { accountCode: '1130', accountName: 'Accounts Receivable', accountType: 'Asset', openingDebit: 800000, openingCredit: 0, currentDebit: 500000, currentCredit: 110000, closingDebit: 1190000, closingCredit: 0 },
  { accountCode: '1140', accountName: 'Inventory', accountType: 'Asset', openingDebit: 500000, openingCredit: 0, currentDebit: 300000, currentCredit: 200000, closingDebit: 600000, closingCredit: 0 },
  { accountCode: '2110', accountName: 'Accounts Payable', accountType: 'Liability', openingDebit: 0, openingCredit: 155879, currentDebit: 50000, currentCredit: 150000, closingDebit: 0, closingCredit: 255879 },
  { accountCode: '3100', accountName: 'Capital Account', accountType: 'Equity', openingDebit: 0, openingCredit: 2475405, currentDebit: 0, currentCredit: 0, closingDebit: 0, closingCredit: 2475405 },
  { accountCode: '4100', accountName: 'Sales Revenue', accountType: 'Revenue', openingDebit: 0, openingCredit: 0, currentDebit: 0, currentCredit: 500000, closingDebit: 0, closingCredit: 500000 },
  { accountCode: '5100', accountName: 'Cost of Goods Sold', accountType: 'Expense', openingDebit: 0, openingCredit: 0, currentDebit: 200000, currentCredit: 0, closingDebit: 200000, closingCredit: 0 },
  { accountCode: '5200', accountName: 'Operating Expenses', accountType: 'Expense', openingDebit: 0, openingCredit: 0, currentDebit: 40000, currentCredit: 0, closingDebit: 40000, closingCredit: 0 },
];

export function AccountBalances() {
  const [asOfDate, setAsOfDate] = useState('today');

  const dateOptions = [
    { value: 'today', label: 'Today' },
    { value: 'monthEnd', label: 'Month End' },
    { value: 'quarterEnd', label: 'Quarter End' },
    { value: 'yearEnd', label: 'Year End' },
  ];

  const columns = [
    { header: 'Account Code', accessorKey: 'accountCode' as const, width: '100px' },
    { header: 'Account Name', accessorKey: 'accountName' as const, width: '200px' },
    { header: 'Type', accessorKey: 'accountType' as const, width: '100px' },
    { header: 'Op. Debit', accessorKey: 'openingDebit' as const, width: '100px', cell: ({ row }: { row: { original: AccountBalance } }) => row.original.openingDebit > 0 ? row.original.openingDebit.toLocaleString() : '-' },
    { header: 'Op. Credit', accessorKey: 'openingCredit' as const, width: '100px', cell: ({ row }: { row: { original: AccountBalance } }) => row.original.openingCredit > 0 ? row.original.openingCredit.toLocaleString() : '-' },
    { header: 'Cur. Debit', accessorKey: 'currentDebit' as const, width: '100px', cell: ({ row }: { row: { original: AccountBalance } }) => row.original.currentDebit > 0 ? row.original.currentDebit.toLocaleString() : '-' },
    { header: 'Cur. Credit', accessorKey: 'currentCredit' as const, width: '100px', cell: ({ row }: { row: { original: AccountBalance } }) => row.original.currentCredit > 0 ? row.original.currentCredit.toLocaleString() : '-' },
    { header: 'Cl. Debit', accessorKey: 'closingDebit' as const, width: '100px', cell: ({ row }: { row: { original: AccountBalance } }) => row.original.closingDebit > 0 ? row.original.closingDebit.toLocaleString() : '-' },
    { header: 'Cl. Credit', accessorKey: 'closingCredit' as const, width: '100px', cell: ({ row }: { row: { original: AccountBalance } }) => row.original.closingCredit > 0 ? row.original.closingCredit.toLocaleString() : '-' },
  ];

  const totalOpeningDebit = balancesData.reduce((sum, item) => sum + item.openingDebit, 0);
  const totalOpeningCredit = balancesData.reduce((sum, item) => sum + item.openingCredit, 0);
  const totalClosingDebit = balancesData.reduce((sum, item) => sum + item.closingDebit, 0);
  const totalClosingCredit = balancesData.reduce((sum, item) => sum + item.closingCredit, 0);

  return (
    <div className="h-full flex flex-col">
      {/* Toolbar */}
      <div className="flex items-center justify-between p-1 bg-[#3a3a3a] border-b border-[#454545]">
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#a0a0a0]">As of:</span>
          <CustomSelect
            value={asOfDate}
            onValueChange={setAsOfDate}
            options={dateOptions}
            className="w-32"
          />
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-7 text-xs bg-[#454545] hover:bg-[#555555] text-white"
          >
            <Printer className="h-3.5 w-3.5 mr-1" />
            Print
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 text-xs bg-[#00bfa5] hover:bg-[#00a893] text-white"
          >
            <Download className="h-3.5 w-3.5 mr-1" />
            Export
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-2 overflow-auto">
        <CustomCard title="Account Balances" className="h-full">
          <DataTable
            columns={columns}
            data={balancesData}
          />
        </CustomCard>
      </div>

      {/* Footer Summary */}
      <div className="p-2 bg-[#3a3a3a] border-t border-[#454545]">
        <div className="flex justify-end gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-[#a0a0a0]">Total Op. Debit:</span>
            <span className="text-white font-medium">{totalOpeningDebit.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#a0a0a0]">Total Op. Credit:</span>
            <span className="text-white font-medium">{totalOpeningCredit.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#a0a0a0]">Total Cl. Debit:</span>
            <span className="text-white font-medium">{totalClosingDebit.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#a0a0a0]">Total Cl. Credit:</span>
            <span className="text-white font-medium">{totalClosingCredit.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
