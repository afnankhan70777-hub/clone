import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { CustomCard as Card } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { WorkflowDiagram } from '@/components/ui/WorkflowDiagram';
import { companyData, activityData, dashboardSummary } from '@/data/mockData';

export function Dashboard() {
  const [daySummaryDate, setDaySummaryDate] = useState('15/6/2022');

  const activityColumns = [
    { key: 'documentNo', header: 'Document No.', width: '200px' },
    { key: 'partyName', header: 'Party Name', width: '200px' },
    { key: 'remarks', header: 'Remarks', width: '150px' },
    { key: 'amount', header: 'Amount', width: '100px', align: 'right' as const },
    { key: 'status', header: 'Status', width: '100px' },
    { key: 'authorization', header: 'Authorization', width: '120px' },
  ];

  return (
    <div className="p-4 space-y-4">
      {/* Company Info Header */}
      <div className="text-center py-2">
        <h2 className="text-accent-teal font-bold text-lg">{companyData.name}</h2>
        <p className="text-text-secondary text-xs">{companyData.address}</p>
        <div className="flex justify-center gap-4 text-xs text-text-secondary mt-1">
          <span>{companyData.phone}</span>
          <span>{companyData.email}</span>
        </div>
      </div>

      {/* Top Info Bar */}
      <div className="flex justify-between items-center bg-bg-secondary p-2 border border-border-custom">
        <div className="text-xs text-text-secondary">
          Current User: <span className="text-text-primary">admin</span>
        </div>
        <div className="text-xs text-text-secondary">
          {new Date().toLocaleString('en-US', { 
            month: 'short', 
            day: '2-digit', 
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true 
          })}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-text-secondary">Day Summary Date</span>
          <div className="flex items-center">
            <input 
              type="text" 
              value={daySummaryDate}
              onChange={(e) => setDaySummaryDate(e.target.value)}
              className="w-24 text-xs"
            />
            <Calendar className="w-4 h-4 ml-1 text-text-secondary" />
          </div>
          <button className="bg-bg-tertiary text-text-primary px-3 py-1 text-xs border border-border-custom hover:bg-bg-secondary transition-colors">
            Update
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-12 gap-4">
        {/* Left Column - Summary Cards */}
        <div className="col-span-3 space-y-4">
          {/* Quick Search */}
          <Card title="Quick Search">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-16">Account</span>
                <input type="text" className="flex-1 text-xs" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-16">Product</span>
                <input type="text" className="flex-1 text-xs" />
              </div>
            </div>
          </Card>

          {/* Software Status */}
          <Card>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-text-secondary">Software Status:</span>
                <span className="text-success text-xs font-semibold">Up-to-date</span>
              </div>
              <button className="text-accent-cyan text-xs underline hover:no-underline">
                Click here to REFRESH databases
              </button>
              <p className="text-text-secondary text-xs italic">
                (Please note, this may take a few minutes)
              </p>
            </div>
          </Card>

          {/* Sales Summary */}
          <Card title="Sales">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-success">
                Rs. {dashboardSummary.sales.today.toLocaleString()}
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Previous Day</span>
                  <span className="text-text-primary">Rs. {dashboardSummary.sales.previousDay.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">{new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' })}</span>
                  <span className="text-text-primary">Rs. {dashboardSummary.sales.monthTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Total</span>
                  <span className="text-text-primary">Rs. {dashboardSummary.sales.total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Customers Summary */}
          <Card title="Customers">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-success">
                Rs. {dashboardSummary.customers.total.toLocaleString()}
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Due By Next</span>
                  <div className="flex items-center gap-1">
                    <span className="bg-bg-tertiary px-2 py-0.5 text-text-primary">7</span>
                    <span className="text-text-secondary">Days</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">{dashboardSummary.customers.dueNext7Days.invoices} Inv.</span>
                  <span className="text-success font-semibold">Rs. {dashboardSummary.customers.dueNext7Days.amount.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Vendors Summary */}
          <Card title="Vendors">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-success">
                Rs. {dashboardSummary.vendors.total.toLocaleString()}
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Due By Next</span>
                  <div className="flex items-center gap-1">
                    <span className="bg-bg-tertiary px-2 py-0.5 text-text-primary">1</span>
                    <span className="text-text-secondary">Day</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">{dashboardSummary.vendors.dueNext1Day.invoices} Inv.</span>
                  <span className="text-success font-semibold">Rs. {dashboardSummary.vendors.dueNext1Day.amount.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Middle Column - Activity and Cash Flow */}
        <div className="col-span-5 space-y-4">
          {/* Activity Table */}
          <Card title="Activity" className="h-[300px]">
            <DataTable 
              columns={activityColumns}
              data={activityData}
              maxHeight="250px"
            />
          </Card>

          {/* Cash Flow */}
          <Card title="Cash Flow">
            <div className="space-y-3">
              <div className="grid grid-cols-4 gap-4 text-center">
                <div></div>
                <div className="text-accent-teal font-semibold text-sm">Cash</div>
                <div className="text-accent-teal font-semibold text-sm">Bank</div>
                <div className="text-success font-semibold text-sm">Total</div>
              </div>
              
              <div className="space-y-2 text-xs">
                <div className="grid grid-cols-4 gap-4 items-center">
                  <span className="text-text-secondary">Previous Balance</span>
                  <span className="text-text-primary text-right">Rs. {dashboardSummary.cashFlow.previousBalance.cash.toLocaleString()}</span>
                  <span className="text-text-primary text-right">Rs. {dashboardSummary.cashFlow.previousBalance.bank.toLocaleString()}</span>
                  <span className="text-text-primary text-right font-semibold">Rs. {dashboardSummary.cashFlow.previousBalance.total.toLocaleString()}</span>
                </div>
                
                <div className="grid grid-cols-4 gap-4 items-center">
                  <span className="text-text-secondary">Receipts</span>
                  <span className="text-text-primary text-right">Rs. {dashboardSummary.cashFlow.receipts.cash.toLocaleString()}</span>
                  <span className="text-text-primary text-right">Rs. {dashboardSummary.cashFlow.receipts.bank.toLocaleString()}</span>
                  <span className="text-text-primary text-right font-semibold">Rs. {dashboardSummary.cashFlow.receipts.total.toLocaleString()}</span>
                </div>
                
                <div className="grid grid-cols-4 gap-4 items-center">
                  <span className="text-text-secondary">Payments</span>
                  <span className="text-text-primary text-right">Rs. {dashboardSummary.cashFlow.payments.cash.toLocaleString()}</span>
                  <span className="text-text-primary text-right">Rs. {dashboardSummary.cashFlow.payments.bank.toLocaleString()}</span>
                  <span className="text-text-primary text-right font-semibold">Rs. {dashboardSummary.cashFlow.payments.total.toLocaleString()}</span>
                </div>
                
                <div className="border-t border-border-custom pt-2 grid grid-cols-4 gap-4 items-center">
                  <span className="text-success font-semibold">Current Balance</span>
                  <span className="text-success text-right font-semibold">Rs. {dashboardSummary.cashFlow.currentBalance.cash.toLocaleString()}</span>
                  <span className="text-success text-right font-semibold">Rs. {dashboardSummary.cashFlow.currentBalance.bank.toLocaleString()}</span>
                  <span className="text-success text-right font-bold">Rs. {dashboardSummary.cashFlow.currentBalance.total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Post-Dated Cheques */}
          <Card title="Post-Dated Cheques">
            <div className="space-y-4 text-xs">
              <div>
                <p className="text-text-secondary mb-2">Received from Customers</p>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Due to be Presented During Next</span>
                  <div className="flex items-center gap-2">
                    <span className="bg-bg-tertiary px-2 py-0.5 text-text-primary">1</span>
                    <span className="text-text-secondary">Day</span>
                  </div>
                  <span className="text-text-secondary">None</span>
                  <span className="text-success font-semibold">Rs. {dashboardSummary.postDatedCheques.receivedFromCustomers}</span>
                </div>
              </div>
              
              <div>
                <p className="text-text-secondary mb-2">Issued to Vendors</p>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Due to be Presented During Next</span>
                  <div className="flex items-center gap-2">
                    <span className="bg-bg-tertiary px-2 py-0.5 text-text-primary">1</span>
                    <span className="text-text-secondary">Day</span>
                  </div>
                  <span className="text-text-secondary">None</span>
                  <span className="text-success font-semibold">Rs. {dashboardSummary.postDatedCheques.issuedToVendors}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column - Workflow Diagram */}
        <div className="col-span-4">
          <Card className="h-full">
            <WorkflowDiagram />
          </Card>
        </div>
      </div>
    </div>
  );
}
