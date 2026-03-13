export function WorkflowDiagram() {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      {/* SVG Workflow Diagram */}
      <svg viewBox="0 0 900 400" className="w-full h-full max-w-[900px]">
        {/* Definitions for arrows */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#666" />
          </marker>
        </defs>
        
        {/* Top Row Icons */}
        {/* VENDORS */}
        <g transform="translate(80, 30)">
          <image href="/images/icon-vendors.png" width="80" height="80" />
          <text x="40" y="100" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">VENDORS</text>
        </g>
        
        {/* PRODUCTS */}
        <g transform="translate(280, 30)">
          <image href="/images/icon-products.png" width="80" height="80" />
          <text x="40" y="100" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">PRODUCTS</text>
        </g>
        
        {/* SERVICES */}
        <g transform="translate(480, 30)">
          <image href="/images/icon-services.png" width="80" height="80" />
          <text x="40" y="100" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">SERVICES</text>
        </g>
        
        {/* CUSTOMERS */}
        <g transform="translate(720, 30)">
          <image href="/images/icon-customers.png" width="80" height="80" />
          <text x="40" y="100" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">CUSTOMERS</text>
        </g>
        
        {/* Arrow from Vendors down */}
        <line x1="120" y1="130" x2="120" y2="160" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />
        
        {/* Delivery Truck */}
        <g transform="translate(80, 170)">
          <image href="/images/icon-delivery.png" width="80" height="80" />
        </g>
        
        {/* Arrow from Truck to split */}
        <line x1="120" y1="250" x2="120" y2="280" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />
        
        {/* Split arrows */}
        <line x1="120" y1="280" x2="60" y2="320" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <line x1="120" y1="280" x2="180" y2="320" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />
        
        {/* Left side labels */}
        <text x="60" y="340" textAnchor="middle" fill="#aaa" fontSize="10">SALES TAX</text>
        <text x="60" y="355" textAnchor="middle" fill="#aaa" fontSize="10">PURCHASES</text>
        
        <text x="180" y="340" textAnchor="middle" fill="#aaa" fontSize="10">SALES TAX</text>
        <text x="180" y="355" textAnchor="middle" fill="#aaa" fontSize="10">SERVICES</text>
        <text x="180" y="370" textAnchor="middle" fill="#aaa" fontSize="10">ACQUIRED</text>
        
        {/* Arrow from Products down */}
        <line x1="320" y1="110" x2="320" y2="280" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />
        
        <text x="320" y="300" textAnchor="middle" fill="#aaa" fontSize="10">NON TAX</text>
        <text x="320" y="315" textAnchor="middle" fill="#aaa" fontSize="10">PURCHASES</text>
        
        <line x1="320" y1="320" x2="320" y2="350" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />
        
        <text x="320" y="375" textAnchor="middle" fill="#aaa" fontSize="10">PAYMENTS</text>
        <text x="320" y="390" textAnchor="middle" fill="#aaa" fontSize="10">TO VENDORS</text>
        
        {/* Cash icon */}
        <g transform="translate(140, 320)">
          <image href="/images/icon-cash.png" width="60" height="60" />
        </g>
        
        {/* Arrow from cash to payments */}
        <line x1="170" y1="380" x2="170" y2="400" stroke="#666" strokeWidth="2" />
        <line x1="170" y1="400" x2="280" y2="400" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />
        
        <text x="100" y="425" textAnchor="middle" fill="#aaa" fontSize="10">BANK</text>
        <text x="100" y="440" textAnchor="middle" fill="#aaa" fontSize="10">PAYMENTS</text>
        <text x="100" y="455" textAnchor="middle" fill="#aaa" fontSize="10">TO VENDORS</text>
        
        <text x="220" y="425" textAnchor="middle" fill="#aaa" fontSize="10">CASH</text>
        <text x="220" y="440" textAnchor="middle" fill="#aaa" fontSize="10">PAYMENTS</text>
        <text x="220" y="455" textAnchor="middle" fill="#aaa" fontSize="10">TO VENDORS</text>
        
        {/* Right side - Customers flow */}
        <line x1="760" y1="130" x2="760" y2="160" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />
        
        {/* Reception */}
        <g transform="translate(720, 170)">
          <image href="/images/icon-reception.png" width="80" height="80" />
        </g>
        
        <line x1="760" y1="250" x2="760" y2="280" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />
        
        {/* Split for customers */}
        <line x1="760" y1="280" x2="700" y2="320" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <line x1="760" y1="280" x2="820" y2="320" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />
        
        <text x="700" y="340" textAnchor="middle" fill="#aaa" fontSize="10">SALES TAX</text>
        <text x="700" y="355" textAnchor="middle" fill="#aaa" fontSize="10">INVOICES</text>
        
        <text x="820" y="340" textAnchor="middle" fill="#aaa" fontSize="10">SALES TAX</text>
        <text x="820" y="355" textAnchor="middle" fill="#aaa" fontSize="10">SERVICES</text>
        <text x="820" y="370" textAnchor="middle" fill="#aaa" fontSize="10">RENDERED</text>
        
        {/* Bank icon */}
        <g transform="translate(670, 360)">
          <image href="/images/icon-bank.png" width="60" height="60" />
        </g>
        
        {/* Arrow from bank down */}
        <line x1="700" y1="420" x2="700" y2="450" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />
        
        <text x="700" y="475" textAnchor="middle" fill="#aaa" fontSize="10">BANK</text>
        <text x="700" y="490" textAnchor="middle" fill="#aaa" fontSize="10">RECEIPTS</text>
        <text x="700" y="505" textAnchor="middle" fill="#aaa" fontSize="10">FROM</text>
        <text x="700" y="520" textAnchor="middle" fill="#aaa" fontSize="10">CUSTOMERS</text>
        
        {/* Cash from services */}
        <line x1="820" y1="370" x2="820" y2="450" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />
        
        <text x="820" y="475" textAnchor="middle" fill="#aaa" fontSize="10">CASH</text>
        <text x="820" y="490" textAnchor="middle" fill="#aaa" fontSize="10">RECEIPTS</text>
        <text x="820" y="505" textAnchor="middle" fill="#aaa" fontSize="10">FROM</text>
        <text x="820" y="520" textAnchor="middle" fill="#aaa" fontSize="10">CUSTOMERS</text>
        
        {/* Non Tax Sales */}
        <line x1="520" y1="110" x2="520" y2="450" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />
        
        <text x="520" y="475" textAnchor="middle" fill="#aaa" fontSize="10">NON TAX</text>
        <text x="520" y="490" textAnchor="middle" fill="#aaa" fontSize="10">SALES</text>
        
        <line x1="520" y1="490" x2="880" y2="490" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />
        
        <text x="900" y="495" textAnchor="middle" fill="#aaa" fontSize="10">RECEIPTS</text>
        <text x="900" y="510" textAnchor="middle" fill="#aaa" fontSize="10">FROM</text>
        <text x="900" y="525" textAnchor="middle" fill="#aaa" fontSize="10">CUSTOMERS</text>
      </svg>
    </div>
  );
}
