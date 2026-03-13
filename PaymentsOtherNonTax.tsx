import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Eye, Printer } from 'lucide-react';

interface PaymentOtherNonTax {
  paymentNo: number;
  paymentDate: string;
  accountCode: string;
  accountName: string;
  paymentMode: string;
  referenceNo: string;
  description: string;
  amount: number;
  status: string;
}

const paymentsData: PaymentOtherNonTax[] = [
  { paymentNo: 1, paymentDate: '15-03-2024', accountCode: '5200', accountName: 'Operating Expenses', paymentMode: 'Bank', referenceNo: 'CH-00128', description: 'Office Rent - March', amount: 50000, status: 'Cleared' },
  { paymentNo: 2, paymentDate: '18-03-2024', accountCode: '5200', accountName: 'Operating Expenses', paymentMode: 'Cash', referenceNo: 'RC-00047', description: 'Office Supplies', amount: 2500, status: 'Posted' },
  { paymentNo: 3, paymentDate: '20-03-2024', accountCode: '5200', accountName: 'Operating Expenses', paymentMode: 'Bank', referenceNo: 'CH-00129', description: 'Utility Bills', amount: 15000, status: 'Pending' },
  { paymentNo: 4, paymentDate: '22-03-2024', accountCode: '5100', accountName: 'Cost of Goods Sold', paymentMode: 'Bank', referenceNo: 'CH-00130', description: 'Shipping Charges', amount: 12000, status: 'Pending' },
  { paymentNo: 5, paymentDate: '25-03-2024', accountCode: '5200', accountName: 'Operating Expenses', paymentMode: 'Cash', referenceNo: 'RC-00048', description: 'Petty Cash', amount: 1500, status: 'Posted' },
];

export function PaymentsOtherNonTax() {
  const [, setSelectedPayment] = useState<PaymentOtherNonTax | null>(null);

  const columns = [
    { header: 'Payment No', accessorKey: 'paymentNo' as const, width: '80px' },
    { header: 'Date', accessorKey: 'paymentDate' as const, width: '90px' },
    { header: 'Account Code', accessorKey: 'accountCode' as const, width: '90px' },
    { header: 'Account Name', accessorKey: 'accountName' as const, width: '160px' },
    { header: 'Mode', accessorKey: 'paymentMode' as const, width: '70px' },
    { header: 'Reference', accessorKey: 'referenceNo' as const, width: '90px' },
    { header: 'Description', accessorKey: 'description' as const, width: '220px' },
    { header: 'Amount', accessorKey: 'amount' as const, width: '100px', cell: ({ row }: { row: { original: PaymentOtherNonTax } }) => row.original.amount.toLocaleString() },
    { header: 'Status', accessorKey: 'status' as const, width: '80px', cell: ({ row }: { row: { original: PaymentOtherNonTax } }) => (
      <span className={`px-2 py-0.5 rounded text-xs ${
        row.original.status === 'Cleared' || row.original.status === 'Posted' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
      }`}>
        {row.original.status}
      </span>
    )},
    {
      header: 'Actions',
      accessorKey: 'actions' as const,
      width: '100px',
      cell: ({ row }: { row: { original: PaymentOtherNonTax } }) => (
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
        <CustomCard title="Payments to Other Accounts (Non-Tax)" className="h-full">
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
