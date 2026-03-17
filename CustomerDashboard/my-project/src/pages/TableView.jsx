// // // // // // import { useState, useEffect } from "react";
// // // // // // import CreateOrderModal from "../components/CreateOrderModal"; // Ensure correct path

// // // // // // export default function TableView() {
// // // // // //   const [viewMode, setViewMode] = useState("table");
// // // // // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // // // // //   const [orders, setOrders] = useState(() => {
// // // // // //     const saved = localStorage.getItem("customerOrders");
// // // // // //     return saved ? JSON.parse(saved) : [];
// // // // // //   });

// // // // // //   useEffect(() => {
// // // // // //     localStorage.setItem("customerOrders", JSON.stringify(orders));
// // // // // //   }, [orders]);

// // // // // // const handleSaveOrder = (newOrderData) => {
// // // // // //   const nextNumber = orders.length + 1;

// // // // // //   const finalOrder = {
// // // // // //     ...newOrderData,
// // // // // //     sno: nextNumber,
// // // // // //     id: `ORD-${String(nextNumber).padStart(4, "0")}`,
// // // // // //     custId: `CUST-${String(nextNumber).padStart(4, "0")}`,
// // // // // //     date: new Date().toLocaleDateString("en-US", {
// // // // // //       month: "short",
// // // // // //       day: "2-digit",
// // // // // //       year: "numeric"
// // // // // //     })
// // // // // //   };

// // // // // //   setOrders([finalOrder, ...orders]);
// // // // // //   setIsModalOpen(false);
// // // // // // };

// // // // // //   return (
// // // // // //     <div className={`p-8 min-h-screen bg-gray-50 ${isModalOpen ? 'overflow-hidden' : ''}`}>
// // // // // //       {/* Header & Nav */}
// // // // // //       <div className="flex justify-between items-center mb-6">
// // // // // //         <h1 className="text-2xl font-bold">Customer Orders</h1>
// // // // // //         <button 
// // // // // //           onClick={() => setIsModalOpen(true)}
// // // // // //           className="bg-[#10b981] text-white px-4 py-2 rounded-md font-medium flex items-center gap-2"
// // // // // //         >
// // // // // //           <span className="text-lg">+</span> Create order
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       {/* Empty State Logic */}
// // // // // //       {orders.length === 0 ? (
// // // // // //         <div className="flex flex-col items-center justify-center h-[60vh] bg-white rounded-lg border border-dashed border-gray-300">
// // // // // //           <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
// // // // // //              <span className="text-2xl text-gray-400">📋</span>
// // // // // //           </div>
// // // // // //           <h2 className="text-lg font-semibold">No Orders Yet</h2>
// // // // // //           <p className="text-gray-500 mb-6">Click Create Order and enter your order information</p>
// // // // // //           <button 
// // // // // //             onClick={() => setIsModalOpen(true)}
// // // // // //             className="bg-[#10b981] text-white px-6 py-2 rounded-md font-medium"
// // // // // //           >
// // // // // //             + Create order
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       ) : (
// // // // // //         /* Table Code Goes Here... */
// // // // // //        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
// // // // // //   <table className="w-full text-sm">
    
// // // // // //     {/* Table Header */}
// // // // // //     <thead className="bg-gray-100 text-gray-600">
// // // // // //       <tr>
// // // // // //         <th className="p-3 text-left">S.No</th>
// // // // // //         <th className="p-3 text-left">Order ID</th>
// // // // // //         <th className="p-3 text-left">Customer</th>
// // // // // //         <th className="p-3 text-left">Product</th>
// // // // // //         <th className="p-3 text-left">Amount</th>
// // // // // //         <th className="p-3 text-left">Status</th>
// // // // // //         <th className="p-3 text-left">Date</th>
// // // // // //       </tr>
// // // // // //     </thead>

// // // // // //     {/* Table Body */}
// // // // // //     <tbody>
// // // // // //       {orders.map((order, index) => (
// // // // // //         <tr key={index} className="border-t hover:bg-gray-50">

// // // // // //           <td className="p-3">{order.sno}</td>

// // // // // //           <td className="p-3 font-medium text-gray-800">
// // // // // //             {order.id}
// // // // // //           </td>

// // // // // //           <td className="p-3">
// // // // // //             {order.firstName} {order.lastName}
// // // // // //           </td>

// // // // // //           <td className="p-3">
// // // // // //             {order.product}
// // // // // //           </td>

// // // // // //           <td className="p-3 font-semibold">
// // // // // //             ${order.totalAmount || order.qty * order.unitPrice}
// // // // // //           </td>

// // // // // //           <td className="p-3">
// // // // // //             <span className="px-2 py-1 rounded text-xs bg-yellow-100 text-yellow-700">
// // // // // //               {order.status}
// // // // // //             </span>
// // // // // //           </td>

// // // // // //           <td className="p-3 text-gray-500">
// // // // // //             {order.date}
// // // // // //           </td>

// // // // // //         </tr>
// // // // // //       ))}
// // // // // //     </tbody>

// // // // // //   </table>
// // // // // // </div>
// // // // // //       )}

// // // // // //       {/* THE MODAL - Must be outside other relative containers */}
// // // // // //       {isModalOpen && (
// // // // // //         <CreateOrderModal 
// // // // // //           isOpen={isModalOpen} 
// // // // // //           onClose={() => setIsModalOpen(false)} 
// // // // // //           onSave={handleSaveOrder} 
// // // // // //         />
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // }
// // // // // import { useState } from "react";
// // // // // import CreateOrderModal from "../components/CreateOrderModal";

// // // // // export default function TableView({ orders, onAddOrder, onDeleteOrder, onUpdateOrder }) {
// // // // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // // // //   const [editingOrder, setEditingOrder] = useState(null);

// // // // //   const handleOpenCreate = () => {
// // // // //     setEditingOrder(null);
// // // // //     setIsModalOpen(true);
// // // // //   };

// // // // //   const handleOpenEdit = (order) => {
// // // // //     setEditingOrder(order);
// // // // //     setIsModalOpen(true);
// // // // //   };

// // // // //   const handleSaveOrder = (data) => {
// // // // //     if (editingOrder) {
// // // // //       onUpdateOrder({ ...editingOrder, ...data });
// // // // //     } else {
// // // // //       const nextNumber = orders.length + 1;
// // // // //       const finalOrder = {
// // // // //         ...data,
// // // // //         sno: nextNumber,
// // // // //         id: `ORD-${String(nextNumber).padStart(4, "0")}`,
// // // // //         custId: `CUST-${String(nextNumber).padStart(4, "0")}`,
// // // // //         date: new Date().toLocaleDateString("en-US", {
// // // // //           month: "short", day: "2-digit", year: "numeric"
// // // // //         })
// // // // //       };
// // // // //       onAddOrder(finalOrder);
// // // // //     }
// // // // //     setIsModalOpen(false);
// // // // //   };

// // // // //   // Status Badge Logic
// // // // //   const getStatusStyle = (status) => {
// // // // //     switch (status) {
// // // // //       case 'Completed': return 'bg-green-100 text-green-700';
// // // // //       case 'In progress': return 'bg-blue-100 text-blue-700';
// // // // //       default: return 'bg-yellow-100 text-yellow-700';
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="p-8 min-h-screen bg-gray-50">
// // // // //       <div className="flex justify-between items-center mb-6">
// // // // //         <h1 className="text-2xl font-bold">Customer Orders</h1>
// // // // //         <button 
// // // // //           onClick={handleOpenCreate}
// // // // //           className="bg-[#10b981] text-white px-4 py-2 rounded-md font-medium hover:bg-[#059669]"
// // // // //         >
// // // // //           + Create order
// // // // //         </button>
// // // // //       </div>

// // // // //       {orders.length === 0 ? (
// // // // //         <div className="flex flex-col items-center justify-center h-[60vh] bg-white rounded-lg border border-dashed border-gray-300">
// // // // //           <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4 text-2xl">📋</div>
// // // // //           <h2 className="text-lg font-semibold">No Orders Yet</h2>
// // // // //           <p className="text-gray-500 mb-6">Click Create Order and enter your order information</p>
// // // // //           <button onClick={handleOpenCreate} className="bg-[#10b981] text-white px-6 py-2 rounded-md">+ Create order</button>
// // // // //         </div>
// // // // //       ) : (
// // // // //         <div className="bg-white rounded-lg shadow-sm border overflow-x-auto">
// // // // //           <table className="w-full text-sm">
// // // // //             <thead className="bg-gray-50 text-gray-600 border-b">
// // // // //               <tr>
// // // // //                 <th className="p-4 text-left">S.No</th>
// // // // //                 <th className="p-4 text-left">Order ID</th>
// // // // //                 <th className="p-4 text-left">Customer</th>
// // // // //                 <th className="p-4 text-left">Product</th>
// // // // //                 <th className="p-4 text-left">Amount</th>
// // // // //                 <th className="p-4 text-left">Status</th>
// // // // //                 <th className="p-4 text-left">Actions</th>
// // // // //               </tr>
// // // // //             </thead>
// // // // //             <tbody>
// // // // //               {orders.map((order) => (
// // // // //                 <tr key={order.id} className="border-b hover:bg-gray-50 transition-colors">
// // // // //                   <td className="p-4">{order.sno}</td>
// // // // //                   <td className="p-4 font-medium">{order.id}</td>
// // // // //                   <td className="p-4">{order.firstName} {order.lastName}</td>
// // // // //                   <td className="p-4">{order.product}</td>
// // // // //                   <td className="p-4 font-semibold">${order.totalAmount}</td>
// // // // //                   <td className="p-4">
// // // // //                     <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusStyle(order.status)}`}>
// // // // //                       {order.status}
// // // // //                     </span>
// // // // //                   </td>
// // // // //                   <td className="p-4">
// // // // //                     <div className="flex gap-3">
// // // // //                       <button onClick={() => handleOpenEdit(order)} className="text-blue-600 hover:underline">Edit</button>
// // // // //                       <button onClick={() => onDeleteOrder(order.id)} className="text-red-600 hover:underline">Delete</button>
// // // // //                     </div>
// // // // //                   </td>
// // // // //                 </tr>
// // // // //               ))}
// // // // //             </tbody>
// // // // //           </table>
// // // // //         </div>
// // // // //       )}

// // // // //       {isModalOpen && (
// // // // //         <CreateOrderModal 
// // // // //           isOpen={isModalOpen} 
// // // // //           initialData={editingOrder}
// // // // //           onClose={() => setIsModalOpen(false)} 
// // // // //           onSave={handleSaveOrder} 
// // // // //         />
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // import { useState } from "react";
// // // // import CreateOrderModal from "../components/CreateOrderModal";

// // // // export default function TableView({ orders, onAddOrder, onDeleteOrder, onUpdateOrder }) {
// // // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // // //   const [editingOrder, setEditingOrder] = useState(null);

// // // //   const handleOpenCreate = () => {
// // // //     setEditingOrder(null);
// // // //     setIsModalOpen(true);
// // // //   };

// // // //   const handleOpenEdit = (order) => {
// // // //     setEditingOrder(order);
// // // //     setIsModalOpen(true);
// // // //   };

// // // //   const handleSaveOrder = (data) => {
// // // //     if (editingOrder) {
// // // //       onUpdateOrder({ ...editingOrder, ...data });
// // // //     } else {
// // // //       const nextNumber = orders.length + 1;
// // // //       const finalOrder = {
// // // //         ...data,
// // // //         sno: nextNumber,
// // // //         id: `ORD-${String(nextNumber).padStart(4, "0")}`,
// // // //         custId: `CUST-${String(nextNumber).padStart(4, "0")}`,
// // // //         date: new Date().toLocaleDateString("en-US", {
// // // //           month: "short", day: "2-digit", year: "numeric"
// // // //         })
// // // //       };
// // // //       onAddOrder(finalOrder);
// // // //     }
// // // //     setIsModalOpen(false);
// // // //   };

// // // //   const getStatusStyle = (status) => {
// // // //     switch (status) {
// // // //       case 'Completed': return 'bg-green-100 text-green-700';
// // // //       case 'Shipped': return 'bg-blue-100 text-blue-700';
// // // //       case 'Pending': return 'bg-yellow-100 text-yellow-700';
// // // //       default: return 'bg-gray-100 text-gray-700';
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="p-8 min-h-screen bg-gray-50">
// // // //       <div className="flex justify-between items-center mb-6">
// // // //         <div>
// // // //            <h1 className="text-2xl font-black text-gray-800 uppercase tracking-tight">Customer Orders</h1>
// // // //            <p className="text-xs text-gray-400 font-medium">Manage and monitor real-time order data</p>
// // // //         </div>
// // // //         <button 
// // // //           onClick={handleOpenCreate}
// // // //           className="bg-teal-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-teal-700 shadow-lg transition-all active:scale-95"
// // // //         >
// // // //           + Create Order
// // // //         </button>
// // // //       </div>

// // // //       {orders.length === 0 ? (
// // // //         <div className="flex flex-col items-center justify-center h-[60vh] bg-white rounded-[2rem] border-2 border-dashed border-gray-200 shadow-inner">
// // // //           <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 text-3xl shadow-sm">📦</div>
// // // //           <h2 className="text-xl font-black text-gray-800">No Orders Found</h2>
// // // //           <p className="text-gray-400 mb-6 text-sm">Your dashboard charts need data! Create your first order now.</p>
// // // //           <button onClick={handleOpenCreate} className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-teal-600 transition-all">+ Add First Order</button>
// // // //         </div>
// // // //       ) : (
// // // //         <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
// // // //           <table className="w-full text-left">
// // // //             <thead className="bg-gray-50/50 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b">
// // // //               <tr>
// // // //                 <th className="p-5">S.No</th>
// // // //                 <th className="p-5">Order ID</th>
// // // //                 <th className="p-5">Customer</th>
// // // //                 <th className="p-5">Product</th>
// // // //                 <th className="p-5">Amount</th>
// // // //                 <th className="p-5">Status</th>
// // // //                 <th className="p-5 text-right">Actions</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody className="divide-y divide-gray-50">
// // // //               {orders.map((order) => (
// // // //                 // Updated columns for TableView.jsx inside the <tbody> map
// // // // <tr key={order.id} className="border-b hover:bg-gray-50 transition-colors">
// // // //   <td className="p-4">{order.sno}</td>
// // // //   <td className="p-4 font-medium text-teal-600">{order.custId}</td>
// // // //   <td className="p-4">{order.firstName} {order.lastName}</td>
// // // //   <td className="p-4 text-gray-500">{order.email}</td>
// // // //   <td className="p-4 text-gray-500">{order.phone}</td>
// // // //   <td className="p-4 text-xs text-gray-400 truncate max-w-[150px]">{order.address}, {order.city}</td>
// // // //   <td className="p-4 font-bold">{order.id}</td>
// // // //   <td className="p-4 text-gray-500">{order.date}</td>
// // // //   <td className="p-4">
// // // //     <button onClick={() => handleOpenEdit(order)} className="text-gray-400">⋮</button>
// // // //   </td>
// // // // </tr>
// // // //               ))}
// // // //             </tbody>
// // // //           </table>
// // // //         </div>
// // // //       )}

// // // //       {isModalOpen && (
// // // //         <CreateOrderModal 
// // // //           initialData={editingOrder}
// // // //           onClose={() => setIsModalOpen(false)} 
// // // //           onSave={handleSaveOrder} 
// // // //         />
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }
// // // import { useState } from "react";
// // // import CreateOrderModal from "../components/CreateOrderModal";

// // // export default function TableView({ orders, onAddOrder, onDeleteOrder, onUpdateOrder }) {
// // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // //   const [editingOrder, setEditingOrder] = useState(null);

// // //   const handleOpenCreate = () => {
// // //     setEditingOrder(null);
// // //     setIsModalOpen(true); // This must match the 'isOpen' prop in the modal
// // //   };

// // //   const handleOpenEdit = (order) => {
// // //     setEditingOrder(order);
// // //     setIsModalOpen(true);
// // //   };

// // //   const handleSaveOrder = (data) => {
// // //     if (editingOrder) {
// // //       onUpdateOrder({ ...editingOrder, ...data });
// // //     } else {
// // //       // Create logic
// // //       const nextNumber = orders.length + 1;
// // //       const finalOrder = {
// // //         ...data,
// // //         sno: nextNumber,
// // //         id: `ORD-${String(nextNumber).padStart(4, "0")}`,
// // //         custId: `CUST-${String(nextNumber).padStart(4, "0")}`,
// // //         date: new Date().toLocaleDateString("en-US", {
// // //           month: "short", day: "2-digit", year: "numeric"
// // //         })
// // //       };
// // //       onAddOrder(finalOrder);
// // //     }
// // //     setIsModalOpen(false);
// // //   };

// // //   return (
// // //     <div className="p-8 min-h-screen bg-gray-50">
// // //       <div className="flex justify-between items-center mb-6">
// // //         <h1 className="text-2xl font-black text-gray-800">Customer Orders</h1>
// // //         <button 
// // //           onClick={handleOpenCreate}
// // //           className="bg-[#10b981] text-white px-6 py-2 rounded-xl font-bold hover:bg-[#059669] shadow-lg"
// // //         >
// // //           + Create order
// // //         </button>
// // //       </div>

// // //       {/* Empty State Logic */}
// // //       {orders.length === 0 ? (
// // //         <div className="flex flex-col items-center justify-center h-[60vh] bg-white rounded-[2rem] border-2 border-dashed border-gray-200">
// // //           <div className="text-4xl mb-4">📋</div>
// // //           <h2 className="text-lg font-bold">No Orders Yet</h2>
// // //           <p className="text-gray-400 mb-6">Click Create Order and enter your order information</p>
// // //           <button onClick={handleOpenCreate} className="bg-[#10b981] text-white px-8 py-2 rounded-xl font-bold">+ Create order</button>
// // //         </div>
// // //       ) : (
// // //         /* Table rendering logic... */
// // //         <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
// // //              {/* ... (table headers and body) */}
// // //         </div>
// // //       )}

// // //       {/* MODAL CALL: Ensure prop names match exactly */}
// // //       <CreateOrderModal 
// // //         isOpen={isModalOpen} 
// // //         initialData={editingOrder}
// // //         onClose={() => setIsModalOpen(false)} 
// // //         onSave={handleSaveOrder} 
// // //       />
// // //     </div>
// // //   );
// // // }
// // import { useState } from "react";
// // import CreateOrderModal from "../components/CreateOrderModal";

// // export default function TableView({ orders, onAddOrder, onDeleteOrder, onUpdateOrder }) {
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [editingOrder, setEditingOrder] = useState(null);

// //   const handleOpenCreate = () => {
// //     setEditingOrder(null);
// //     setIsModalOpen(true);
// //   };

// //   const handleOpenEdit = (order) => {
// //     setEditingOrder(order);
// //     setIsModalOpen(true);
// //   };

// //   const handleSaveOrder = (data) => {
// //     if (editingOrder) {
// //       onUpdateOrder({ ...editingOrder, ...data });
// //     } else {
// //       const nextNumber = orders.length + 1;
// //       const finalOrder = {
// //         ...data,
// //         sno: nextNumber,
// //         id: `ORD-${String(nextNumber).padStart(4, "0")}`,
// //         custId: `CUST-${String(nextNumber).padStart(4, "0")}`,
// //         date: new Date().toLocaleDateString("en-US", {
// //           month: "short", day: "2-digit", year: "numeric"
// //         })
// //       };
// //       onAddOrder(finalOrder);
// //     }
// //     setIsModalOpen(false);
// //   };

// //   return (
// //     <div className="p-8 min-h-screen bg-white">
// //       {/* Header Section */}
// //       <div className="flex justify-between items-center mb-2">
// //         <div>
// //           <h1 className="text-xl font-bold text-gray-800">Customer Orders</h1>
// //           <p className="text-sm text-gray-500">View and manage customer orders and details</p>
// //         </div>
// //         <div className="flex gap-2">
// //           <div className="relative">
// //             <input type="text" placeholder="Search" className="border rounded-md px-3 py-1.5 text-sm w-64 outline-none focus:ring-1 focus:ring-teal-500" />
// //           </div>
// //           <button 
// //             onClick={handleOpenCreate}
// //             className="bg-[#10b981] text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-[#059669]"
// //           >
// //            Create order
// //           </button>
// //         </div>
// //       </div>

// //       {/* Tabs */}
// //       <div className="flex gap-4 border-b mb-4">
       
// //         <button className="py-2 px-1 text-sm font-medium text-teal-600 border-b-2 border-teal-600 flex items-center gap-1">
// //            Table
// //         </button>
// //       </div>

// //       {/* Data Table or Empty State */}
// //       {orders.length === 0 ? (
// //         <div className="flex flex-col items-center justify-center h-[50vh] border-2 border-dashed rounded-lg bg-gray-50">
// //           <p className="text-gray-500 mb-4">No orders found. Start by creating one.</p>
// //           <button onClick={handleOpenCreate} className="bg-[#10b981] text-white px-6 py-2 rounded-md font-medium">Create order</button>
// //         </div>
// //       ) : (
// //         <div className="overflow-x-auto border rounded-lg">
// //           <table className="w-full text-left text-sm whitespace-nowrap">
// //             <thead className="bg-gray-50 text-gray-600 border-b">
// //               <tr>
// //                 <th className="p-3 font-semibold">S.no</th>
// //                 <th className="p-3 font-semibold">Customer ID</th>
// //                 <th className="p-3 font-semibold">Customer name</th>
// //                 <th className="p-3 font-semibold">Email id</th>
// //                 <th className="p-3 font-semibold">Phone number</th>
// //                 <th className="p-3 font-semibold">Address</th>
// //                 <th className="p-3 font-semibold">Order ID</th>
// //                 <th className="p-3 font-semibold">Order date</th>
// //                 <th className="p-3 font-semibold text-center">Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {orders.map((order) => (
// //                 <tr key={order.id} className="border-b hover:bg-gray-50 transition-colors">
// //                   <td className="p-3 text-gray-600">{order.sno}</td>
// //                   <td className="p-3 text-teal-600 font-medium">{order.custId}</td>
// //                   <td className="p-3 font-medium">{order.firstName} {order.lastName}</td>
// //                   <td className="p-3 text-gray-600">{order.email}</td>
// //                   <td className="p-3 text-gray-600">{order.phone}</td>
// //                   <td className="p-3 text-gray-600 max-w-[200px] truncate">
// //                     {order.address}, {order.city}, {order.state} {order.zip}
// //                   </td>
// //                   <td className="p-3 font-bold">{order.id}</td>
// //                   <td className="p-3 text-gray-600">{order.date}</td>
// //                   <td className="p-3 text-center">
// //                     <button onClick={() => handleOpenEdit(order)} className="text-gray-400 hover:text-black text-xl font-bold">⋮</button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       )}

// //       {/* Modal */}
// //       <CreateOrderModal 
// //         isOpen={isModalOpen} 
// //         initialData={editingOrder}
// //         onClose={() => setIsModalOpen(false)} 
// //         onSave={handleSaveOrder} 
// //       />
// //     </div>
// //   );
// // }
// import { useState } from "react";
// import CreateOrderModal from "../components/CreateOrderModal";

// export default function TableView({ orders, onAddOrder, onDeleteOrder, onUpdateOrder }) {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingOrder, setEditingOrder] = useState(null);

//   const handleOpenCreate = () => {
//     setEditingOrder(null);
//     setIsModalOpen(true);
//   };

//   const handleOpenEdit = (order) => {
//     setEditingOrder(order);
//     setIsModalOpen(true);
//   };

//   const handleSaveOrder = (data) => {
//     if (editingOrder) {
//       // Logic for updating an existing record in the DB
//       onUpdateOrder({ ...editingOrder, ...data });
//     } else {
//       // Logic for a new record
//       const nextNumber = orders.length + 1;
      
//       // We structure the object to match the Spring Boot 'Order' entity
//       const finalOrder = {
//         ...data,
//         id: `ORD-${String(Math.floor(Math.random() * 9000) + 1000)}`, // Unique ID for DB Primary Key
//         custId: `CUST-${String(nextNumber).padStart(4, "0")}`,
//         // Mapping UI fields to backend Entity fields
//         orderDate: new Date().toISOString().split('T')[0], // YYYY-MM-DD for SQL compatibility
//         totalAmount: parseFloat(data.totalAmount || 0), // Ensures numeric type for aggregation
//         status: "Pending" 
//       };
      
//       onAddOrder(finalOrder);
//     }
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="p-8 min-h-screen bg-[#F8FAFC]">
//       {/* Header Section */}
//       <div className="flex justify-between items-end mb-8">
//         <div>
//           <h1 className="text-2xl font-black text-gray-900 tracking-tight uppercase">Customer Orders</h1>
//           <p className="text-sm text-gray-500 font-medium mt-1">Direct Database Management Interface</p>
//         </div>
//         <div className="flex gap-3">
//           <div className="relative group">
//             <input 
//               type="text" 
//               placeholder="Search orders..." 
//               className="border-2 border-gray-100 rounded-xl px-4 py-2.5 text-sm w-72 outline-none focus:border-teal-500 bg-white transition-all" 
//             />
//           </div>
//           <button 
//             onClick={handleOpenCreate}
//             className="bg-gray-900 text-white px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-teal-600 shadow-lg shadow-gray-200 transition-all active:scale-95"
//           >
//             <span className="text-lg">+</span> Create Order
//           </button>
//         </div>
//       </div>

//       {/* Stats Summary Bar (Optional visual touch) */}
//       <div className="grid grid-cols-4 gap-4 mb-6">
//         <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
//           <p className="text-[10px] font-black text-gray-400 uppercase">Total Records</p>
//           <p className="text-xl font-bold text-gray-900">{orders.length}</p>
//         </div>
//       </div>

//       {/* Data Table */}
//       {orders.length === 0 ? (
//         <div className="flex flex-col items-center justify-center h-[60vh] border-4 border-dashed border-gray-100 rounded-[2.5rem] bg-gray-50/50">
//           <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
//              <span className="text-3xl text-gray-300">📦</span>
//           </div>
//           <p className="text-gray-400 font-bold mb-4">Database is currently empty</p>
//           <button onClick={handleOpenCreate} className="bg-teal-500 text-white px-8 py-3 rounded-xl font-bold shadow-teal-100 shadow-lg">Add First Order</button>
//         </div>
//       ) : (
//         <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full text-left text-sm whitespace-nowrap">
//               <thead>
//                  <tr className="bg-gray-50/50 text-gray-400 border-b">
//   <th className="px-6 py-5 font-black uppercase text-[10px] tracking-widest">Customer ID</th>
//   <th className="px-6 py-5 font-black uppercase text-[10px] tracking-widest">Customer Name</th>
//   {/* ADD THIS NEW HEADER */}
//   <th className="px-6 py-5 font-black uppercase text-[10px] tracking-widest">Product</th> 
//   <th className="px-6 py-5 font-black uppercase text-[10px] tracking-widest">Order Details</th>
//   <th className="px-6 py-5 font-black uppercase text-[10px] tracking-widest text-center">Actions</th>
// </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-50">
//                 {orders.map((order) => (
//                   <tr key={order.id} className="group hover:bg-teal-50/30 transition-colors">
//                     <td className="px-6 py-4">
//                       <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded-lg font-bold text-[11px] border border-teal-100">
//                         {order.custId}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4">
//                       <p className="font-bold text-gray-900">{order.firstName} {order.lastName}</p>
//                       <p className="text-[11px] text-gray-400">{order.email}</p>
//                     </td>
//                     <td className="px-6 py-4 text-gray-600 font-medium">
//                       {order.phone}
//                     </td>
//                     <td className="px-6 py-4">
//                       <p className="text-gray-600 text-xs leading-relaxed max-w-[180px] truncate">
//                         {order.address}, {order.city}
//                       </p>
//                       <p className="text-[10px] font-bold text-gray-400 uppercase">{order.state} {order.zip}</p>
//                     </td>
//                     <td className="px-6 py-4">
//   <p className="font-black text-gray-900">{order.productName || "No Product"}</p>
//   <p className="text-[11px] font-bold text-teal-500">{order.id} | {order.orderDate}</p>
// </td>
//                     <td className="px-6 py-4 text-center">
//                       <div className="flex justify-center gap-2">
//                          <button 
//                            onClick={() => handleOpenEdit(order)} 
//                            className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-gray-200 transition-all text-gray-400 hover:text-teal-600"
//                          >
//                            Edit
//                          </button>
//                          <button 
//                            onClick={() => onDeleteOrder(order.id)} 
//                            className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-gray-200 transition-all text-gray-400 hover:text-red-500"
//                          >
//                            ✕
//                          </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}

//       {/* Modal */}
//       <CreateOrderModal 
//         isOpen={isModalOpen} 
//         initialData={editingOrder}
//         onClose={() => setIsModalOpen(false)} 
//         onSave={handleSaveOrder} 
//       />
//     </div>
//   );
// }
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
        // Ensure we are using the exact key the backend expects
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