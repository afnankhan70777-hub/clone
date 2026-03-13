import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CustomSelect } from '@/components/ui/CustomSelect';
import { Plus, Save, Trash2, Calculator, Search, FileText } from 'lucide-react';
import { customersData } from '@/data/mockData';

interface QuotationItem {
  id: number;
  productCode: string;
  productName: string;
  unit: string;
  quantity: number;
  price: number;
  discount: number;
  discountAmount: number;
  amount: number;
}

export function Quotations() {
  const [quotationNo, setQuotationNo] = useState('7');
  const [date, setDate] = useState('05-06-2022');
  const [customerCode, setCustomerCode] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [validityDays, setValidityDays] = useState('30');
  const [items, setItems] = useState<QuotationItem[]>([
    { id: 1, productCode: '', productName: '', unit: 'Pcs', quantity: 0, price: 0, discount: 0, discountAmount: 0, amount: 0 },
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
      price: 0,
      discount: 0,
      discountAmount: 0,
      amount: 0,
    }]);
  };

  const removeItem = (id: number) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const updateItem = (id: number, field: keyof QuotationItem, value: string | number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };
        if (field === 'quantity' || field === 'price' || field === 'discount') {
          const qty = field === 'quantity' ? Number(value) : item.quantity;
          const prc = field === 'price' ? Number(value) : item.price;
          const disc = field === 'discount' ? Number(value) : item.discount;
          const grossAmount = qty * prc;
          const discAmount = (grossAmount * disc) / 100;
          updatedItem.discountAmount = discAmount;
          updatedItem.amount = grossAmount - discAmount;
        }
        return updatedItem;
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

  const totalAmount = items.reduce((sum, item) => sum + item.amount, 0);
  const totalItems = items.length;
  const totalQty = items.reduce((sum, item) => sum + item.quantity, 0);

  const itemColumns = [
    { key: 'id', header: '#', width: '40px' },
    { key: 'productCode', header: 'Product Code', width: '120px' },
    { key: 'productName', header: 'Product Name', width: '200px' },
    { key: 'unit', header: 'Unit', width: '80px' },
    { key: 'quantity', header: 'Qty', width: '80px', align: 'right' as const },
    { key: 'price', header: 'Price', width: '100px', align: 'right' as const },
    { key: 'discount', header: 'Disc%', width: '80px', align: 'right' as const },
    { key: 'discountAmount', header: 'Disc Amt', width: '100px', align: 'right' as const },
    { key: 'amount', header: 'Amount', width: '120px', align: 'right' as const },
    { key: 'actions', header: '', width: '50px' },
  ];

  const itemData = items.map(item => ({
    id: item.id,
    discountAmount: item.discountAmount.toFixed(2),
    amount: item.amount.toFixed(2),
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
    price: (
      <Input
        type="number"
        value={item.price}
        onChange={(e) => updateItem(item.id, 'price', Number(e.target.value))}
        className="h-7 text-sm bg-white text-right"
      />
    ),
    discount: (
      <Input
        type="number"
        value={item.discount}
        onChange={(e) => updateItem(item.id, 'discount', Number(e.target.value))}
        className="h-7 text-sm bg-white text-right"
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
          <FileText className="h-4 w-4 text-accent-orange" />
          <span className="font-semibold text-sm">Quotations</span>
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
        {/* Quotation Info */}
        <CustomCard className="p-2">
          <div className="grid grid-cols-4 gap-3">
            <div className="space-y-0.5">
              <Label className="text-text-secondary text-xs">Quotation No</Label>
              <Input
                value={quotationNo}
                onChange={(e) => setQuotationNo(e.target.value)}
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
              <Label className="text-text-secondary text-xs">Validity (Days)</Label>
              <Input
                value={validityDays}
                onChange={(e) => setValidityDays(e.target.value)}
                className="h-7 text-sm bg-white"
              />
            </div>
            <div className="space-y-0.5">
              <Label className="text-text-secondary text-xs">Status</Label>
              <div className="h-7 flex items-center px-2 bg-bg-tertiary rounded text-sm text-accent-teal">
                Draft
              </div>
            </div>
          </div>
        </CustomCard>

        {/* Customer Info */}
        <CustomCard className="p-2">
          <div className="grid grid-cols-2 gap-3">
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
          </div>
        </CustomCard>

        {/* Items Table */}
        <CustomCard className="flex-1 flex flex-col p-2 min-h-0">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-white">Quotation Items</span>
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
              <div className="flex justify-between text-xs">
                <span className="text-text-secondary">Total Qty:</span>
                <span className="text-white font-medium">{totalQty}</span>
              </div>
              <div className="flex justify-between text-sm border-t border-border-custom pt-1 mt-1">
                <span className="text-accent-orange font-medium">Total Amount:</span>
                <span className="text-accent-orange font-bold">{totalAmount.toFixed(2)}</span>
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
          Save Quotation
        </Button>
      </div>
    </div>
  );
}
