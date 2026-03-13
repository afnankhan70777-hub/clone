import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';

interface NonTaxSaleReturn {
  returnNo: number;
  returnDate: string;
  invoiceNo: number;
  invoiceDate: string;
  cusCode: string;
  customerName: string;
  productName: string;
  quantity: number;
  returnAmount: number;
  reason: string;
  status: string;
}

const returnsData: NonTaxSaleReturn[] = [
  { returnNo: 1, returnDate: '25-02-2022', invoiceNo: 1, invoiceDate: '20-02-2022', cusCode: '120020002', customerName: 'MSR Associates', productName: 'Adams Cheese', quantity: 3, returnAmount: 3600, reason: 'Damaged goods', status: 'Authorized' },
  { returnNo: 2, returnDate: '10-01-2022', invoiceNo: 3, invoiceDate: '05-01-2022', cusCode: '120020004', customerName: 'Bismillah Traders', productName: 'Sunsilk Shampoo', quantity: 2, returnAmount: 1800, reason: 'Wrong product', status: 'Authorized' },
];

export function SaleReturnsNonTax() {
  const [, setSelectedReturn] = useState<NonTaxSaleReturn | null>(null);

  const columns = [
    { header: 'Return No', accessorKey: 'returnNo' as const, width: '70px' },
    { header: 'Date', accessorKey: 'returnDate' as const, width: '90px' },
    { header: 'Inv No', accessorKey: 'invoiceNo' as const, width: '60px' },
    { header: 'Inv Date', accessorKey: 'invoiceDate' as const, width: '90px' },
    { header: 'Cus Code', accessorKey: 'cusCode' as const, width: '90px' },
    { header: 'Customer Name', accessorKey: 'customerName' as const, width: '150px' },
    { header: 'Product', accessorKey: 'productName' as const, width: '150px' },
    { header: 'Qty', accessorKey: 'quantity' as const, width: '50px' },
    { header: 'Amount', accessorKey: 'returnAmount' as const, width: '90px', cell: ({ row }: { row: { original: NonTaxSaleReturn } }) => row.original.returnAmount.toLocaleString() },
    { header: 'Reason', accessorKey: 'reason' as const, width: '150px' },
    { header: 'Status', accessorKey: 'status' as const, width: '90px', cell: ({ row }: { row: { original: NonTaxSaleReturn } }) => (
      <span className={`px-2 py-0.5 rounded text-xs ${row.original.status === 'Authorized' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
        {row.original.status}
      </span>
    )},
    {
      header: 'Actions',
      accessorKey: 'actions' as const,
      width: '100px',
      cell: ({ row }: { row: { original: NonTaxSaleReturn } }) => (
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
        <CustomCard title="Sale Returns (Non-Tax)" className="h-full">
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
