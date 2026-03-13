import { useState } from 'react';
import { Plus, Check, X, Trash2, Printer, RefreshCw, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { CustomCard as Card } from '@/components/ui/CustomCard';

export function StockAdjustments() {
  const [serialNo, setSerialNo] = useState(1);
  const [adjustmentType, setAdjustmentType] = useState<'Addition' | 'Deduction'>('Addition');

  return (
    <div className="p-4 space-y-3">
      {/* Title Bar */}
      <div className="bg-bg-tertiary border border-border-custom p-2 flex justify-between items-center">
        <h1 className="text-white font-semibold">Stock Adjustments</h1>
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
      <Card className="p-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-text-secondary w-20">Serial No.</span>
            <div className="flex items-center">
              <button 
                onClick={() => setSerialNo(Math.max(1, serialNo - 1))}
                className="p-1 bg-bg-tertiary border border-border-custom hover:bg-bg-secondary"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <input 
                type="text" 
                value={serialNo}
                onChange={(e) => setSerialNo(Number(e.target.value))}
                className="w-16 text-center text-xs mx-1"
              />
              <button 
                onClick={() => setSerialNo(serialNo + 1)}
                className="p-1 bg-bg-tertiary border border-border-custom hover:bg-bg-secondary"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-text-secondary">Date</span>
            <input type="text" value="15/6/2022" className="w-24 text-xs" />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-text-secondary">Adjustment Type</span>
            <select 
              className="text-xs"
              value={adjustmentType}
              onChange={(e) => setAdjustmentType(e.target.value as 'Addition' | 'Deduction')}
            >
              <option value="Addition">Addition (+)</option>
              <option value="Deduction">Deduction (-)</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-text-secondary">Warehouse</span>
            <select className="text-xs">
              <option value="Main Store">Main Store</option>
              <option value="Godown 1">Godown 1</option>
              <option value="Godown 2">Godown 2</option>
            </select>
          </div>
        </div>
      </Card>

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

      {/* Items Table */}
      <div className="border border-border-custom overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-bg-tertiary">
              <th className="text-xs font-semibold py-1.5 px-2 border border-border-custom text-white w-8"></th>
              <th className="text-xs font-semibold py-1.5 px-2 border border-border-custom text-white">Item Code</th>
              <th className="text-xs font-semibold py-1.5 px-2 border border-border-custom text-white">Item Name</th>
              <th className="text-xs font-semibold py-1.5 px-2 border border-border-custom text-white text-right">Current Stock</th>
              <th className="text-xs font-semibold py-1.5 px-2 border border-border-custom text-white text-right">Adjustment Qty</th>
              <th className="text-xs font-semibold py-1.5 px-2 border border-border-custom text-white text-right">New Stock</th>
              <th className="text-xs font-semibold py-1.5 px-2 border border-border-custom text-white text-right">Rate</th>
              <th className="text-xs font-semibold py-1.5 px-2 border border-border-custom text-white text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(8)].map((_, i) => (
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
                <td className="text-xs py-1.5 px-2 border border-border-custom text-right"></td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-bg-tertiary font-semibold">
              <td colSpan={7} className="text-xs py-1.5 px-2 border border-border-custom text-accent-teal text-right">
                Total Adjustment Amount
              </td>
              <td className="text-xs py-1.5 px-2 border border-border-custom text-success text-right">0.00</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-3">
          <div className="space-y-2">
            <div>
              <span className="text-xs text-text-secondary">Reason for Adjustment</span>
              <textarea className="w-full h-16 text-xs mt-1 resize-none" />
            </div>
          </div>
        </Card>

        <Card className="p-3">
          <div className="space-y-2">
            <div>
              <span className="text-xs text-text-secondary">Remarks</span>
              <textarea className="w-full h-16 text-xs mt-1 resize-none" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
