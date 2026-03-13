import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Eye, Printer } from 'lucide-react';

interface InventoryAdjustment {
  adjustmentNo: number;
  adjustmentDate: string;
  productCode: string;
  productName: string;
  warehouse: string;
  quantity: number;
  unitCost: number;
  totalValue: number;
  reason: string;
  status: string;
}

const adjustmentsData: InventoryAdjustment[] = [
  { adjustmentNo: 1, adjustmentDate: '15-03-2024', productCode: '1001000008', productName: 'Adams Cheese', warehouse: 'Main Warehouse', quantity: 50, unitCost: 1170, totalValue: 58500, reason: 'Stock Found', status: 'Posted' },
  { adjustmentNo: 2, adjustmentDate: '18-03-2024', productCode: '1000000006', productName: 'Sunsilk Shampoo', warehouse: 'Main Warehouse', quantity: 25, unitCost: 850, totalValue: 21250, reason: 'Return to Stock', status: 'Posted' },
  { adjustmentNo: 3, adjustmentDate: '20-03-2024', productCode: '1002000012', productName: 'Lemon Sandwich', warehouse: 'Karachi Warehouse', quantity: 100, unitCost: 144, totalValue: 14400, reason: 'Production Excess', status: 'Pending' },
  { adjustmentNo: 4, adjustmentDate: '22-03-2024', productCode: '1003000045', productName: 'Nestle Milk', warehouse: 'Main Warehouse', quantity: 30, unitCost: 180, totalValue: 5400, reason: 'Stock Found', status: 'Posted' },
  { adjustmentNo: 5, adjustmentDate: '25-03-2024', productCode: '1004000078', productName: 'Coca Cola', warehouse: 'Karachi Warehouse', quantity: 40, unitCost: 120, totalValue: 4800, reason: 'Correction', status: 'Pending' },
];

export function AddInventoryAdjustments() {
  const [, setSelectedAdjustment] = useState<InventoryAdjustment | null>(null);

  const columns = [
    { header: 'Adj No', accessorKey: 'adjustmentNo' as const, width: '70px' },
    { header: 'Date', accessorKey: 'adjustmentDate' as const, width: '90px' },
    { header: 'Product Code', accessorKey: 'productCode' as const, width: '120px' },
    { header: 'Product Name', accessorKey: 'productName' as const, width: '180px' },
    { header: 'Warehouse', accessorKey: 'warehouse' as const, width: '140px' },
    { header: 'Quantity', accessorKey: 'quantity' as const, width: '80px' },
    { header: 'Unit Cost', accessorKey: 'unitCost' as const, width: '90px', cell: ({ row }: { row: { original: InventoryAdjustment } }) => row.original.unitCost.toLocaleString() },
    { header: 'Total Value', accessorKey: 'totalValue' as const, width: '100px', cell: ({ row }: { row: { original: InventoryAdjustment } }) => row.original.totalValue.toLocaleString() },
    { header: 'Reason', accessorKey: 'reason' as const, width: '150px' },
    { header: 'Status', accessorKey: 'status' as const, width: '80px', cell: ({ row }: { row: { original: InventoryAdjustment } }) => (
      <span className={`px-2 py-0.5 rounded text-xs ${row.original.status === 'Posted' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
        {row.original.status}
      </span>
    )},
    {
      header: 'Actions',
      accessorKey: 'actions' as const,
      width: '100px',
      cell: ({ row }: { row: { original: InventoryAdjustment } }) => (
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-[#a0a0a0] hover:text-white"
            onClick={() => setSelectedAdjustment(row.original)}
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
            New Adjustment
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#a0a0a0]">Total: {adjustmentsData.length} records</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-2 overflow-auto">
        <CustomCard title="Add Inventory Adjustments" className="h-full">
          <DataTable
            columns={columns}
            data={adjustmentsData}
            onRowClick={(row) => setSelectedAdjustment(row)}
          />
        </CustomCard>
      </div>
    </div>
  );
}
