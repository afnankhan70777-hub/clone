import { useState } from 'react';
import { Plus, Check, X, Trash2, Printer, RefreshCw, Bell, Calendar, Clock } from 'lucide-react';
import { CustomCard as Card } from '@/components/ui/CustomCard';

const remindersData = [
  { id: 1, title: 'Follow up with MSR Associates', date: '16/06/2022', time: '10:00 AM', priority: 'High', status: 'Pending', type: 'Customer' },
  { id: 2, title: 'Payment due from Bismillah Traders', date: '17/06/2022', time: '12:00 PM', priority: 'High', status: 'Pending', type: 'Payment' },
  { id: 3, title: 'Review monthly sales report', date: '20/06/2022', time: '02:00 PM', priority: 'Medium', status: 'Pending', type: 'Task' },
  { id: 4, title: 'Meeting with vendor - Green Age', date: '22/06/2022', time: '11:00 AM', priority: 'Medium', status: 'Pending', type: 'Meeting' },
  { id: 5, title: 'Stock reorder - Dairy products', date: '25/06/2022', time: '09:00 AM', priority: 'Low', status: 'Completed', type: 'Inventory' },
];

const notesData = [
  { id: 1, title: 'Important Contact Numbers', content: 'Admin: 3212345678, Support: 3344556677', date: '10/06/2022' },
  { id: 2, title: 'Bank Account Details', content: 'Bank: HBL, Account: 1234567890, Branch: Main Branch', date: '12/06/2022' },
  { id: 3, title: 'Vendor Payment Terms', content: 'Green Age: Net 30, Pakistan Suppliers: Net 15', date: '14/06/2022' },
];

export function Reminders() {
  const [activeTab, setActiveTab] = useState<'reminders' | 'notes'>('reminders');
  const [, setSelectedReminder] = useState(remindersData[0]);
  const [newReminder, setNewReminder] = useState({ title: '', date: '', time: '', priority: 'Medium' });

  return (
    <div className="p-4 space-y-3">
      {/* Title Bar */}
      <div className="bg-bg-tertiary border border-border-custom p-2 flex justify-between items-center">
        <h1 className="text-accent-orange font-bold text-xl">REMINDERS & NOTES</h1>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 bg-bg-secondary border border-border-custom text-xs hover:bg-bg-tertiary flex items-center gap-1">
            <RefreshCw className="w-3 h-3" />
            Refresh
          </button>
        </div>
        <div className="flex gap-1">
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
            <Printer className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1">
        <button
          onClick={() => setActiveTab('reminders')}
          className={`px-4 py-2 text-sm font-semibold flex items-center gap-2 ${activeTab === 'reminders' ? 'bg-accent-teal text-white' : 'bg-bg-tertiary text-text-secondary'}`}
        >
          <Bell className="w-4 h-4" />
          Reminders
        </button>
        <button
          onClick={() => setActiveTab('notes')}
          className={`px-4 py-2 text-sm font-semibold flex items-center gap-2 ${activeTab === 'notes' ? 'bg-accent-teal text-white' : 'bg-bg-tertiary text-text-secondary'}`}
        >
          <Calendar className="w-4 h-4" />
          Notes
        </button>
      </div>

      {/* Content */}
      {activeTab === 'reminders' ? (
        <div className="grid grid-cols-2 gap-4">
          {/* Left - Add New Reminder */}
          <Card className="p-4">
            <div className="text-accent-teal font-bold text-sm mb-3 flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add New Reminder
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-text-secondary block mb-1">Title</label>
                <input 
                  type="text" 
                  value={newReminder.title}
                  onChange={(e) => setNewReminder({...newReminder, title: e.target.value})}
                  className="w-full text-xs"
                  placeholder="Enter reminder title"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs text-text-secondary block mb-1">Date</label>
                  <div className="flex items-center bg-white border border-border-custom">
                    <Calendar className="w-4 h-4 text-text-secondary ml-2" />
                    <input 
                      type="text" 
                      value={newReminder.date}
                      onChange={(e) => setNewReminder({...newReminder, date: e.target.value})}
                      className="flex-1 text-xs py-1 px-2 border-0"
                      placeholder="DD/MM/YYYY"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-text-secondary block mb-1">Time</label>
                  <div className="flex items-center bg-white border border-border-custom">
                    <Clock className="w-4 h-4 text-text-secondary ml-2" />
                    <input 
                      type="text" 
                      value={newReminder.time}
                      onChange={(e) => setNewReminder({...newReminder, time: e.target.value})}
                      className="flex-1 text-xs py-1 px-2 border-0"
                      placeholder="HH:MM AM/PM"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label className="text-xs text-text-secondary block mb-1">Priority</label>
                <select 
                  className="w-full text-xs"
                  value={newReminder.priority}
                  onChange={(e) => setNewReminder({...newReminder, priority: e.target.value})}
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
              
              <div>
                <label className="text-xs text-text-secondary block mb-1">Type</label>
                <select className="w-full text-xs">
                  <option value="Customer">Customer</option>
                  <option value="Payment">Payment</option>
                  <option value="Task">Task</option>
                  <option value="Meeting">Meeting</option>
                  <option value="Inventory">Inventory</option>
                </select>
              </div>
              
              <button className="w-full bg-accent-orange text-white py-2 px-4 text-sm font-semibold hover:brightness-110">
                Add Reminder
              </button>
            </div>
          </Card>

          {/* Right - Reminders List */}
          <Card className="p-4">
            <div className="text-accent-teal font-bold text-sm mb-3">Upcoming Reminders</div>
            <div className="border border-border-custom overflow-auto" style={{ maxHeight: '400px' }}>
              <table className="w-full">
                <thead className="sticky top-0">
                  <tr className="bg-bg-tertiary">
                    <th className="text-xs py-2 px-2 border border-border-custom text-white">Title</th>
                    <th className="text-xs py-2 px-2 border border-border-custom text-white">Date</th>
                    <th className="text-xs py-2 px-2 border border-border-custom text-white">Priority</th>
                    <th className="text-xs py-2 px-2 border border-border-custom text-white">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {remindersData.map((reminder, i) => (
                    <tr 
                      key={reminder.id} 
                      className={`cursor-pointer hover:bg-bg-tertiary ${i % 2 === 0 ? 'bg-bg-secondary' : 'bg-bg-primary'}`}
                      onClick={() => setSelectedReminder(reminder)}
                    >
                      <td className="text-xs py-2 px-2 border border-border-custom">{reminder.title}</td>
                      <td className="text-xs py-2 px-2 border border-border-custom">{reminder.date}</td>
                      <td className="text-xs py-2 px-2 border border-border-custom">
                        <span className={`px-2 py-0.5 text-xs ${reminder.priority === 'High' ? 'bg-danger text-white' : reminder.priority === 'Medium' ? 'bg-warning text-white' : 'bg-success text-white'}`}>
                          {reminder.priority}
                        </span>
                      </td>
                      <td className="text-xs py-2 px-2 border border-border-custom">
                        <span className={`px-2 py-0.5 text-xs ${reminder.status === 'Completed' ? 'bg-success text-white' : 'bg-bg-tertiary text-text-primary'}`}>
                          {reminder.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {/* Left - Add New Note */}
          <Card className="p-4">
            <div className="text-accent-teal font-bold text-sm mb-3 flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add New Note
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-text-secondary block mb-1">Title</label>
                <input 
                  type="text" 
                  className="w-full text-xs"
                  placeholder="Enter note title"
                />
              </div>
              
              <div>
                <label className="text-xs text-text-secondary block mb-1">Content</label>
                <textarea 
                  className="w-full h-32 text-xs resize-none"
                  placeholder="Enter note content"
                />
              </div>
              
              <button className="w-full bg-accent-orange text-white py-2 px-4 text-sm font-semibold hover:brightness-110">
                Add Note
              </button>
            </div>
          </Card>

          {/* Right - Notes List */}
          <Card className="p-4">
            <div className="text-accent-teal font-bold text-sm mb-3">My Notes</div>
            <div className="space-y-3">
              {notesData.map((note) => (
                <div key={note.id} className="bg-bg-tertiary p-3 border border-border-custom">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-sm font-semibold text-accent-orange">{note.title}</h4>
                    <span className="text-xs text-text-secondary">{note.date}</span>
                  </div>
                  <p className="text-xs text-text-primary">{note.content}</p>
                  <div className="flex justify-end gap-2 mt-2">
                    <button className="p-1 bg-bg-secondary border border-border-custom hover:bg-bg-primary">
                      <X className="w-3 h-3 text-danger" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
