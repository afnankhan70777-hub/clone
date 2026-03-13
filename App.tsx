import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { Login } from '@/pages/Login';
import { Dashboard } from '@/pages/Dashboard';
import { DaySummary } from '@/pages/DaySummary';
import { SaleInvoices } from '@/pages/SaleInvoices';
import { PurchaseOrders } from '@/pages/PurchaseOrders';
import { Payments } from '@/pages/Payments';
import { Receipts } from '@/pages/Receipts';
import { Vendors } from '@/pages/Vendors';
import { Customers } from '@/pages/Customers';
import { Products } from '@/pages/Products';
import { Services } from '@/pages/Services';
import { Accounts } from '@/pages/Accounts';
import { FinancialYears } from '@/pages/FinancialYears';
import { UserLogins } from '@/pages/UserLogins';
import { ChangePassword } from '@/pages/ChangePassword';
import { SalesAnalysis } from '@/pages/SalesAnalysis';
import { InventoryStatus } from '@/pages/InventoryStatus';
import { AccountsReceivable } from '@/pages/AccountsReceivable';
import { Reminders } from '@/pages/Reminders';
import { PurchaseInvoices } from '@/pages/PurchaseInvoices';
import { SaleReturns } from '@/pages/SaleReturns';
import { PurchaseReturns } from '@/pages/PurchaseReturns';
import { JournalVouchers } from '@/pages/JournalVouchers';
import { StockAdjustments } from '@/pages/StockAdjustments';
import { Quotations } from '@/pages/Quotations';
import { SaleOrders } from '@/pages/SaleOrders';
import { DeliveryChallans } from '@/pages/DeliveryChallans';
import { GoodsReceivedNotes } from '@/pages/GoodsReceivedNotes';
import { InwardsGatePasses } from '@/pages/InwardsGatePasses';
import { OutwardsGatePasses } from '@/pages/OutwardsGatePasses';

// Lists modules
import { ChartOfAccounts } from '@/pages/ChartOfAccounts';
import { VendorTypes } from '@/pages/VendorTypes';
import { CustomerTypes } from '@/pages/CustomerTypes';
import { CustomerRegions } from '@/pages/CustomerRegions';
import { CustomerGroups } from '@/pages/CustomerGroups';
import { Warehouses } from '@/pages/Warehouses';
import { ServiceCategories } from '@/pages/ServiceCategories';
import { StatesTaxRates } from '@/pages/StatesTaxRates';
import { CostCentres } from '@/pages/CostCentres';

// Opening Balances
import { AccountsOpeningBalancesTax } from '@/pages/AccountsOpeningBalancesTax';
import { ProductsOpeningBalancesTax } from '@/pages/ProductsOpeningBalancesTax';
import { AccountsOpeningBalancesNonTax } from '@/pages/AccountsOpeningBalancesNonTax';
import { ProductsOpeningBalancesNonTax } from '@/pages/ProductsOpeningBalancesNonTax';

// Sales Tax modules
import { SalesTaxInvoices } from '@/pages/SalesTaxInvoices';
import { SalesServicesQuotations } from '@/pages/SalesServicesQuotations';
import { SalesServicesOrders } from '@/pages/SalesServicesOrders';
import { SalesServicesRenderedTaxInvoices } from '@/pages/SalesServicesRenderedTaxInvoices';
import { SalesServicesRenderedTaxReturns } from '@/pages/SalesServicesRenderedTaxReturns';

// Sales Non-Tax modules
import { QuotationsNonTax } from '@/pages/QuotationsNonTax';
import { SaleOrdersNonTax } from '@/pages/SaleOrdersNonTax';
import { SaleInvoicesNonTax } from '@/pages/SaleInvoicesNonTax';
import { SaleReturnsNonTax } from '@/pages/SaleReturnsNonTax';

// Payments modules
import { BankPaymentsVendorsTax } from '@/pages/BankPaymentsVendorsTax';
import { BankPaymentsOtherTax } from '@/pages/BankPaymentsOtherTax';
import { CashPaymentsVendorsTax } from '@/pages/CashPaymentsVendorsTax';
import { CashPaymentsOtherTax } from '@/pages/CashPaymentsOtherTax';
import { PaymentsVendorsNonTax } from '@/pages/PaymentsVendorsNonTax';
import { PaymentsOtherNonTax } from '@/pages/PaymentsOtherNonTax';
import { PostDatedChequesIssued } from '@/pages/PostDatedChequesIssued';

// Store and Production
import { BillOfMaterials } from '@/pages/BillOfMaterials';
import { MaterialIssueNotes } from '@/pages/MaterialIssueNotes';
import { ProductionNotes } from '@/pages/ProductionNotes';
import { ProductionAndAssembly } from '@/pages/ProductionAndAssembly';
import { AddInventoryAdjustments } from '@/pages/AddInventoryAdjustments';
import { ReduceInventoryAdjustments } from '@/pages/ReduceInventoryAdjustments';
import { InventoryTransfers } from '@/pages/InventoryTransfers';
import { DeliveryNotes } from '@/pages/DeliveryNotes';

// Reports
import { UserLogReport } from '@/pages/UserLogReport';
import { GeneralJournalDetail } from '@/pages/GeneralJournalDetail';
import { PurchasesReport } from '@/pages/PurchasesReport';
import { SalesReport } from '@/pages/SalesReport';
import { ProductsLedgers } from '@/pages/ProductsLedgers';
import { ProductsBalances } from '@/pages/ProductsBalances';
import { AccountLedgers } from '@/pages/AccountLedgers';
import { AccountBalances } from '@/pages/AccountBalances';
import { IncomeStatement } from '@/pages/IncomeStatement';
import { BalanceSheet } from '@/pages/BalanceSheet';

import { CompanySetupModal } from '@/components/modals/CompanySetupModal';
import { UserRightsModal } from '@/components/modals/UserRightsModal';
import { PreferencesModal } from '@/components/modals/PreferencesModal';

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [modals, setModals] = useState({
    companySetup: false,
    userRights: false,
    preferences: false,
  });

  const getActiveNavItem = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/day-summary') return 'day-summary';
    if (path === '/sales-analysis') return 'sales-analysis';
    if (path === '/inventory-status') return 'inventory-status';
    if (path === '/accounts-receivable') return 'accounts-receivable';
    if (path === '/reminders') return 'reminders';
    return 'home';
  };

  const handleNavClick = (path: string) => {
    navigate(path);
  };

  const handleMenuClick = (path: string) => {
    if (path === '/company-setup') {
      setModals(prev => ({ ...prev, companySetup: true }));
    } else if (path === '/user-rights') {
      setModals(prev => ({ ...prev, userRights: true }));
    } else if (path === '/preferences') {
      setModals(prev => ({ ...prev, preferences: true }));
    } else {
      navigate(path);
    }
  };

  const closeModal = (modal: keyof typeof modals) => {
    setModals(prev => ({ ...prev, [modal]: false }));
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <>
      <AppLayout 
        activeNavItem={getActiveNavItem()}
        onNavClick={handleNavClick}
        onMenuClick={handleMenuClick}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/day-summary" element={<DaySummary />} />
          <Route path="/sale-invoices" element={<SaleInvoices isTaxInvoice={false} />} />
          <Route path="/sale-tax-invoices" element={<SaleInvoices isTaxInvoice={true} />} />
          <Route path="/purchase-orders" element={<PurchaseOrders />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/receipts" element={<Receipts />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/financial-years" element={<FinancialYears />} />
          <Route path="/user-logins" element={<UserLogins />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/reports/sale-activity" element={<DaySummary />} />
          <Route path="/sales-analysis" element={<SalesAnalysis />} />
          <Route path="/inventory-status" element={<InventoryStatus />} />
          <Route path="/accounts-receivable" element={<AccountsReceivable />} />
          <Route path="/reminders" element={<Reminders />} />
          <Route path="/purchase-invoices" element={<PurchaseInvoices />} />
          <Route path="/sale-returns" element={<SaleReturns />} />
          <Route path="/purchase-returns" element={<PurchaseReturns />} />
          <Route path="/journal-vouchers" element={<JournalVouchers />} />
          <Route path="/stock-adjustments" element={<StockAdjustments />} />
          <Route path="/quotations" element={<Quotations />} />
          <Route path="/sale-orders" element={<SaleOrders />} />
          <Route path="/delivery-challans" element={<DeliveryChallans />} />
          <Route path="/goods-received-notes" element={<GoodsReceivedNotes />} />
          <Route path="/inwards-gate-passes" element={<InwardsGatePasses />} />
          <Route path="/outwards-gate-passes" element={<OutwardsGatePasses />} />

          {/* Lists */}
          <Route path="/chart-of-accounts" element={<ChartOfAccounts />} />
          <Route path="/vendor-types" element={<VendorTypes />} />
          <Route path="/customer-types" element={<CustomerTypes />} />
          <Route path="/customer-regions" element={<CustomerRegions />} />
          <Route path="/customer-groups-1" element={<CustomerGroups groupNumber={1} />} />
          <Route path="/customer-groups-2" element={<CustomerGroups groupNumber={2} />} />
          <Route path="/warehouses" element={<Warehouses />} />
          <Route path="/service-categories" element={<ServiceCategories />} />
          <Route path="/states-tax-rates" element={<StatesTaxRates />} />
          <Route path="/cost-centres" element={<CostCentres />} />

          {/* Opening Balances */}
          <Route path="/accounts-opening-balances-tax" element={<AccountsOpeningBalancesTax />} />
          <Route path="/products-opening-balances-tax" element={<ProductsOpeningBalancesTax />} />
          <Route path="/accounts-opening-balances-nontax" element={<AccountsOpeningBalancesNonTax />} />
          <Route path="/products-opening-balances-nontax" element={<ProductsOpeningBalancesNonTax />} />

          {/* Sales Tax */}
          <Route path="/sales-tax-invoices" element={<SalesTaxInvoices />} />
          <Route path="/sales-services-quotations" element={<SalesServicesQuotations />} />
          <Route path="/sales-services-orders" element={<SalesServicesOrders />} />
          <Route path="/sales-services-rendered-tax-invoices" element={<SalesServicesRenderedTaxInvoices />} />
          <Route path="/sales-services-rendered-tax-returns" element={<SalesServicesRenderedTaxReturns />} />

          {/* Sales Non-Tax */}
          <Route path="/quotations-nontax" element={<QuotationsNonTax />} />
          <Route path="/sale-orders-nontax" element={<SaleOrdersNonTax />} />
          <Route path="/sale-invoices-nontax" element={<SaleInvoicesNonTax />} />
          <Route path="/sale-returns-nontax" element={<SaleReturnsNonTax />} />

          {/* Payments */}
          <Route path="/bank-payments-vendors-tax" element={<BankPaymentsVendorsTax />} />
          <Route path="/bank-payments-other-tax" element={<BankPaymentsOtherTax />} />
          <Route path="/cash-payments-vendors-tax" element={<CashPaymentsVendorsTax />} />
          <Route path="/cash-payments-other-tax" element={<CashPaymentsOtherTax />} />
          <Route path="/payments-vendors-nontax" element={<PaymentsVendorsNonTax />} />
          <Route path="/payments-other-nontax" element={<PaymentsOtherNonTax />} />
          <Route path="/post-dated-cheques-issued" element={<PostDatedChequesIssued />} />

          {/* Store and Production */}
          <Route path="/bill-of-materials" element={<BillOfMaterials />} />
          <Route path="/material-issue-notes" element={<MaterialIssueNotes />} />
          <Route path="/production-notes" element={<ProductionNotes />} />
          <Route path="/production-and-assembly" element={<ProductionAndAssembly />} />
          <Route path="/add-inventory-adjustments" element={<AddInventoryAdjustments />} />
          <Route path="/reduce-inventory-adjustments" element={<ReduceInventoryAdjustments />} />
          <Route path="/inventory-transfers" element={<InventoryTransfers />} />
          <Route path="/delivery-notes" element={<DeliveryNotes />} />

          {/* Reports */}
          <Route path="/reports/user-log" element={<UserLogReport />} />
          <Route path="/reports/general-journal" element={<GeneralJournalDetail />} />
          <Route path="/reports/purchases" element={<PurchasesReport />} />
          <Route path="/reports/sales" element={<SalesReport />} />
          <Route path="/reports/products-ledgers" element={<ProductsLedgers />} />
          <Route path="/reports/products-balances" element={<ProductsBalances />} />
          <Route path="/reports/account-ledgers" element={<AccountLedgers />} />
          <Route path="/reports/account-balances" element={<AccountBalances />} />
          <Route path="/reports/income-statement" element={<IncomeStatement />} />
          <Route path="/reports/balance-sheet" element={<BalanceSheet />} />
        </Routes>
      </AppLayout>

      {/* Modals */}
      <CompanySetupModal 
        isOpen={modals.companySetup} 
        onClose={() => closeModal('companySetup')} 
      />
      <UserRightsModal 
        isOpen={modals.userRights} 
        onClose={() => closeModal('userRights')} 
      />
      <PreferencesModal 
        isOpen={modals.preferences} 
        onClose={() => closeModal('preferences')} 
      />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
