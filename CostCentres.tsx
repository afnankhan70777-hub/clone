import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2 } from 'lucide-react';

interface CostCentre {
  code: string;
  name: string;
  type: string;
  manager: string;
  budget: number;
  actual: number;
  variance: number;
  status: string;
}

const costCentresData: CostCentre[] = [
  { code: 'CC001', name: 'Sales Department', type: 'Revenue', manager: 'Mr. Ahmad Khan', budget: 500000, actual: 440124, variance: -59876, status: 'Active' },
  { code: 'CC002', name: 'Marketing', type: 'Expense', manager: 'Mr. Ali Raza', budget: 200000, actual: 150000, variance: 50000, status: 'Active' },
  { code: 'CC003', name: 'Operations', type: 'Expense', manager: 'Mr. Tariq Mehmood', budget: 300000, actual: 280000, variance: 20000, status: 'Active' },
  { code: 'CC004', name: 'Administration', type: 'Expense', manager: 'Mr. Rashid Ahmed', budget: 150000, actual: 145000, variance: 5000, status: 'Active' },
  { code: 'CC005', name: 'IT Department', type: 'Expense', manager: 'Mr. Imran Hussain', budget: 100000, actual: 95000, variance: 5000, status: 'Active' },
  { code: 'CC006', name: 'HR Department', type: 'Expense', manager: 'Ms. Sarah Ali', budget: 80000, actual: 75000, variance: 5000, status: 'Active' },
];

export function CostCentres() {
  const [, setSelectedCentre] = useState<CostCentre | null>(null);

  const columns = [
    { header: 'Code', accessorKey: 'code' as const, width: '80px' },
    { header: 'Centre Name', accessorKey: 'name' as const, width: '180px' },
    { header: 'Type', accessorKey: 'type' as const, width: '100px' },
    { header: 'Manager', accessorKey: 'manager' as const, width: '150px' },
    { header: 'Budget', accessorKey: 'budget' as const, width: '120px', cell: ({ row }: { row: { original: CostCentre } }) => row.original.budget.toLocaleString() },
    { header: 'Actual', accessorKey: 'actual' as const, width: '120px', cell: ({ row }: { row: { original: CostCentre } }) => row.original.actual.toLocaleString() },
    { header: 'Variance', accessorKey: 'variance' as const, width: '100px', cell: ({ row }: { row: { original: CostCentre } }) => (
      <span className={row.original.variance >= 0 ? 'text-green-400' : 'text-red-400'}>
        {row.original.variance.toLocaleString()}
      </span>
    )},
    { header: 'Status', accessorKey: 'status' as const, width: '80px' },
    {
      header: 'Actions',
      accessorKey: 'actions' as const,
      width: '100px',
      cell: ({ row }: { row: { original: CostCentre } }) => (
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-[#a0a0a0] hover:text-white"
            onClick={() => setSelectedCentre(row.original)}
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
            Add Centre
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-2 overflow-auto">
        <CustomCard title="Cost Centres" className="h-full">
          <DataTable
            columns={columns}
            data={costCentresData}
            onRowClick={(row) => setSelectedCentre(row)}
          />
        </CustomCard>
      </div>
    </div>
  );
}
