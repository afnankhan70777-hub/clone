import { useState } from 'react';
import { Plus, Check, X, Trash2, Printer, RefreshCw } from 'lucide-react';
import { CustomCard as Card } from '@/components/ui/CustomCard';

const financialYearsData = [
  { id: 1, startDate: '01/07/2020', endDate: '30/06/2021', status: 'Closed' },
  { id: 2, startDate: '01/07/2021', endDate: '31/12/2022', status: 'Active' },
  { id: 3, startDate: '01/01/2023', endDate: '31/12/2023', status: 'Pending' },
];

export function FinancialYears() {
  const [selectedYear, setSelectedYear] = useState(financialYearsData[1]);
  const [startDate, setStartDate] = useState(selectedYear.startDate);
  const [endDate, setEndDate] = useState(selectedYear.endDate);

  return (
    <div className="p-4 space-y-3">
      {/* Title Bar */}
      <div className="bg-bg-tertiary border border-border-custom p-2 flex justify-between items-center">
        <h1 className="text-accent-orange font-bold text-xl">FINANCIAL YEARS</h1>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 bg-bg-secondary border border-border-custom text-xs hover:bg-bg-tertiary flex items-center gap-1">
            <RefreshCw className="w-3 h-3" />
            Refresh
          </button>
        </div>
        <div className="flex gap-1">
          <button className="p-2 bg-bg-secondary border border-border-custom hover:bg-bg-tertiary">
            <Plus className="w-5 h-5 text-[#2196f3]" />
          </button>
          <button className="p-2 bg-bg-secondary border border-border-custom hover:bg-bg-tertiary">
            <Check className="w-5 h-5 text-success" />
          </button>
          <button className="p-2 bg-bg-secondary border border-border-custom hover:bg-bg-tertiary">
            <X className="w-5 h-5 text-danger" />
          </button>
          <button className="p-2 bg-bg-secondary border border-border-custom hover:bg-bg-tertiary">
            <Trash2 className="w-5 h-5" />
          </button>
          <button className="p-2 bg-bg-secondary border border-border-custom hover:bg-bg-tertiary">
            <Printer className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-2 gap-4">
        {/* Left Column */}
        <Card className="p-4">
          <div className="text-accent-teal font-bold text-sm mb-3">Financial Year Details</div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary w-28">Start Date</span>
              <input 
                type="text" 
                value={startDate} 
                onChange={(e) => setStartDate(e.target.value)}
                className="w-32 text-xs" 
              />
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary w-28">End Date</span>
              <input 
                type="text" 
                value={endDate} 
                onChange={(e) => setEndDate(e.target.value)}
                className="w-32 text-xs" 
              />
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary w-28">Status</span>
              <select className="w-32 text-xs" value={selectedYear.status}>
                <option value="Active">Active</option>
                <option value="Closed">Closed</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
            
            <div className="pt-4 border-t border-border-custom">
              <button className="px-4 py-2 bg-accent-orange text-white text-sm font-semibold hover:brightness-110">
                Set as Active Year
              </button>
            </div>
            
            <div className="pt-4">
              <button className="px-4 py-2 bg-bg-tertiary border border-border-custom text-sm hover:bg-bg-secondary">
                Close Financial Year
              </button>
            </div>
          </div>
        </Card>

        {/* Right Column - Financial Years List */}
        <Card className="p-4">
          <div className="text-accent-teal font-bold text-sm mb-3">Financial Years</div>
          <div className="border border-border-custom overflow-auto">
            <table className="w-full">
              <thead className="sticky top-0">
                <tr className="bg-bg-tertiary">
                  <th className="text-xs py-2 px-2 border border-border-custom text-white">Start Date</th>
                  <th className="text-xs py-2 px-2 border border-border-custom text-white">End Date</th>
                  <th className="text-xs py-2 px-2 border border-border-custom text-white">Status</th>
                </tr>
              </thead>
              <tbody>
                {financialYearsData.map((year, i) => (
                  <tr 
                    key={year.id} 
                    className={`cursor-pointer hover:bg-bg-tertiary ${i % 2 === 0 ? 'bg-bg-secondary' : 'bg-bg-primary'} ${selectedYear.id === year.id ? 'bg-accent-orange' : ''}`}
                    onClick={() => {
                      setSelectedYear(year);
                      setStartDate(year.startDate);
                      setEndDate(year.endDate);
                    }}
                  >
                    <td className="text-xs py-2 px-2 border border-border-custom">{year.startDate}</td>
                    <td className="text-xs py-2 px-2 border border-border-custom">{year.endDate}</td>
                    <td className="text-xs py-2 px-2 border border-border-custom">
                      <span className={`px-2 py-0.5 text-xs ${year.status === 'Active' ? 'bg-success text-white' : year.status === 'Closed' ? 'bg-danger text-white' : 'bg-bg-tertiary text-text-primary'}`}>
                        {year.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
