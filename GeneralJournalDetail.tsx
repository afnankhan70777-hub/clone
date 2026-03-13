import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Printer, Download } from 'lucide-react';
import { CustomSelect } from '@/components/ui/CustomSelect';

interface JournalEntry {
  entryNo: number;
  entryDate: string;
  accountCode: string;
  accountName: string;
  debit: number;
  credit: number;
  narration: string;
  reference: string;
}

const journalData: JournalEntry[] = [
  { entryNo: 1, entryDate: '15-03-2024', accountCode: '1110', accountName: 'Cash in Hand', debit: 50000, credit: 0, narration: 'Cash received from customer', reference: 'CR-001' },
  { entryNo: 1, entryDate: '15-03-2024', accountCode: '1130', accountName: 'Accounts Receivable', debit: 0, credit: 50000, narration: 'Cash received from customer', reference: 'CR-001' },
  { entryNo: 2, entryDate: '16-03-2024', accountCode: '2110', accountName: 'Accounts Payable', debit: 25000, credit: 0, narration: 'Payment to vendor', reference: 'PV-002' },
  { entryNo: 2, entryDate: '16-03-2024', accountCode: '1120', accountName: 'Bank Accounts', debit: 0, credit: 25000, narration: 'Payment to vendor', reference: 'PV-002' },
  { entryNo: 3, entryDate: '17-03-2024', accountCode: '5200', accountName: 'Operating Expenses', debit: 15000, credit: 0, narration: 'Office rent payment', reference: 'PV-003' },
  { entryNo: 3, entryDate: '17-03-2024', accountCode: '1120', accountName: 'Bank Accounts', debit: 0, credit: 15000, narration: 'Office rent payment', reference: 'PV-003' },
];

export function GeneralJournalDetail() {
  const [dateRange, setDateRange] = useState('thisMonth');

  const dateOptions = [
    { value: 'today', label: 'Today' },
    { value: 'yesterday', label: 'Yesterday' },
    { value: 'thisWeek', label: 'This Week' },
    { value: 'thisMonth', label: 'This Month' },
  ];

  const columns = [
    { header: 'Entry No', accessorKey: 'entryNo' as const, width: '70px' },
    { header: 'Date', accessorKey: 'entryDate' as const, width: '90px' },
    { header: 'Account Code', accessorKey: 'accountCode' as const, width: '100px' },
    { header: 'Account Name', accessorKey: 'accountName' as const, width: '200px' },
    { header: 'Debit', accessorKey: 'debit' as const, width: '120px', cell: ({ row }: { row: { original: JournalEntry } }) => row.original.debit > 0 ? row.original.debit.toLocaleString() : '-' },
    { header: 'Credit', accessorKey: 'credit' as const, width: '120px', cell: ({ row }: { row: { original: JournalEntry } }) => row.original.credit > 0 ? row.original.credit.toLocaleString() : '-' },
    { header: 'Narration', accessorKey: 'narration' as const, width: '200px' },
    { header: 'Reference', accessorKey: 'reference' as const, width: '80px' },
  ];

  const totalDebit = journalData.reduce((sum, item) => sum + item.debit, 0);
  const totalCredit = journalData.reduce((sum, item) => sum + item.credit, 0);

  return (
    <div className="h-full flex flex-col">
      {/* Toolbar */}
      <div className="flex items-center justify-between p-1 bg-[#3a3a3a] border-b border-[#454545]">
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#a0a0a0]">Date Range:</span>
          <CustomSelect
            value={dateRange}
            onValueChange={setDateRange}
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
        <CustomCard title="General Journal Detail" className="h-full">
          <DataTable
            columns={columns}
            data={journalData}
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
        </div>
      </div>
    </div>
  );
}
