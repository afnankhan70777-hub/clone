import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Eye, CheckCircle } from 'lucide-react';

interface DeliveryNote {
  dnNo: number;
  dnDate: string;
  orderNo: number;
  cusCode: string;
  customerName: string;
  items: number;
  totalQuantity: number;
  vehicleNo: string;
  driverName: string;
  status: string;
}

const deliveryNotesData: DeliveryNote[] = [
  { dnNo: 1, dnDate: '15-03-2024', orderNo: 1, cusCode: '120020001', customerName: 'Star Enterprises', items: 5, totalQuantity: 250, vehicleNo: 'LES-1234', driverName: 'Ali Ahmed', status: 'Delivered' },
  { dnNo: 2, dnDate: '18-03-2024', orderNo: 2, cusCode: '120020003', customerName: 'Khalid Brothers', items: 3, totalQuantity: 150, vehicleNo: 'LES-5678', driverName: 'Rashid Khan', status: 'Delivered' },
  { dnNo: 3, dnDate: '20-03-2024', orderNo: 3, cusCode: '120020005', customerName: 'City Associates', items: 8, totalQuantity: 400, vehicleNo: 'LES-9012', driverName: 'Tariq Ali', status: 'In Transit' },
  { dnNo: 4, dnDate: '22-03-2024', orderNo: 4, cusCode: '120020006', customerName: 'The Best School Systems', items: 6, totalQuantity: 300, vehicleNo: 'LES-3456', driverName: 'Nadeem Akhtar', status: 'Pending' },
  { dnNo: 5, dnDate: '25-03-2024', orderNo: 5, cusCode: '120020007', customerName: 'Tech Solutions Ltd', items: 4, totalQuantity: 200, vehicleNo: 'LES-7890', driverName: 'Imran Hussain', status: 'Pending' },
];

export function DeliveryNotes() {
  const [, setSelectedDN] = useState<DeliveryNote | null>(null);

  const columns = [
    { header: 'DN No', accessorKey: 'dnNo' as const, width: '70px' },
    { header: 'Date', accessorKey: 'dnDate' as const, width: '90px' },
    { header: 'Order No', accessorKey: 'orderNo' as const, width: '70px' },
    { header: 'Cus Code', accessorKey: 'cusCode' as const, width: '90px' },
    { header: 'Customer Name', accessorKey: 'customerName' as const, width: '160px' },
    { header: 'Items', accessorKey: 'items' as const, width: '60px' },
    { header: 'Total Qty', accessorKey: 'totalQuantity' as const, width: '80px' },
    { header: 'Vehicle No', accessorKey: 'vehicleNo' as const, width: '90px' },
    { header: 'Driver', accessorKey: 'driverName' as const, width: '120px' },
    { header: 'Status', accessorKey: 'status' as const, width: '90px', cell: ({ row }: { row: { original: DeliveryNote } }) => (
      <span className={`px-2 py-0.5 rounded text-xs ${
        row.original.status === 'Delivered' ? 'bg-green-500/20 text-green-400' :
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
      cell: ({ row }: { row: { original: DeliveryNote } }) => (
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-[#a0a0a0] hover:text-white"
            onClick={() => setSelectedDN(row.original)}
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
            New DN
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#a0a0a0]">Total: {deliveryNotesData.length} records</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-2 overflow-auto">
        <CustomCard title="Delivery Notes" className="h-full">
          <DataTable
            columns={columns}
            data={deliveryNotesData}
            onRowClick={(row) => setSelectedDN(row)}
          />
        </CustomCard>
      </div>
    </div>
  );
}
