import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Eye, Printer } from 'lucide-react';

interface BankPaymentVendor {
  paymentNo: number;
  paymentDate: string;
  vendorCode: string;
  vendorName: string;
  bankAccount: string;
  chequeNo: string;
  invoiceRef: string;
  amount: number;
  whtAmount: number;
  netAmount: number;
  status: string;
}

const paymentsData: BankPaymentVendor[] = [
  { paymentNo: 1, paymentDate: '15-03-2024', vendorCode: '210020001', vendorName: 'STech Consultants', bankAccount: 'HBL-001234567', chequeNo: '000123', invoiceRef: 'PI-001', amount: 50000, whtAmount: 1250, netAmount: 48750, status: 'Cleared' },
  { paymentNo: 2, paymentDate: '18-03-2024', vendorCode: '210020002', vendorName: 'Green Age Marketing', bankAccount: 'UBL-008765432', chequeNo: '000124', invoiceRef: 'PI-002', amount: 75000, whtAmount: 1875, netAmount: 73125, status: 'Cleared' },
  { paymentNo: 3, paymentDate: '20-03-2024', vendorCode: '210020003', vendorName: 'Pakistan Suppliers', bankAccount: 'MCB-005678901', chequeNo: '000125', invoiceRef: 'PI-003', amount: 45000, whtAmount: 1125, netAmount: 43875, status: 'Pending' },
  { paymentNo: 4, paymentDate: '22-03-2024', vendorCode: '210020004', vendorName: 'Global Traders', bankAccount: 'SCB-003214567', chequeNo: '000126', invoiceRef: 'PI-004', amount: 120000, whtAmount: 3000, netAmount: 117000, status: 'Pending' },
  { paymentNo: 5, paymentDate: '25-03-2024', vendorCode: '210020005', vendorName: 'Fast Logistics', bankAccount: 'ABL-007654321', chequeNo: '000127', invoiceRef: 'PI-005', amount: 25000, whtAmount: 625, netAmount: 24375, status: 'Cleared' },
];

export function BankPaymentsVendorsTax() {
  const [, setSelectedPayment] = useState<BankPaymentVendor | null>(null);

  const columns = [
    { header: 'Payment No', accessorKey: 'paymentNo' as const, width: '80px' },
    { header: 'Date', accessorKey: 'paymentDate' as const, width: '90px' },
    { header: 'Vendor Code', accessorKey: 'vendorCode' as const, width: '90px' },
    { header: 'Vendor Name', accessorKey: 'vendorName' as const, width: '160px' },
    { header: 'Bank Account', accessorKey: 'bankAccount' as const, width: '130px' },
    { header: 'Cheque No', accessorKey: 'chequeNo' as const, width: '80px' },
    { header: 'Invoice Ref', accessorKey: 'invoiceRef' as const, width: '80px' },
    { header: 'Amount', accessorKey: 'amount' as const, width: '100px', cell: ({ row }: { row: { original: BankPaymentVendor } }) => row.original.amount.toLocaleString() },
    { header: 'WHT', accessorKey: 'whtAmount' as const, width: '80px', cell: ({ row }: { row: { original: BankPaymentVendor } }) => row.original.whtAmount.toLocaleString() },
    { header: 'Net Amount', accessorKey: 'netAmount' as const, width: '100px', cell: ({ row }: { row: { original: BankPaymentVendor } }) => row.original.netAmount.toLocaleString() },
    { header: 'Status', accessorKey: 'status' as const, width: '80px', cell: ({ row }: { row: { original: BankPaymentVendor } }) => (
      <span className={`px-2 py-0.5 rounded text-xs ${row.original.status === 'Cleared' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
        {row.original.status}
      </span>
    )},
    {
      header: 'Actions',
      accessorKey: 'actions' as const,
      width: '100px',
      cell: ({ row }: { row: { original: BankPaymentVendor } }) => (
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
        <CustomCard title="Bank Payments to Vendors (Tax)" className="h-full">
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
