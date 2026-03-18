
import { useState } from "react";
import CreateOrderModal from "../components/CreateOrderModal";

export default function TableView({ orders, onAddOrder, onDeleteOrder, onUpdateOrder }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingOrder, setEditingOrder] = useState(null);

  const handleOpenCreate = () => {
    setEditingOrder(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (order) => {
    setEditingOrder(order);
    setIsModalOpen(true);
  };

  const handleSaveOrder = (data) => {
    if (editingOrder) {
      onUpdateOrder({ ...editingOrder, ...data });
    } else {
      const nextNumber = orders.length + 1;
      
      const finalOrder = {
        ...data,
        id: `ORD-${String(Math.floor(Math.random() * 9000) + 1000)}`,
        custId: `CUST-${String(nextNumber).padStart(4, "0")}`,
        orderDate: new Date().toISOString().split('T')[0],
       
        productName: data.productName, 
        totalAmount: parseFloat(data.totalAmount || 0),
        status: data.status || "Pending" 
      };
      
      onAddOrder(finalOrder);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="p-8 min-h-screen bg-[#F8FAFC]">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight uppercase">Customer Orders</h1>
          <p className="text-sm text-gray-500 font-medium mt-1">Direct Database Management Interface</p>
        </div>
        <button 
          onClick={handleOpenCreate}
          className="bg-gray-900 text-white px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-teal-600 shadow-lg transition-all active:scale-95"
        >
          <span className="text-lg">+</span> Create Order
        </button>
      </div>

      {/* Data Table */}
      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[60vh] border-4 border-dashed border-gray-100 rounded-[2.5rem] bg-gray-50/50">
          <p className="text-gray-400 font-bold mb-4">Database is currently empty</p>
          <button onClick={handleOpenCreate} className="bg-teal-500 text-white px-8 py-3 rounded-xl font-bold shadow-lg">Add First Order</button>
        </div>
      ) : (
        <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead>
                <tr className="bg-gray-50/50 text-gray-400 border-b">
                  <th className="px-6 py-5 font-black uppercase text-[10px] tracking-widest">Customer ID</th>
                  <th className="px-6 py-5 font-black uppercase text-[10px] tracking-widest">Customer Name</th>
                  <th className="px-6 py-5 font-black uppercase text-[10px] tracking-widest">Contact Info</th>
                  <th className="px-6 py-5 font-black uppercase text-[10px] tracking-widest">Location</th>
                  <th className="px-6 py-5 font-black uppercase text-[10px] tracking-widest">Product & Order</th>
                  <th className="px-6 py-5 font-black uppercase text-[10px] tracking-widest text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {orders.map((order) => (
                  <tr key={order.id} className="group hover:bg-teal-50/30 transition-colors">
                    <td className="px-6 py-4">
                      <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded-lg font-bold text-[11px] border border-teal-100">
                        {order.custId}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-bold text-gray-900">{order.firstName} {order.lastName}</p>
                      <p className="text-[11px] text-gray-400">{order.email}</p>
                    </td>
                    <td className="px-6 py-4 text-gray-600 font-medium">
                      {order.phone}
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-gray-600 text-xs leading-relaxed max-w-[180px] truncate">
                        {order.address}, {order.city}
                      </p>
                      <p className="text-[10px] font-bold text-gray-400 uppercase">{order.state} {order.zip}</p>
                    </td>
                    {/* UPDATED COLUMN */}
                    <td className="px-6 py-4">
                      <p className="font-black text-gray-900">{order.productName || "No Product"}</p>
                      <p className="text-[11px] font-bold text-teal-500">{order.id} | {order.orderDate}</p>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center gap-2">
                         <button 
                           onClick={() => handleOpenEdit(order)} 
                           className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-gray-200 transition-all text-gray-400 hover:text-teal-600"
                         >
                           Edit
                         </button>
                         <button 
                           onClick={() => onDeleteOrder(order.id)} 
                           className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-gray-200 transition-all text-gray-400 hover:text-red-500"
                         >
                           ✕
                         </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <CreateOrderModal 
        isOpen={isModalOpen} 
        initialData={editingOrder}
        onClose={() => setIsModalOpen(false)} 
        onSave={handleSaveOrder} 
      />
    </div>
  );
}