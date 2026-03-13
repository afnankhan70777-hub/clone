import { useState } from 'react';
import { CustomCard } from '@/components/ui/CustomCard';
import { DataTable } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/button';
import { Printer, Download } from 'lucide-react';
import { CustomSelect } from '@/components/ui/CustomSelect';

interface UserLog {
  logNo: number;
  logDate: string;
  logTime: string;
  userId: string;
  userName: string;
  activity: string;
  module: string;
  documentNo: string;
  ipAddress: string;
}

const userLogsData: UserLog[] = [
  { logNo: 1, logDate: '15-03-2024', logTime: '09:15:23', userId: 'U001', userName: 'Ahmad Khan', activity: 'Login', module: 'System', documentNo: '-', ipAddress: '192.168.1.100' },
  { logNo: 2, logDate: '15-03-2024', logTime: '09:20:45', userId: 'U001', userName: 'Ahmad Khan', activity: 'Create', module: 'Sales', documentNo: 'SI-001', ipAddress: '192.168.1.100' },
  { logNo: 3, logDate: '15-03-2024', logTime: '10:30:12', userId: 'U002', userName: 'Ali Raza', activity: 'Login', module: 'System', documentNo: '-', ipAddress: '192.168.1.101' },
  { logNo: 4, logDate: '15-03-2024', logTime: '10:45:33', userId: 'U002', userName: 'Ali Raza', activity: 'Edit', module: 'Purchases', documentNo: 'PI-005', ipAddress: '192.168.1.101' },
  { logNo: 5, logDate: '15-03-2024', logTime: '11:15:56', userId: 'U003', userName: 'Tariq Mehmood', activity: 'Login', module: 'System', documentNo: '-', ipAddress: '192.168.1.102' },
  { logNo: 6, logDate: '15-03-2024', logTime: '11:30:22', userId: 'U003', userName: 'Tariq Mehmood', activity: 'Delete', module: 'Inventory', documentNo: 'ADJ-002', ipAddress: '192.168.1.102' },
  { logNo: 7, logDate: '15-03-2024', logTime: '14:20:18', userId: 'U001', userName: 'Ahmad Khan', activity: 'Logout', module: 'System', documentNo: '-', ipAddress: '192.168.1.100' },
];

export function UserLogReport() {
  const [dateRange, setDateRange] = useState('today');

  const dateOptions = [
    { value: 'today', label: 'Today' },
    { value: 'yesterday', label: 'Yesterday' },
    { value: 'thisWeek', label: 'This Week' },
    { value: 'thisMonth', label: 'This Month' },
  ];

  const columns = [
    { header: 'Log No', accessorKey: 'logNo' as const, width: '70px' },
    { header: 'Date', accessorKey: 'logDate' as const, width: '90px' },
    { header: 'Time', accessorKey: 'logTime' as const, width: '80px' },
    { header: 'User ID', accessorKey: 'userId' as const, width: '70px' },
    { header: 'User Name', accessorKey: 'userName' as const, width: '130px' },
    { header: 'Activity', accessorKey: 'activity' as const, width: '80px', cell: ({ row }: { row: { original: UserLog } }) => (
      <span className={`px-2 py-0.5 rounded text-xs ${
        row.original.activity === 'Login' ? 'bg-green-500/20 text-green-400' :
        row.original.activity === 'Logout' ? 'bg-red-500/20 text-red-400' :
        row.original.activity === 'Create' ? 'bg-blue-500/20 text-blue-400' :
        row.original.activity === 'Edit' ? 'bg-yellow-500/20 text-yellow-400' :
        'bg-gray-500/20 text-gray-400'
      }`}>
        {row.original.activity}
      </span>
    )},
    { header: 'Module', accessorKey: 'module' as const, width: '100px' },
    { header: 'Document No', accessorKey: 'documentNo' as const, width: '100px' },
    { header: 'IP Address', accessorKey: 'ipAddress' as const, width: '110px' },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Toolbar */}
      <div className="flex items-center justify-between p-1 bg-[#3a3a3a] border-b border-[#454545]">
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#a0a0a0]">Date Range:</span>
          <CustomSelect
            value={dateRange}
            onValueChange={setDateRange}
            options={dateOptions}
            className="w-32"
          />
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-7 text-xs bg-[#454545] hover:bg-[#555555] text-white"
          >
            <Printer className="h-3.5 w-3.5 mr-1" />
            Print
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 text-xs bg-[#00bfa5] hover:bg-[#00a893] text-white"
          >
            <Download className="h-3.5 w-3.5 mr-1" />
            Export
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-2 overflow-auto">
        <CustomCard title="User Log Report" className="h-full">
          <DataTable
            columns={columns}
            data={userLogsData}
          />
        </CustomCard>
      </div>
    </div>
  );
}
