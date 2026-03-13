import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Eye, Printer } from 'lucide-react';

interface BOM {
  bomNo: number;
  bomDate: string;
  productCode: string;
  productName: string;
  version: string;
  rawMaterials: number;
  totalCost: number;
  status: string;
}

const bomData: BOM[] = [
  { bomNo: 1, bomDate: '01-03-2024', productCode: '2001000001', productName: 'Gift Pack A', version: 'V1.0', rawMaterials: 5, totalCost: 850, status: 'Active' },
  { bomNo: 2, bomDate: '05-03-2024', productCode: '2001000002', productName: 'Gift Pack B', version: 'V1.0', rawMaterials: 7, totalCost: 1200, status: 'Active' },
  { bomNo: 3, bomDate: '10-03-2024', productCode: '2001000003', productName: 'Combo Pack C', version: 'V2.0', rawMaterials: 10, totalCost: 1850, status: 'Active' },
  { bomNo: 4, bomDate: '15-03-2024', productCode: '2001000004', productName: 'Premium Pack D', version: 'V1.0', rawMaterials: 8, totalCost: 2500, status: 'Draft' },
  { bomNo: 5, bomDate: '20-03-2024', productCode: '2001000005', productName: 'Standard Pack E', version: 'V1.0', rawMaterials: 4, totalCost: 650, status: 'Active' },
];

export function BillOfMaterials() {
  const [, setSelectedBOM] = useState<BOM | null>(null);

  const columns = [
    { header: 'BOM No', accessorKey: 'bomNo' as const, width: '70px' },
    { header: 'Date', accessorKey: 'bomDate' as const, width: '90px' },
    { header: 'Product Code', accessorKey: 'productCode' as const, width: '120px' },
    { header: 'Product Name', accessorKey: 'productName' as const, width: '200px' },
    { header: 'Version', accessorKey: 'version' as const, width: '80px' },
    { header: 'Raw Materials', accessorKey: 'rawMaterials' as const, width: '100px' },
    { header: 'Total Cost', accessorKey: 'totalCost' as const, width: '100px', cell: ({ row }: { row: { original: BOM } }) => row.original.totalCost.toLocaleString() },
    { header: 'Status', accessorKey: 'status' as const, width: '80px', cell: ({ row }: { row: { original: BOM } }) => (
      <span className={`px-2 py-0.5 rounded text-xs ${row.original.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
        {row.original.status}
      </span>
    )},
    {
      header: 'Actions',
      accessorKey: 'actions' as const,
      width: '100px',
      cell: ({ row }: { row: { original: BOM } }) => (
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-[#a0a0a0] hover:text-white"
            onClick={() => setSelectedBOM(row.original)}
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
            New BOM
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#a0a0a0]">Total: {bomData.length} records</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-2 overflow-auto">
        <CustomCard title="Bill of Materials" className="h-full">
          <DataTable
            columns={columns}
            data={bomData}
            onRowClick={(row) => setSelectedBOM(row)}
          />
        </CustomCard>
      </div>
    </div>
  );
}
