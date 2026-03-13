import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2 } from 'lucide-react';

interface ServiceCategory {
  code: string;
  name: string;
  description: string;
  taxApplicable: string;
  status: string;
}

const serviceCategoriesData: ServiceCategory[] = [
  { code: 'SC001', name: 'Consulting', description: 'Business consulting services', taxApplicable: 'Yes', status: 'Active' },
  { code: 'SC002', name: 'Maintenance', description: 'Equipment maintenance services', taxApplicable: 'Yes', status: 'Active' },
  { code: 'SC003', name: 'Installation', description: 'Product installation services', taxApplicable: 'Yes', status: 'Active' },
  { code: 'SC004', name: 'Training', description: 'Staff training services', taxApplicable: 'No', status: 'Active' },
  { code: 'SC005', name: 'Support', description: 'Technical support services', taxApplicable: 'Yes', status: 'Active' },
  { code: 'SC006', name: 'Transportation', description: 'Logistics and transport', taxApplicable: 'Yes', status: 'Active' },
];

export function ServiceCategories() {
  const [, setSelectedCategory] = useState<ServiceCategory | null>(null);

  const columns = [
    { header: 'Code', accessorKey: 'code' as const, width: '100px' },
    { header: 'Category Name', accessorKey: 'name' as const, width: '180px' },
    { header: 'Description', accessorKey: 'description' as const, width: '300px' },
    { header: 'Tax Applicable', accessorKey: 'taxApplicable' as const, width: '100px' },
    { header: 'Status', accessorKey: 'status' as const, width: '80px' },
    {
      header: 'Actions',
      accessorKey: 'actions' as const,
      width: '100px',
      cell: ({ row }: { row: { original: ServiceCategory } }) => (
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-[#a0a0a0] hover:text-white"
            onClick={() => setSelectedCategory(row.original)}
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
            Add Category
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-2 overflow-auto">
        <CustomCard title="Service Categories" className="h-full">
          <DataTable
            columns={columns}
            data={serviceCategoriesData}
            onRowClick={(row) => setSelectedCategory(row)}
          />
        </CustomCard>
      </div>
    </div>
  );
}
