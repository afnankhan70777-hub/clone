import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2 } from 'lucide-react';

interface CustomerType {
  code: string;
  name: string;
  description: string;
  status: string;
}

const customerTypesData: CustomerType[] = [
  { code: 'CT001', name: 'Local Customers', description: 'Domestic retail customers', status: 'Active' },
  { code: 'CT002', name: 'Corporate Customers', description: 'Business and corporate clients', status: 'Active' },
  { code: 'CT003', name: 'Institutional Customers', description: 'Schools, hospitals, government', status: 'Active' },
  { code: 'CT004', name: 'Distributors', description: 'Product distributors and dealers', status: 'Active' },
  { code: 'CT005', name: 'Retail Customers', description: 'Individual retail buyers', status: 'Active' },
  { code: 'CT006', name: 'Wholesale Customers', description: 'Bulk purchase customers', status: 'Active' },
];

export function CustomerTypes() {
  const [, setSelectedType] = useState<CustomerType | null>(null);

  const columns = [
    { header: 'Code', accessorKey: 'code' as const, width: '100px' },
    { header: 'Type Name', accessorKey: 'name' as const, width: '200px' },
    { header: 'Description', accessorKey: 'description' as const, width: '300px' },
    { header: 'Status', accessorKey: 'status' as const, width: '100px' },
    {
      header: 'Actions',
      accessorKey: 'actions' as const,
      width: '100px',
      cell: ({ row }: { row: { original: CustomerType } }) => (
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-[#a0a0a0] hover:text-white"
            onClick={() => setSelectedType(row.original)}
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
            Add Type
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-2 overflow-auto">
        <CustomCard title="Customer Types" className="h-full">
          <DataTable
            columns={columns}
            data={customerTypesData}
            onRowClick={(row) => setSelectedType(row)}
          />
        </CustomCard>
      </div>
    </div>
  );
}
