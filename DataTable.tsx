import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface Column {
  key?: string;
  accessorKey?: string;
  header: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cell?: (props: { row: { original: any } }) => ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface DataTableProps {
  columns: Column[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  showTotals?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  totals?: Record<string, any>;
  className?: string;
  maxHeight?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onRowClick?: (row: any) => void;
}

export function DataTable({ 
  columns, 
  data, 
  showTotals = false, 
  totals,
  className,
  maxHeight,
  onRowClick
}: DataTableProps) {
  // Normalize columns to use key
  const normalizedColumns = columns.map(col => ({
    ...col,
    key: col.key || col.accessorKey || ''
  }));

  return (
    <div className={cn('border border-border-custom overflow-hidden', className)}>
      <div className={cn('overflow-auto', maxHeight && `max-h-[${maxHeight}]`)} style={maxHeight ? { maxHeight } : undefined}>
        <table className="w-full border-collapse">
          <thead className="sticky top-0 z-10">
            <tr>
              {normalizedColumns.map((col) => (
                <th
                  key={col.key}
                  className="bg-bg-tertiary text-white text-xs font-semibold py-1.5 px-2 border border-border-custom whitespace-nowrap"
                  style={{ width: col.width, textAlign: col.align || 'left' }}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr 
                key={rowIndex}
                className={cn(
                  'hover:bg-bg-tertiary transition-colors duration-100',
                  rowIndex % 2 === 0 ? 'bg-bg-secondary' : 'bg-bg-primary',
                  onRowClick && 'cursor-pointer'
                )}
                onClick={() => onRowClick && onRowClick(row)}
              >
                {normalizedColumns.map((col) => (
                  <td
                    key={col.key}
                    className="text-xs py-1.5 px-2 border border-border-custom text-text-primary whitespace-nowrap"
                    style={{ textAlign: col.align || 'left' }}
                  >
                    {col.cell ? col.cell({ row: { original: row } }) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          {showTotals && totals && (
            <tfoot>
              <tr className="bg-bg-tertiary font-semibold">
                {normalizedColumns.map((col) => (
                  <td
                    key={col.key}
                    className="text-xs py-1.5 px-2 border border-border-custom text-success"
                    style={{ textAlign: col.align || 'left' }}
                  >
                    {totals[col.key] || ''}
                  </td>
                ))}
              </tr>
            </tfoot>
          )}
        </table>
      </div>
    </div>
  );
}
