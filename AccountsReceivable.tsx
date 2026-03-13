import { useState } from 'react';
import { Search, FileSpreadsheet, Printer, Users } from 'lucide-react';
import { CustomCard as Card } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { customersData } from '@/data/mockData';

const receivableData = customersData.map(c => {
  const totalInvoices = Math.floor(Math.random() * 20) + 5;
  const totalAmount = Math.floor(Math.random() * 100000) + 50000;
  const received = Math.floor(Math.random() * totalAmount);
  const balance = totalAmount - received;
  return {
    code: c.code,
    name: c.name,
    contact: c.contactNo,
    creditLimit: c.creditLimit,
    totalInvoices,
    totalAmount,
    received,
    balance,
    dueDate: '30/06/2022',
    status: balance > c.creditLimit * 0.8 ? 'Overdue' : 'Current',
  };
});

export function AccountsReceivable() {
  const [customer, setCustomer] = useState('');
  const [dateFrom, setDateFrom] = useState('01/01/2022');
  const [dateTo, setDateTo] = useState('30/06/2022');

  const columns = [
    { key: 'code', header: 'Cus. Code', width: '100px' },
    { key: 'name', header: 'Customer Name', width: '180px' },
    { key: 'contact', header: 'Contact', width: '120px' },
    { key: 'creditLimit', header: 'Credit Limit', width: '100px', align: 'right' as const },
    { key: 'totalInvoices', header: 'Invoices', width: '80px', align: 'center' as const },
    { key: 'totalAmount', header: 'Total Amount', width: '100px', align: 'right' as const },
    { key: 'received', header: 'Received', width: '100px', align: 'right' as const },
    { key: 'balance', header: 'Balance', width: '100px', align: 'right' as const },
    { key: 'dueDate', header: 'Due Date', width: '100px' },
    { key: 'status', header: 'Status', width: '100px', align: 'center' as const },
  ];

  const totalReceivable = receivableData.reduce((s, r) => s + r.balance, 0);
  const overdueAmount = receivableData.filter(r => r.status === 'Overdue').reduce((s, r) => s + r.balance, 0);

  return (
    <div className="p-4 space-y-4">
      {/* Title */}
      <div className="bg-bg-tertiary border border-border-custom p-2">
        <h1 className="text-accent-cyan font-bold text-lg text-center">
          ACCOUNTS RECEIVABLE REPORT
        </h1>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="grid grid-cols-4 gap-4">
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
              <span className="text-xs text-text-secondary">Show Overdue Only</span>
            </div>
          </div>
          
          <div className="flex justify-end gap-2">
            <button className="p-2 bg-bg-tertiary border border-border-custom hover:bg-bg-secondary">
              <Search className="w-5 h-5 text-text-primary" />
            </button>
            <button className="p-2 bg-bg-tertiary border border-border-custom hover:bg-bg-secondary">
              <Users className="w-5 h-5 text-text-primary" />
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
          <div className="text-accent-orange text-sm font-semibold mb-1">Total Customers</div>
          <div className="text-2xl font-bold text-success">{receivableData.length}</div>
        </Card>
        <Card className="p-3">
          <div className="text-accent-orange text-sm font-semibold mb-1">Total Receivable</div>
          <div className="text-2xl font-bold text-success">Rs. {totalReceivable.toLocaleString()}</div>
        </Card>
        <Card className="p-3">
          <div className="text-accent-orange text-sm font-semibold mb-1">Overdue Amount</div>
          <div className="text-2xl font-bold text-danger">Rs. {overdueAmount.toLocaleString()}</div>
        </Card>
        <Card className="p-3">
          <div className="text-accent-orange text-sm font-semibold mb-1">Due Next 7 Days</div>
          <div className="text-2xl font-bold text-warning">Rs. 177,400</div>
        </Card>
      </div>

      {/* Data Table */}
      <DataTable 
        columns={columns}
        data={receivableData}
        maxHeight="400px"
      />
    </div>
  );
}
