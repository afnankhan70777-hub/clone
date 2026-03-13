import { useState } from 'react';
import { Calculator, Plus, Check, X, Trash2, Printer, RefreshCw } from 'lucide-react';
import { CustomCard as Card } from '@/components/ui/CustomCard';
import { customersData } from '@/data/mockData';

export function Customers() {
  const [selectedCustomer, setSelectedCustomer] = useState(customersData[2]);
  const [activeTab, setActiveTab] = useState<'billing' | 'shipping'>('billing');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = customersData.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.code.includes(searchTerm)
  );

  return (
    <div className="p-4 space-y-3">
      {/* Title Bar */}
      <div className="bg-bg-tertiary border border-border-custom p-2 flex justify-between items-center">
        <h1 className="text-accent-orange font-bold text-xl">CUSTOMERS</h1>
        <div className="flex items-center gap-2">
          <input 
            type="text" 
            placeholder="Search Account"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-40 text-xs"
          />
          <button className="px-3 py-1 bg-bg-secondary border border-border-custom text-xs hover:bg-bg-tertiary flex items-center gap-1">
            <RefreshCw className="w-3 h-3" />
            Refresh
          </button>
          <span className="text-xs text-text-secondary">Total Customers:</span>
          <span className="text-danger font-bold">{filteredCustomers.length}</span>
        </div>
        <div className="flex gap-1">
          <button className="p-2 bg-bg-secondary border border-border-custom hover:bg-bg-tertiary">
            <Calculator className="w-5 h-5" />
          </button>
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
        <div className="space-y-4">
          {/* General Info */}
          <Card>
            <div className="text-accent-teal font-bold text-sm mb-3">General Info</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Customer Type</span>
                <select className="flex-1 text-xs" value={selectedCustomer.type}>
                  <option value="Local Customers">Local Customers</option>
                  <option value="Corporate Customers">Corporate Customers</option>
                  <option value="Institutional Customers">Institutional Customers</option>
                </select>
                <button className="px-2 py-1 bg-bg-tertiary border border-border-custom text-xs">...</button>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Account Code</span>
                <input type="text" value={selectedCustomer.code} className="w-28 text-xs" readOnly />
                <span className="text-xs text-text-secondary ml-2">Vendor Code</span>
                <input type="text" className="w-28 text-xs" />
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Customer Name</span>
                <input type="text" value={selectedCustomer.name} className="flex-1 text-xs text-danger" />
              </div>

              {/* Address Tabs */}
              <div className="flex gap-1 mt-2">
                <button 
                  onClick={() => setActiveTab('billing')}
                  className={`px-3 py-1 text-xs ${activeTab === 'billing' ? 'bg-accent-teal text-white' : 'bg-bg-tertiary text-text-secondary'}`}
                >
                  Billing Address
                </button>
                <button 
                  onClick={() => setActiveTab('shipping')}
                  className={`px-3 py-1 text-xs ${activeTab === 'shipping' ? 'bg-accent-teal text-white' : 'bg-bg-tertiary text-text-secondary'}`}
                >
                  Shipping Address
                </button>
              </div>
              
              <div className="flex items-start gap-2">
                <span className="text-xs text-text-secondary w-28 pt-1">
                  {activeTab === 'billing' ? 'Billing Address' : 'Shipping Address'}
                </span>
                <textarea 
                  value={activeTab === 'billing' ? selectedCustomer.billingAddress : selectedCustomer.shippingAddress} 
                  className="flex-1 text-xs h-16 resize-none" 
                />
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Contact Person</span>
                <input type="text" value={selectedCustomer.contactPerson} className="flex-1 text-xs" />
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Contact No.</span>
                <input type="text" value={selectedCustomer.contactNo} className="flex-1 text-xs" />
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">E-Mail</span>
                <input type="text" value={selectedCustomer.email} className="flex-1 text-xs" />
              </div>
              
              <div className="flex items-center gap-2 justify-end">
                <span className="text-xs text-text-secondary">Inactive Account</span>
                <input type="checkbox" className="w-4 h-4" />
              </div>
            </div>
          </Card>

          {/* Groups */}
          <Card>
            <div className="text-accent-teal font-bold text-sm mb-3">Groups</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Region</span>
                <select className="flex-1 text-xs" value={selectedCustomer.region}>
                  <option value="">{selectedCustomer.region}</option>
                </select>
                <button className="px-2 py-1 bg-bg-tertiary border border-border-custom text-xs">...</button>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Sub Region</span>
                <select className="flex-1 text-xs" value={selectedCustomer.subRegion}>
                  <option value="">{selectedCustomer.subRegion}</option>
                </select>
                <button className="px-2 py-1 bg-bg-tertiary border border-border-custom text-xs">...</button>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Account Manager</span>
                <select className="flex-1 text-xs" value={selectedCustomer.accountManager}>
                  <option value="">{selectedCustomer.accountManager}</option>
                </select>
                <button className="px-2 py-1 bg-bg-tertiary border border-border-custom text-xs">...</button>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Other Group 1</span>
                <select className="flex-1 text-xs">
                  <option value="">sample group</option>
                </select>
                <button className="px-2 py-1 bg-bg-tertiary border border-border-custom text-xs">...</button>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Other Group 2</span>
                <select className="flex-1 text-xs">
                  <option value="">Distributors</option>
                </select>
                <button className="px-2 py-1 bg-bg-tertiary border border-border-custom text-xs">...</button>
              </div>
            </div>
          </Card>

          {/* Remarks */}
          <Card>
            <div className="text-accent-teal font-bold text-sm mb-3">Remarks</div>
            <textarea className="w-full h-20 text-xs resize-none" />
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Credit Terms */}
          <Card>
            <div className="text-accent-teal font-bold text-sm mb-3">Credit Terms</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-24">Credit Terms</span>
                <input type="text" value={selectedCustomer.creditTerms} className="flex-1 text-xs" />
                <span className="text-xs text-text-secondary">Credit Days</span>
                <input type="text" value={selectedCustomer.creditDays} className="w-16 text-xs text-center" />
                <span className="text-xs text-text-secondary">Credit Limit</span>
                <input type="text" value={selectedCustomer.creditLimit} className="w-20 text-xs text-right" />
              </div>
            </div>
          </Card>

          {/* Price Levels */}
          <Card>
            <div className="text-accent-teal font-bold text-sm mb-3">Price Levels</div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-accent-orange text-xs font-semibold mb-2">Sales Tax</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-text-secondary w-16">Supplies</span>
                    <select className="flex-1 text-xs">
                      <option>Price Level 1</option>
                      <option>Price Level 2</option>
                      <option>Price Level 3</option>
                      <option>Price Level 4</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-text-secondary w-16">Services</span>
                    <select className="flex-1 text-xs">
                      <option>Price Level 1</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-accent-orange text-xs font-semibold mb-2">Non Tax</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-text-secondary w-24">Supplies & Services</span>
                    <select className="flex-1 text-xs">
                      <option>Price Level 1</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Taxes */}
          <Card>
            <div className="text-accent-teal font-bold text-sm mb-3">Taxes</div>
            <div className="grid grid-cols-2 gap-4">
              {/* Federal */}
              <div className="space-y-2">
                <div className="text-accent-orange text-xs font-semibold">Federal</div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-secondary flex-1">Active Taxpayer (Income Tax)</span>
                  <input type="checkbox" className="w-4 h-4" defaultChecked />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-secondary w-32">National Tax Number (N.T.N.)</span>
                  <input type="text" value="346346346" className="flex-1 text-xs" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-secondary w-32">C.N.I.C. No.</span>
                  <input type="text" className="flex-1 text-xs" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-secondary flex-1">Active Taxpayer (Sales Tax)</span>
                  <input type="checkbox" className="w-4 h-4" defaultChecked />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-secondary w-32">Sales Tax Registration No.</span>
                  <input type="text" value="3463-3463" className="flex-1 text-xs" />
                </div>
              </div>

              {/* State/Provincial */}
              <div className="space-y-2">
                <div className="text-accent-orange text-xs font-semibold">State / Provincial</div>
                <div className="border border-border-custom">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-bg-tertiary">
                        <th className="text-xs py-1 px-2 border border-border-custom text-white">State / Province</th>
                        <th className="text-xs py-1 px-2 border border-border-custom text-white">Tax Regn. No.</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-xs py-1 px-2 border border-border-custom">
                          <select className="w-full text-xs">
                            <option value=""></option>
                          </select>
                        </td>
                        <td className="text-xs py-1 px-2 border border-border-custom">
                          <input type="text" className="w-full text-xs" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Card>

          {/* Directory */}
          <Card>
            <div className="text-accent-teal font-bold text-sm mb-3">Directory</div>
            <div className="border border-border-custom">
              <table className="w-full">
                <thead>
                  <tr className="bg-bg-tertiary">
                    <th className="text-xs py-1 px-2 border border-border-custom text-white w-8"></th>
                    <th className="text-xs py-1 px-2 border border-border-custom text-white">Name</th>
                    <th className="text-xs py-1 px-2 border border-border-custom text-white">Designation</th>
                    <th className="text-xs py-1 px-2 border border-border-custom text-white">Landline</th>
                    <th className="text-xs py-1 px-2 border border-border-custom text-white">Mobile</th>
                    <th className="text-xs py-1 px-2 border border-border-custom text-white">E-Mail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-bg-secondary">
                    <td className="text-xs py-1 px-2 border border-border-custom">
                      <div className="w-4 h-4 bg-bg-tertiary border border-border-custom" />
                    </td>
                    <td className="text-xs py-1 px-2 border border-border-custom">Khalid Ahmad Khan</td>
                    <td className="text-xs py-1 px-2 border border-border-custom">CEO</td>
                    <td className="text-xs py-1 px-2 border border-border-custom"></td>
                    <td className="text-xs py-1 px-2 border border-border-custom">0512 5125121</td>
                    <td className="text-xs py-1 px-2 border border-border-custom"></td>
                  </tr>
                  {[...Array(4)].map((_, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-bg-primary' : 'bg-bg-secondary'}>
                      <td className="text-xs py-1 px-2 border border-border-custom">
                        <div className="w-4 h-4 bg-bg-tertiary border border-border-custom" />
                      </td>
                      <td className="text-xs py-1 px-2 border border-border-custom"></td>
                      <td className="text-xs py-1 px-2 border border-border-custom"></td>
                      <td className="text-xs py-1 px-2 border border-border-custom"></td>
                      <td className="text-xs py-1 px-2 border border-border-custom"></td>
                      <td className="text-xs py-1 px-2 border border-border-custom"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>

      {/* Customer List */}
      <Card>
        <div className="text-accent-teal font-bold text-sm mb-3">Customer List</div>
        <div className="border border-border-custom max-h-32 overflow-auto">
          <table className="w-full">
            <thead className="sticky top-0">
              <tr className="bg-bg-tertiary">
                <th className="text-xs py-1 px-2 border border-border-custom text-white">Code</th>
                <th className="text-xs py-1 px-2 border border-border-custom text-white">Name</th>
                <th className="text-xs py-1 px-2 border border-border-custom text-white">Type</th>
                <th className="text-xs py-1 px-2 border border-border-custom text-white">Region</th>
                <th className="text-xs py-1 px-2 border border-border-custom text-white">Contact</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer, i) => (
                <tr 
                  key={customer.code} 
                  className={`cursor-pointer hover:bg-bg-tertiary ${i % 2 === 0 ? 'bg-bg-secondary' : 'bg-bg-primary'} ${selectedCustomer.code === customer.code ? 'bg-accent-orange' : ''}`}
                  onClick={() => setSelectedCustomer(customer)}
                >
                  <td className="text-xs py-1 px-2 border border-border-custom">{customer.code}</td>
                  <td className="text-xs py-1 px-2 border border-border-custom">{customer.name}</td>
                  <td className="text-xs py-1 px-2 border border-border-custom">{customer.type}</td>
                  <td className="text-xs py-1 px-2 border border-border-custom">{customer.region}</td>
                  <td className="text-xs py-1 px-2 border border-border-custom">{customer.contactNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
