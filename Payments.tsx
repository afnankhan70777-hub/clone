import { useState } from 'react';
import { Plus, Check, X, Trash2, Printer, RefreshCw, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { CustomCard as Card } from '@/components/ui/CustomCard';

export function Payments() {
  const [serialNo, setSerialNo] = useState(1);
  const [paymentMode, setPaymentMode] = useState('Cash');

  return (
    <div className="p-4 space-y-3">
      {/* Title Bar */}
      <div className="bg-bg-tertiary border border-border-custom p-2 flex justify-between items-center">
        <h1 className="text-white font-semibold">Bank / Cash Payments</h1>
        <div className="flex gap-1">
          <button className="p-1 bg-bg-secondary border border-border-custom hover:bg-bg-tertiary">
            <div className="w-4 h-4 border border-text-secondary" />
          </button>
          <button className="p-1 bg-danger border border-danger hover:brightness-110">
            <X className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Header Section */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary w-24">Serial No.</span>
              <div className="flex items-center">
                <button onClick={() => setSerialNo(s => Math.max(1, s - 1))} className="p-1 bg-bg-tertiary border border-border-custom hover:bg-bg-secondary">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <input type="text" value={serialNo} onChange={(e) => setSerialNo(Number(e.target.value))} className="w-16 text-center text-xs mx-1" />
                <button onClick={() => setSerialNo(s => s + 1)} className="p-1 bg-bg-tertiary border border-border-custom hover:bg-bg-secondary">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <span className="text-xs text-text-secondary ml-4">Date</span>
              <input type="text" value="15/6/2022" className="w-24 text-xs" />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary w-24">Payment Mode</span>
              <select className="w-32 text-xs" value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)}>
                <option value="Cash">Cash</option>
                <option value="Bank">Bank</option>
                <option value="Cheque">Cheque</option>
              </select>
            </div>

            {paymentMode === 'Cheque' && (
              <>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-secondary w-24">Cheque No.</span>
                  <input type="text" className="w-32 text-xs" />
                  <span className="text-xs text-text-secondary ml-2">Date</span>
                  <input type="text" className="w-24 text-xs" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-secondary w-24">Bank Name</span>
                  <input type="text" className="flex-1 text-xs" />
                </div>
              </>
            )}
          </div>
        </Card>

        <Card className="p-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary w-24">Vendor Code</span>
              <input type="text" className="w-28 text-xs" />
              <button className="px-2 py-1 bg-bg-tertiary border border-border-custom text-xs">...</button>
              <span className="text-xs text-text-secondary ml-2">Balance</span>
              <input type="text" value="0.00" className="w-24 text-xs text-danger" readOnly />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary w-24">Vendor Name</span>
              <input type="text" className="flex-1 text-xs" />
            </div>

            <div className="flex items-start gap-2">
              <span className="text-xs text-text-secondary w-24 pt-1">Address</span>
              <textarea className="flex-1 text-xs h-12 resize-none" />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary w-24">Contact No.</span>
              <input type="text" className="w-32 text-xs" />
            </div>
          </div>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-1">
        <button className="p-2 bg-bg-tertiary border border-border-custom hover:bg-bg-secondary" title="Quick Search">
          <Search className="w-5 h-5" />
        </button>
        <button className="p-2 bg-bg-tertiary border border-border-custom hover:bg-bg-secondary" title="Refresh">
          <RefreshCw className="w-5 h-5" />
        </button>
        <button className="p-2 bg-bg-tertiary border border-border-custom hover:bg-bg-secondary" title="Add">
          <Plus className="w-5 h-5 text-[#2196f3]" />
        </button>
        <button className="p-2 bg-bg-tertiary border border-border-custom hover:bg-bg-secondary" title="Save">
          <Check className="w-5 h-5 text-success" />
        </button>
        <button className="p-2 bg-bg-tertiary border border-border-custom hover:bg-bg-secondary" title="Delete">
          <X className="w-5 h-5 text-danger" />
        </button>
        <button className="p-2 bg-bg-tertiary border border-border-custom hover:bg-bg-secondary" title="Clear">
          <Trash2 className="w-5 h-5" />
        </button>
        <button className="p-2 bg-bg-tertiary border border-border-custom hover:bg-bg-secondary" title="Print">
          <Printer className="w-5 h-5" />
        </button>
      </div>

      {/* Payment Details */}
      <Card className="p-3">
        <div className="text-accent-teal font-bold text-sm mb-3">Payment Details</div>
        <div className="border border-border-custom overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-bg-tertiary">
                <th className="text-xs font-semibold py-1.5 px-2 border border-border-custom text-white w-8"></th>
                <th className="text-xs font-semibold py-1.5 px-2 border border-border-custom text-white">Invoice No.</th>
                <th className="text-xs font-semibold py-1.5 px-2 border border-border-custom text-white">Invoice Date</th>
                <th className="text-xs font-semibold py-1.5 px-2 border border-border-custom text-white text-right">Invoice Amount</th>
                <th className="text-xs font-semibold py-1.5 px-2 border border-border-custom text-white text-right">Paid Amount</th>
                <th className="text-xs font-semibold py-1.5 px-2 border border-border-custom text-white text-right">Balance</th>
                <th className="text-xs font-semibold py-1.5 px-2 border border-border-custom text-white text-right">Payment</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-bg-secondary' : 'bg-bg-primary'}>
                  <td className="text-xs py-1.5 px-2 border border-border-custom">
                    <div className="w-4 h-4 bg-bg-tertiary border border-border-custom" />
                  </td>
                  <td className="text-xs py-1.5 px-2 border border-border-custom"></td>
                  <td className="text-xs py-1.5 px-2 border border-border-custom"></td>
                  <td className="text-xs py-1.5 px-2 border border-border-custom text-right"></td>
                  <td className="text-xs py-1.5 px-2 border border-border-custom text-right"></td>
                  <td className="text-xs py-1.5 px-2 border border-border-custom text-right"></td>
                  <td className="text-xs py-1.5 px-2 border border-border-custom text-right"></td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-bg-tertiary font-semibold">
                <td colSpan={6} className="text-xs py-1.5 px-2 border border-border-custom text-accent-teal text-right">
                  Total Payment
                </td>
                <td className="text-xs py-1.5 px-2 border border-border-custom text-success text-right">0.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </Card>

      {/* Bottom Section */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-3">
          <div className="space-y-2">
            <div>
              <span className="text-xs text-text-secondary">Remarks</span>
              <textarea className="w-full h-16 text-xs mt-1 resize-none" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary">Status</span>
              <select className="text-xs">
                <option value="Processed">Processed</option>
                <option value="Authorized">Authorized</option>
              </select>
            </div>
          </div>
        </Card>

        <Card className="p-3">
          <div className="space-y-2">
            <div className="flex items-center justify-end gap-2">
              <span className="text-xs text-text-secondary">Total Payment</span>
              <span className="text-xs text-text-secondary w-8">Rs.</span>
              <input type="text" value="0.00" className="w-24 text-sm font-bold text-success text-right" readOnly />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
