import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Printer, Download, Search } from 'lucide-react';
import { CustomSelect } from '@/components/ui/CustomSelect';

interface ProductLedgerEntry {
  date: string;
  documentType: string;
  documentNo: string;
  description: string;
  inQty: number;
  outQty: number;
  balanceQty: number;
  unitCost: number;
  totalValue: number;
}

const ledgerData: ProductLedgerEntry[] = [
  { date: '01-03-2024', documentType: 'Opening', documentNo: '-', description: 'Opening Balance', inQty: 500, outQty: 0, balanceQty: 500, unitCost: 1170, totalValue: 585000 },
  { date: '05-03-2024', documentType: 'GRN', documentNo: 'GRN-001', description: 'Goods Received', inQty: 200, outQty: 0, balanceQty: 700, unitCost: 1170, totalValue: 819000 },
  { date: '10-03-2024', documentType: 'Sale', documentNo: 'SI-001', description: 'Sale Invoice', inQty: 0, outQty: 100, balanceQty: 600, unitCost: 1170, totalValue: 702000 },
  { date: '15-03-2024', documentType: 'Sale', documentNo: 'SI-002', description: 'Sale Invoice', inQty: 0, outQty: 150, balanceQty: 450, unitCost: 1170, totalValue: 526500 },
  { date: '20-03-2024', documentType: 'GRN', documentNo: 'GRN-002', description: 'Goods Received', inQty: 300, outQty: 0, balanceQty: 750, unitCost: 1170, totalValue: 877500 },
  { date: '25-03-2024', documentType: 'Sale', documentNo: 'SI-003', description: 'Sale Invoice', inQty: 0, outQty: 200, balanceQty: 550, unitCost: 1170, totalValue: 643500 },
];

export function ProductsLedgers() {
  const [productCode, setProductCode] = useState('1001000008');

  const productOptions = [
    { value: '1001000008', label: 'Adams Cheese' },
    { value: '1000000006', label: 'Sunsilk Shampoo' },
    { value: '1002000012', label: 'Lemon Sandwich' },
    { value: '1003000045', label: 'Nestle Milk' },
    { value: '1004000078', label: 'Coca Cola' },
  ];

  const columns = [
    { header: 'Date', accessorKey: 'date' as const, width: '90px' },
    { header: 'Doc Type', accessorKey: 'documentType' as const, width: '90px' },
    { header: 'Doc No', accessorKey: 'documentNo' as const, width: '80px' },
    { header: 'Description', accessorKey: 'description' as const, width: '200px' },
    { header: 'In Qty', accessorKey: 'inQty' as const, width: '70px', cell: ({ row }: { row: { original: ProductLedgerEntry } }) => row.original.inQty > 0 ? row.original.inQty : '-' },
    { header: 'Out Qty', accessorKey: 'outQty' as const, width: '70px', cell: ({ row }: { row: { original: ProductLedgerEntry } }) => row.original.outQty > 0 ? row.original.outQty : '-' },
    { header: 'Balance Qty', accessorKey: 'balanceQty' as const, width: '90px' },
    { header: 'Unit Cost', accessorKey: 'unitCost' as const, width: '90px', cell: ({ row }: { row: { original: ProductLedgerEntry } }) => row.original.unitCost.toLocaleString() },
    { header: 'Total Value', accessorKey: 'totalValue' as const, width: '100px', cell: ({ row }: { row: { original: ProductLedgerEntry } }) => row.original.totalValue.toLocaleString() },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Toolbar */}
      <div className="flex items-center justify-between p-1 bg-[#3a3a3a] border-b border-[#454545]">
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#a0a0a0]">Product:</span>
          <CustomSelect
            value={productCode}
            onValueChange={setProductCode}
            options={productOptions}
            className="w-48"
          />
          <Button
            variant="ghost"
            size="sm"
            className="h-7 text-xs bg-[#d4855a] hover:bg-[#c4794f] text-white"
          >
            <Search className="h-3.5 w-3.5 mr-1" />
            View
          </Button>
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
        <CustomCard title="Products Ledgers" className="h-full">
          <DataTable
            columns={columns}
            data={ledgerData}
          />
        </CustomCard>
      </div>
    </div>
  );
}
