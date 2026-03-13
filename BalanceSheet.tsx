import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { Button } from '@/components/ui/button';
import { Printer, Download } from 'lucide-react';
import { CustomSelect } from '@/components/ui/CustomSelect';

interface BalanceSheetItem {
  description: string;
  amount: number;
  isTotal?: boolean;
  isHeader?: boolean;
  indent?: number;
}

const balanceSheetData: BalanceSheetItem[] = [
  { description: 'ASSETS', amount: 0, isHeader: true },
  { description: '', amount: 0 },
  { description: 'CURRENT ASSETS', amount: 0, isHeader: true, indent: 1 },
  { description: 'Cash in Hand', amount: 295835, indent: 2 },
  { description: 'Bank Accounts', amount: 1851449, indent: 2 },
  { description: 'Accounts Receivable', amount: 1190000, indent: 2 },
  { description: 'Inventory', amount: 600000, indent: 2 },
  { description: 'Total Current Assets', amount: 3937284, isTotal: true, indent: 2 },
  { description: '', amount: 0 },
  { description: 'FIXED ASSETS', amount: 0, isHeader: true, indent: 1 },
  { description: 'Property, Plant & Equipment', amount: 1000000, indent: 2 },
  { description: 'Accumulated Depreciation', amount: -200000, indent: 2 },
  { description: 'Net Fixed Assets', amount: 800000, isTotal: true, indent: 2 },
  { description: '', amount: 0 },
  { description: 'TOTAL ASSETS', amount: 4737284, isTotal: true },
  { description: '', amount: 0 },
  { description: '', amount: 0 },
  { description: 'LIABILITIES AND EQUITY', amount: 0, isHeader: true },
  { description: '', amount: 0 },
  { description: 'CURRENT LIABILITIES', amount: 0, isHeader: true, indent: 1 },
  { description: 'Accounts Payable', amount: 255879, indent: 2 },
  { description: 'Accrued Expenses', amount: 50000, indent: 2 },
  { description: 'Short-term Loans', amount: 100000, indent: 2 },
  { description: 'Total Current Liabilities', amount: 405879, isTotal: true, indent: 2 },
  { description: '', amount: 0 },
  { description: 'LONG-TERM LIABILITIES', amount: 0, isHeader: true, indent: 1 },
  { description: 'Long-term Loans', amount: 500000, indent: 2 },
  { description: 'Total Long-term Liabilities', amount: 500000, isTotal: true, indent: 2 },
  { description: '', amount: 0 },
  { description: 'TOTAL LIABILITIES', amount: 905879, isTotal: true, indent: 1 },
  { description: '', amount: 0 },
  { description: 'EQUITY', amount: 0, isHeader: true, indent: 1 },
  { description: 'Capital Account', amount: 2475405, indent: 2 },
  { description: 'Retained Earnings', amount: 1284000, indent: 2 },
  { description: 'Current Year Profit', amount: 72000, indent: 2 },
  { description: 'Total Equity', amount: 3831405, isTotal: true, indent: 2 },
  { description: '', amount: 0 },
  { description: 'TOTAL LIABILITIES AND EQUITY', amount: 4737284, isTotal: true },
];

export function BalanceSheet() {
  const [asOfDate, setAsOfDate] = useState('today');

  const dateOptions = [
    { value: 'today', label: 'Today' },
    { value: 'monthEnd', label: 'Month End' },
    { value: 'quarterEnd', label: 'Quarter End' },
    { value: 'yearEnd', label: 'Year End' },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Toolbar */}
      <div className="flex items-center justify-between p-1 bg-[#3a3a3a] border-b border-[#454545]">
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#a0a0a0]">As of:</span>
          <CustomSelect
            value={asOfDate}
            onValueChange={setAsOfDate}
            options={dateOptions}
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
        <CustomCard title="Balance Sheet" className="h-full">
          <div className="p-4">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-white">The Demo Company (Pvt) Ltd</h2>
              <p className="text-[#a0a0a0]">Balance Sheet</p>
              <p className="text-[#a0a0a0]">As of March 31, 2024</p>
            </div>
            
            <table className="w-full">
              <tbody>
                {balanceSheetData.map((item, index) => (
                  <tr 
                    key={index} 
                    className={`${
                      item.isHeader ? 'bg-[#454545]' : 
                      item.isTotal ? 'bg-[#3a3a3a]' : ''
                    }`}
                  >
                    <td 
                      className={`p-2 text-left ${
                        item.isHeader ? 'font-bold text-[#d4855a]' : 
                        item.isTotal ? 'font-bold text-white' : 
                        'text-white'
                      }`}
                      style={{ paddingLeft: item.indent ? `${item.indent * 24}px` : '8px' }}
                    >
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
