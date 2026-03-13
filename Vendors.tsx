import { useState } from 'react';
import { Calculator, Plus, Check, X, Trash2, Printer, RefreshCw } from 'lucide-react';
import { CustomCard as Card } from '@/components/ui/CustomCard';
import { vendorsData } from '@/data/mockData';

export function Vendors() {
  const [selectedVendor, setSelectedVendor] = useState(vendorsData[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVendors = vendorsData.filter(v => 
    v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.code.includes(searchTerm)
  );

  return (
    <div className="p-4 space-y-3">
      {/* Title Bar */}
      <div className="bg-bg-tertiary border border-border-custom p-2 flex justify-between items-center">
        <h1 className="text-accent-orange font-bold text-xl">VENDORS</h1>
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
          <span className="text-xs text-text-secondary">Total Vendors:</span>
          <span className="text-danger font-bold">{filteredVendors.length}</span>
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
                <span className="text-xs text-text-secondary w-28">Vendor Type</span>
                <select className="flex-1 text-xs" value={selectedVendor.type}>
                  <option value="Local Vendors">Local Vendors</option>
                  <option value="Import Vendors">Import Vendors</option>
                  <option value="Service Vendors">Service Vendors</option>
                </select>
                <button className="px-2 py-1 bg-bg-tertiary border border-border-custom text-xs">...</button>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Account Code</span>
                <input type="text" value={selectedVendor.code} className="flex-1 text-xs" readOnly />
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Vendor Name</span>
                <input type="text" value={selectedVendor.name} className="flex-1 text-xs" />
              </div>
              
              <div className="flex items-start gap-2">
                <span className="text-xs text-text-secondary w-28 pt-1">Address</span>
                <textarea value={selectedVendor.address} className="flex-1 text-xs h-16 resize-none" />
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Contact Person</span>
                <input type="text" value={selectedVendor.contactPerson} className="flex-1 text-xs" />
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Contact No.</span>
                <input type="text" value={selectedVendor.contactNo} className="flex-1 text-xs" />
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">E-Mail</span>
                <input type="text" value={selectedVendor.email} className="flex-1 text-xs" />
              </div>
              
              <div className="flex items-center gap-2 justify-end">
                <span className="text-xs text-text-secondary">Inactive Account</span>
                <input type="checkbox" className="w-4 h-4" />
              </div>
            </div>
          </Card>

          {/* Remarks */}
          <Card>
            <div className="text-accent-teal font-bold text-sm mb-3">Remarks</div>
            <textarea className="w-full h-24 text-xs resize-none" />
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
                <input type="text" value={selectedVendor.creditTerms} className="flex-1 text-xs" />
                <span className="text-xs text-text-secondary">Credit Days</span>
                <input type="text" value={selectedVendor.creditDays} className="w-16 text-xs text-center" />
                <span className="text-xs text-text-secondary">Credit Limit</span>
                <input type="text" value={selectedVendor.creditLimit} className="w-20 text-xs text-right" />
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
                  <input type="checkbox" className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-secondary w-32">National Tax Number (N.T.N.)</span>
                  <input type="text" className="flex-1 text-xs" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-secondary w-32">C.N.I.C. No.</span>
                  <input type="text" className="flex-1 text-xs" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-secondary flex-1">Active Taxpayer (Sales Tax)</span>
                  <input type="checkbox" className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-secondary w-32">Sales Tax Registration No.</span>
                  <input type="text" className="flex-1 text-xs" />
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
                  {[...Array(5)].map((_, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-bg-secondary' : 'bg-bg-primary'}>
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

      {/* Vendor List */}
      <Card>
        <div className="text-accent-teal font-bold text-sm mb-3">Vendor List</div>
        <div className="border border-border-custom max-h-32 overflow-auto">
          <table className="w-full">
            <thead className="sticky top-0">
              <tr className="bg-bg-tertiary">
                <th className="text-xs py-1 px-2 border border-border-custom text-white">Code</th>
                <th className="text-xs py-1 px-2 border border-border-custom text-white">Name</th>
                <th className="text-xs py-1 px-2 border border-border-custom text-white">Type</th>
                <th className="text-xs py-1 px-2 border border-border-custom text-white">Contact</th>
              </tr>
            </thead>
            <tbody>
              {filteredVendors.map((vendor, i) => (
                <tr 
                  key={vendor.code} 
                  className={`cursor-pointer hover:bg-bg-tertiary ${i % 2 === 0 ? 'bg-bg-secondary' : 'bg-bg-primary'} ${selectedVendor.code === vendor.code ? 'bg-accent-orange' : ''}`}
                  onClick={() => setSelectedVendor(vendor)}
                >
                  <td className="text-xs py-1 px-2 border border-border-custom">{vendor.code}</td>
                  <td className="text-xs py-1 px-2 border border-border-custom">{vendor.name}</td>
                  <td className="text-xs py-1 px-2 border border-border-custom">{vendor.type}</td>
                  <td className="text-xs py-1 px-2 border border-border-custom">{vendor.contactNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
