import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';

interface SalesServiceRenderedReturn {
  returnNo: number;
  returnDate: string;
  invoiceNo: number;
  invoiceDate: string;
  cusCode: string;
  customerName: string;
  serviceDescription: string;
  returnAmount: number;
  salesTax: number;
  totalAmount: number;
  reason: string;
  status: string;
}

const returnsData: SalesServiceRenderedReturn[] = [
  { returnNo: 1, returnDate: '20-03-2024', invoiceNo: 1, invoiceDate: '15-03-2024', cusCode: '120020001', customerName: 'Star Enterprises', serviceDescription: 'IT Consulting Services', returnAmount: 10000, salesTax: 1800, totalAmount: 11800, reason: 'Service not completed', status: 'Authorized' },
  { returnNo: 2, returnDate: '25-03-2024', invoiceNo: 2, invoiceDate: '20-03-2024', cusCode: '120020003', customerName: 'Khalid Brothers', serviceDescription: 'Installation Services', returnAmount: 5000, salesTax: 900, totalAmount: 5900, reason: 'Partial refund', status: 'Authorized' },
  { returnNo: 3, returnDate: '01-04-2024', invoiceNo: 4, invoiceDate: '28-03-2024', cusCode: '120020006', customerName: 'The Best School Systems', serviceDescription: 'Training Program', returnAmount: 5000, salesTax: 900, totalAmount: 5900, reason: 'Cancelled sessions', status: 'Pending' },
];

export function SalesServicesRenderedTaxReturns() {
  const [, setSelectedReturn] = useState<SalesServiceRenderedReturn | null>(null);

  const columns = [
    { header: 'Return No', accessorKey: 'returnNo' as const, width: '70px' },
    { header: 'Date', accessorKey: 'returnDate' as const, width: '90px' },
    { header: 'Inv No', accessorKey: 'invoiceNo' as const, width: '60px' },
    { header: 'Inv Date', accessorKey: 'invoiceDate' as const, width: '90px' },
    { header: 'Cus Code', accessorKey: 'cusCode' as const, width: '90px' },
    { header: 'Customer Name', accessorKey: 'customerName' as const, width: '150px' },
    { header: 'Service Description', accessorKey: 'serviceDescription' as const, width: '180px' },
    { header: 'Amount', accessorKey: 'returnAmount' as const, width: '90px', cell: ({ row }: { row: { original: SalesServiceRenderedReturn } }) => row.original.returnAmount.toLocaleString() },
    { header: 'Sales Tax', accessorKey: 'salesTax' as const, width: '80px', cell: ({ row }: { row: { original: SalesServiceRenderedReturn } }) => row.original.salesTax.toLocaleString() },
    { header: 'Total', accessorKey: 'totalAmount' as const, width: '90px', cell: ({ row }: { row: { original: SalesServiceRenderedReturn } }) => row.original.totalAmount.toLocaleString() },
    { header: 'Reason', accessorKey: 'reason' as const, width: '150px' },
    { header: 'Status', accessorKey: 'status' as const, width: '90px', cell: ({ row }: { row: { original: SalesServiceRenderedReturn } }) => (
      <span className={`px-2 py-0.5 rounded text-xs ${row.original.status === 'Authorized' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
        {row.original.status}
      </span>
    )},
    {
      header: 'Actions',
      accessorKey: 'actions' as const,
      width: '100px',
      cell: ({ row }: { row: { original: SalesServiceRenderedReturn } }) => (
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-[#a0a0a0] hover:text-white"
            onClick={() => setSelectedReturn(row.original)}
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
            New Return
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#a0a0a0]">Total: {returnsData.length} records</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-2 overflow-auto">
        <CustomCard title="Sales/Services Rendered Tax Returns" className="h-full">
          <DataTable
            columns={columns}
            data={returnsData}
            onRowClick={(row) => setSelectedReturn(row)}
          />
        </CustomCard>
      </div>
    </div>
  );
}
