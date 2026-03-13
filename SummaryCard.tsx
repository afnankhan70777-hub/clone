import { CustomCard as Card } from './CustomCard';

interface SummaryItem {
  label: string;
  value: string | number;
}

interface SummaryCardProps {
  title: string;
  mainValue: string | number;
  items: SummaryItem[];
  mainValueClassName?: string;
}

export function SummaryCard({ title, mainValue, items, mainValueClassName }: SummaryCardProps) {
  return (
    <Card title={title} className="h-full">
      <div className="space-y-2">
        <div className={cn('text-2xl font-bold text-success', mainValueClassName)}>
          {mainValue}
        </div>
        <div className="space-y-1">
          {items.map((item, index) => (
            <div key={index} className="flex justify-between text-xs">
              <span className="text-text-secondary">{item.label}</span>
              <span className="text-text-primary">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}
