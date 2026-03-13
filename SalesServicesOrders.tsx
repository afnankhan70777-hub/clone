import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Eye, CheckCircle } from 'lucide-react';

interface SalesServiceOrder {
  orderNo: number;
  orderDate: string;
  cusCode: string;
  customerName: string;
  serviceDescription: string;
  amount: number;
  taxAmount: number;
  totalAmount: number;
  deliveryDate: string;
  status: string;
}

const ordersData: SalesServiceOrder[] = [
  { orderNo: 1, orderDate: '05-03-2024', cusCode: '120020001', customerName: 'Star Enterprises', serviceDescription: 'IT Consulting Services', amount: 50000, taxAmount: 9000, totalAmount: 59000, deliveryDate: '15-03-2024', status: 'Completed' },
  { orderNo: 2, orderDate: '10-03-2024', cusCode: '120020003', customerName: 'Khalid Brothers', serviceDescription: 'Installation Services', amount: 15000, taxAmount: 2700, totalAmount: 17700, deliveryDate: '20-03-2024', status: 'In Progress' },
  { orderNo: 3, orderDate: '15-03-2024', cusCode: '120020005', customerName: 'City Associates', serviceDescription: 'Support Services', amount: 20000, taxAmount: 3600, totalAmount: 23600, deliveryDate: '25-03-2024', status: 'Pending' },
  { orderNo: 4, orderDate: '18-03-2024', cusCode: '120020006', customerName: 'The Best School Systems', serviceDescription: 'Training Program', amount: 35000, taxAmount: 6300, totalAmount: 41300, deliveryDate: '30-03-2024', status: 'Pending' },
  { orderNo: 5, orderDate: '20-03-2024', cusCode: '120020007', customerName: 'Tech Solutions Ltd', serviceDescription: 'Maintenance Contract', amount: 45000, taxAmount: 8100, totalAmount: 53100, deliveryDate: '05-04-2024', status: 'Approved' },
];

export function SalesServicesOrders() {
  const [, setSelectedOrder] = useState<SalesServiceOrder | null>(null);

  const columns = [
    { header: 'Order No', accessorKey: 'orderNo' as const, width: '70px' },
    { header: 'Date', accessorKey: 'orderDate' as const, width: '90px' },
    { header: 'Cus Code', accessorKey: 'cusCode' as const, width: '90px' },
    { header: 'Customer Name', accessorKey: 'customerName' as const, width: '160px' },
    { header: 'Service Description', accessorKey: 'serviceDescription' as const, width: '200px' },
    { header: 'Amount', accessorKey: 'amount' as const, width: '100px', cell: ({ row }: { row: { original: SalesServiceOrder } }) => row.original.amount.toLocaleString() },
    { header: 'Tax', accessorKey: 'taxAmount' as const, width: '80px', cell: ({ row }: { row: { original: SalesServiceOrder } }) => row.original.taxAmount.toLocaleString() },
    { header: 'Total', accessorKey: 'totalAmount' as const, width: '100px', cell: ({ row }: { row: { original: SalesServiceOrder } }) => row.original.totalAmount.toLocaleString() },
    { header: 'Delivery Date', accessorKey: 'deliveryDate' as const, width: '90px' },
    { header: 'Status', accessorKey: 'status' as const, width: '100px', cell: ({ row }: { row: { original: SalesServiceOrder } }) => (
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
      width: '120px',
      cell: ({ row }: { row: { original: SalesServiceOrder } }) => (
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
        <CustomCard title="Sales/Service Orders" className="h-full">
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
