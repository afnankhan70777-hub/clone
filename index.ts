// Types for Afroz Swift Financials

export interface Company {
  name: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  ntn: string;
  salesTaxRegn: string;
}

export interface SaleInvoice {
  serialNo: number;
  date: string;
  customerCode: string;
  customerName: string;
  address: string;
  items: InvoiceItem[];
  totalAmount: number;
  status: 'Processed' | 'Authorized';
}

export interface InvoiceItem {
  itemCode: string;
  itemName: string;
  size?: string;
  colour?: string;
  quantity: number;
  unit: string;
  rate: number;
  grossAmount: number;
  discountRate?: number;
  discountAmount?: number;
  netAmount: number;
}

export interface Vendor {
  code: string;
  name: string;
  type: string;
  address: string;
  contactPerson: string;
  contactNo: string;
  email: string;
  creditTerms: string;
  creditDays: number;
  creditLimit: number;
}

export interface Customer {
  code: string;
  name: string;
  type: string;
  billingAddress: string;
  shippingAddress: string;
  contactPerson: string;
  contactNo: string;
  email: string;
  creditTerms: string;
  creditDays: number;
  creditLimit: number;
  region: string;
  subRegion: string;
  accountManager: string;
}

export interface Product {
  code: string;
  name: string;
  category: string;
  subCategory: string;
  description: string;
  unit: string;
  pcsPerPack: number;
  productCost: number;
  image?: string;
}

export interface SaleActivityRow {
  invoiceNo: number;
  invoiceDate: string;
  cusCode: string;
  customerName: string;
  invoiceType: string;
  invoiceAmount: number;
  returns: number;
  receipts: number;
  whtFedITax: number;
  whtFedSTax: number;
  whtProvSTax: number;
  discount: number;
  totalCredited: number;
  balanceAmount: number;
}

export interface NavItem {
  id: string;
  label: string;
  icon?: string;
  path: string;
}

export interface MenuItem {
  label: string;
  items?: { label: string; path: string }[];
}

export interface CashFlowData {
  previousBalance: { cash: number; bank: number; total: number };
  receipts: { cash: number; bank: number; total: number };
  payments: { cash: number; bank: number; total: number };
  currentBalance: { cash: number; bank: number; total: number };
}

export interface PostDatedCheque {
  receivedFromCustomers: number;
  issuedToVendors: number;
}

export interface ActivityRow {
  documentNo: string;
  partyName: string;
  remarks: string;
  amount: number;
  status: string;
  authorization: string;
}
