import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Eye, CheckCircle } from 'lucide-react';

interface NonTaxQuotation {
  quotationNo: number;
  quotationDate: string;
  cusCode: string;
  customerName: string;
  description: string;
  amount: number;
  validUntil: string;
  status: string;
}

const quotationsData: NonTaxQuotation[] = [
  { quotationNo: 1, quotationDate: '01-03-2024', cusCode: '120020001', customerName: 'Star Enterprises', description: 'Product Supply - Batch A', amount: 50000, validUntil: '01-04-2024', status: 'Approved' },
  { quotationNo: 2, quotationDate: '05-03-2024', cusCode: '120020002', customerName: 'MSR Associates', description: 'Product Supply - Batch B', amount: 25000, validUntil: '05-04-2024', status: 'Pending' },
  { quotationNo: 3, quotationDate: '10-03-2024', cusCode: '120020003', customerName: 'Khalid Brothers', description: 'Product Supply - Batch C', amount: 15000, validUntil: '10-04-2024', status: 'Approved' },
  { quotationNo: 4, quotationDate: '15-03-2024', cusCode: '120020004', customerName: 'Bismillah Traders', description: 'Product Supply - Batch D', amount: 30000, validUntil: '15-04-2024', status: 'Expired' },
  { quotationNo: 5, quotationDate: '20-03-2024', cusCode: '120020005', customerName: 'City Associates', description: 'Product Supply - Batch E', amount: 20000, validUntil: '20-04-2024', status: 'Pending' },
];

export function QuotationsNonTax() {
  const [, setSelectedQuotation] = useState<NonTaxQuotation | null>(null);

  const columns = [
    { header: 'Quote No', accessorKey: 'quotationNo' as const, width: '70px' },
    { header: 'Date', accessorKey: 'quotationDate' as const, width: '90px' },
    { header: 'Cus Code', accessorKey: 'cusCode' as const, width: '90px' },
    { header: 'Customer Name', accessorKey: 'customerName' as const, width: '180px' },
    { header: 'Description', accessorKey: 'description' as const, width: '250px' },
    { header: 'Amount', accessorKey: 'amount' as const, width: '120px', cell: ({ row }: { row: { original: NonTaxQuotation } }) => row.original.amount.toLocaleString() },
    { header: 'Valid Until', accessorKey: 'validUntil' as const, width: '90px' },
    { header: 'Status', accessorKey: 'status' as const, width: '90px', cell: ({ row }: { row: { original: NonTaxQuotation } }) => (
      <span className={`px-2 py-0.5 rounded text-xs ${
        row.original.status === 'Approved' ? 'bg-green-500/20 text-green-400' :
        row.original.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' :
        'bg-red-500/20 text-red-400'
      }`}>
        {row.original.status}
      </span>
    )},
    {
      header: 'Actions',
      accessorKey: 'actions' as const,
      width: '100px',
      cell: ({ row }: { row: { original: NonTaxQuotation } }) => (
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-[#a0a0a0] hover:text-white"
            onClick={() => setSelectedQuotation(row.original)}
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
            className="h-7 w-7 text-[#a0a0a0] hover:text-green-400"
          >
            <CheckCircle className="h-4 w-4" />
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
            New Quotation
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#a0a0a0]">Total: {quotationsData.length} records</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-2 overflow-auto">
        <CustomCard title="Quotations (Non-Tax)" className="h-full">
          <DataTable
            columns={columns}
            data={quotationsData}
            onRowClick={(row) => setSelectedQuotation(row)}
          />
        </CustomCard>
      </div>
    </div>
  );
}
