import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2 } from 'lucide-react';

interface CustomerGroup {
  code: string;
  name: string;
  description: string;
  discountPercent: number;
  creditLimit: number;
  status: string;
}

const customerGroupsData: CustomerGroup[] = [
  { code: 'CG001', name: 'VIP Customers', description: 'High value customers', discountPercent: 10, creditLimit: 2000000, status: 'Active' },
  { code: 'CG002', name: 'Premium', description: 'Premium tier customers', discountPercent: 7, creditLimit: 1000000, status: 'Active' },
  { code: 'CG003', name: 'Standard', description: 'Regular customers', discountPercent: 5, creditLimit: 500000, status: 'Active' },
  { code: 'CG004', name: 'Basic', description: 'New and small customers', discountPercent: 2, creditLimit: 200000, status: 'Active' },
  { code: 'CG005', name: 'Cash Customers', description: 'Cash only customers', discountPercent: 0, creditLimit: 0, status: 'Active' },
];

interface CustomerGroupsProps {
  groupNumber?: number;
}

export function CustomerGroups({ groupNumber = 1 }: CustomerGroupsProps) {
  const [, setSelectedGroup] = useState<CustomerGroup | null>(null);

  const columns = [
    { header: 'Code', accessorKey: 'code' as const, width: '100px' },
    { header: 'Group Name', accessorKey: 'name' as const, width: '180px' },
    { header: 'Description', accessorKey: 'description' as const, width: '250px' },
    { header: 'Discount %', accessorKey: 'discountPercent' as const, width: '100px', cell: ({ row }: { row: { original: CustomerGroup } }) => `${row.original.discountPercent}%` },
    { header: 'Credit Limit', accessorKey: 'creditLimit' as const, width: '120px', cell: ({ row }: { row: { original: CustomerGroup } }) => row.original.creditLimit.toLocaleString() },
    { header: 'Status', accessorKey: 'status' as const, width: '80px' },
    {
      header: 'Actions',
      accessorKey: 'actions' as const,
      width: '100px',
      cell: ({ row }: { row: { original: CustomerGroup } }) => (
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-[#a0a0a0] hover:text-white"
            onClick={() => setSelectedGroup(row.original)}
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
            Add Group
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-2 overflow-auto">
        <CustomCard title={`Customer Groups ${groupNumber}`} className="h-full">
          <DataTable
            columns={columns}
            data={customerGroupsData}
            onRowClick={(row) => setSelectedGroup(row)}
          />
        </CustomCard>
      </div>
    </div>
  );
}
