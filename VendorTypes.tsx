import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2 } from 'lucide-react';

interface VendorType {
  code: string;
  name: string;
  description: string;
  status: string;
}

const vendorTypesData: VendorType[] = [
  { code: 'VT001', name: 'Local Vendors', description: 'Domestic suppliers and vendors', status: 'Active' },
  { code: 'VT002', name: 'Import Vendors', description: 'International suppliers', status: 'Active' },
  { code: 'VT003', name: 'Service Vendors', description: 'Service providers and contractors', status: 'Active' },
  { code: 'VT004', name: 'Raw Material Suppliers', description: 'Suppliers of raw materials', status: 'Active' },
  { code: 'VT005', name: 'Finished Goods Suppliers', description: 'Suppliers of finished products', status: 'Active' },
  { code: 'VT006', name: 'Logistics Partners', description: 'Transportation and logistics vendors', status: 'Active' },
];

export function VendorTypes() {
  const [, setSelectedType] = useState<VendorType | null>(null);

  const columns = [
    { header: 'Code', accessorKey: 'code' as const, width: '100px' },
    { header: 'Type Name', accessorKey: 'name' as const, width: '200px' },
    { header: 'Description', accessorKey: 'description' as const, width: '300px' },
    { header: 'Status', accessorKey: 'status' as const, width: '100px' },
    {
      header: 'Actions',
      accessorKey: 'actions' as const,
      width: '100px',
      cell: ({ row }: { row: { original: VendorType } }) => (
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
        <CustomCard title="Vendor Types" className="h-full">
          <DataTable
            columns={columns}
            data={vendorTypesData}
            onRowClick={(row) => setSelectedType(row)}
          />
        </CustomCard>
      </div>
    </div>
  );
}
