import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Eye, Printer } from 'lucide-react';

interface SalesServiceRenderedInvoice {
  invoiceNo: number;
  invoiceDate: string;
  cusCode: string;
  customerName: string;
  serviceDescription: string;
  serviceAmount: number;
  salesTax: number;
  incomeTax: number;
  totalAmount: number;
  status: string;
}

const invoicesData: SalesServiceRenderedInvoice[] = [
  { invoiceNo: 1, invoiceDate: '15-03-2024', cusCode: '120020001', customerName: 'Star Enterprises', serviceDescription: 'IT Consulting Services', serviceAmount: 50000, salesTax: 9000, incomeTax: 0, totalAmount: 59000, status: 'Authorized' },
  { invoiceNo: 2, invoiceDate: '20-03-2024', cusCode: '120020003', customerName: 'Khalid Brothers', serviceDescription: 'Installation Services', serviceAmount: 15000, salesTax: 2700, incomeTax: 0, totalAmount: 17700, status: 'Authorized' },
  { invoiceNo: 3, invoiceDate: '25-03-2024', cusCode: '120020005', customerName: 'City Associates', serviceDescription: 'Support Services', serviceAmount: 20000, salesTax: 3600, incomeTax: 500, totalAmount: 23100, status: 'Pending' },
  { invoiceNo: 4, invoiceDate: '28-03-2024', cusCode: '120020006', customerName: 'The Best School Systems', serviceDescription: 'Training Program', serviceAmount: 35000, salesTax: 6300, incomeTax: 0, totalAmount: 41300, status: 'Authorized' },
  { invoiceNo: 5, invoiceDate: '30-03-2024', cusCode: '120020007', customerName: 'Tech Solutions Ltd', serviceDescription: 'Maintenance Contract', serviceAmount: 45000, salesTax: 8100, incomeTax: 1125, totalAmount: 52975, status: 'Pending' },
];

export function SalesServicesRenderedTaxInvoices() {
  const [, setSelectedInvoice] = useState<SalesServiceRenderedInvoice | null>(null);

  const columns = [
    { header: 'Invoice No', accessorKey: 'invoiceNo' as const, width: '80px' },
    { header: 'Date', accessorKey: 'invoiceDate' as const, width: '90px' },
    { header: 'Cus Code', accessorKey: 'cusCode' as const, width: '90px' },
    { header: 'Customer Name', accessorKey: 'customerName' as const, width: '160px' },
    { header: 'Service Description', accessorKey: 'serviceDescription' as const, width: '200px' },
    { header: 'Amount', accessorKey: 'serviceAmount' as const, width: '100px', cell: ({ row }: { row: { original: SalesServiceRenderedInvoice } }) => row.original.serviceAmount.toLocaleString() },
    { header: 'Sales Tax', accessorKey: 'salesTax' as const, width: '90px', cell: ({ row }: { row: { original: SalesServiceRenderedInvoice } }) => row.original.salesTax.toLocaleString() },
    { header: 'Income Tax', accessorKey: 'incomeTax' as const, width: '90px', cell: ({ row }: { row: { original: SalesServiceRenderedInvoice } }) => row.original.incomeTax.toLocaleString() },
    { header: 'Total', accessorKey: 'totalAmount' as const, width: '100px', cell: ({ row }: { row: { original: SalesServiceRenderedInvoice } }) => row.original.totalAmount.toLocaleString() },
    { header: 'Status', accessorKey: 'status' as const, width: '90px', cell: ({ row }: { row: { original: SalesServiceRenderedInvoice } }) => (
      <span className={`px-2 py-0.5 rounded text-xs ${row.original.status === 'Authorized' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
        {row.original.status}
      </span>
    )},
    {
      header: 'Actions',
      accessorKey: 'actions' as const,
      width: '120px',
      cell: ({ row }: { row: { original: SalesServiceRenderedInvoice } }) => (
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
        <CustomCard title="Sales/Services Rendered Tax Invoices" className="h-full">
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
