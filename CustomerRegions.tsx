import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2 } from 'lucide-react';

interface CustomerRegion {
  code: string;
  name: string;
  subRegion: string;
  manager: string;
  description: string;
  status: string;
}

const customerRegionsData: CustomerRegion[] = [
  { code: 'CR001', name: 'Lahore', subRegion: 'Central', manager: 'Mr. Ahmad Khan', description: 'Lahore city and surrounding areas', status: 'Active' },
  { code: 'CR002', name: 'Karachi', subRegion: 'South', manager: 'Mr. Abid Rahman', description: 'Karachi city and Sindh region', status: 'Active' },
  { code: 'CR003', name: 'Islamabad', subRegion: 'Capital', manager: 'Mr. Tariq Ali', description: 'Islamabad and Rawalpindi', status: 'Active' },
  { code: 'CR004', name: 'Peshawar', subRegion: 'West', manager: 'Mr. Khalid Mehmood', description: 'KPK region', status: 'Active' },
  { code: 'CR005', name: 'Multan', subRegion: 'South', manager: 'Mr. Nadeem Akhtar', description: 'Multan and Southern Punjab', status: 'Active' },
  { code: 'CR006', name: 'Gujranwala', subRegion: 'North', manager: 'Mr. Rashid Khan', description: 'Gujranwala and Gujrat region', status: 'Active' },
  { code: 'CR007', name: 'Faisalabad', subRegion: 'Central', manager: 'Mr. Imran Hussain', description: 'Faisalabad and Jhang region', status: 'Active' },
];

export function CustomerRegions() {
  const [, setSelectedRegion] = useState<CustomerRegion | null>(null);

  const columns = [
    { header: 'Code', accessorKey: 'code' as const, width: '80px' },
    { header: 'Region Name', accessorKey: 'name' as const, width: '120px' },
    { header: 'Sub Region', accessorKey: 'subRegion' as const, width: '100px' },
    { header: 'Manager', accessorKey: 'manager' as const, width: '150px' },
    { header: 'Description', accessorKey: 'description' as const, width: '250px' },
    { header: 'Status', accessorKey: 'status' as const, width: '80px' },
    {
      header: 'Actions',
      accessorKey: 'actions' as const,
      width: '100px',
      cell: ({ row }: { row: { original: CustomerRegion } }) => (
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-[#a0a0a0] hover:text-white"
            onClick={() => setSelectedRegion(row.original)}
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
            Add Region
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-2 overflow-auto">
        <CustomCard title="Customer Regions" className="h-full">
          <DataTable
            columns={columns}
            data={customerRegionsData}
            onRowClick={(row) => setSelectedRegion(row)}
          />
        </CustomCard>
      </div>
    </div>
  );
}
