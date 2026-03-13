import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Eye, Printer } from 'lucide-react';

interface BankPaymentOther {
  paymentNo: number;
  paymentDate: string;
  accountCode: string;
  accountName: string;
  bankAccount: string;
  chequeNo: string;
  description: string;
  amount: number;
  status: string;
}

const paymentsData: BankPaymentOther[] = [
  { paymentNo: 1, paymentDate: '15-03-2024', accountCode: '5200', accountName: 'Operating Expenses', bankAccount: 'HBL-001234567', chequeNo: '000128', description: 'Office Rent - March', amount: 50000, status: 'Cleared' },
  { paymentNo: 2, paymentDate: '18-03-2024', accountCode: '5200', accountName: 'Operating Expenses', bankAccount: 'HBL-001234567', chequeNo: '000129', description: 'Utility Bills', amount: 15000, status: 'Cleared' },
  { paymentNo: 3, paymentDate: '20-03-2024', accountCode: '5200', accountName: 'Operating Expenses', bankAccount: 'UBL-008765432', chequeNo: '000130', description: 'Marketing Expenses', amount: 25000, status: 'Pending' },
  { paymentNo: 4, paymentDate: '22-03-2024', accountCode: '5100', accountName: 'Cost of Goods Sold', bankAccount: 'MCB-005678901', chequeNo: '000131', description: 'Shipping Charges', amount: 12000, status: 'Pending' },
  { paymentNo: 5, paymentDate: '25-03-2024', accountCode: '5200', accountName: 'Operating Expenses', bankAccount: 'ABL-007654321', chequeNo: '000132', description: 'Insurance Premium', amount: 35000, status: 'Cleared' },
];

export function BankPaymentsOtherTax() {
  const [, setSelectedPayment] = useState<BankPaymentOther | null>(null);

  const columns = [
    { header: 'Payment No', accessorKey: 'paymentNo' as const, width: '80px' },
    { header: 'Date', accessorKey: 'paymentDate' as const, width: '90px' },
    { header: 'Account Code', accessorKey: 'accountCode' as const, width: '90px' },
    { header: 'Account Name', accessorKey: 'accountName' as const, width: '160px' },
    { header: 'Bank Account', accessorKey: 'bankAccount' as const, width: '130px' },
    { header: 'Cheque No', accessorKey: 'chequeNo' as const, width: '80px' },
    { header: 'Description', accessorKey: 'description' as const, width: '200px' },
    { header: 'Amount', accessorKey: 'amount' as const, width: '100px', cell: ({ row }: { row: { original: BankPaymentOther } }) => row.original.amount.toLocaleString() },
    { header: 'Status', accessorKey: 'status' as const, width: '80px', cell: ({ row }: { row: { original: BankPaymentOther } }) => (
      <span className={`px-2 py-0.5 rounded text-xs ${row.original.status === 'Cleared' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
        {row.original.status}
      </span>
    )},
    {
      header: 'Actions',
      accessorKey: 'actions' as const,
      width: '100px',
      cell: ({ row }: { row: { original: BankPaymentOther } }) => (
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-[#a0a0a0] hover:text-white"
            onClick={() => setSelectedPayment(row.original)}
          >
            <Eye className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-[#a0a0a0] hover:text-white"
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-[#a0a0a0] hover:text-white"
          >
            <Printer className="h-4 w-4" />
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
            New Payment
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#a0a0a0]">Total: {paymentsData.length} records</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-2 overflow-auto">
        <CustomCard title="Bank Payments to Other Accounts (Tax)" className="h-full">
          <DataTable
            columns={columns}
            data={paymentsData}
            onRowClick={(row) => setSelectedPayment(row)}
          />
        </CustomCard>
      </div>
    </div>
  );
}
