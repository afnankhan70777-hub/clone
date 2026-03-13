import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Eye, CheckCircle } from 'lucide-react';

interface NonTaxSaleOrder {
  orderNo: number;
  orderDate: string;
  cusCode: string;
  customerName: string;
  description: string;
  amount: number;
  deliveryDate: string;
  status: string;
}

const ordersData: NonTaxSaleOrder[] = [
  { orderNo: 1, orderDate: '05-03-2024', cusCode: '120020001', customerName: 'Star Enterprises', description: 'Product Supply - Batch A', amount: 50000, deliveryDate: '15-03-2024', status: 'Completed' },
  { orderNo: 2, orderDate: '10-03-2024', cusCode: '120020003', customerName: 'Khalid Brothers', description: 'Product Supply - Batch C', amount: 15000, deliveryDate: '20-03-2024', status: 'In Progress' },
  { orderNo: 3, orderDate: '15-03-2024', cusCode: '120020005', customerName: 'City Associates', description: 'Product Supply - Batch E', amount: 20000, deliveryDate: '25-03-2024', status: 'Pending' },
  { orderNo: 4, orderDate: '18-03-2024', cusCode: '120020006', customerName: 'The Best School Systems', description: 'Product Supply - Batch F', amount: 35000, deliveryDate: '30-03-2024', status: 'Pending' },
  { orderNo: 5, orderDate: '20-03-2024', cusCode: '120020007', customerName: 'Tech Solutions Ltd', description: 'Product Supply - Batch G', amount: 45000, deliveryDate: '05-04-2024', status: 'Approved' },
];

export function SaleOrdersNonTax() {
  const [, setSelectedOrder] = useState<NonTaxSaleOrder | null>(null);

  const columns = [
    { header: 'Order No', accessorKey: 'orderNo' as const, width: '70px' },
    { header: 'Date', accessorKey: 'orderDate' as const, width: '90px' },
    { header: 'Cus Code', accessorKey: 'cusCode' as const, width: '90px' },
    { header: 'Customer Name', accessorKey: 'customerName' as const, width: '180px' },
    { header: 'Description', accessorKey: 'description' as const, width: '250px' },
    { header: 'Amount', accessorKey: 'amount' as const, width: '120px', cell: ({ row }: { row: { original: NonTaxSaleOrder } }) => row.original.amount.toLocaleString() },
    { header: 'Delivery Date', accessorKey: 'deliveryDate' as const, width: '90px' },
    { header: 'Status', accessorKey: 'status' as const, width: '100px', cell: ({ row }: { row: { original: NonTaxSaleOrder } }) => (
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
      cell: ({ row }: { row: { original: NonTaxSaleOrder } }) => (
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-[#a0a0a0] hover:text-white"
            onClick={() => setSelectedOrder(row.original)}
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
            New Order
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#a0a0a0]">Total: {ordersData.length} records</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-2 overflow-auto">
        <CustomCard title="Sale Orders (Non-Tax)" className="h-full">
          <DataTable
            columns={columns}
            data={ordersData}
            onRowClick={(row) => setSelectedOrder(row)}
          />
        </CustomCard>
      </div>
    </div>
  );
}
