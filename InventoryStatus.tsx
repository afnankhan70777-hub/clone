import { useState } from 'react';
import { Search, FileSpreadsheet, Printer, Package } from 'lucide-react';
import { CustomCard as Card } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { productsData } from '@/data/mockData';

const inventoryData = productsData.map(p => {
  const opening = Math.floor(Math.random() * 100) + 50;
  const received = Math.floor(Math.random() * 50) + 20;
  const sold = Math.floor(Math.random() * 40) + 10;
  const current = opening + received - sold;
  const reorder = 20;
  return {
    code: p.code,
    name: p.name,
    category: p.category,
    unit: p.unit,
    opening,
    received,
    sold,
    current,
    value: Math.round(p.productCost * current),
    reorder,
    status: current <= reorder ? 'Low Stock' : 'In Stock',
  };
});

export function InventoryStatus() {
  const [category, setCategory] = useState('');
  const [product, setProduct] = useState('');
  const [warehouse, setWarehouse] = useState('');

  const columns = [
    { key: 'code', header: 'Product Code', width: '120px' },
    { key: 'name', header: 'Product Name', width: '180px' },
    { key: 'category', header: 'Category', width: '120px' },
    { key: 'unit', header: 'Unit', width: '80px', align: 'center' as const },
    { key: 'opening', header: 'Opening', width: '80px', align: 'right' as const },
    { key: 'received', header: 'Received', width: '80px', align: 'right' as const },
    { key: 'sold', header: 'Sold', width: '80px', align: 'right' as const },
    { key: 'current', header: 'Current', width: '80px', align: 'right' as const },
    { key: 'reorder', header: 'Reorder', width: '80px', align: 'right' as const },
    { key: 'status', header: 'Status', width: '100px', align: 'center' as const },
    { key: 'value', header: 'Value (Rs.)', width: '110px', align: 'right' as const },
  ];

  const totalValue = inventoryData.reduce((s, r) => s + r.value, 0);

  return (
    <div className="p-4 space-y-4">
      {/* Title */}
      <div className="bg-bg-tertiary border border-border-custom p-2">
        <h1 className="text-accent-cyan font-bold text-lg text-center">
          INVENTORY STATUS REPORT
        </h1>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-xs text-text-secondary">Category</span>
              <select 
                className="flex-1 text-xs"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">All</option>
                <option value="Dairy">Dairy</option>
                <option value="Personal Care">Personal Care</option>
                <option value="Bakery">Bakery</option>
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-xs text-text-secondary">Product</span>
              <input 
                type="text" 
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                className="flex-1 text-xs"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-xs text-text-secondary">Warehouse</span>
              <select 
                className="flex-1 text-xs"
                value={warehouse}
                onChange={(e) => setWarehouse(e.target.value)}
              >
                <option value="">All</option>
                <option value="Main Store">Main Store</option>
                <option value="Godown 1">Godown 1</option>
                <option value="Godown 2">Godown 2</option>
              </select>
            </div>
          </div>
          
          <div className="flex justify-end gap-2">
            <button className="p-2 bg-bg-tertiary border border-border-custom hover:bg-bg-secondary">
              <Search className="w-5 h-5 text-text-primary" />
            </button>
            <button className="p-2 bg-bg-tertiary border border-border-custom hover:bg-bg-secondary">
              <Package className="w-5 h-5 text-text-primary" />
            </button>
            <button className="p-2 bg-bg-tertiary border border-border-custom hover:bg-bg-secondary">
              <Printer className="w-5 h-5 text-text-primary" />
            </button>
            <button className="p-2 bg-bg-tertiary border border-border-custom hover:bg-bg-secondary">
              <FileSpreadsheet className="w-5 h-5 text-success" />
            </button>
          </div>
        </div>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="p-3">
          <div className="text-accent-orange text-sm font-semibold mb-1">Total Products</div>
          <div className="text-2xl font-bold text-success">{inventoryData.length}</div>
        </Card>
        <Card className="p-3">
          <div className="text-accent-orange text-sm font-semibold mb-1">In Stock</div>
          <div className="text-2xl font-bold text-success">{inventoryData.filter(i => i.status === 'In Stock').length}</div>
        </Card>
        <Card className="p-3">
          <div className="text-accent-orange text-sm font-semibold mb-1">Low Stock</div>
          <div className="text-2xl font-bold text-danger">{inventoryData.filter(i => i.status === 'Low Stock').length}</div>
        </Card>
        <Card className="p-3">
          <div className="text-accent-orange text-sm font-semibold mb-1">Total Value</div>
          <div className="text-2xl font-bold text-success">Rs. {totalValue.toLocaleString()}</div>
        </Card>
      </div>

      {/* Data Table */}
      <DataTable 
        columns={columns}
        data={inventoryData}
        maxHeight="400px"
      />
    </div>
  );
}
