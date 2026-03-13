import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Printer, Download } from 'lucide-react';
import { CustomSelect } from '@/components/ui/CustomSelect';

interface SalesReport {
  invoiceNo: number;
  invoiceDate: string;
  cusCode: string;
  customerName: string;
  productCount: number;
  grossAmount: number;
  discount: number;
  taxAmount: number;
  netAmount: number;
}

const salesData: SalesReport[] = [
  { invoiceNo: 1, invoiceDate: '15-03-2024', cusCode: '120020001', customerName: 'Star Enterprises', productCount: 12, grossAmount: 75000, discount: 2500, taxAmount: 13050, netAmount: 85550 },
  { invoiceNo: 2, invoiceDate: '18-03-2024', cusCode: '120020002', customerName: 'MSR Associates', productCount: 8, grossAmount: 45000, discount: 0, taxAmount: 8100, netAmount: 53100 },
  { invoiceNo: 3, invoiceDate: '20-03-2024', cusCode: '120020003', customerName: 'Khalid Brothers', productCount: 15, grossAmount: 95000, discount: 5000, taxAmount: 16200, netAmount: 106200 },
  { invoiceNo: 4, invoiceDate: '22-03-2024', cusCode: '120020004', customerName: 'Bismillah Traders', productCount: 20, grossAmount: 120000, discount: 0, taxAmount: 21600, netAmount: 141600 },
  { invoiceNo: 5, invoiceDate: '25-03-2024', cusCode: '120020005', customerName: 'City Associates', productCount: 10, grossAmount: 60000, discount: 2000, taxAmount: 10440, netAmount: 68440 },
];

export function SalesReport() {
  const [dateRange, setDateRange] = useState('thisMonth');

  const dateOptions = [
    { value: 'today', label: 'Today' },
    { value: 'yesterday', label: 'Yesterday' },
    { value: 'thisWeek', label: 'This Week' },
    { value: 'thisMonth', label: 'This Month' },
  ];

  const columns = [
    { header: 'Invoice No', accessorKey: 'invoiceNo' as const, width: '80px' },
    { header: 'Date', accessorKey: 'invoiceDate' as const, width: '90px' },
    { header: 'Cus Code', accessorKey: 'cusCode' as const, width: '90px' },
    { header: 'Customer Name', accessorKey: 'customerName' as const, width: '180px' },
    { header: 'Products', accessorKey: 'productCount' as const, width: '70px' },
    { header: 'Gross Amount', accessorKey: 'grossAmount' as const, width: '100px', cell: ({ row }: { row: { original: SalesReport } }) => row.original.grossAmount.toLocaleString() },
    { header: 'Discount', accessorKey: 'discount' as const, width: '80px', cell: ({ row }: { row: { original: SalesReport } }) => row.original.discount.toLocaleString() },
    { header: 'Tax', accessorKey: 'taxAmount' as const, width: '80px', cell: ({ row }: { row: { original: SalesReport } }) => row.original.taxAmount.toLocaleString() },
    { header: 'Net Amount', accessorKey: 'netAmount' as const, width: '100px', cell: ({ row }: { row: { original: SalesReport } }) => row.original.netAmount.toLocaleString() },
  ];

  const totalGross = salesData.reduce((sum, item) => sum + item.grossAmount, 0);
  const totalDiscount = salesData.reduce((sum, item) => sum + item.discount, 0);
  const totalTax = salesData.reduce((sum, item) => sum + item.taxAmount, 0);
  const totalNet = salesData.reduce((sum, item) => sum + item.netAmount, 0);

  return (
    <div className="h-full flex flex-col">
      {/* Toolbar */}
      <div className="flex items-center justify-between p-1 bg-[#3a3a3a] border-b border-[#454545]">
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#a0a0a0]">Date Range:</span>
          <CustomSelect
            value={dateRange}
            onValueChange={setDateRange}
            options={dateOptions}
            className="w-32"
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
        <CustomCard title="Sales Report" className="h-full">
          <DataTable
            columns={columns}
            data={salesData}
          />
        </CustomCard>
      </div>

      {/* Footer Summary */}
      <div className="p-2 bg-[#3a3a3a] border-t border-[#454545]">
        <div className="flex justify-end gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-[#a0a0a0]">Total Gross:</span>
            <span className="text-white font-medium">{totalGross.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#a0a0a0]">Total Discount:</span>
            <span className="text-white font-medium">{totalDiscount.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#a0a0a0]">Total Tax:</span>
            <span className="text-white font-medium">{totalTax.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#a0a0a0]">Total Net:</span>
            <span className="text-white font-medium">{totalNet.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
