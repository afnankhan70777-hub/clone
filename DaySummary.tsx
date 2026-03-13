import { useState } from 'react';
import { Search, FileSpreadsheet, Printer } from 'lucide-react';
import { CustomCard as Card } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { saleActivityData } from '@/data/mockData';

export function DaySummary() {
  const [filters, setFilters] = useState({
    transactionType: 'Tax',
    costCentre: '',
    stateProvince: '',
    serialNoFrom: '',
    serialNoTo: '',
    dateFrom: '15/6/2022',
    dateTo: '15/6/2022',
    customer: '',
    customerType: '',
    orderTaker: '',
    salesman: '',
    region: '',
    subRegion: '',
    cusGroup1: '',
    cusGroup2: '',
  });

  const columns = [
    { key: 'invoiceNo', header: 'Invoice No.', width: '80px', align: 'center' as const },
    { key: 'invoiceDate', header: 'Invoice Date', width: '100px' },
    { key: 'cusCode', header: 'Cus. Code', width: '100px' },
    { key: 'customerName', header: 'Customer Name', width: '180px' },
    { key: 'invoiceType', header: 'Invoice Type', width: '150px' },
    { key: 'invoiceAmount', header: 'Invoice Amount', width: '100px', align: 'right' as const },
    { key: 'returns', header: 'Returns', width: '80px', align: 'right' as const },
    { key: 'receipts', header: 'Receipts', width: '80px', align: 'right' as const },
    { key: 'whtFedITax', header: 'W.H.T. Fed. I.Tax', width: '100px', align: 'right' as const },
    { key: 'whtFedSTax', header: 'W.H.T. Fed. S.Tax', width: '100px', align: 'right' as const },
    { key: 'whtProvSTax', header: 'W.H.T. Prov. S.Tax', width: '110px', align: 'right' as const },
    { key: 'discount', header: 'Discount / Adjustment', width: '120px', align: 'right' as const },
    { key: 'totalCredited', header: 'Total Credited', width: '100px', align: 'right' as const },
    { key: 'balanceAmount', header: 'Balance Amount', width: '100px', align: 'right' as const },
  ];

  const totals = {
    invoiceNo: '',
    invoiceDate: '',
    cusCode: '',
    customerName: '',
    invoiceType: 'Totals',
    invoiceAmount: saleActivityData.reduce((sum, r) => sum + r.invoiceAmount, 0).toLocaleString(),
    returns: saleActivityData.reduce((sum, r) => sum + r.returns, 0).toLocaleString(),
    receipts: saleActivityData.reduce((sum, r) => sum + r.receipts, 0).toLocaleString(),
    whtFedITax: saleActivityData.reduce((sum, r) => sum + r.whtFedITax, 0).toLocaleString(),
    whtFedSTax: saleActivityData.reduce((sum, r) => sum + r.whtFedSTax, 0).toLocaleString(),
    whtProvSTax: saleActivityData.reduce((sum, r) => sum + r.whtProvSTax, 0).toLocaleString(),
    discount: saleActivityData.reduce((sum, r) => sum + r.discount, 0).toLocaleString(),
    totalCredited: saleActivityData.reduce((sum, r) => sum + r.totalCredited, 0).toLocaleString(),
    balanceAmount: saleActivityData.reduce((sum, r) => sum + r.balanceAmount, 0).toLocaleString(),
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="p-4 space-y-4">
      {/* Title */}
      <div className="bg-bg-tertiary border border-border-custom p-2">
        <h1 className="text-accent-cyan font-bold text-lg text-center">
          SALE ACTIVITY REPORT - INVOICE WISE
        </h1>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="grid grid-cols-3 gap-x-8 gap-y-3">
          {/* Column 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" defaultChecked />
              <span className="text-xs text-text-secondary w-28">Transaction Type</span>
              <select 
                className="flex-1 text-xs"
                value={filters.transactionType}
                onChange={(e) => handleFilterChange('transactionType', e.target.value)}
              >
                <option value="Tax">Tax</option>
                <option value="Non Tax">Non Tax</option>
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-xs text-text-secondary w-28">Cost Centre</span>
              <select className="flex-1 text-xs">
                <option value=""></option>
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-xs text-text-secondary w-28">State / Province</span>
              <select className="flex-1 text-xs">
                <option value=""></option>
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-xs text-text-secondary w-28">Serial No</span>
              <div className="flex-1 flex items-center gap-2">
                <span className="text-xs text-text-secondary">From</span>
                <input type="text" className="w-20 text-xs" />
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary w-28 ml-6">To</span>
              <input type="text" className="w-20 text-xs" />
            </div>
            
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" defaultChecked />
              <span className="text-xs text-text-secondary w-28">Date</span>
              <div className="flex-1 flex items-center gap-2">
                <span className="text-xs text-text-secondary">From</span>
                <input 
                  type="text" 
                  className="w-24 text-xs"
                  value={filters.dateFrom}
                  onChange={(e) => handleFilterChange('dateFrom', e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary w-28 ml-6">To</span>
              <input 
                type="text" 
                className="w-24 text-xs"
                value={filters.dateTo}
                onChange={(e) => handleFilterChange('dateTo', e.target.value)}
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-xs text-text-secondary w-24">Customer</span>
              <input type="text" className="flex-1 text-xs" />
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary w-24 ml-6"></span>
              <input type="text" className="flex-1 text-xs" />
            </div>
            
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-xs text-text-secondary w-24">Customer Type</span>
              <select className="flex-1 text-xs">
                <option value=""></option>
              </select>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-xs text-text-secondary w-24">Order Taker</span>
              <select className="flex-1 text-xs">
                <option value=""></option>
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-xs text-text-secondary w-24">Salesman</span>
              <select className="flex-1 text-xs">
                <option value=""></option>
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-xs text-text-secondary w-24">Region</span>
              <select className="flex-1 text-xs">
                <option value=""></option>
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-xs text-text-secondary w-24">Sub-Region</span>
              <select className="flex-1 text-xs">
                <option value=""></option>
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-xs text-text-secondary w-24">Cus. Group 1</span>
              <select className="flex-1 text-xs">
                <option value=""></option>
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-xs text-text-secondary w-24">Cus. Group 2</span>
              <select className="flex-1 text-xs">
                <option value=""></option>
              </select>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-2 mt-4">
          <button className="p-2 bg-bg-tertiary border border-border-custom hover:bg-bg-secondary transition-colors">
            <Search className="w-5 h-5 text-text-primary" />
          </button>
          <button className="p-2 bg-bg-tertiary border border-border-custom hover:bg-bg-secondary transition-colors">
            <Printer className="w-5 h-5 text-text-primary" />
          </button>
          <button className="p-2 bg-bg-tertiary border border-border-custom hover:bg-bg-secondary transition-colors">
            <FileSpreadsheet className="w-5 h-5 text-success" />
          </button>
        </div>
      </Card>

      {/* Data Table */}
      <DataTable 
        columns={columns}
        data={saleActivityData}
        showTotals={true}
        totals={totals}
        maxHeight="400px"
      />
    </div>
  );
}
