import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2 } from 'lucide-react';

interface Warehouse {
  code: string;
  name: string;
  location: string;
  address: string;
  manager: string;
  contactNo: string;
  capacity: number;
  status: string;
}

const warehousesData: Warehouse[] = [
  { code: 'WH001', name: 'Main Warehouse', location: 'Lahore', address: 'Industrial Area, Lahore', manager: 'Mr. Ali Khan', contactNo: '3212345678', capacity: 10000, status: 'Active' },
  { code: 'WH002', name: 'Karachi Warehouse', location: 'Karachi', address: 'Port Qasim Area, Karachi', manager: 'Mr. Rashid Ahmed', contactNo: '3123456789', capacity: 8000, status: 'Active' },
  { code: 'WH003', name: 'Islamabad Warehouse', location: 'Islamabad', address: 'I-9 Industrial Area', manager: 'Mr. Tariq Mehmood', contactNo: '3344556677', capacity: 5000, status: 'Active' },
  { code: 'WH004', name: 'Multan Warehouse', location: 'Multan', address: 'Industrial Estate, Multan', manager: 'Mr. Nadeem Akhtar', contactNo: '3112233445', capacity: 4000, status: 'Active' },
  { code: 'WH005', name: 'Faisalabad Warehouse', location: 'Faisalabad', address: 'Khurrianwala Road', manager: 'Mr. Imran Hussain', contactNo: '3244556677', capacity: 3000, status: 'Active' },
];

export function Warehouses() {
  const [, setSelectedWarehouse] = useState<Warehouse | null>(null);

  const columns = [
    { header: 'Code', accessorKey: 'code' as const, width: '100px' },
    { header: 'Warehouse Name', accessorKey: 'name' as const, width: '180px' },
    { header: 'Location', accessorKey: 'location' as const, width: '120px' },
    { header: 'Address', accessorKey: 'address' as const, width: '250px' },
    { header: 'Manager', accessorKey: 'manager' as const, width: '150px' },
    { header: 'Contact', accessorKey: 'contactNo' as const, width: '120px' },
    { header: 'Capacity', accessorKey: 'capacity' as const, width: '100px', cell: ({ row }: { row: { original: Warehouse } }) => row.original.capacity.toLocaleString() },
    { header: 'Status', accessorKey: 'status' as const, width: '80px' },
    {
      header: 'Actions',
      accessorKey: 'actions' as const,
      width: '100px',
      cell: ({ row }: { row: { original: Warehouse } }) => (
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-[#a0a0a0] hover:text-white"
            onClick={() => setSelectedWarehouse(row.original)}
          >
            <Edit className="h-4 w-4" />
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
            Add Warehouse
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-2 overflow-auto">
        <CustomCard title="Warehouses" className="h-full">
          <DataTable
            columns={columns}
            data={warehousesData}
            onRowClick={(row) => setSelectedWarehouse(row)}
          />
        </CustomCard>
      </div>
    </div>
  );
}
