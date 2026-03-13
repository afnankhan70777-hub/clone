import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Eye, Printer } from 'lucide-react';

interface MaterialIssueNote {
  minNo: number;
  minDate: string;
  department: string;
  issuedTo: string;
  items: number;
  totalValue: number;
  purpose: string;
  status: string;
}

const minData: MaterialIssueNote[] = [
  { minNo: 1, minDate: '15-03-2024', department: 'Production', issuedTo: 'Mr. Ali Khan', items: 5, totalValue: 25000, purpose: 'Production Batch A', status: 'Issued' },
  { minNo: 2, minDate: '18-03-2024', department: 'Production', issuedTo: 'Mr. Rashid Ahmed', items: 8, totalValue: 42000, purpose: 'Production Batch B', status: 'Issued' },
  { minNo: 3, minDate: '20-03-2024', department: 'Maintenance', issuedTo: 'Mr. Tariq Mehmood', items: 3, totalValue: 8500, purpose: 'Equipment Repair', status: 'Pending' },
  { minNo: 4, minDate: '22-03-2024', department: 'Production', issuedTo: 'Mr. Nadeem Akhtar', items: 6, totalValue: 31500, purpose: 'Production Batch C', status: 'Issued' },
  { minNo: 5, minDate: '25-03-2024', department: 'R&D', issuedTo: 'Mr. Imran Hussain', items: 4, totalValue: 18000, purpose: 'Sample Testing', status: 'Pending' },
];

export function MaterialIssueNotes() {
  const [, setSelectedMIN] = useState<MaterialIssueNote | null>(null);

  const columns = [
    { header: 'MIN No', accessorKey: 'minNo' as const, width: '70px' },
    { header: 'Date', accessorKey: 'minDate' as const, width: '90px' },
    { header: 'Department', accessorKey: 'department' as const, width: '120px' },
    { header: 'Issued To', accessorKey: 'issuedTo' as const, width: '150px' },
    { header: 'Items', accessorKey: 'items' as const, width: '60px' },
    { header: 'Total Value', accessorKey: 'totalValue' as const, width: '100px', cell: ({ row }: { row: { original: MaterialIssueNote } }) => row.original.totalValue.toLocaleString() },
    { header: 'Purpose', accessorKey: 'purpose' as const, width: '200px' },
    { header: 'Status', accessorKey: 'status' as const, width: '80px', cell: ({ row }: { row: { original: MaterialIssueNote } }) => (
      <span className={`px-2 py-0.5 rounded text-xs ${row.original.status === 'Issued' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
        {row.original.status}
      </span>
    )},
    {
      header: 'Actions',
      accessorKey: 'actions' as const,
      width: '100px',
      cell: ({ row }: { row: { original: MaterialIssueNote } }) => (
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-[#a0a0a0] hover:text-white"
            onClick={() => setSelectedMIN(row.original)}
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
            className="h-7 w-7 text-[#a0a0a0] hover:text-white"
          >
            <Printer className="h-4 w-4" />
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
            New MIN
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#a0a0a0]">Total: {minData.length} records</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-2 overflow-auto">
        <CustomCard title="Material Issue Notes" className="h-full">
          <DataTable
            columns={columns}
            data={minData}
            onRowClick={(row) => setSelectedMIN(row)}
          />
        </CustomCard>
      </div>
    </div>
  );
}
