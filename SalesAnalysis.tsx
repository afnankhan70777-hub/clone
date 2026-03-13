import { useState } from 'react';
import { Search, FileSpreadsheet, Printer, BarChart3 } from 'lucide-react';
import { CustomCard as Card } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';

const salesData = [
  { month: 'January 2022', invoices: 12, amount: 45000, returns: 2000, net: 43000 },
  { month: 'February 2022', invoices: 15, amount: 52000, returns: 1500, net: 50500 },
  { month: 'March 2022', invoices: 18, amount: 68000, returns: 3000, net: 65000 },
  { month: 'April 2022', invoices: 14, amount: 55000, returns: 2500, net: 52500 },
  { month: 'May 2022', invoices: 20, amount: 72000, returns: 4000, net: 68000 },
  { month: 'June 2022', invoices: 16, amount: 61000, returns: 1800, net: 59200 },
];

export function SalesAnalysis() {
  const [dateFrom, setDateFrom] = useState('01/01/2022');
  const [dateTo, setDateTo] = useState('30/06/2022');
  const [customer, setCustomer] = useState('');
  const [product, setProduct] = useState('');

  const columns = [
    { key: 'month', header: 'Month', width: '150px' },
    { key: 'invoices', header: 'Invoices', width: '100px', align: 'center' as const },
    { key: 'amount', header: 'Sales Amount', width: '120px', align: 'right' as const },
    { key: 'returns', header: 'Returns', width: '100px', align: 'right' as const },
    { key: 'net', header: 'Net Sales', width: '120px', align: 'right' as const },
  ];

  const totalInvoices = salesData.reduce((s, r) => s + r.invoices, 0);
  const totalAmount = salesData.reduce((s, r) => s + r.amount, 0);
  const totalReturns = salesData.reduce((s, r) => s + r.returns, 0);
  const totalNet = salesData.reduce((s, r) => s + r.net, 0);

  const totals = {
    month: 'Total',
    invoices: totalInvoices.toString(),
    amount: totalAmount.toLocaleString(),
    returns: totalReturns.toLocaleString(),
    net: totalNet.toLocaleString(),
  };

  return (
    <div className="p-4 space-y-4">
      {/* Title */}
      <div className="bg-bg-tertiary border border-border-custom p-2">
        <h1 className="text-accent-cyan font-bold text-lg text-center">
          SALES ANALYSIS REPORT
        </h1>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" defaultChecked />
              <span className="text-xs text-text-secondary">Date From</span>
              <input 
                type="text" 
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="w-24 text-xs"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary ml-6">To</span>
              <input 
                type="text" 
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="w-24 text-xs ml-4"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-xs text-text-secondary">Customer</span>
              <input 
                type="text" 
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
                className="flex-1 text-xs"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-xs text-text-secondary">Product</span>
              <input 
                type="text" 
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                className="flex-1 text-xs"
              />
            </div>
          </div>
          
          <div className="flex justify-end gap-2">
            <button className="p-2 bg-bg-tertiary border border-border-custom hover:bg-bg-secondary">
              <Search className="w-5 h-5 text-text-primary" />
            </button>
            <button className="p-2 bg-bg-tertiary border border-border-custom hover:bg-bg-secondary">
              <BarChart3 className="w-5 h-5 text-text-primary" />
            </button>
            <button className="p-2 bg-bg-tertiary border border-border-custom hover:bg-bg-secondary">
              <Printer className="w-5 h-5 text-text-primary" />
            </button>
            <button className="p-2 bg-bg-tertiary border border-border-custom hover:bg-bg-secondary">
              <FileSpreadsheet className="w-5 h-5 text-success" />
            </button>
          </div>
        </div>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="p-3">
          <div className="text-accent-orange text-sm font-semibold mb-1">Total Invoices</div>
          <div className="text-2xl font-bold text-success">{totalInvoices}</div>
        </Card>
        <Card className="p-3">
          <div className="text-accent-orange text-sm font-semibold mb-1">Total Sales</div>
          <div className="text-2xl font-bold text-success">Rs. {totalAmount.toLocaleString()}</div>
        </Card>
        <Card className="p-3">
          <div className="text-accent-orange text-sm font-semibold mb-1">Total Returns</div>
          <div className="text-2xl font-bold text-danger">Rs. {totalReturns.toLocaleString()}</div>
        </Card>
        <Card className="p-3">
          <div className="text-accent-orange text-sm font-semibold mb-1">Net Sales</div>
          <div className="text-2xl font-bold text-success">Rs. {totalNet.toLocaleString()}</div>
        </Card>
      </div>

      {/* Data Table */}
      <DataTable 
        columns={columns}
        data={salesData}
        showTotals={true}
        totals={totals}
        maxHeight="400px"
      />
    </div>
  );
}
