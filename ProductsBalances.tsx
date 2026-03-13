import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Printer, Download } from 'lucide-react';
import { CustomSelect } from '@/components/ui/CustomSelect';

interface ProductBalance {
  productCode: string;
  productName: string;
  category: string;
  warehouse: string;
  openingQty: number;
  inQty: number;
  outQty: number;
  balanceQty: number;
  unitCost: number;
  totalValue: number;
}

const balancesData: ProductBalance[] = [
  { productCode: '1001000008', productName: 'Adams Cheese', category: 'Dairy', warehouse: 'Main Warehouse', openingQty: 500, inQty: 500, outQty: 450, balanceQty: 550, unitCost: 1170, totalValue: 643500 },
  { productCode: '1000000006', productName: 'Sunsilk Shampoo', category: 'Personal Care', warehouse: 'Main Warehouse', openingQty: 1000, inQty: 800, outQty: 900, balanceQty: 900, unitCost: 850, totalValue: 765000 },
  { productCode: '1002000012', productName: 'Lemon Sandwich', category: 'Bakery', warehouse: 'Karachi Warehouse', openingQty: 2000, inQty: 1500, outQty: 1800, balanceQty: 1700, unitCost: 144, totalValue: 244800 },
  { productCode: '1003000045', productName: 'Nestle Milk', category: 'Dairy', warehouse: 'Main Warehouse', openingQty: 1500, inQty: 1200, outQty: 1300, balanceQty: 1400, unitCost: 180, totalValue: 252000 },
  { productCode: '1004000078', productName: 'Coca Cola', category: 'Beverages', warehouse: 'Karachi Warehouse', openingQty: 800, inQty: 600, outQty: 700, balanceQty: 700, unitCost: 120, totalValue: 84000 },
  { productCode: '1005000091', productName: 'Lays Chips', category: 'Snacks', warehouse: 'Main Warehouse', openingQty: 2000, inQty: 1500, outQty: 1600, balanceQty: 1900, unitCost: 50, totalValue: 95000 },
];

export function ProductsBalances() {
  const [warehouse, setWarehouse] = useState('all');

  const warehouseOptions = [
    { value: 'all', label: 'All Warehouses' },
    { value: 'main', label: 'Main Warehouse' },
    { value: 'karachi', label: 'Karachi Warehouse' },
    { value: 'islamabad', label: 'Islamabad Warehouse' },
  ];

  const columns = [
    { header: 'Product Code', accessorKey: 'productCode' as const, width: '120px' },
    { header: 'Product Name', accessorKey: 'productName' as const, width: '180px' },
    { header: 'Category', accessorKey: 'category' as const, width: '120px' },
    { header: 'Warehouse', accessorKey: 'warehouse' as const, width: '140px' },
    { header: 'Opening', accessorKey: 'openingQty' as const, width: '70px' },
    { header: 'In', accessorKey: 'inQty' as const, width: '60px' },
    { header: 'Out', accessorKey: 'outQty' as const, width: '60px' },
    { header: 'Balance', accessorKey: 'balanceQty' as const, width: '70px' },
    { header: 'Unit Cost', accessorKey: 'unitCost' as const, width: '90px', cell: ({ row }: { row: { original: ProductBalance } }) => row.original.unitCost.toLocaleString() },
    { header: 'Total Value', accessorKey: 'totalValue' as const, width: '100px', cell: ({ row }: { row: { original: ProductBalance } }) => row.original.totalValue.toLocaleString() },
  ];

  const totalValue = balancesData.reduce((sum, item) => sum + item.totalValue, 0);

  return (
    <div className="h-full flex flex-col">
      {/* Toolbar */}
      <div className="flex items-center justify-between p-1 bg-[#3a3a3a] border-b border-[#454545]">
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#a0a0a0]">Warehouse:</span>
          <CustomSelect
            value={warehouse}
            onValueChange={setWarehouse}
            options={warehouseOptions}
            className="w-40"
          />
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-7 text-xs bg-[#454545] hover:bg-[#555555] text-white"
          >
            <Printer className="h-3.5 w-3.5 mr-1" />
            Print
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 text-xs bg-[#00bfa5] hover:bg-[#00a893] text-white"
          >
            <Download className="h-3.5 w-3.5 mr-1" />
            Export
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-2 overflow-auto">
        <CustomCard title="Products Balances" className="h-full">
          <DataTable
            columns={columns}
            data={balancesData}
          />
        </CustomCard>
      </div>

      {/* Footer Summary */}
      <div className="p-2 bg-[#3a3a3a] border-t border-[#454545]">
        <div className="flex justify-end gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-[#a0a0a0]">Total Inventory Value:</span>
            <span className="text-white font-medium">{totalValue.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
