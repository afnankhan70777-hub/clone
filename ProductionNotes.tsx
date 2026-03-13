import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Eye, CheckCircle } from 'lucide-react';

interface ProductionNote {
  pnNo: number;
  pnDate: string;
  bomNo: number;
  productCode: string;
  productName: string;
  quantity: number;
  warehouse: string;
  estimatedCost: number;
  status: string;
}

const pnData: ProductionNote[] = [
  { pnNo: 1, pnDate: '15-03-2024', bomNo: 1, productCode: '2001000001', productName: 'Gift Pack A', quantity: 100, warehouse: 'Main Warehouse', estimatedCost: 85000, status: 'Completed' },
  { pnNo: 2, pnDate: '18-03-2024', bomNo: 2, productCode: '2001000002', productName: 'Gift Pack B', quantity: 150, warehouse: 'Main Warehouse', estimatedCost: 180000, status: 'In Progress' },
  { pnNo: 3, pnDate: '20-03-2024', bomNo: 3, productCode: '2001000003', productName: 'Combo Pack C', quantity: 80, warehouse: 'Karachi Warehouse', estimatedCost: 148000, status: 'Pending' },
  { pnNo: 4, pnDate: '22-03-2024', bomNo: 1, productCode: '2001000001', productName: 'Gift Pack A', quantity: 200, warehouse: 'Main Warehouse', estimatedCost: 170000, status: 'Approved' },
  { pnNo: 5, pnDate: '25-03-2024', bomNo: 5, productCode: '2001000005', productName: 'Standard Pack E', quantity: 300, warehouse: 'Karachi Warehouse', estimatedCost: 195000, status: 'Pending' },
];

export function ProductionNotes() {
  const [, setSelectedPN] = useState<ProductionNote | null>(null);

  const columns = [
    { header: 'PN No', accessorKey: 'pnNo' as const, width: '70px' },
    { header: 'Date', accessorKey: 'pnDate' as const, width: '90px' },
    { header: 'BOM No', accessorKey: 'bomNo' as const, width: '70px' },
    { header: 'Product Code', accessorKey: 'productCode' as const, width: '120px' },
    { header: 'Product Name', accessorKey: 'productName' as const, width: '180px' },
    { header: 'Quantity', accessorKey: 'quantity' as const, width: '80px' },
    { header: 'Warehouse', accessorKey: 'warehouse' as const, width: '140px' },
    { header: 'Est. Cost', accessorKey: 'estimatedCost' as const, width: '100px', cell: ({ row }: { row: { original: ProductionNote } }) => row.original.estimatedCost.toLocaleString() },
    { header: 'Status', accessorKey: 'status' as const, width: '100px', cell: ({ row }: { row: { original: ProductionNote } }) => (
      <span className={`px-2 py-0.5 rounded text-xs ${
        row.original.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
        row.original.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400' :
        row.original.status === 'Approved' ? 'bg-purple-500/20 text-purple-400' :
        'bg-yellow-500/20 text-yellow-400'
      }`}>
        {row.original.status}
      </span>
    )},
    {
      header: 'Actions',
      accessorKey: 'actions' as const,
      width: '100px',
      cell: ({ row }: { row: { original: ProductionNote } }) => (
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-[#a0a0a0] hover:text-white"
            onClick={() => setSelectedPN(row.original)}
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
            New Production
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#a0a0a0]">Total: {pnData.length} records</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-2 overflow-auto">
        <CustomCard title="Production Notes" className="h-full">
          <DataTable
            columns={columns}
            data={pnData}
            onRowClick={(row) => setSelectedPN(row)}
          />
        </CustomCard>
      </div>
    </div>
  );
}
