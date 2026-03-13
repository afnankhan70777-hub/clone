import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2 } from 'lucide-react';

interface StateTaxRate {
  code: string;
  stateName: string;
  taxRegnNo: string;
  salesTaxRate: number;
  incomeTaxRate: number;
  additionalTax: number;
  effectiveDate: string;
  status: string;
}

const statesTaxRatesData: StateTaxRate[] = [
  { code: 'ST001', stateName: 'Punjab', taxRegnNo: 'P1234567', salesTaxRate: 18, incomeTaxRate: 2.5, additionalTax: 1, effectiveDate: '01-07-2021', status: 'Active' },
  { code: 'ST002', stateName: 'Sindh', taxRegnNo: 'S1234567', salesTaxRate: 18, incomeTaxRate: 2.5, additionalTax: 1, effectiveDate: '01-07-2021', status: 'Active' },
  { code: 'ST003', stateName: 'Khyber Pakhtunkhwa', taxRegnNo: 'K1234567', salesTaxRate: 18, incomeTaxRate: 2.5, additionalTax: 0, effectiveDate: '01-07-2021', status: 'Active' },
  { code: 'ST004', stateName: 'Baluchistan', taxRegnNo: 'B1234567', salesTaxRate: 18, incomeTaxRate: 2.5, additionalTax: 0, effectiveDate: '01-07-2021', status: 'Active' },
  { code: 'ST005', stateName: 'Islamabad Capital Territory', taxRegnNo: '1234567', salesTaxRate: 18, incomeTaxRate: 2.5, additionalTax: 1, effectiveDate: '01-07-2021', status: 'Active' },
];

export function StatesTaxRates() {
  const [, setSelectedRate] = useState<StateTaxRate | null>(null);

  const columns = [
    { header: 'Code', accessorKey: 'code' as const, width: '80px' },
    { header: 'State/Province', accessorKey: 'stateName' as const, width: '180px' },
    { header: 'Tax Regn No', accessorKey: 'taxRegnNo' as const, width: '120px' },
    { header: 'Sales Tax %', accessorKey: 'salesTaxRate' as const, width: '90px', cell: ({ row }: { row: { original: StateTaxRate } }) => `${row.original.salesTaxRate}%` },
    { header: 'Income Tax %', accessorKey: 'incomeTaxRate' as const, width: '90px', cell: ({ row }: { row: { original: StateTaxRate } }) => `${row.original.incomeTaxRate}%` },
    { header: 'Addl Tax %', accessorKey: 'additionalTax' as const, width: '80px', cell: ({ row }: { row: { original: StateTaxRate } }) => `${row.original.additionalTax}%` },
    { header: 'Effective Date', accessorKey: 'effectiveDate' as const, width: '110px' },
    { header: 'Status', accessorKey: 'status' as const, width: '80px' },
    {
      header: 'Actions',
      accessorKey: 'actions' as const,
      width: '100px',
      cell: ({ row }: { row: { original: StateTaxRate } }) => (
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-[#a0a0a0] hover:text-white"
            onClick={() => setSelectedRate(row.original)}
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
            Add Rate
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-2 overflow-auto">
        <CustomCard title="States/Province Tax Rates" className="h-full">
          <DataTable
            columns={columns}
            data={statesTaxRatesData}
            onRowClick={(row) => setSelectedRate(row)}
          />
        </CustomCard>
      </div>
    </div>
  );
}
