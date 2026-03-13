import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CustomSelect } from '@/components/ui/CustomSelect';
import { Plus, Save, Trash2, Calculator, Search, Truck } from 'lucide-react';
import { customersData } from '@/data/mockData';

interface ChallanItem {
  id: number;
  productCode: string;
  productName: string;
  unit: string;
  quantity: number;
  remarks: string;
}

export function DeliveryChallans() {
  const [challanNo, setChallanNo] = useState('15');
  const [date, setDate] = useState('05-06-2022');
  const [customerCode, setCustomerCode] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [vehicleNo, setVehicleNo] = useState('');
  const [driverName, setDriverName] = useState('');
  const [items, setItems] = useState<ChallanItem[]>([
    { id: 1, productCode: '', productName: '', unit: 'Pcs', quantity: 0, remarks: '' },
  ]);
  const [remarks, setRemarks] = useState('');

  const customerOptions = customersData.map(c => ({
    value: c.code,
    label: `${c.code} - ${c.name}`,
  }));

  const addItem = () => {
    setItems([...items, {
      id: items.length + 1,
      productCode: '',
      productName: '',
      unit: 'Pcs',
      quantity: 0,
      remarks: '',
    }]);
  };

  const removeItem = (id: number) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const updateItem = (id: number, field: keyof ChallanItem, value: string | number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    }));
  };

  const handleCustomerChange = (value: string | number) => {
    const strValue = String(value);
    setCustomerCode(strValue);
    const customer = customersData.find(c => c.code === strValue);
    if (customer) {
      setCustomerName(customer.name);
    }
  };

  const totalItems = items.length;
  const totalQty = items.reduce((sum, item) => sum + item.quantity, 0);

  const itemColumns = [
    { key: 'id', header: '#', width: '40px' },
    { key: 'productCode', header: 'Product Code', width: '120px' },
    { key: 'productName', header: 'Product Name', width: '250px' },
    { key: 'unit', header: 'Unit', width: '80px' },
    { key: 'quantity', header: 'Qty', width: '80px', align: 'right' as const },
    { key: 'remarks', header: 'Remarks', width: '150px' },
    { key: 'actions', header: '', width: '50px' },
  ];

  const itemData = items.map(item => ({
    ...item,
    productCode: (
      <Input
        value={item.productCode}
        onChange={(e) => updateItem(item.id, 'productCode', e.target.value)}
        className="h-7 text-sm bg-white"
      />
    ),
    productName: (
      <Input
        value={item.productName}
        onChange={(e) => updateItem(item.id, 'productName', e.target.value)}
        className="h-7 text-sm bg-white"
      />
    ),
    unit: (
      <CustomSelect
        value={item.unit}
        onValueChange={(value) => updateItem(item.id, 'unit', value)}
        options={[{ value: 'Pcs', label: 'Pcs' }, { value: 'Pack', label: 'Pack' }, { value: 'Kg', label: 'Kg' }]}
      />
    ),
    quantity: (
      <Input
        type="number"
        value={item.quantity}
        onChange={(e) => updateItem(item.id, 'quantity', Number(e.target.value))}
        className="h-7 text-sm bg-white text-right"
      />
    ),
    remarks: (
      <Input
        value={item.remarks}
        onChange={(e) => updateItem(item.id, 'remarks', e.target.value)}
        className="h-7 text-sm bg-white"
      />
    ),
    actions: (
      <Button
        variant="ghost"
        size="icon"
        onClick={() => removeItem(item.id)}
        className="h-7 w-7 text-red-400 hover:text-red-300"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    ),
  }));

  return (
    <div className="h-full flex flex-col p-1">
      {/* Header */}
      <div className="bg-bg-header text-white px-3 py-1.5 flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <Truck className="h-4 w-4 text-accent-orange" />
          <span className="font-semibold text-sm">Delivery Challans</span>
        </div>
        <div className="flex gap-1">
          <Button variant="ghost" size="sm" className="h-6 text-xs text-white hover:text-accent-orange">
            New
          </Button>
          <Button variant="ghost" size="sm" className="h-6 text-xs text-white hover:text-accent-orange">
            Edit
          </Button>
          <Button variant="ghost" size="sm" className="h-6 text-xs text-white hover:text-accent-orange">
            Delete
          </Button>
          <Button variant="ghost" size="sm" className="h-6 text-xs text-white hover:text-accent-orange">
            Print
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-1 overflow-auto">
        {/* Challan Info */}
        <CustomCard className="p-2">
          <div className="grid grid-cols-4 gap-3">
            <div className="space-y-0.5">
              <Label className="text-text-secondary text-xs">Challan No</Label>
              <Input
                value={challanNo}
                onChange={(e) => setChallanNo(e.target.value)}
                className="h-7 text-sm bg-white"
              />
            </div>
            <div className="space-y-0.5">
              <Label className="text-text-secondary text-xs">Date</Label>
              <Input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="h-7 text-sm bg-white"
              />
            </div>
            <div className="space-y-0.5">
              <Label className="text-text-secondary text-xs">Vehicle No</Label>
              <Input
                value={vehicleNo}
                onChange={(e) => setVehicleNo(e.target.value)}
                className="h-7 text-sm bg-white"
              />
            </div>
            <div className="space-y-0.5">
              <Label className="text-text-secondary text-xs">Status</Label>
              <div className="h-7 flex items-center px-2 bg-bg-tertiary rounded text-sm text-accent-teal">
                Delivered
              </div>
            </div>
          </div>
        </CustomCard>

        {/* Customer & Transport Info */}
        <CustomCard className="p-2">
          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-0.5">
              <Label className="text-text-secondary text-xs">Customer Code</Label>
              <div className="flex gap-1">
                <CustomSelect
                  value={customerCode}
                  onValueChange={handleCustomerChange}
                  options={customerOptions}
                  placeholder="Select Customer"
                />
                <Button variant="outline" size="icon" className="h-7 w-7 shrink-0">
                  <Search className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
            <div className="space-y-0.5">
              <Label className="text-text-secondary text-xs">Customer Name</Label>
              <Input
                value={customerName}
                readOnly
                className="h-7 text-sm bg-bg-tertiary"
              />
            </div>
            <div className="space-y-0.5">
              <Label className="text-text-secondary text-xs">Driver Name</Label>
              <Input
                value={driverName}
                onChange={(e) => setDriverName(e.target.value)}
                className="h-7 text-sm bg-white"
              />
            </div>
          </div>
        </CustomCard>

        {/* Items Table */}
        <CustomCard className="flex-1 flex flex-col p-2 min-h-0">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-white">Challan Items</span>
            <Button
              onClick={addItem}
              size="sm"
              className="h-7 bg-accent-orange hover:bg-accent-orange/90 text-white"
            >
              <Plus className="h-3.5 w-3.5 mr-1" />
              Add Item
            </Button>
          </div>
          <div className="flex-1 overflow-auto">
            <DataTable
              columns={itemColumns}
              data={itemData}
              className="text-xs"
            />
          </div>
        </CustomCard>

        {/* Remarks & Summary */}
        <div className="grid grid-cols-3 gap-1">
          <CustomCard className="col-span-2 p-2">
            <Label className="text-text-secondary text-xs">Remarks</Label>
            <Input
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              className="h-7 text-sm bg-white mt-0.5"
              placeholder="Enter remarks..."
            />
          </CustomCard>
          <CustomCard className="p-2">
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-text-secondary">Total Items:</span>
                <span className="text-white font-medium">{totalItems}</span>
              </div>
              <div className="flex justify-between text-sm border-t border-border-custom pt-1 mt-1">
                <span className="text-accent-orange font-medium">Total Qty:</span>
                <span className="text-accent-orange font-bold">{totalQty}</span>
              </div>
            </div>
          </CustomCard>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-end gap-2 mt-1 pt-1 border-t border-border-custom">
        <Button
          variant="outline"
          size="sm"
          className="h-7 text-xs border-accent-orange text-accent-orange hover:bg-accent-orange/10"
        >
          <Calculator className="h-3.5 w-3.5 mr-1" />
          Calculate
        </Button>
        <Button
          size="sm"
          className="h-7 text-xs bg-accent-teal hover:bg-accent-teal/90 text-black font-medium"
        >
          <Save className="h-3.5 w-3.5 mr-1" />
          Save Challan
        </Button>
      </div>
    </div>
  );
}
