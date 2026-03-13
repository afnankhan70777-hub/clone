import { useState } from 'react';
import { X, Check } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface PreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const columnOptions = [
  { key: 'hsCode', label: 'H.S. Code' },
  { key: 'modelNo', label: 'Model No.' },
  { key: 'size', label: 'Size' },
  { key: 'colour', label: 'Colour' },
  { key: 'batchNo', label: 'Batch No. & Expiry Date', defaultChecked: true },
  { key: 'mfgDate', label: 'Manufacturing Date' },
  { key: 'addQtyCol', label: 'Additional Quantity Column' },
  { key: 'defaultQtyCol', label: 'Default Quantity Column', defaultChecked: true },
  { key: 'focPacks', label: 'FOC / Bonus (Packs)' },
  { key: 'focPcs', label: 'FOC / Bonus (Pcs)' },
  { key: 'measurementUnit', label: 'Measurement Unit', defaultChecked: true },
  { key: 'packing', label: 'Packing' },
  { key: 'mrp', label: 'Maximum Retail Price (M.R.P.)' },
  { key: 'discount', label: 'Discount', defaultChecked: true },
  { key: 'fed', label: 'F.E.D.' },
  { key: 'salesTax', label: 'Sales Tax', defaultChecked: true },
  { key: 'extraTax', label: 'Extra Tax' },
  { key: 'furtherTax', label: 'Further Tax', defaultChecked: true },
];

export function PreferencesModal({ isOpen, onClose }: PreferencesModalProps) {
  const [checkedColumns, setCheckedColumns] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    columnOptions.forEach(opt => {
      initial[opt.key] = opt.defaultChecked ?? false;
    });
    return initial;
  });

  const toggleColumn = (key: string) => {
    setCheckedColumns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-bg-primary border-2 border-accent-orange p-0 max-h-[90vh] overflow-hidden">
        <DialogHeader className="bg-accent-orange p-3 flex flex-row justify-between items-center">
          <DialogTitle className="text-white text-sm font-semibold">Preferences</DialogTitle>
          <div className="flex gap-1">
            <button className="p-1 bg-success hover:brightness-110">
              <Check className="w-5 h-5 text-white" />
            </button>
            <button onClick={onClose} className="p-1 bg-danger hover:brightness-110">
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        </DialogHeader>
        
        <div className="p-4 space-y-4 overflow-auto" style={{ maxHeight: 'calc(90vh - 80px)' }}>
          <h2 className="text-accent-cyan font-bold text-xl">PREFERENCES</h2>
          
          <div className="grid grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              {/* Currency */}
              <div>
                <div className="text-accent-teal font-bold text-sm mb-3">Currency</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-text-secondary w-32">Big Currency Name</span>
                    <input type="text" value="Rupees" className="flex-1 text-xs" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-text-secondary w-32">Small Currency Name</span>
                    <input type="text" value="Paisas" className="flex-1 text-xs" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-text-secondary w-32">Currency Symbol</span>
                    <input type="text" value="Rs." className="flex-1 text-xs" />
                  </div>
                </div>
              </div>

              {/* Description of Taxes */}
              <div>
                <div className="text-accent-teal font-bold text-sm mb-3">Description of Taxes</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-text-secondary w-32">Federal Excise Duty</span>
                    <input type="text" value="F.E.D." className="flex-1 text-xs" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-text-secondary w-32">Federal Sales Tax</span>
                    <input type="text" value="Sales Tax" className="flex-1 text-xs" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-text-secondary w-32">State / Prov Sales Tax</span>
                    <input type="text" value="Sales Tax" className="flex-1 text-xs" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-text-secondary w-32">Extra Tax</span>
                    <input type="text" value="Extra Tax" className="flex-1 text-xs" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-text-secondary w-32">Tax on Un-Registered</span>
                    <input type="text" value="Further Tax" className="flex-1 text-xs" />
                  </div>
                </div>
              </div>

              {/* Decimal Places */}
              <div>
                <div className="text-accent-teal font-bold text-sm mb-3">Decimal Places (Quantity and Rates)</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-text-secondary w-32">Quantity (General)</span>
                    <input type="text" value="2" className="w-16 text-xs text-center" />
                    <span className="text-xs text-text-secondary">(0 - 4) digits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-text-secondary w-32">Rate (General)</span>
                    <input type="text" value="2" className="w-16 text-xs text-center" />
                    <span className="text-xs text-text-secondary">(0 - 4) digits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-text-secondary w-32">Quantity (Production)</span>
                    <input type="text" value="6" className="w-16 text-xs text-center" />
                    <span className="text-xs text-text-secondary">(0 - 6) digits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-text-secondary w-32">Rate (Production)</span>
                    <input type="text" value="6" className="w-16 text-xs text-center" />
                    <span className="text-xs text-text-secondary">(0 - 6) digits</span>
                  </div>
                </div>
              </div>

              {/* Ledger Description */}
              <div>
                <div className="text-accent-teal font-bold text-sm mb-3">Ledger Description</div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                  <span className="text-xs text-text-secondary">Details of Products Purchased / Sold, Payments & Receipts</span>
                </div>
              </div>

              {/* Inventory Movement Linked Documents */}
              <div>
                <div className="text-accent-teal font-bold text-sm mb-3">Inventory Movement Linked Documents</div>
                <select className="w-full text-xs">
                  <option>Purchase Invoices & Sale Invoices</option>
                  <option>Purchase Invoices & Delivery Notes</option>
                  <option>Inwards & Outwards Gate Passes</option>
                  <option>Inwards Gate Passes & Delivery Notes</option>
                  <option>Goods Received Notes & Delivery Notes</option>
                </select>
              </div>
            </div>

            {/* Right Column - Columns Visible */}
            <div>
              <div className="text-accent-teal font-bold text-sm mb-3">Columns Visible</div>
              <div className="space-y-2">
                {columnOptions.map(option => (
                  <div key={option.key} className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4"
                      checked={checkedColumns[option.key]}
                      onChange={() => toggleColumn(option.key)}
                    />
                    <span className="text-xs text-text-secondary">{option.label}</span>
                    {option.key === 'addQtyCol' && (
                      <span className="text-xs text-text-secondary italic ml-2">
                        (This column would appear before default column)
                      </span>
                    )}
                    {(option.key === 'addQtyCol' || option.key === 'defaultQtyCol') && checkedColumns[option.key] && (
                      <div className="flex items-center gap-2 ml-auto">
                        <span className="text-xs text-text-secondary">Column Name</span>
                        <input type="text" value={option.key === 'addQtyCol' ? 'Packs' : 'Pcs'} className="w-20 text-xs" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
