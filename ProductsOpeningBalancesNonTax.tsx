import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Plus, Save, Printer } from 'lucide-react';
import { CustomSelect } from '@/components/ui/CustomSelect';

interface ProductOpeningBalance {
  productCode: string;
  productName: string;
  warehouse: string;
  quantity: number;
  unitCost: number;
  totalCost: number;
}

const productsOpeningData: ProductOpeningBalance[] = [
  { productCode: '1001000008', productName: 'Adams Cheese', warehouse: 'Main Warehouse', quantity: 200, unitCost: 1000, totalCost: 200000 },
  { productCode: '1000000006', productName: 'Sunsilk Shampoo', warehouse: 'Main Warehouse', quantity: 500, unitCost: 800, totalCost: 400000 },
  { productCode: '1002000012', productName: 'Lemon Sandwich', warehouse: 'Karachi Warehouse', quantity: 1000, unitCost: 130, totalCost: 130000 },
  { productCode: '1003000045', productName: 'Nestle Milk', warehouse: 'Main Warehouse', quantity: 800, unitCost: 160, totalCost: 128000 },
  { productCode: '1004000078', productName: 'Coca Cola', warehouse: 'Karachi Warehouse', quantity: 400, unitCost: 100, totalCost: 40000 },
];

export function ProductsOpeningBalancesNonTax() {
  const [selectedYear, setSelectedYear] = useState('2024-2025');
  const [data] = useState(productsOpeningData);

  const yearOptions = [
    { value: '2024-2025', label: '2024-2025' },
    { value: '2023-2024', label: '2023-2024' },
    { value: '2022-2023', label: '2022-2023' },
  ];

  const columns = [
    { header: 'Product Code', accessorKey: 'productCode' as const, width: '120px' },
    { header: 'Product Name', accessorKey: 'productName' as const, width: '280px' },
    { header: 'Warehouse', accessorKey: 'warehouse' as const, width: '150px' },
    { header: 'Quantity', accessorKey: 'quantity' as const, width: '100px', cell: ({ row }: { row: { original: ProductOpeningBalance } }) => row.original.quantity.toLocaleString() },
    { header: 'Unit Cost', accessorKey: 'unitCost' as const, width: '120px', cell: ({ row }: { row: { original: ProductOpeningBalance } }) => row.original.unitCost.toLocaleString() },
    { header: 'Total Cost', accessorKey: 'totalCost' as const, width: '120px', cell: ({ row }: { row: { original: ProductOpeningBalance } }) => row.original.totalCost.toLocaleString() },
  ];

  const totalQuantity = data.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = data.reduce((sum, item) => sum + item.totalCost, 0);

  return (
    <div className="h-full flex flex-col">
      {/* Toolbar */}
      <div className="flex items-center justify-between p-1 bg-[#3a3a3a] border-b border-[#454545]">
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#a0a0a0]">Financial Year:</span>
          <CustomSelect
            value={selectedYear}
            onValueChange={setSelectedYear}
            options={yearOptions}
            className="w-32"
          />
          <Button
            variant="ghost"
            size="sm"
            className="h-7 text-xs bg-[#d4855a] hover:bg-[#c4794f] text-white"
          >
            <Plus className="h-3.5 w-3.5 mr-1" />
            Add Entry
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-7 text-xs bg-[#00bfa5] hover:bg-[#00a893] text-white"
          >
            <Save className="h-3.5 w-3.5 mr-1" />
            Save
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 text-xs bg-[#454545] hover:bg-[#555555] text-white"
          >
            <Printer className="h-3.5 w-3.5 mr-1" />
            Print
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-2 overflow-auto">
        <CustomCard title="Products Opening Balances (Non-Tax)" className="h-full">
          <DataTable
            columns={columns}
            data={data}
          />
        </CustomCard>
      </div>

      {/* Footer Summary */}
      <div className="p-2 bg-[#3a3a3a] border-t border-[#454545]">
        <div className="flex justify-end gap-8 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-[#a0a0a0]">Total Quantity:</span>
            <span className="text-white font-medium">{totalQuantity.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#a0a0a0]">Total Cost:</span>
            <span className="text-white font-medium">{totalCost.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
