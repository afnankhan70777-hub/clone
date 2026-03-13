import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Eye, Printer } from 'lucide-react';

interface NonTaxSaleInvoice {
  invoiceNo: number;
  invoiceDate: string;
  cusCode: string;
  customerName: string;
  description: string;
  invoiceAmount: number;
  discount: number;
  netAmount: number;
  status: string;
}

const invoicesData: NonTaxSaleInvoice[] = [
  { invoiceNo: 1, invoiceDate: '20-02-2022', cusCode: '120020002', customerName: 'MSR Associates', description: 'Product Supply', invoiceAmount: 86650, discount: 0, netAmount: 86650, status: 'Authorized' },
  { invoiceNo: 2, invoiceDate: '01-05-2022', cusCode: '120020002', customerName: 'MSR Associates', description: 'Product Supply', invoiceAmount: 18000, discount: 0, netAmount: 18000, status: 'Pending' },
  { invoiceNo: 3, invoiceDate: '08-06-2022', cusCode: '120020005', customerName: 'City Associates', description: 'Product Supply', invoiceAmount: 93500, discount: 0, netAmount: 93500, status: 'Authorized' },
  { invoiceNo: 4, invoiceDate: '10-06-2022', cusCode: '120020003', customerName: 'Khalid Brothers', description: 'Product Supply', invoiceAmount: 18750, discount: 0, netAmount: 18750, status: 'Pending' },
  { invoiceNo: 5, invoiceDate: '05-06-2022', cusCode: '120020001', customerName: 'Star Enterprises', description: 'Product Supply', invoiceAmount: 4032, discount: 0, netAmount: 4032, status: 'Authorized' },
  { invoiceNo: 6, invoiceDate: '02-06-2022', cusCode: '120020004', customerName: 'Bismillah Traders', description: 'Product Supply', invoiceAmount: 28800, discount: 0, netAmount: 28800, status: 'Authorized' },
  { invoiceNo: 7, invoiceDate: '11-06-2022', cusCode: '120020004', customerName: 'Bismillah Traders', description: 'Product Supply', invoiceAmount: 72000, discount: 0, netAmount: 72000, status: 'Pending' },
];

export function SaleInvoicesNonTax() {
  const [, setSelectedInvoice] = useState<NonTaxSaleInvoice | null>(null);

  const columns = [
    { header: 'Invoice No', accessorKey: 'invoiceNo' as const, width: '80px' },
    { header: 'Date', accessorKey: 'invoiceDate' as const, width: '90px' },
    { header: 'Cus Code', accessorKey: 'cusCode' as const, width: '90px' },
    { header: 'Customer Name', accessorKey: 'customerName' as const, width: '180px' },
    { header: 'Description', accessorKey: 'description' as const, width: '200px' },
    { header: 'Amount', accessorKey: 'invoiceAmount' as const, width: '100px', cell: ({ row }: { row: { original: NonTaxSaleInvoice } }) => row.original.invoiceAmount.toLocaleString() },
    { header: 'Discount', accessorKey: 'discount' as const, width: '80px', cell: ({ row }: { row: { original: NonTaxSaleInvoice } }) => row.original.discount.toLocaleString() },
    { header: 'Net Amount', accessorKey: 'netAmount' as const, width: '100px', cell: ({ row }: { row: { original: NonTaxSaleInvoice } }) => row.original.netAmount.toLocaleString() },
    { header: 'Status', accessorKey: 'status' as const, width: '90px', cell: ({ row }: { row: { original: NonTaxSaleInvoice } }) => (
      <span className={`px-2 py-0.5 rounded text-xs ${row.original.status === 'Authorized' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
        {row.original.status}
      </span>
    )},
    {
      header: 'Actions',
      accessorKey: 'actions' as const,
      width: '100px',
      cell: ({ row }: { row: { original: NonTaxSaleInvoice } }) => (
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-[#a0a0a0] hover:text-white"
            onClick={() => setSelectedInvoice(row.original)}
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
            New Invoice
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#a0a0a0]">Total: {invoicesData.length} records</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-2 overflow-auto">
        <CustomCard title="Sale Invoices (Non-Tax)" className="h-full">
          <DataTable
            columns={columns}
            data={invoicesData}
            onRowClick={(row) => setSelectedInvoice(row)}
          />
        </CustomCard>
      </div>
    </div>
  );
}
