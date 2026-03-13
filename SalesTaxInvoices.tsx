import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Eye, Printer } from 'lucide-react';

interface SalesTaxInvoice {
  invoiceNo: number;
  invoiceDate: string;
  cusCode: string;
  customerName: string;
  invoiceType: string;
  invoiceAmount: number;
  salesTax: number;
  incomeTax: number;
  totalAmount: number;
  status: string;
}

const salesTaxInvoicesData: SalesTaxInvoice[] = [
  { invoiceNo: 1, invoiceDate: '10-09-2021', cusCode: '120020007', customerName: 'The Best School Systems', invoiceType: 'Fed. Sales Tax Invoice', invoiceAmount: 2440.68, salesTax: 439.32, incomeTax: 0, totalAmount: 2880, status: 'Authorized' },
  { invoiceNo: 2, invoiceDate: '23-08-2021', cusCode: '120020001', customerName: 'Star Enterprises', invoiceType: 'Fed. Sales Tax Invoice', invoiceAmount: 33823.73, salesTax: 6088.27, incomeTax: 0, totalAmount: 39912, status: 'Authorized' },
  { invoiceNo: 3, invoiceDate: '05-01-2022', cusCode: '120020004', customerName: 'Bismillah Traders', invoiceType: 'Fed. Sales Tax Invoice', invoiceAmount: 12203.39, salesTax: 2196.61, incomeTax: 0, totalAmount: 14400, status: 'Authorized' },
  { invoiceNo: 4, invoiceDate: '22-04-2022', cusCode: '120020003', customerName: 'Khalid Brothers', invoiceType: 'Fed. Sales Tax Invoice', invoiceAmount: 48813.56, salesTax: 8786.44, incomeTax: 0, totalAmount: 57600, status: 'Pending' },
  { invoiceNo: 5, invoiceDate: '03-06-2022', cusCode: '120020002', customerName: 'MSR Associates', invoiceType: 'Fed. Sales Tax Invoice', invoiceAmount: 3050.85, salesTax: 549.15, incomeTax: 144, totalAmount: 3600, status: 'Authorized' },
];

export function SalesTaxInvoices() {
  const [, setSelectedInvoice] = useState<SalesTaxInvoice | null>(null);

  const columns = [
    { header: 'Invoice No', accessorKey: 'invoiceNo' as const, width: '80px' },
    { header: 'Date', accessorKey: 'invoiceDate' as const, width: '90px' },
    { header: 'Cus Code', accessorKey: 'cusCode' as const, width: '90px' },
    { header: 'Customer Name', accessorKey: 'customerName' as const, width: '180px' },
    { header: 'Type', accessorKey: 'invoiceType' as const, width: '150px' },
    { header: 'Amount', accessorKey: 'invoiceAmount' as const, width: '100px', cell: ({ row }: { row: { original: SalesTaxInvoice } }) => row.original.invoiceAmount.toLocaleString() },
    { header: 'Sales Tax', accessorKey: 'salesTax' as const, width: '90px', cell: ({ row }: { row: { original: SalesTaxInvoice } }) => row.original.salesTax.toLocaleString() },
    { header: 'Income Tax', accessorKey: 'incomeTax' as const, width: '90px', cell: ({ row }: { row: { original: SalesTaxInvoice } }) => row.original.incomeTax.toLocaleString() },
    { header: 'Total', accessorKey: 'totalAmount' as const, width: '100px', cell: ({ row }: { row: { original: SalesTaxInvoice } }) => row.original.totalAmount.toLocaleString() },
    { header: 'Status', accessorKey: 'status' as const, width: '90px', cell: ({ row }: { row: { original: SalesTaxInvoice } }) => (
      <span className={`px-2 py-0.5 rounded text-xs ${row.original.status === 'Authorized' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
        {row.original.status}
      </span>
    )},
    {
      header: 'Actions',
      accessorKey: 'actions' as const,
      width: '120px',
      cell: ({ row }: { row: { original: SalesTaxInvoice } }) => (
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
          <span className="text-xs text-[#a0a0a0]">Total: {salesTaxInvoicesData.length} records</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-2 overflow-auto">
        <CustomCard title="Sales Tax Invoices" className="h-full">
          <DataTable
            columns={columns}
            data={salesTaxInvoicesData}
            onRowClick={(row) => setSelectedInvoice(row)}
          />
        </CustomCard>
      </div>
    </div>
  );
}
