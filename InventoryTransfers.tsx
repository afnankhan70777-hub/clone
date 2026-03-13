import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Eye, CheckCircle } from 'lucide-react';

interface InventoryTransfer {
  transferNo: number;
  transferDate: string;
  productCode: string;
  productName: string;
  fromWarehouse: string;
  toWarehouse: string;
  quantity: number;
  unitCost: number;
  totalValue: number;
  status: string;
}

const transfersData: InventoryTransfer[] = [
  { transferNo: 1, transferDate: '15-03-2024', productCode: '1001000008', productName: 'Adams Cheese', fromWarehouse: 'Main Warehouse', toWarehouse: 'Karachi Warehouse', quantity: 50, unitCost: 1170, totalValue: 58500, status: 'Completed' },
  { transferNo: 2, transferDate: '18-03-2024', productCode: '1000000006', productName: 'Sunsilk Shampoo', fromWarehouse: 'Karachi Warehouse', toWarehouse: 'Main Warehouse', quantity: 100, unitCost: 850, totalValue: 85000, status: 'Completed' },
  { transferNo: 3, transferDate: '20-03-2024', productCode: '1002000012', productName: 'Lemon Sandwich', fromWarehouse: 'Main Warehouse', toWarehouse: 'Islamabad Warehouse', quantity: 200, unitCost: 144, totalValue: 28800, status: 'In Transit' },
  { transferNo: 4, transferDate: '22-03-2024', productCode: '1003000045', productName: 'Nestle Milk', fromWarehouse: 'Islamabad Warehouse', toWarehouse: 'Main Warehouse', quantity: 150, unitCost: 180, totalValue: 27000, status: 'Pending' },
  { transferNo: 5, transferDate: '25-03-2024', productCode: '1004000078', productName: 'Coca Cola', fromWarehouse: 'Karachi Warehouse', toWarehouse: 'Multan Warehouse', quantity: 80, unitCost: 120, totalValue: 9600, status: 'Pending' },
];

export function InventoryTransfers() {
  const [, setSelectedTransfer] = useState<InventoryTransfer | null>(null);

  const columns = [
    { header: 'Trans No', accessorKey: 'transferNo' as const, width: '70px' },
    { header: 'Date', accessorKey: 'transferDate' as const, width: '90px' },
    { header: 'Product Code', accessorKey: 'productCode' as const, width: '120px' },
    { header: 'Product Name', accessorKey: 'productName' as const, width: '160px' },
    { header: 'From', accessorKey: 'fromWarehouse' as const, width: '140px' },
    { header: 'To', accessorKey: 'toWarehouse' as const, width: '140px' },
    { header: 'Qty', accessorKey: 'quantity' as const, width: '60px' },
    { header: 'Unit Cost', accessorKey: 'unitCost' as const, width: '90px', cell: ({ row }: { row: { original: InventoryTransfer } }) => row.original.unitCost.toLocaleString() },
    { header: 'Total Value', accessorKey: 'totalValue' as const, width: '100px', cell: ({ row }: { row: { original: InventoryTransfer } }) => row.original.totalValue.toLocaleString() },
    { header: 'Status', accessorKey: 'status' as const, width: '90px', cell: ({ row }: { row: { original: InventoryTransfer } }) => (
      <span className={`px-2 py-0.5 rounded text-xs ${
        row.original.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
        row.original.status === 'In Transit' ? 'bg-blue-500/20 text-blue-400' :
        'bg-yellow-500/20 text-yellow-400'
      }`}>
        {row.original.status}
      </span>
    )},
    {
      header: 'Actions',
      accessorKey: 'actions' as const,
      width: '100px',
      cell: ({ row }: { row: { original: InventoryTransfer } }) => (
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-[#a0a0a0] hover:text-white"
            onClick={() => setSelectedTransfer(row.original)}
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
            New Transfer
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#a0a0a0]">Total: {transfersData.length} records</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-2 overflow-auto">
        <CustomCard title="Inventory Transfers" className="h-full">
          <DataTable
            columns={columns}
            data={transfersData}
            onRowClick={(row) => setSelectedTransfer(row)}
          />
        </CustomCard>
      </div>
    </div>
  );
}
