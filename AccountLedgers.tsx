import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Printer, Download, Search } from 'lucide-react';
import { CustomSelect } from '@/components/ui/CustomSelect';

interface AccountLedgerEntry {
  date: string;
  documentType: string;
  documentNo: string;
  description: string;
  debit: number;
  credit: number;
  balance: number;
}

const ledgerData: AccountLedgerEntry[] = [
  { date: '01-03-2024', documentType: 'Opening', documentNo: '-', description: 'Opening Balance', debit: 189835, credit: 0, balance: 189835 },
  { date: '05-03-2024', documentType: 'Receipt', documentNo: 'CR-001', description: 'Cash received from Star Enterprises', debit: 50000, credit: 0, balance: 239835 },
  { date: '10-03-2024', documentType: 'Payment', documentNo: 'CP-001', description: 'Office supplies purchase', debit: 0, credit: 2500, balance: 237335 },
  { date: '15-03-2024', documentType: 'Receipt', documentNo: 'CR-002', description: 'Cash received from MSR Associates', debit: 35000, credit: 0, balance: 272335 },
  { date: '20-03-2024', documentType: 'Payment', documentNo: 'CP-002', description: 'Petty cash expenses', debit: 0, credit: 1500, balance: 270835 },
  { date: '25-03-2024', documentType: 'Receipt', documentNo: 'CR-003', description: 'Cash received from Khalid Brothers', debit: 25000, credit: 0, balance: 295835 },
];

export function AccountLedgers() {
  const [accountCode, setAccountCode] = useState('1110');

  const accountOptions = [
    { value: '1110', label: 'Cash in Hand' },
    { value: '1120', label: 'Bank Accounts' },
    { value: '1130', label: 'Accounts Receivable' },
    { value: '2110', label: 'Accounts Payable' },
    { value: '3100', label: 'Capital Account' },
  ];

  const columns = [
    { header: 'Date', accessorKey: 'date' as const, width: '90px' },
    { header: 'Doc Type', accessorKey: 'documentType' as const, width: '90px' },
    { header: 'Doc No', accessorKey: 'documentNo' as const, width: '80px' },
    { header: 'Description', accessorKey: 'description' as const, width: '300px' },
    { header: 'Debit', accessorKey: 'debit' as const, width: '100px', cell: ({ row }: { row: { original: AccountLedgerEntry } }) => row.original.debit > 0 ? row.original.debit.toLocaleString() : '-' },
    { header: 'Credit', accessorKey: 'credit' as const, width: '100px', cell: ({ row }: { row: { original: AccountLedgerEntry } }) => row.original.credit > 0 ? row.original.credit.toLocaleString() : '-' },
    { header: 'Balance', accessorKey: 'balance' as const, width: '100px', cell: ({ row }: { row: { original: AccountLedgerEntry } }) => row.original.balance.toLocaleString() },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Toolbar */}
      <div className="flex items-center justify-between p-1 bg-[#3a3a3a] border-b border-[#454545]">
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#a0a0a0]">Account:</span>
          <CustomSelect
            value={accountCode}
            onValueChange={setAccountCode}
            options={accountOptions}
            className="w-48"
          />
          <Button
            variant="ghost"
            size="sm"
            className="h-7 text-xs bg-[#d4855a] hover:bg-[#c4794f] text-white"
          >
            <Search className="h-3.5 w-3.5 mr-1" />
            View
          </Button>
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
        <CustomCard title="Account Ledgers" className="h-full">
          <DataTable
            columns={columns}
            data={ledgerData}
          />
        </CustomCard>
      </div>
    </div>
  );
}
