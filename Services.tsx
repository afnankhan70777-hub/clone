import { useState } from 'react';
import { Calculator, Plus, Check, X, Trash2, Printer, RefreshCw } from 'lucide-react';
import { CustomCard as Card } from '@/components/ui/CustomCard';

const servicesData = [
  { code: '3000000001', name: 'Consulting Services', category: 'Professional', rate: 5000 },
  { code: '3000000002', name: 'Technical Support', category: 'IT Services', rate: 3000 },
  { code: '3000000003', name: 'Training Services', category: 'Education', rate: 2500 },
  { code: '3000000004', name: 'Maintenance', category: 'Technical', rate: 4000 },
];

export function Services() {
  const [selectedService, setSelectedService] = useState(servicesData[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = servicesData.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.code.includes(searchTerm)
  );

  return (
    <div className="p-4 space-y-3">
      {/* Title Bar */}
      <div className="bg-bg-tertiary border border-border-custom p-2 flex justify-between items-center">
        <h1 className="text-accent-orange font-bold text-xl">SERVICES</h1>
        <div className="flex items-center gap-2">
          <input 
            type="text" 
            placeholder="Search Service"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-40 text-xs"
          />
          <button className="px-3 py-1 bg-bg-secondary border border-border-custom text-xs hover:bg-bg-tertiary flex items-center gap-1">
            <RefreshCw className="w-3 h-3" />
            Refresh
          </button>
          <span className="text-xs text-text-secondary">Total Services:</span>
          <span className="text-danger font-bold">{filteredServices.length}</span>
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
                <span className="text-xs text-text-secondary w-28">Service Code</span>
                <input type="text" value={selectedService.code} className="w-28 text-xs text-[#2196f3]" readOnly />
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Service Name</span>
                <input type="text" value={selectedService.name} className="flex-1 text-xs text-danger" />
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Category</span>
                <select className="flex-1 text-xs" value={selectedService.category}>
                  <option value="Professional">Professional</option>
                  <option value="IT Services">IT Services</option>
                  <option value="Education">Education</option>
                  <option value="Technical">Technical</option>
                </select>
                <button className="px-2 py-1 bg-bg-tertiary border border-border-custom text-xs">...</button>
              </div>
              
              <div className="flex items-start gap-2">
                <span className="text-xs text-text-secondary w-28 pt-1">Description</span>
                <textarea className="flex-1 text-xs h-16 resize-none" />
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Standard Rate</span>
                <input type="text" value={selectedService.rate.toFixed(2)} className="w-24 text-xs" />
                <span className="text-xs text-text-secondary">Rs.</span>
              </div>
              
              <div className="flex items-center gap-2 justify-end">
                <span className="text-xs text-text-secondary">Inactive Service</span>
                <input type="checkbox" className="w-4 h-4" />
              </div>
            </div>
          </Card>

          {/* Tax Info */}
          <Card>
            <div className="text-accent-teal font-bold text-sm mb-3">Tax Information</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary flex-1">Federal Sales Tax Apply</span>
                <input type="checkbox" className="w-4 h-4" defaultChecked />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-32">Sales Tax Rate (%)</span>
                <input type="text" value="17" className="w-16 text-xs" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary flex-1">State / Provincial Sales Tax Apply</span>
                <input type="checkbox" className="w-4 h-4" />
              </div>
            </div>
          </Card>

          {/* Remarks */}
          <Card>
            <div className="text-accent-teal font-bold text-sm mb-3">Remarks</div>
            <textarea className="w-full h-20 text-xs resize-none" />
          </Card>
        </div>

        {/* Right Column - Service List */}
        <div>
          <Card className="h-full">
            <div className="text-accent-teal font-bold text-sm mb-3">Service List</div>
            <div className="border border-border-custom overflow-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
              <table className="w-full">
                <thead className="sticky top-0">
                  <tr className="bg-bg-tertiary">
                    <th className="text-xs py-1 px-2 border border-border-custom text-white">Code</th>
                    <th className="text-xs py-1 px-2 border border-border-custom text-white">Name</th>
                    <th className="text-xs py-1 px-2 border border-border-custom text-white">Category</th>
                    <th className="text-xs py-1 px-2 border border-border-custom text-white">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredServices.map((service, i) => (
                    <tr 
                      key={service.code} 
                      className={`cursor-pointer hover:bg-bg-tertiary ${i % 2 === 0 ? 'bg-bg-secondary' : 'bg-bg-primary'} ${selectedService.code === service.code ? 'bg-accent-orange' : ''}`}
                      onClick={() => setSelectedService(service)}
                    >
                      <td className="text-xs py-1 px-2 border border-border-custom">{service.code}</td>
                      <td className="text-xs py-1 px-2 border border-border-custom">{service.name}</td>
                      <td className="text-xs py-1 px-2 border border-border-custom">{service.category}</td>
                      <td className="text-xs py-1 px-2 border border-border-custom text-right">{service.rate.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
