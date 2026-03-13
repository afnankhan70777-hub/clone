import { useState } from 'react';
import { Calculator, Plus, Check, X, Trash2, Printer, Barcode, Image as ImageIcon } from 'lucide-react';
import { CustomCard as Card } from '@/components/ui/CustomCard';
import { productsData } from '@/data/mockData';

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState(productsData[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = productsData.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.code.includes(searchTerm)
  );

  return (
    <div className="p-4 space-y-3">
      {/* Title Bar */}
      <div className="bg-bg-tertiary border border-border-custom p-2 flex justify-between items-center">
        <h1 className="text-accent-orange font-bold text-xl">PRODUCTS</h1>
        <div className="flex items-center gap-2">
          <input 
            type="text" 
            placeholder="Search Product"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-40 text-xs"
          />
          <button className="px-3 py-1 bg-bg-secondary border border-border-custom text-xs hover:bg-bg-tertiary flex items-center gap-1">
            <RefreshCw className="w-3 h-3" />
            Refresh
          </button>
          <span className="text-xs text-text-secondary">Total Products:</span>
          <span className="text-danger font-bold">{filteredProducts.length}</span>
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
            <Barcode className="w-5 h-5" />
          </button>
          <button className="p-2 bg-bg-secondary border border-border-custom hover:bg-bg-tertiary">
            <Printer className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-12 gap-4">
        {/* Left Column - General Info */}
        <div className="col-span-5 space-y-4">
          <Card>
            <div className="text-accent-teal font-bold text-sm mb-3">General Info</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Product Category</span>
                <select className="flex-1 text-xs" value={selectedProduct.category}>
                  <option value="Dairy">Dairy</option>
                  <option value="Personal Care">Personal Care</option>
                  <option value="Bakery">Bakery</option>
                  <option value="Beverages">Beverages</option>
                  <option value="Snacks">Snacks</option>
                </select>
                <button className="px-2 py-1 bg-bg-tertiary border border-border-custom text-xs">...</button>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Sub-Category</span>
                <select className="flex-1 text-xs" value={selectedProduct.subCategory}>
                  <option value="Frozen">Frozen</option>
                  <option value="Hair Care">Hair Care</option>
                  <option value="Snacks">Snacks</option>
                  <option value="Liquid">Liquid</option>
                  <option value="Soft Drinks">Soft Drinks</option>
                  <option value="Chips">Chips</option>
                </select>
                <button className="px-2 py-1 bg-bg-tertiary border border-border-custom text-xs">...</button>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Product Auto Code</span>
                <input type="text" value={selectedProduct.code} className="w-28 text-xs text-[#2196f3]" readOnly />
                <span className="text-xs text-text-secondary ml-2">Bar Code</span>
                <input type="text" className="flex-1 text-xs" />
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Product Name</span>
                <input type="text" value={selectedProduct.name} className="flex-1 text-xs text-danger" />
              </div>
              
              <div className="flex items-start gap-2">
                <span className="text-xs text-text-secondary w-28 pt-1">Description</span>
                <textarea value={selectedProduct.description} className="flex-1 text-xs h-12 resize-none" />
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Measurement Unit</span>
                <select className="w-20 text-xs" value={selectedProduct.unit}>
                  <option value="Pcs">Pcs</option>
                  <option value="Kg">Kg</option>
                  <option value="Ltr">Ltr</option>
                </select>
                <span className="text-xs text-text-secondary ml-2">Pcs per Packs</span>
                <input type="text" value={selectedProduct.pcsPerPack} className="w-16 text-xs text-center" />
                <div className="flex items-center gap-1 ml-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-xs text-text-secondary">Variable</span>
                </div>
                <span className="text-xs text-text-secondary ml-2">Rate Per</span>
                <select className="w-16 text-xs">
                  <option value="Pcs">Pcs</option>
                </select>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Packing</span>
                <input type="text" className="w-24 text-xs" />
                <span className="text-xs text-text-secondary ml-2">Rack No</span>
                <select className="w-20 text-xs">
                  <option value=""></option>
                </select>
                <span className="text-xs text-text-secondary ml-2">H.S. Code</span>
                <input type="text" className="w-24 text-xs" />
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Valuation Method</span>
                <select className="flex-1 text-xs">
                  <option>Weighted Average Cost (Automatically Calculated)</option>
                </select>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Product Cost</span>
                <input type="text" value={selectedProduct.productCost.toFixed(4)} className="w-28 text-xs" />
                <span className="text-xs text-text-secondary ml-2">Re-Order Quantity</span>
                <input type="text" value="0" className="w-20 text-xs" />
                <div className="flex items-center gap-1 ml-auto">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-xs text-text-secondary">Inactive Product</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Price Settings - Sales Tax */}
          <Card>
            <div className="text-accent-teal font-bold text-sm mb-3">Price Settings (Sales Tax)</div>
            <div className="space-y-2">
              <div className="bg-bg-tertiary p-2">
                <div className="text-accent-orange text-xs font-semibold mb-2">Purchase Price</div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-secondary w-12">Price</span>
                  <input type="text" value="1170.00" className="w-20 text-xs" />
                  <span className="text-xs text-text-secondary ml-2">Price (Ex.Tax)</span>
                  <input type="text" value="1170.00" className="w-20 text-xs" />
                  <span className="text-xs text-text-secondary ml-2">Disc. Type</span>
                  <select className="w-24 text-xs">
                    <option>Percentage</option>
                  </select>
                  <span className="text-xs text-text-secondary ml-2">Disc.</span>
                  <input type="text" value="0" className="w-12 text-xs" />
                </div>
              </div>
              
              <div className="bg-bg-tertiary p-2">
                <div className="text-accent-orange text-xs font-semibold mb-2">Selling Price</div>
                <div className="space-y-1">
                  {['Price Level 1', 'Price Level 2', 'Price Level 3', 'Price Level 4'].map((level, i) => (
                    <div key={level} className="flex items-center gap-2">
                      <span className="text-xs text-text-secondary w-20">{level}</span>
                      <input type="text" value={i === 0 ? '1250.00' : i === 1 ? '320.00' : i === 2 ? '325.00' : '327.00'} className="w-20 text-xs" />
                      <select className="w-24 text-xs">
                        <option>Percentage</option>
                      </select>
                      <input type="text" value={i === 0 ? '5' : '0'} className="w-12 text-xs" />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary">Minimum Selling Price (Exc. Tax)</span>
                <input type="text" value="0.00" className="w-20 text-xs" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary">Maximum Retail Price (Exc. Tax)</span>
                <input type="text" value="330.00" className="w-20 text-xs" />
              </div>
            </div>
          </Card>

          {/* Price Settings - Non Tax */}
          <Card>
            <div className="text-accent-teal font-bold text-sm mb-3">Price Settings (Non Tax)</div>
            <div className="space-y-2">
              <div className="bg-bg-tertiary p-2">
                <div className="text-accent-orange text-xs font-semibold mb-2">Purchase Price</div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-secondary w-12">Price</span>
                  <input type="text" value="1170.00" className="w-20 text-xs" />
                  <span className="text-xs text-text-secondary ml-2">Gross Price</span>
                  <input type="text" value="1170.00" className="w-20 text-xs" />
                  <span className="text-xs text-text-secondary ml-2">Disc. Type</span>
                  <select className="w-24 text-xs">
                    <option>Percentage</option>
                  </select>
                  <span className="text-xs text-text-secondary ml-2">Disc.</span>
                  <input type="text" value="0" className="w-12 text-xs" />
                </div>
              </div>
              
              <div className="bg-bg-tertiary p-2">
                <div className="text-accent-orange text-xs font-semibold mb-2">Selling Price</div>
                <div className="space-y-1">
                  {['Price Level 1', 'Price Level 2', 'Price Level 3', 'Price Level 4'].map((level, i) => (
                    <div key={level} className="flex items-center gap-2">
                      <span className="text-xs text-text-secondary w-20">{level}</span>
                      <input type="text" value={i === 0 ? '1250.00' : '0.00'} className="w-20 text-xs" />
                      <select className="w-24 text-xs">
                        <option>Percentage</option>
                      </select>
                      <input type="text" value="0" className="w-12 text-xs" />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary">Minimum Selling Price</span>
                <input type="text" value="0.00" className="w-20 text-xs" />
              </div>
            </div>
          </Card>
        </div>

        {/* Middle Column - Image and Groups */}
        <div className="col-span-3 space-y-4">
          {/* Product Image */}
          <Card>
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-bg-tertiary border border-border-custom flex items-center justify-center mb-2">
                <ImageIcon className="w-16 h-16 text-text-secondary" />
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-bg-tertiary border border-border-custom text-xs hover:bg-bg-secondary">
                  Image
                </button>
                <button className="px-3 py-1 bg-bg-tertiary border border-border-custom text-xs hover:bg-bg-secondary">
                  Remove
                </button>
              </div>
            </div>
          </Card>

          {/* Groups */}
          <Card>
            <div className="text-accent-teal font-bold text-sm mb-3">Groups</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-24">Product Type</span>
                <select className="flex-1 text-xs">
                  <option>Finished Product</option>
                </select>
                <button className="px-2 py-1 bg-bg-tertiary border border-border-custom text-xs">...</button>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-24">Brand</span>
                <select className="flex-1 text-xs">
                  <option>Adams</option>
                </select>
                <button className="px-2 py-1 bg-bg-tertiary border border-border-custom text-xs">...</button>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-24">Vendor</span>
                <select className="flex-1 text-xs">
                  <option>Green Age Marketing</option>
                </select>
                <button className="px-2 py-1 bg-bg-tertiary border border-border-custom text-xs">...</button>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-24">Other Group 1</span>
                <select className="flex-1 text-xs">
                  <option>Perishable</option>
                </select>
                <button className="px-2 py-1 bg-bg-tertiary border border-border-custom text-xs">...</button>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-24">Other Group 2</span>
                <select className="flex-1 text-xs">
                  <option>Imported</option>
                </select>
                <button className="px-2 py-1 bg-bg-tertiary border border-border-custom text-xs">...</button>
              </div>
            </div>
          </Card>

          {/* Sales Promotion */}
          <Card>
            <div className="text-accent-teal font-bold text-sm mb-3">Sales Promotion</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-secondary">Active</span>
                  <input type="checkbox" className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-secondary">Valid Till</span>
                  <input type="text" value="10/12/2020" className="w-24 text-xs" />
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">On Sale of Cartons</span>
                <input type="text" value="0" className="w-16 text-xs" />
                <span className="text-xs text-text-secondary">Pieces</span>
                <input type="text" value="0" className="w-16 text-xs" />
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary w-28">Free of Cost Cartons</span>
                <input type="text" value="0" className="w-16 text-xs" />
                <span className="text-xs text-text-secondary">Pieces</span>
                <input type="text" value="0" className="w-16 text-xs" />
              </div>
            </div>
          </Card>

          {/* Taxes */}
          <Card>
            <div className="text-accent-teal font-bold text-sm mb-3">Taxes</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary flex-1">Federal Duties and Sales Tax Apply</span>
                <input type="checkbox" className="w-4 h-4" defaultChecked />
              </div>
              
              <div className="pl-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-secondary flex-1">1 - F.E.D. on Maximum Retail Price</span>
                  <input type="checkbox" className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-secondary w-20">F.E.D. Rate</span>
                  <input type="text" value="0" className="w-16 text-xs" />
                  <span className="text-xs text-text-secondary">Rate Type</span>
                  <select className="w-24 text-xs">
                    <option>Percentage</option>
                  </select>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-secondary flex-1">2 - Sales Tax on Maximum Retail Price</span>
                  <input type="checkbox" className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-secondary w-20">Sales Tax Rate</span>
                  <input type="text" value="17" className="w-16 text-xs" />
                  <span className="text-xs text-text-secondary">Rate Type</span>
                  <select className="w-24 text-xs">
                    <option>Percentage</option>
                  </select>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-secondary w-32">3 - Extra Tax Rate (%)</span>
                  <input type="text" value="0" className="w-16 text-xs" />
                </div>
              </div>
              
              <div className="flex items-center gap-2 pt-2 border-t border-border-custom">
                <span className="text-xs text-text-secondary flex-1">State / Provincial Sales Tax Apply</span>
                <input type="checkbox" className="w-4 h-4" />
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column - Product List */}
        <div className="col-span-4">
          <Card className="h-full">
            <div className="text-accent-teal font-bold text-sm mb-3">Product List</div>
            <div className="border border-border-custom overflow-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
              <table className="w-full">
                <thead className="sticky top-0">
                  <tr className="bg-bg-tertiary">
                    <th className="text-xs py-1 px-2 border border-border-custom text-white">Code</th>
                    <th className="text-xs py-1 px-2 border border-border-custom text-white">Name</th>
                    <th className="text-xs py-1 px-2 border border-border-custom text-white">Category</th>
                    <th className="text-xs py-1 px-2 border border-border-custom text-white">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product, i) => (
                    <tr 
                      key={product.code} 
                      className={`cursor-pointer hover:bg-bg-tertiary ${i % 2 === 0 ? 'bg-bg-secondary' : 'bg-bg-primary'} ${selectedProduct.code === product.code ? 'bg-accent-orange' : ''}`}
                      onClick={() => setSelectedProduct(product)}
                    >
                      <td className="text-xs py-1 px-2 border border-border-custom">{product.code}</td>
                      <td className="text-xs py-1 px-2 border border-border-custom">{product.name}</td>
                      <td className="text-xs py-1 px-2 border border-border-custom">{product.category}</td>
                      <td className="text-xs py-1 px-2 border border-border-custom text-right">{product.productCost.toFixed(2)}</td>
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

import { RefreshCw } from 'lucide-react';
