import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { Button } from '@/components/ui/button';
import { Printer, Download } from 'lucide-react';
import { CustomSelect } from '@/components/ui/CustomSelect';

interface IncomeStatementItem {
  description: string;
  amount: number;
  isTotal?: boolean;
  isHeader?: boolean;
}

const incomeStatementData: IncomeStatementItem[] = [
  { description: 'REVENUE', amount: 0, isHeader: true },
  { description: 'Sales Revenue', amount: 500000 },
  { description: 'Service Revenue', amount: 100000 },
  { description: 'Total Revenue', amount: 600000, isTotal: true },
  { description: '', amount: 0 },
  { description: 'COST OF GOODS SOLD', amount: 0, isHeader: true },
  { description: 'Product Cost', amount: 200000 },
  { description: 'Direct Labor', amount: 50000 },
  { description: 'Manufacturing Overhead', amount: 30000 },
  { description: 'Total Cost of Goods Sold', amount: 280000, isTotal: true },
  { description: '', amount: 0 },
  { description: 'GROSS PROFIT', amount: 320000, isTotal: true },
  { description: '', amount: 0 },
  { description: 'OPERATING EXPENSES', amount: 0, isHeader: true },
  { description: 'Office Rent', amount: 50000 },
  { description: 'Salaries and Wages', amount: 80000 },
  { description: 'Utilities', amount: 15000 },
  { description: 'Marketing and Advertising', amount: 25000 },
  { description: 'Insurance', amount: 35000 },
  { description: 'Other Operating Expenses', amount: 20000 },
  { description: 'Total Operating Expenses', amount: 225000, isTotal: true },
  { description: '', amount: 0 },
  { description: 'OPERATING INCOME', amount: 95000, isTotal: true },
  { description: '', amount: 0 },
  { description: 'OTHER INCOME AND EXPENSES', amount: 0, isHeader: true },
  { description: 'Interest Income', amount: 5000 },
  { description: 'Interest Expense', amount: -10000 },
  { description: 'Net Other Income/Expense', amount: -5000, isTotal: true },
  { description: '', amount: 0 },
  { description: 'NET INCOME BEFORE TAX', amount: 90000, isTotal: true },
  { description: 'Income Tax Expense', amount: 18000 },
  { description: 'NET INCOME', amount: 72000, isTotal: true },
];

export function IncomeStatement() {
  const [period, setPeriod] = useState('thisMonth');

  const periodOptions = [
    { value: 'thisMonth', label: 'This Month' },
    { value: 'lastMonth', label: 'Last Month' },
    { value: 'thisQuarter', label: 'This Quarter' },
    { value: 'thisYear', label: 'This Year' },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Toolbar */}
      <div className="flex items-center justify-between p-1 bg-[#3a3a3a] border-b border-[#454545]">
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#a0a0a0]">Period:</span>
          <CustomSelect
            value={period}
            onValueChange={setPeriod}
            options={periodOptions}
            className="w-32"
          />
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-7 text-xs bg-[#454545] hover:bg-[#555555] text-white"
          >
            <Printer className="h-3.5 w-3.5 mr-1" />
            Print
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 text-xs bg-[#00bfa5] hover:bg-[#00a893] text-white"
          >
            <Download className="h-3.5 w-3.5 mr-1" />
            Export
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-2 overflow-auto">
        <CustomCard title="Income Statement" className="h-full">
          <div className="p-4">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-white">The Demo Company (Pvt) Ltd</h2>
              <p className="text-[#a0a0a0]">Income Statement</p>
              <p className="text-[#a0a0a0]">For the Period Ended March 31, 2024</p>
            </div>
            
            <table className="w-full">
              <tbody>
                {incomeStatementData.map((item, index) => (
                  <tr 
                    key={index} 
                    className={`${
                      item.isHeader ? 'bg-[#454545]' : 
                      item.isTotal ? 'bg-[#3a3a3a]' : ''
                    }`}
                  >
                    <td className={`p-2 text-left ${
                      item.isHeader ? 'font-bold text-[#d4855a]' : 
                      item.isTotal ? 'font-bold text-white' : 
                      'text-white pl-8'
                    }`}>
                      {item.description}
                    </td>
                    <td className={`p-2 text-right ${
                      item.isHeader ? 'font-bold text-[#d4855a]' : 
                      item.isTotal ? 'font-bold text-white' : 
                      'text-white'
                    }`}>
                      {item.amount !== 0 ? item.amount.toLocaleString() : ''}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CustomCard>
      </div>
    </div>
  );
}
