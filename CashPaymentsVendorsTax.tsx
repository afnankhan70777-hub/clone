import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Eye, Printer } from 'lucide-react';

interface CashPaymentVendor {
  paymentNo: number;
  paymentDate: string;
  vendorCode: string;
  vendorName: string;
  invoiceRef: string;
  amount: number;
  whtAmount: number;
  netAmount: number;
  paidBy: string;
  status: string;
}

const paymentsData: CashPaymentVendor[] = [
  { paymentNo: 1, paymentDate: '15-03-2024', vendorCode: '210020001', vendorName: 'STech Consultants', invoiceRef: 'PI-001', amount: 5000, whtAmount: 125, netAmount: 4875, paidBy: 'Ahmad Khan', status: 'Posted' },
  { paymentNo: 2, paymentDate: '18-03-2024', vendorCode: '210020002', vendorName: 'Green Age Marketing', invoiceRef: 'PI-002', amount: 7500, whtAmount: 187, netAmount: 7313, paidBy: 'Ali Raza', status: 'Posted' },
  { paymentNo: 3, paymentDate: '20-03-2024', vendorCode: '210020003', vendorName: 'Pakistan Suppliers', invoiceRef: 'PI-003', amount: 4500, whtAmount: 112, netAmount: 4388, paidBy: 'Tariq Mehmood', status: 'Pending' },
  { paymentNo: 4, paymentDate: '22-03-2024', vendorCode: '210020005', vendorName: 'Fast Logistics', invoiceRef: 'PI-005', amount: 2500, whtAmount: 62, netAmount: 2438, paidBy: 'Rashid Ahmed', status: 'Posted' },
  { paymentNo: 5, paymentDate: '25-03-2024', vendorCode: '210020001', vendorName: 'STech Consultants', invoiceRef: 'PI-006', amount: 3000, whtAmount: 75, netAmount: 2925, paidBy: 'Ahmad Khan', status: 'Pending' },
];

export function CashPaymentsVendorsTax() {
  const [, setSelectedPayment] = useState<CashPaymentVendor | null>(null);

  const columns = [
    { header: 'Payment No', accessorKey: 'paymentNo' as const, width: '80px' },
    { header: 'Date', accessorKey: 'paymentDate' as const, width: '90px' },
    { header: 'Vendor Code', accessorKey: 'vendorCode' as const, width: '90px' },
    { header: 'Vendor Name', accessorKey: 'vendorName' as const, width: '160px' },
    { header: 'Invoice Ref', accessorKey: 'invoiceRef' as const, width: '80px' },
    { header: 'Amount', accessorKey: 'amount' as const, width: '100px', cell: ({ row }: { row: { original: CashPaymentVendor } }) => row.original.amount.toLocaleString() },
    { header: 'WHT', accessorKey: 'whtAmount' as const, width: '80px', cell: ({ row }: { row: { original: CashPaymentVendor } }) => row.original.whtAmount.toLocaleString() },
    { header: 'Net Amount', accessorKey: 'netAmount' as const, width: '100px', cell: ({ row }: { row: { original: CashPaymentVendor } }) => row.original.netAmount.toLocaleString() },
    { header: 'Paid By', accessorKey: 'paidBy' as const, width: '120px' },
    { header: 'Status', accessorKey: 'status' as const, width: '80px', cell: ({ row }: { row: { original: CashPaymentVendor } }) => (
      <span className={`px-2 py-0.5 rounded text-xs ${row.original.status === 'Posted' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
        {row.original.status}
      </span>
    )},
    {
      header: 'Actions',
      accessorKey: 'actions' as const,
      width: '100px',
      cell: ({ row }: { row: { original: CashPaymentVendor } }) => (
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
        <CustomCard title="Cash Payments to Vendors (Tax)" className="h-full">
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
