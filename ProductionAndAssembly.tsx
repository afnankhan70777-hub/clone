import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Eye, CheckCircle } from 'lucide-react';

interface ProductionAssembly {
  paNo: number;
  paDate: string;
  productionNo: number;
  productCode: string;
  productName: string;
  quantityProduced: number;
  rawMaterialsUsed: number;
  laborCost: number;
  overheadCost: number;
  totalCost: number;
  status: string;
}

const paData: ProductionAssembly[] = [
  { paNo: 1, paDate: '15-03-2024', productionNo: 1, productCode: '2001000001', productName: 'Gift Pack A', quantityProduced: 100, rawMaterialsUsed: 85000, laborCost: 15000, overheadCost: 5000, totalCost: 105000, status: 'Completed' },
  { paNo: 2, paDate: '18-03-2024', productionNo: 2, productCode: '2001000002', productName: 'Gift Pack B', quantityProduced: 150, rawMaterialsUsed: 180000, laborCost: 25000, overheadCost: 8000, totalCost: 213000, status: 'In Progress' },
  { paNo: 3, paDate: '20-03-2024', productionNo: 3, productCode: '2001000003', productName: 'Combo Pack C', quantityProduced: 80, rawMaterialsUsed: 148000, laborCost: 20000, overheadCost: 6000, totalCost: 174000, status: 'Pending' },
  { paNo: 4, paDate: '22-03-2024', productionNo: 4, productCode: '2001000001', productName: 'Gift Pack A', quantityProduced: 200, rawMaterialsUsed: 170000, laborCost: 30000, overheadCost: 10000, totalCost: 210000, status: 'Approved' },
  { paNo: 5, paDate: '25-03-2024', productionNo: 5, productCode: '2001000005', productName: 'Standard Pack E', quantityProduced: 300, rawMaterialsUsed: 195000, laborCost: 35000, overheadCost: 12000, totalCost: 242000, status: 'Pending' },
];

export function ProductionAndAssembly() {
  const [, setSelectedPA] = useState<ProductionAssembly | null>(null);

  const columns = [
    { header: 'PA No', accessorKey: 'paNo' as const, width: '70px' },
    { header: 'Date', accessorKey: 'paDate' as const, width: '90px' },
    { header: 'Prod No', accessorKey: 'productionNo' as const, width: '70px' },
    { header: 'Product Code', accessorKey: 'productCode' as const, width: '120px' },
    { header: 'Product Name', accessorKey: 'productName' as const, width: '160px' },
    { header: 'Qty Produced', accessorKey: 'quantityProduced' as const, width: '90px' },
    { header: 'RM Cost', accessorKey: 'rawMaterialsUsed' as const, width: '90px', cell: ({ row }: { row: { original: ProductionAssembly } }) => row.original.rawMaterialsUsed.toLocaleString() },
    { header: 'Labor', accessorKey: 'laborCost' as const, width: '80px', cell: ({ row }: { row: { original: ProductionAssembly } }) => row.original.laborCost.toLocaleString() },
    { header: 'Overhead', accessorKey: 'overheadCost' as const, width: '80px', cell: ({ row }: { row: { original: ProductionAssembly } }) => row.original.overheadCost.toLocaleString() },
    { header: 'Total Cost', accessorKey: 'totalCost' as const, width: '100px', cell: ({ row }: { row: { original: ProductionAssembly } }) => row.original.totalCost.toLocaleString() },
    { header: 'Status', accessorKey: 'status' as const, width: '90px', cell: ({ row }: { row: { original: ProductionAssembly } }) => (
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
      cell: ({ row }: { row: { original: ProductionAssembly } }) => (
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-[#a0a0a0] hover:text-white"
            onClick={() => setSelectedPA(row.original)}
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
            New Entry
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#a0a0a0]">Total: {paData.length} records</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-2 overflow-auto">
        <CustomCard title="Production and Assembly" className="h-full">
          <DataTable
            columns={columns}
            data={paData}
            onRowClick={(row) => setSelectedPA(row)}
          />
        </CustomCard>
      </div>
    </div>
  );
}
