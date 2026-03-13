import { X, Check } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { companyData, stateProvinces } from '@/data/mockData';

interface CompanySetupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CompanySetupModal({ isOpen, onClose }: CompanySetupModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-bg-primary border-2 border-accent-orange p-0">
        <DialogHeader className="bg-accent-orange p-3 flex flex-row justify-between items-center">
          <DialogTitle className="text-white text-sm font-semibold">Company Setup</DialogTitle>
          <div className="flex gap-1">
            <button className="p-1 bg-success hover:brightness-110">
              <Check className="w-5 h-5 text-white" />
            </button>
            <button onClick={onClose} className="p-1 bg-danger hover:brightness-110">
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        </DialogHeader>
        
        <div className="p-4 space-y-4">
          <h2 className="text-accent-cyan font-bold text-xl">COMPANY SETUP</h2>
          
          <div className="grid grid-cols-2 gap-6">
            {/* Basic Info */}
            <div>
              <div className="text-accent-teal font-bold text-sm mb-3">Basic Info</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-secondary w-32">Company / Branch Name</span>
                  <input type="text" value={companyData.name} className="flex-1 text-xs" />
                </div>
                
                <div className="flex items-start gap-2">
                  <span className="text-xs text-text-secondary w-32 pt-1">Address</span>
                  <textarea value={companyData.address} className="flex-1 text-xs h-12 resize-none" />
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-secondary w-32">Phone(s)</span>
                  <input type="text" value={companyData.phone} className="flex-1 text-xs" />
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-secondary w-32">E-Mail</span>
                  <input type="text" value={companyData.email} className="flex-1 text-xs" />
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-secondary w-32">Website</span>
                  <input type="text" value={companyData.website} className="flex-1 text-xs" />
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-secondary w-32">Company / Branch Nick</span>
                  <input type="text" value="Head Office" className="flex-1 text-xs" />
                </div>
                
                <p className="text-xs text-text-secondary italic">
                  (This would be displayed at the login screen to differentiate between company or branch with the same name.)
                </p>
              </div>
            </div>

            {/* Company Logo */}
            <div>
              <div className="text-accent-teal font-bold text-sm mb-3">Company Logo</div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-white border border-border-custom flex items-center justify-center mb-2">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#1e88e5] rounded-full mx-auto flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">A</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-bg-tertiary border border-border-custom text-xs hover:bg-bg-secondary">
                    Set New Logo
                  </button>
                  <button className="px-3 py-1 bg-bg-tertiary border border-border-custom text-xs hover:bg-bg-secondary">
                    Remove
                  </button>
                </div>
                <p className="text-xs text-text-secondary mt-2 text-center">
                  (Recommended size for logo is 100 x 100 px)
                </p>
              </div>
            </div>
          </div>

          {/* Tax Info */}
          <div className="grid grid-cols-2 gap-6">
            {/* Federal Tax Info */}
            <div>
              <div className="text-accent-teal font-bold text-sm mb-3">Federal Tax Info</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-secondary w-40">National Tax No. (N.T.N.)</span>
                  <input type="text" value={companyData.ntn} className="flex-1 text-xs" />
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-secondary w-40">Sales Tax Regn. No.</span>
                  <input type="text" value={companyData.salesTaxRegn} className="flex-1 text-xs" />
                </div>
              </div>
            </div>

            {/* State/Provincial Tax Info */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <div className="text-accent-teal font-bold text-sm">State / Provincial Tax Info</div>
                <button className="px-3 py-1 bg-bg-tertiary border border-border-custom text-xs hover:bg-bg-secondary">
                  Modify States / Provinces
                </button>
              </div>
              <div className="border border-border-custom">
                <table className="w-full">
                  <thead>
                    <tr className="bg-bg-tertiary">
                      <th className="text-xs py-1 px-2 border border-border-custom text-white w-8"></th>
                      <th className="text-xs py-1 px-2 border border-border-custom text-white">State / Province</th>
                      <th className="text-xs py-1 px-2 border border-border-custom text-white">Tax Registration No.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stateProvinces.map((state, i) => (
                      <tr key={state.name} className={i % 2 === 0 ? 'bg-bg-secondary' : 'bg-bg-primary'}>
                        <td className="text-xs py-1 px-2 border border-border-custom">
                          <div className="w-4 h-4 bg-bg-tertiary border border-border-custom" />
                        </td>
                        <td className="text-xs py-1 px-2 border border-border-custom text-text-primary">{state.name}</td>
                        <td className="text-xs py-1 px-2 border border-border-custom text-text-primary">{state.taxRegnNo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
