import { useState } from 'react';
import { 
  ChevronLeft, ChevronRight, Search, RefreshCw, Plus, Check, X, 
  Trash2, Printer, Settings, FileText
} from 'lucide-react';
import { CustomCard as Card } from '@/components/ui/CustomCard';

interface SaleInvoicesProps {
  isTaxInvoice?: boolean;
}

export function SaleInvoices({ isTaxInvoice = false }: SaleInvoicesProps) {
  const [serialNo, setSerialNo] = useState(7);
  const [status, setStatus] = useState<'Processed' | 'Authorized'>('Authorized');
  
  const invoiceItem = {
    itemCode: '1000000006',
    itemName: 'Sunsilk Shampoo',
    size: '',
    colour: '',
    quantity: 60.0000,
    unit: 'Pcs',
    rate: 1200.0000,
    grossAmount: 72000.00,
    discountRate: 0,
    discountAmount: 0.00,
    netAmount: 72000.00,
  };

  const handlePrevSerial = () => setSerialNo(prev => Math.max(1, prev - 1));
  const handleNextSerial = () => setSerialNo(prev => prev + 1);

  return (
    <div className="p-4 space-y-3">
      {/* Title Bar */}
      <div className="bg-bg-tertiary border border-border-custom p-2 flex justify-between items-center">
        <h1 className="text-white font-semibold">
          Sale Invoices {isTaxInvoice ? '(Federal Sales Tax)' : '(Non Tax)'}
        </h1>
        <div className="flex gap-1">
          <button className="p-1 bg-bg-secondary border border-border-custom hover:bg-bg-tertiary">
            <div className="w-4 h-4 border border-text-secondary" />
          </button>
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
        {/* Left Column */}
        <Card className="p-3">
          <div className="space-y-2">
            {/* Serial No */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary w-24">Serial No.</span>
              <div className="flex items-center">
                <button 
                  onClick={handlePrevSerial}
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
                  onClick={handleNextSerial}
                  className="p-1 bg-bg-tertiary border border-border-custom hover:bg-bg-secondary"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <span className="text-xs text-text-secondary ml-4">Date</span>
              <input type="text" value="11/6/2022" className="w-24 text-xs" />
            </div>

            {/* Cust P.O. No */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary w-24">Cust. P.O. No.</span>
              <input type="text" className="w-32 text-xs" />
              <button className="px-2 py-1 bg-bg-tertiary border border-border-custom text-xs hover:bg-bg-secondary">
                + Col
              </button>
              <span className="text-xs text-text-secondary ml-2">Date</span>
              <input type="text" value="13/6/2022" className="w-24 text-xs" />
            </div>

            {/* D.C. No */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary w-24">D.C. No.</span>
              <input type="text" className="w-32 text-xs" />
              <button className="px-2 py-1 bg-bg-tertiary border border-border-custom text-xs hover:bg-bg-secondary">
                + Col
              </button>
              <span className="text-xs text-text-secondary ml-2">Date</span>
              <input type="text" value="13/6/2022" className="w-24 text-xs" />
            </div>

            {/* Credit Terms */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary w-24">Credit Terms</span>
              <input type="text" className="w-32 text-xs" />
              <span className="text-xs text-text-secondary ml-4">Due Date</span>
              <input type="text" value="1/7/2022" className="w-24 text-xs" />
            </div>

            {isTaxInvoice && (
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-24">H.S. Code</span>
                <input type="text" className="w-32 text-xs" />
              </div>
            )}
          </div>
        </Card>

        {/* Right Column */}
        <Card className="p-3">
          <div className="space-y-2">
            {/* Customer Code */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary w-24">Customer Code</span>
              <input type="text" value="120020004" className="w-28 text-xs" />
              <button className="px-2 py-1 bg-bg-tertiary border border-border-custom text-xs hover:bg-bg-secondary">
                ...
              </button>
              <span className="text-xs text-text-secondary ml-2">Balance</span>
              <input type="text" value="100,800 Dr" className="w-24 text-xs text-danger" />
            </div>

            {/* Customer Name */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary w-24">Customer Name</span>
              <input type="text" value="Bismillah Traders" className="flex-1 text-xs" />
            </div>

            {/* Address */}
            <div className="flex items-start gap-2">
              <span className="text-xs text-text-secondary w-24 pt-1">Address</span>
              <textarea 
                value="Main Road, Multan." 
                className="flex-1 text-xs h-12 resize-none"
              />
            </div>

            {/* Contact No */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary w-24">Contact No.</span>
              <input type="text" className="w-32 text-xs" />
              <span className="text-xs text-text-secondary ml-2">C.N.I.C. No.</span>
              <input type="text" className="w-28 text-xs" />
            </div>

            {/* N.T.N. */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary w-24">N.T.N.</span>
              <input type="text" className="w-32 text-xs" />
              {isTaxInvoice && (
                <>
                  <span className="text-xs text-text-secondary ml-2">Income Tax A.T.L. Status</span>
                  <input type="checkbox" className="w-4 h-4" />
                </>
              )}
            </div>

            {/* S.T.R.N. */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary w-24">S.T.R.N.</span>
              <input type="text" className="w-32 text-xs" />
              {isTaxInvoice && (
                <>
                  <span className="text-xs text-text-secondary ml-2">Sales Tax A.T.L. Status</span>
                  <input type="checkbox" className="w-4 h-4" />
                </>
              )}
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
        <button className="p-2 bg-bg-tertiary border border-border-custom hover:bg-bg-secondary" title="Authorize">
          <div className="w-5 h-5 rounded-full border-2 border-success flex items-center justify-center">
            <Check className="w-3 h-3 text-success" />
          </div>
        </button>
        <button className="p-2 bg-bg-tertiary border border-border-custom hover:bg-bg-secondary" title="Documents">
          <FileText className="w-5 h-5" />
        </button>
        <button className="p-2 bg-bg-tertiary border border-border-custom hover:bg-bg-secondary" title="Settings">
          <Settings className="w-5 h-5" />
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
              {isTaxInvoice && <th className="text-xs font-semibold py-1.5 px-2 border border-border-custom text-white">Warehouse</th>}
              <th className="text-xs font-semibold py-1.5 px-2 border border-border-custom text-white">Size</th>
              <th className="text-xs font-semibold py-1.5 px-2 border border-border-custom text-white">Colour</th>
              <th className="text-xs font-semibold py-1.5 px-2 border border-border-custom text-white text-right">Quantity</th>
              <th className="text-xs font-semibold py-1.5 px-2 border border-border-custom text-white">Unit</th>
              <th className="text-xs font-semibold py-1.5 px-2 border border-border-custom text-white text-right">Rate</th>
              {isTaxInvoice && (
                <>
                  <th className="text-xs font-semibold py-1.5 px-2 border border-border-custom text-white text-right">Amt. Exc. Sales Tax</th>
                  <th className="text-xs font-semibold py-1.5 px-2 border border-border-custom text-white text-right">Sales Tax Rate</th>
                  <th className="text-xs font-semibold py-1.5 px-2 border border-border-custom text-white text-right">Sales Tax Amount</th>
                  <th className="text-xs font-semibold py-1.5 px-2 border border-border-custom text-white text-right">Further Tax Rate</th>
                  <th className="text-xs font-semibold py-1.5 px-2 border border-border-custom text-white text-right">Further Tax Amount</th>
                  <th className="text-xs font-semibold py-1.5 px-2 border border-border-custom text-white text-right">Amt. Inc. Sales Tax</th>
                </>
              )}
              {!isTaxInvoice && (
                <>
                  <th className="text-xs font-semibold py-1.5 px-2 border border-border-custom text-white text-right">Gross Amount</th>
                  <th className="text-xs font-semibold py-1.5 px-2 border border-border-custom text-white text-right">Discount Rate</th>
                  <th className="text-xs font-semibold py-1.5 px-2 border border-border-custom text-white text-right">Discount Amount</th>
                  <th className="text-xs font-semibold py-1.5 px-2 border border-border-custom text-white text-right">Net Amount</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            <tr className="bg-bg-secondary hover:bg-bg-tertiary">
              <td className="text-xs py-1.5 px-2 border border-border-custom text-center">
                <div className="w-4 h-4 bg-bg-tertiary border border-border-custom" />
              </td>
              <td className="text-xs py-1.5 px-2 border border-border-custom text-text-primary">{invoiceItem.itemCode}</td>
              <td className="text-xs py-1.5 px-2 border border-border-custom text-text-primary">{invoiceItem.itemName}</td>
              {isTaxInvoice && <td className="text-xs py-1.5 px-2 border border-border-custom text-text-primary">Godown 3</td>}
              <td className="text-xs py-1.5 px-2 border border-border-custom text-text-primary">{invoiceItem.size}</td>
              <td className="text-xs py-1.5 px-2 border border-border-custom text-text-primary">{invoiceItem.colour}</td>
              <td className="text-xs py-1.5 px-2 border border-border-custom text-text-primary text-right">{invoiceItem.quantity.toFixed(4)}</td>
              <td className="text-xs py-1.5 px-2 border border-border-custom text-text-primary">{invoiceItem.unit}</td>
              <td className="text-xs py-1.5 px-2 border border-border-custom text-text-primary text-right">{invoiceItem.rate.toFixed(4)}</td>
              {!isTaxInvoice && (
                <>
                  <td className="text-xs py-1.5 px-2 border border-border-custom text-text-primary text-right">{invoiceItem.grossAmount.toFixed(2)}</td>
                  <td className="text-xs py-1.5 px-2 border border-border-custom text-text-primary text-right">{invoiceItem.discountRate}</td>
                  <td className="text-xs py-1.5 px-2 border border-border-custom text-text-primary text-right">{invoiceItem.discountAmount.toFixed(2)}</td>
                  <td className="text-xs py-1.5 px-2 border border-border-custom text-text-primary text-right">{invoiceItem.netAmount.toFixed(2)}</td>
                </>
              )}
              {isTaxInvoice && (
                <>
                  <td className="text-xs py-1.5 px-2 border border-border-custom text-text-primary text-right">72000.00</td>
                  <td className="text-xs py-1.5 px-2 border border-border-custom text-text-primary text-right">17</td>
                  <td className="text-xs py-1.5 px-2 border border-border-custom text-text-primary text-right">12240.00</td>
                  <td className="text-xs py-1.5 px-2 border border-border-custom text-text-primary text-right">3</td>
                  <td className="text-xs py-1.5 px-2 border border-border-custom text-text-primary text-right">2160.00</td>
                  <td className="text-xs py-1.5 px-2 border border-border-custom text-text-primary text-right">86400.00</td>
                </>
              )}
            </tr>
            {/* Empty rows */}
            {[...Array(5)].map((_, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-bg-primary' : 'bg-bg-secondary'}>
                <td className="text-xs py-1.5 px-2 border border-border-custom">
                  <div className="w-4 h-4 bg-bg-tertiary border border-border-custom" />
                </td>
                <td className="text-xs py-1.5 px-2 border border-border-custom"></td>
                <td className="text-xs py-1.5 px-2 border border-border-custom"></td>
                {isTaxInvoice && <td className="text-xs py-1.5 px-2 border border-border-custom"></td>}
                <td className="text-xs py-1.5 px-2 border border-border-custom"></td>
                <td className="text-xs py-1.5 px-2 border border-border-custom"></td>
                <td className="text-xs py-1.5 px-2 border border-border-custom"></td>
                <td className="text-xs py-1.5 px-2 border border-border-custom"></td>
                <td className="text-xs py-1.5 px-2 border border-border-custom"></td>
                {!isTaxInvoice && (
                  <>
                    <td className="text-xs py-1.5 px-2 border border-border-custom"></td>
                    <td className="text-xs py-1.5 px-2 border border-border-custom"></td>
                    <td className="text-xs py-1.5 px-2 border border-border-custom"></td>
                    <td className="text-xs py-1.5 px-2 border border-border-custom"></td>
                  </>
                )}
                {isTaxInvoice && (
                  <>
                    <td className="text-xs py-1.5 px-2 border border-border-custom"></td>
                    <td className="text-xs py-1.5 px-2 border border-border-custom"></td>
                    <td className="text-xs py-1.5 px-2 border border-border-custom"></td>
                    <td className="text-xs py-1.5 px-2 border border-border-custom"></td>
                    <td className="text-xs py-1.5 px-2 border border-border-custom"></td>
                    <td className="text-xs py-1.5 px-2 border border-border-custom"></td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-bg-tertiary font-semibold">
              <td colSpan={isTaxInvoice ? 6 : 5} className="text-xs py-1.5 px-2 border border-border-custom text-accent-teal text-right">
                Totals
              </td>
              <td className="text-xs py-1.5 px-2 border border-border-custom text-success text-right">60.0000</td>
              <td className="text-xs py-1.5 px-2 border border-border-custom"></td>
              <td className="text-xs py-1.5 px-2 border border-border-custom"></td>
              {!isTaxInvoice && (
                <>
                  <td className="text-xs py-1.5 px-2 border border-border-custom text-success text-right">72000.00</td>
                  <td className="text-xs py-1.5 px-2 border border-border-custom"></td>
                  <td className="text-xs py-1.5 px-2 border border-border-custom text-success text-right">0.00</td>
                  <td className="text-xs py-1.5 px-2 border border-border-custom text-success text-right">72000.00</td>
                </>
              )}
              {isTaxInvoice && (
                <>
                  <td className="text-xs py-1.5 px-2 border border-border-custom text-success text-right">72000.00</td>
                  <td className="text-xs py-1.5 px-2 border border-border-custom text-success text-right"></td>
                  <td className="text-xs py-1.5 px-2 border border-border-custom text-success text-right">12240.00</td>
                  <td className="text-xs py-1.5 px-2 border border-border-custom text-success text-right"></td>
                  <td className="text-xs py-1.5 px-2 border border-border-custom text-success text-right">2160.00</td>
                  <td className="text-xs py-1.5 px-2 border border-border-custom text-success text-right">86400.00</td>
                </>
              )}
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-3 gap-4">
        {/* Left - Dropdowns */}
        <Card className="p-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary w-24">Cost Centre</span>
              <select className="flex-1 text-xs">
                <option value=""></option>
              </select>
              <button className="px-2 py-1 bg-bg-tertiary border border-border-custom text-xs hover:bg-bg-secondary">
                + Col
              </button>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary w-24">Job / Project</span>
              <select className="flex-1 text-xs">
                <option value=""></option>
              </select>
              <button className="px-2 py-1 bg-bg-tertiary border border-border-custom text-xs hover:bg-bg-secondary">
                + Col
              </button>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary w-24">Warehouse</span>
              <select className="flex-1 text-xs">
                <option value="Main Store">Main Store</option>
              </select>
              <button className="px-2 py-1 bg-bg-tertiary border border-border-custom text-xs hover:bg-bg-secondary">
                - Col
              </button>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary w-24">Order Taker</span>
              <select className="flex-1 text-xs">
                <option value=""></option>
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary w-24">Salesman</span>
              <select className="flex-1 text-xs">
                <option value=""></option>
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary w-24">Status</span>
              <select 
                className="text-xs"
                value={status}
                onChange={(e) => setStatus(e.target.value as 'Processed' | 'Authorized')}
              >
                <option value="Processed">Processed</option>
                <option value="Authorized">Authorized</option>
              </select>
              <span className={`px-3 py-1 text-xs text-white ${status === 'Authorized' ? 'bg-success' : 'bg-bg-tertiary'}`}>
                {status}
              </span>
            </div>
          </div>
        </Card>

        {/* Center - Remarks */}
        <Card className="p-3">
          <div className="space-y-2">
            <div>
              <span className="text-xs text-text-secondary">Remarks</span>
              <textarea className="w-full h-16 text-xs mt-1 resize-none" />
            </div>
            <div>
              <span className="text-xs text-text-secondary">Print Footer (Terms & Conditions / Warranty Note)</span>
              <textarea className="w-full h-12 text-xs mt-1 resize-none" />
            </div>
            <button className="px-3 py-1 bg-bg-tertiary border border-border-custom text-xs hover:bg-bg-secondary">
              Set as Default
            </button>
          </div>
        </Card>

        {/* Right - Totals */}
        <Card className="p-3">
          <div className="space-y-2">
            {isTaxInvoice && (
              <div className="flex items-center justify-end gap-2">
                <span className="text-xs text-text-secondary">Advance Income Tax</span>
                <input type="text" value="0" className="w-12 text-xs text-right" />
                <span className="text-xs text-text-secondary">%</span>
                <span className="text-xs text-text-secondary w-8">Rs.</span>
                <input type="text" value="0.00" className="w-20 text-xs text-right" />
              </div>
            )}
            
            <div className="flex items-center justify-end gap-2">
              <span className="text-xs text-text-secondary">Discount</span>
              <input type="text" value="0" className="w-12 text-xs text-right" />
              <span className="text-xs text-text-secondary">%</span>
              <span className="text-xs text-text-secondary w-8">Rs.</span>
              <input type="text" value="0.00" className="w-20 text-xs text-right" />
            </div>
            
            <div className="flex items-center justify-end gap-2">
              <span className="text-xs text-text-secondary">Carriage and Freight</span>
              <span className="text-xs text-text-secondary w-8 ml-16">Rs.</span>
              <input type="text" value="0.00" className="w-20 text-xs text-right" />
            </div>
            
            <div className="flex items-center justify-end gap-2">
              <span className="text-xs text-text-secondary">Labour Charges</span>
              <span className="text-xs text-text-secondary w-8 ml-16">Rs.</span>
              <input type="text" value="0.00" className="w-20 text-xs text-right" />
            </div>
            
            <div className="flex items-center justify-end gap-2 border-t border-border-custom pt-2">
              <span className="text-sm font-semibold text-success">Net Total</span>
              <span className="text-xs text-text-secondary w-8">Rs.</span>
              <input type="text" value={isTaxInvoice ? "86400.00" : "72000.00"} className="w-24 text-sm font-bold text-success text-right" />
            </div>
            
            <div className="flex items-center justify-end gap-2">
              <span className="text-xs text-text-secondary">Ref. No.</span>
              <input type="text" className="w-20 text-xs" />
              <span className="text-xs text-text-secondary">Amount Received</span>
              <span className="text-xs text-text-secondary w-8">Rs.</span>
              <input type="text" value="0.00" className="w-20 text-xs text-right" />
            </div>
            
            <div className="flex items-center justify-end gap-2">
              <span className="text-xs text-text-secondary">Balance Transferred to Ledger</span>
              <span className="text-xs text-text-secondary w-8">Rs.</span>
              <input type="text" value={isTaxInvoice ? "86400.00" : "72000.00"} className="w-20 text-xs text-right" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
