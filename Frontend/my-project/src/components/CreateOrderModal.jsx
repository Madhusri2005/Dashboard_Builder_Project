// // // // // // import { useState } from "react";

// // // // // // export default function CreateOrderModal({ isOpen, onClose, onSave }) {
// // // // // //   const [formData, setFormData] = useState({
// // // // // //     firstName: "",
// // // // // //     lastName: "",
// // // // // //     email: "",
// // // // // //     phone: "",
// // // // // //     street: "",
// // // // // //     city: "",
// // // // // //     state: "",
// // // // // //     zip: "",
// // // // // //     country: "United States",
// // // // // //     product: "",
// // // // // //     qty: 1,
// // // // // //     unitPrice: 0,
// // // // // //     status: "Pending",
// // // // // //     createdBy: ""
// // // // // //   });

// // // // // //   if (!isOpen) return null;

// // // // // //   const totalAmount = (formData.qty * formData.unitPrice).toFixed(2);

// // // // // //   const handleSubmit = (e) => {
// // // // // //     e.preventDefault();
// // // // // //     onSave({
// // // // // //       ...formData,
// // // // // //       totalAmount: Number(totalAmount)
// // // // // //     });
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
// // // // // //       <div className="bg-white w-full max-w-2xl rounded-xl shadow-xl flex flex-col max-h-[95vh] overflow-hidden">

// // // // // //         {/* Header */}
// // // // // //         <div className="p-4 border-b flex justify-between items-center">
// // // // // //           <h2 className="text-lg font-bold">Create order</h2>
// // // // // //           <button
// // // // // //             onClick={onClose}
// // // // // //             className="text-gray-400 hover:text-gray-600 text-xl"
// // // // // //             type="button"
// // // // // //           >
// // // // // //             ✕
// // // // // //           </button>
// // // // // //         </div>

// // // // // //         {/* FORM */}
// // // // // //         <form
// // // // // //           id="orderForm"
// // // // // //           onSubmit={handleSubmit}
// // // // // //           className="overflow-y-auto p-6 space-y-6 flex-1"
// // // // // //         >

// // // // // //           {/* Customer Information */}
// // // // // //           <div className="space-y-4">
// // // // // //             <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
// // // // // //               Customer Information
// // // // // //             </h3>

// // // // // //             <div className="grid grid-cols-2 gap-4">
// // // // // //               <input
// // // // // //                 required
// // // // // //                 type="text"
// // // // // //                 placeholder="First name *"
// // // // // //                 className="border p-2 rounded-md w-full"
// // // // // //                 onChange={(e) =>
// // // // // //                   setFormData({ ...formData, firstName: e.target.value })
// // // // // //                 }
// // // // // //               />

// // // // // //               <input
// // // // // //                 required
// // // // // //                 type="email"
// // // // // //                 placeholder="Email id *"
// // // // // //                 className="border p-2 rounded-md w-full"
// // // // // //                 onChange={(e) =>
// // // // // //                   setFormData({ ...formData, email: e.target.value })
// // // // // //                 }
// // // // // //               />

// // // // // //               <input
// // // // // //                 required
// // // // // //                 type="text"
// // // // // //                 placeholder="Last name *"
// // // // // //                 className="border p-2 rounded-md w-full"
// // // // // //                 onChange={(e) =>
// // // // // //                   setFormData({ ...formData, lastName: e.target.value })
// // // // // //                 }
// // // // // //               />

// // // // // //               <input
// // // // // //                 required
// // // // // //                 type="text"
// // // // // //                 placeholder="Phone number *"
// // // // // //                 className="border p-2 rounded-md w-full"
// // // // // //                 onChange={(e) =>
// // // // // //                   setFormData({ ...formData, phone: e.target.value })
// // // // // //                 }
// // // // // //               />

// // // // // //               <input
// // // // // //                 required
// // // // // //                 type="text"
// // // // // //                 placeholder="Street Address *"
// // // // // //                 className="col-span-2 border p-2 rounded-md w-full"
// // // // // //                 onChange={(e) =>
// // // // // //                   setFormData({ ...formData, street: e.target.value })
// // // // // //                 }
// // // // // //               />
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Order Information */}
// // // // // //           <div className="space-y-4">
// // // // // //             <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
// // // // // //               Order Information
// // // // // //             </h3>

// // // // // //             <select
// // // // // //               required
// // // // // //               className="border p-2 rounded-md w-full"
// // // // // //               onChange={(e) =>
// // // // // //                 setFormData({ ...formData, product: e.target.value })
// // // // // //               }
// // // // // //             >
// // // // // //               <option value="">Choose product *</option>
// // // // // //               <option>VoIP Corporate Package</option>
// // // // // //               <option>Business Internet 500 Mbps</option>
// // // // // //               <option>Fiber Internet 1 Gbps</option>
// // // // // //             </select>

// // // // // //             <div className="grid grid-cols-2 gap-4">
// // // // // //               <input
// // // // // //                 type="number"
// // // // // //                 value={formData.qty}
// // // // // //                 min="1"
// // // // // //                 className="border p-2 rounded-md w-full"
// // // // // //                 onChange={(e) =>
// // // // // //                   setFormData({ ...formData, qty: Number(e.target.value) })
// // // // // //                 }
// // // // // //               />

// // // // // //               <div className="relative">
// // // // // //                 <span className="absolute left-2 top-2 text-gray-400">$</span>
// // // // // //                 <input
// // // // // //                   required
// // // // // //                   type="number"
// // // // // //                   placeholder="Unit price *"
// // // // // //                   className="border p-2 pl-6 rounded-md w-full"
// // // // // //                   onChange={(e) =>
// // // // // //                     setFormData({
// // // // // //                       ...formData,
// // // // // //                       unitPrice: Number(e.target.value)
// // // // // //                     })
// // // // // //                   }
// // // // // //                 />
// // // // // //               </div>

// // // // // //               <div className="bg-gray-50 border p-2 rounded-md text-gray-500">
// // // // // //                 Total amount:{" "}
// // // // // //                 <span className="font-bold text-black">${totalAmount}</span>
// // // // // //               </div>

// // // // // //               <select
// // // // // //                 className="border p-2 rounded-md w-full"
// // // // // //                 onChange={(e) =>
// // // // // //                   setFormData({ ...formData, status: e.target.value })
// // // // // //                 }
// // // // // //               >
// // // // // //                 <option>Pending</option>
// // // // // //                 <option>In Progress</option>
// // // // // //                 <option>Completed</option>
// // // // // //               </select>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Footer Buttons */}
// // // // // //           <div className="p-4 border-t bg-gray-50 flex justify-end gap-3">
// // // // // //             <button
// // // // // //               type="button"
// // // // // //               onClick={onClose}
// // // // // //               className="px-4 py-2 border rounded-md font-medium text-gray-600"
// // // // // //             >
// // // // // //               Cancel
// // // // // //             </button>

// // // // // //             <button
// // // // // //               type="submit"
// // // // // //               className="px-6 py-2 bg-[#10b981] text-white rounded-md font-medium hover:bg-[#059669]"
// // // // // //             >
// // // // // //               Submit
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </form>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }
// // // // // import { useState, useEffect } from "react";

// // // // // export default function CreateOrderModal({ isOpen, onClose, onSave, initialData }) {
// // // // //   const [formData, setFormData] = useState({
// // // // //     firstName: "", lastName: "", email: "", phone: "",
// // // // //     street: "", city: "", state: "", zip: "", country: "United States",
// // // // //     product: "", qty: 1, unitPrice: 0, status: "Pending", createdBy: ""
// // // // //   });

// // // // //   // Load initialData if we are in EDIT mode
// // // // //   useEffect(() => {
// // // // //     if (initialData) {
// // // // //       setFormData(initialData);
// // // // //     } else {
// // // // //       setFormData({
// // // // //         firstName: "", lastName: "", email: "", phone: "",
// // // // //         street: "", city: "", state: "", zip: "", country: "United States",
// // // // //         product: "", qty: 1, unitPrice: 0, status: "Pending", createdBy: ""
// // // // //       });
// // // // //     }
// // // // //   }, [initialData, isOpen]);

// // // // //   if (!isOpen) return null;

// // // // //   const totalAmount = (formData.qty * formData.unitPrice).toFixed(2);

// // // // //   const handleSubmit = (e) => {
// // // // //     e.preventDefault();
// // // // //     // Logic for required fields (HTML5 required handles the "Please fill the field" message)
// // // // //     onSave({
// // // // //       ...formData,
// // // // //       totalAmount: Number(totalAmount)
// // // // //     });
// // // // //   };

// // // // //   return (
// // // // //     <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
// // // // //       <div className="bg-white w-full max-w-2xl rounded-xl shadow-xl flex flex-col max-h-[90vh] overflow-hidden">
        
// // // // //         {/* Header */}
// // // // //         <div className="p-4 border-b flex justify-between items-center">
// // // // //           <h2 className="text-lg font-bold">{initialData ? "Edit Order" : "Create Order"}</h2>
// // // // //           <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
// // // // //         </div>

// // // // //         <form onSubmit={handleSubmit} className="overflow-y-auto p-6 space-y-6">
// // // // //           {/* Customer Information Section */}
// // // // //           <div className="space-y-4">
// // // // //             <h3 className="text-xs font-bold text-gray-400 uppercase">Customer Information</h3>
// // // // //             <div className="grid grid-cols-2 gap-4">
// // // // //               <input required title="Please fill the field" placeholder="First name *" className="border p-2 rounded-md" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
// // // // //               <input required title="Please fill the field" placeholder="Last name *" className="border p-2 rounded-md" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
// // // // //               <input required title="Please fill the field" type="email" placeholder="Email id *" className="border p-2 rounded-md" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
// // // // //               <input required title="Please fill the field" placeholder="Phone number *" className="border p-2 rounded-md" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
// // // // //               <input required title="Please fill the field" placeholder="Street Address *" className="col-span-2 border p-2 rounded-md" value={formData.street} onChange={(e) => setFormData({...formData, street: e.target.value})} />
// // // // //               <select required className="border p-2 rounded-md" value={formData.country} onChange={(e) => setFormData({...formData, country: e.target.value})}>
// // // // //                 <option>United States</option><option>Canada</option><option>Australia</option><option>Singapore</option><option>Hong Kong</option>
// // // // //               </select>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Order Information Section */}
// // // // //           <div className="space-y-4 border-t pt-4">
// // // // //             <h3 className="text-xs font-bold text-gray-400 uppercase">Order Information</h3>
// // // // //             <select required className="border p-2 rounded-md w-full" value={formData.product} onChange={(e) => setFormData({...formData, product: e.target.value})}>
// // // // //               <option value="">Choose product *</option>
// // // // //               <option>Fiber Internet 300 Mbps</option><option>5G Unlimited Mobile Plan</option><option>Fiber Internet 1 Gbps</option>
// // // // //               <option>Business Internet 500 Mbps</option><option>VoIP Corporate Package</option>
// // // // //             </select>
// // // // //             <div className="grid grid-cols-2 gap-4">
// // // // //               <input type="number" min="1" className="border p-2 rounded-md" value={formData.qty} onChange={(e) => setFormData({...formData, qty: Math.max(1, Number(e.target.value))})} />
// // // // //               <div className="relative">
// // // // //                 <span className="absolute left-2 top-2">$</span>
// // // // //                 <input required type="number" placeholder="Unit price *" className="border p-2 pl-6 rounded-md w-full" value={formData.unitPrice} onChange={(e) => setFormData({...formData, unitPrice: Number(e.target.value)})} />
// // // // //               </div>
// // // // //               <div className="bg-gray-50 border p-2 rounded-md font-bold">Total: ${totalAmount}</div>
// // // // //               <select className="border p-2 rounded-md" value={formData.status} onChange={(e) => setFormData({...formData, status: e.target.value})}>
// // // // //                 <option>Pending</option><option>In progress</option><option>Completed</option>
// // // // //               </select>
// // // // //               <select required className="col-span-2 border p-2 rounded-md" value={formData.createdBy} onChange={(e) => setFormData({...formData, createdBy: e.target.value})}>
// // // // //                 <option value="">Created by *</option>
// // // // //                 <option>Mr. Michael Harris</option><option>Mr. Ryan Cooper</option><option>Ms. Olivia Carter</option><option>Mr. Lucas Martin</option>
// // // // //               </select>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Actions */}
// // // // //           <div className="flex justify-end gap-3 pt-4">
// // // // //             <button type="button" onClick={onClose} className="px-4 py-2 border rounded-md">Cancel</button>
// // // // //             <button type="submit" className="px-6 py-2 bg-[#10b981] text-white rounded-md hover:bg-[#059669]">Submit</button>
// // // // //           </div>
// // // // //         </form>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // import { useState, useEffect } from "react";

// // // // export default function CreateOrderModal({ isOpen, onClose, onSave, initialData }) {
// // // //   const [formData, setFormData] = useState({
// // // //     firstName: "", lastName: "", product: "Laptop", qty: 1, unitPrice: 0, status: "Pending"
// // // //   });

// // // //   useEffect(() => {
// // // //     if (initialData) setFormData(initialData);
// // // //   }, [initialData]);

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     const totalAmount = formData.qty * formData.unitPrice;
// // // //     onSave({ ...formData, totalAmount });
// // // //   };

// // // //   if (!isOpen) return null;

// // // //   return (
// // // //     <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
// // // //       <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
// // // //         <div className="p-6 border-b flex justify-between items-center">
// // // //           <h2 className="text-xl font-bold">{initialData ? "Edit Order" : "New Order"}</h2>
// // // //           <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl">×</button>
// // // //         </div>
// // // //         <form onSubmit={handleSubmit} className="p-6 space-y-4">
// // // //           <div className="grid grid-cols-2 gap-4">
// // // //             <input placeholder="First Name" required className="border p-2.5 rounded-xl text-sm" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} />
// // // //             <input placeholder="Last Name" required className="border p-2.5 rounded-xl text-sm" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} />
// // // //           </div>
// // // //           <select className="w-full border p-2.5 rounded-xl text-sm bg-white" value={formData.product} onChange={e => setFormData({...formData, product: e.target.value})}>
// // // //             <option>Laptop</option><option>Mouse</option><option>Keyboard</option><option>Monitor</option>
// // // //           </select>
// // // //           <div className="grid grid-cols-2 gap-4">
// // // //             <input type="number" placeholder="Qty" className="border p-2.5 rounded-xl text-sm" value={formData.qty} onChange={e => setFormData({...formData, qty: Number(e.target.value)})} />
// // // //             <input type="number" placeholder="Unit Price" className="border p-2.5 rounded-xl text-sm" value={formData.unitPrice} onChange={e => setFormData({...formData, unitPrice: Number(e.target.value)})} />
// // // //           </div>
// // // //           <select className="w-full border p-2.5 rounded-xl text-sm bg-white" value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})}>
// // // //             <option>Pending</option><option>In progress</option><option>Completed</option>
// // // //           </select>
// // // //           <button type="submit" className="w-full bg-teal-500 text-white py-3 rounded-xl font-bold shadow-lg shadow-teal-500/30 hover:bg-teal-600 transition-all">
// // // //             {initialData ? "Update Order" : "Create Order"}
// // // //           </button>
// // // //         </form>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }
// // // // src/components/CreateOrderModal.jsx
// // import { useState, useEffect } from "react";

// // export default function CreateOrderModal({ isOpen, onClose, onSave, initialData }) {
// //   const [formData, setFormData] = useState({
// //     firstName: "", lastName: "", product: "Laptop", 
// //     qty: 1, unitPrice: 0, status: "Pending"
// //   });

// //   useEffect(() => {
// //     if (initialData) setFormData(initialData);
// //     else setFormData({ firstName: "", lastName: "", product: "Laptop", qty: 1, unitPrice: 0, status: "Pending" });
// //   }, [initialData, isOpen]);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Validation & Calculation
// //     const totalAmount = Number(formData.qty) * Number(formData.unitPrice);
// //     onSave({ ...formData, totalAmount: totalAmount });
// //     onClose();
// //   };

// //   if (!isOpen) return null;

// //   return (
// //     <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
// //       <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-8">
// //         <h2 className="text-2xl font-black mb-6 text-gray-800">{initialData ? "Edit Order" : "New Order Entry"}</h2>
// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <div className="grid grid-cols-2 gap-4">
// //             <div className="flex flex-col gap-1">
// //               <label className="text-[10px] font-bold text-gray-400 uppercase">First Name</label>
// //               <input required className="border-2 p-3 rounded-xl focus:border-teal-500 outline-none" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} />
// //             </div>
// //             <div className="flex flex-col gap-1">
// //               <label className="text-[10px] font-bold text-gray-400 uppercase">Last Name</label>
// //               <input required className="border-2 p-3 rounded-xl focus:border-teal-500 outline-none" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} />
// //             </div>
// //           </div>
// //           <div className="flex flex-col gap-1">
// //             <label className="text-[10px] font-bold text-gray-400 uppercase">Product Select</label>
// //             <select className="border-2 p-3 rounded-xl bg-white" value={formData.product} onChange={e => setFormData({...formData, product: e.target.value})}>
// //               <option>Laptop</option><option>Mouse</option><option>Keyboard</option><option>Monitor</option><option>Webcam</option>
// //             </select>
// //           </div>
// //           <div className="grid grid-cols-2 gap-4">
// //             <div className="flex flex-col gap-1">
// //               <label className="text-[10px] font-bold text-gray-400 uppercase">Quantity</label>
// //               <input type="number" min="1" className="border-2 p-3 rounded-xl" value={formData.qty} onChange={e => setFormData({...formData, qty: e.target.value})} />
// //             </div>
// //             <div className="flex flex-col gap-1">
// //               <label className="text-[10px] font-bold text-gray-400 uppercase">Unit Price ($)</label>
// //               <input type="number" min="0" className="border-2 p-3 rounded-xl" value={formData.unitPrice} onChange={e => setFormData({...formData, unitPrice: e.target.value})} />
// //             </div>
// //           </div>
// //           <div className="flex flex-col gap-1">
// //             <label className="text-[10px] font-bold text-gray-400 uppercase">Order Status</label>
// //             <select className="border-2 p-3 rounded-xl bg-white" value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})}>
// //               <option>Pending</option><option>In progress</option><option>Completed</option>
// //             </select>
// //           </div>
// //           <div className="flex gap-3 pt-4">
// //             <button type="button" onClick={onClose} className="flex-1 py-3 font-bold text-gray-400">Cancel</button>
// //             <button type="submit" className="flex-[2] bg-teal-500 text-white py-3 rounded-xl font-bold shadow-lg shadow-teal-500/30">Save Order Data</button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }
// import { useState, useEffect } from "react";

// export default function CreateOrderModal({ isOpen, onClose, onSave, initialData }) {
//   const [formData, setFormData] = useState({
//     firstName: "", lastName: "", email: "", phone: "",
//     address: "", city: "", state: "", zip: "", country: "United States",
//     product: "Fiber Internet 300 Mbps", qty: 1, unitPrice: 0,
//     totalAmount: 0, status: "Pending", createdBy: "Mr. Michael Harris"
//   });

//   const [errors, setErrors] = useState({});

//   // Reset or Load data when modal opens
//   useEffect(() => {
//     if (initialData) {
//       setFormData(initialData);
//     } else {
//       setFormData({
//         firstName: "", lastName: "", email: "", phone: "",
//         address: "", city: "", state: "", zip: "", country: "United States",
//         product: "Fiber Internet 300 Mbps", qty: 1, unitPrice: 0,
//         totalAmount: 0, status: "Pending", createdBy: "Mr. Michael Harris"
//       });
//     }
//     setErrors({});
//   }, [initialData, isOpen]);

//   // Dynamic Calculation: Total Amount = Quantity × Unit Price
//   useEffect(() => {
//     setFormData(prev => ({
//       ...prev,
//       totalAmount: Number(prev.qty) * Number(prev.unitPrice)
//     }));
//   }, [formData.qty, formData.unitPrice]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Simple Validation
//     const newErrors = {};
//     if (!formData.firstName) newErrors.firstName = "Required";
//     if (!formData.email.includes("@")) newErrors.email = "Enter a valid email address";
//     if (formData.qty < 1) newErrors.qty = "Quantity must be at least 1";

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     onSave(formData);
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 overflow-y-auto">
//       <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 my-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center px-8 py-5 border-b border-gray-100">
//           <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight">Create order</h2>
//           <button onClick={onClose} className="text-gray-400 hover:text-black text-2xl">✕</button>
//         </div>

//         <form onSubmit={handleSubmit} className="p-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
//             {/* LEFT: Customer Information */}
//             <div className="space-y-4">
//               <h3 className="text-sm font-black text-gray-800 border-b pb-2 uppercase tracking-wider">Customer Information</h3>
              
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="flex flex-col gap-1">
//                   <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">First name *</label>
//                   <input required className="border-2 p-3 rounded-xl focus:border-teal-500 outline-none transition-all" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} />
//                 </div>
//                 <div className="flex flex-col gap-1">
//                   <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Last name *</label>
//                   <input required className="border-2 p-3 rounded-xl focus:border-teal-500 outline-none transition-all" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} />
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div className="flex flex-col gap-1">
//                   <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Email id *</label>
//                   <input required type="email" className={`border-2 p-3 rounded-xl outline-none ${errors.email ? 'border-red-500' : 'focus:border-teal-500'}`} value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
//                 </div>
//                 <div className="flex flex-col gap-1">
//                   <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Phone number *</label>
//                   <input required className="border-2 p-3 rounded-xl focus:border-teal-500 outline-none transition-all" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
//                 </div>
//               </div>

//               <div className="flex flex-col gap-1">
//                 <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Street Address *</label>
//                 <input required className="border-2 p-3 rounded-xl focus:border-teal-500 outline-none transition-all" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} />
//               </div>

//               <div className="grid grid-cols-3 gap-2">
//                 <input placeholder="City *" required className="border-2 p-3 rounded-xl outline-none text-sm" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} />
//                 <input placeholder="State *" required className="border-2 p-3 rounded-xl outline-none text-sm" value={formData.state} onChange={e => setFormData({...formData, state: e.target.value})} />
//                 <input placeholder="Zip *" required className="border-2 p-3 rounded-xl outline-none text-sm" value={formData.zip} onChange={e => setFormData({...formData, zip: e.target.value})} />
//               </div>

//               <div className="flex flex-col gap-1">
//                 <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Country *</label>
//                 <select className="border-2 p-3 rounded-xl bg-gray-50 outline-none focus:border-teal-500" value={formData.country} onChange={e => setFormData({...formData, country: e.target.value})}>
//                   {["United States", "Canada", "Australia", "Singapore", "Hong Kong"].map(c => <option key={c}>{c}</option>)}
//                 </select>
//               </div>
//             </div>

//             {/* RIGHT: Order Information */}
//             <div className="space-y-4">
//               <h3 className="text-sm font-black text-gray-800 border-b pb-2 uppercase tracking-wider">Order Information</h3>
              
//               <div className="flex flex-col gap-1">
//                 <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Choose product *</label>
//                 <select className="border-2 p-3 rounded-xl bg-gray-50 outline-none focus:border-teal-500" value={formData.product} onChange={e => setFormData({...formData, product: e.target.value})}>
//                   <option>VoIP Corporate Package</option>
//                   <option>Business Internet 500 Mbps</option>
//                   <option>Fiber Internet 1 Gbps</option>
//                   <option>5G Unlimited Mobile Plan</option>
//                   <option>Fiber Internet 300 Mbps</option>
//                 </select>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div className="flex flex-col gap-1">
//                   <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Quantity *</label>
//                   <input type="number" min="1" className="border-2 p-3 rounded-xl outline-none focus:border-teal-500" value={formData.qty} onChange={e => setFormData({...formData, qty: e.target.value})} />
//                 </div>
//                 <div className="flex flex-col gap-1">
//                   <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Unit price ($) *</label>
//                   <input type="number" className="border-2 p-3 rounded-xl outline-none focus:border-teal-500" value={formData.unitPrice} onChange={e => setFormData({...formData, unitPrice: e.target.value})} />
//                 </div>
//               </div>

//               <div className="flex flex-col gap-1">
//                 <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Total amount</label>
//                 <div className="bg-gray-100 p-3 rounded-xl font-black text-teal-600 border-2 border-transparent">
//                   $ {formData.totalAmount.toLocaleString()}
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div className="flex flex-col gap-1">
//                   <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Status *</label>
//                   <select className="border-2 p-3 rounded-xl bg-gray-50 outline-none focus:border-teal-500" value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})}>
//                     <option>Pending</option><option>In progress</option><option>Completed</option>
//                   </select>
//                 </div>
//                 <div className="flex flex-col gap-1">
//                   <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Created by *</label>
//                   <select className="border-2 p-3 rounded-xl bg-gray-50 outline-none focus:border-teal-500" value={formData.createdBy} onChange={e => setFormData({...formData, createdBy: e.target.value})}>
//                     <option>Mr. Michael Harris</option><option>Mr. Ryan Cooper</option><option>Ms. Olivia Carter</option><option>Mr. Lucas Martin</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Form Actions */}
//           <div className="flex justify-end gap-4 mt-10 pt-6 border-t border-gray-100">
//             <button type="button" onClick={onClose} className="px-10 py-3 font-bold text-gray-400 hover:text-gray-600 transition-all">Cancel</button>
//             <button type="submit" className="px-10 py-3 bg-teal-500 text-white rounded-xl font-black shadow-lg shadow-teal-500/30 hover:bg-teal-600 transition-all active:scale-95">
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
import { useState, useEffect } from "react";

export default function CreateOrderModal({ isOpen, onClose, onSave, initialData }) {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    address: "", city: "", state: "", zip: "", country: "United States",
    productName: "Fiber Internet 300 Mbps", qty: 1, unitPrice: 0,
    totalAmount: 0, status: "Pending", createdBy: "Mr. Michael Harris"
  });

  const [errors, setErrors] = useState({});

  // Reset or Load data when modal opens
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        firstName: "", lastName: "", email: "", phone: "",
        address: "", city: "", state: "", zip: "", country: "United States",
        productName: "Fiber Internet 300 Mbps", qty: 1, unitPrice: 0,
        totalAmount: 0, status: "Pending", createdBy: "Mr. Michael Harris"
      });
    }
    setErrors({});
  }, [initialData, isOpen]);

  // Dynamic Calculation: Total Amount = Quantity × Unit Price
  useEffect(() => {
    const total = Number(formData.qty || 0) * Number(formData.unitPrice || 0);
    if (total !== formData.totalAmount) {
      setFormData(prev => ({ ...prev, totalAmount: total }));
    }
  }, [formData.qty, formData.unitPrice]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple Validation
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "Required";
    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email address";
    if (formData.qty < 1) newErrors.qty = "Quantity must be at least 1";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 my-auto">
        {/* Header */}
        <div className="flex justify-between items-center px-8 py-5 border-b border-gray-100">
          <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight">
            {initialData ? "Edit Order" : "Create Order"}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-black text-2xl">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* LEFT: Customer Information */}
            <div className="space-y-4">
              <h3 className="text-sm font-black text-gray-800 border-b pb-2 uppercase tracking-wider">Customer Information</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">First name *</label>
                  <input required className="border-2 p-3 rounded-xl focus:border-teal-500 outline-none transition-all" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Last name *</label>
                  <input required className="border-2 p-3 rounded-xl focus:border-teal-500 outline-none transition-all" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Email id *</label>
                  <input required type="email" className={`border-2 p-3 rounded-xl outline-none ${errors.email ? 'border-red-500' : 'focus:border-teal-500'}`} value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Phone number *</label>
                  <input required className="border-2 p-3 rounded-xl focus:border-teal-500 outline-none transition-all" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Street Address *</label>
                <input required className="border-2 p-3 rounded-xl focus:border-teal-500 outline-none transition-all" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <input placeholder="City *" required className="border-2 p-3 rounded-xl outline-none text-sm" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} />
                <input placeholder="State *" required className="border-2 p-3 rounded-xl outline-none text-sm" value={formData.state} onChange={e => setFormData({...formData, state: e.target.value})} />
                <input placeholder="Zip *" required className="border-2 p-3 rounded-xl outline-none text-sm" value={formData.zip} onChange={e => setFormData({...formData, zip: e.target.value})} />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Country *</label>
                <select className="border-2 p-3 rounded-xl bg-gray-50 outline-none focus:border-teal-500" value={formData.country} onChange={e => setFormData({...formData, country: e.target.value})}>
                  {["United States", "Canada", "Australia", "Singapore", "Hong Kong"].map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
            </div>

            {/* RIGHT: Order Information */}
            <div className="space-y-4">
              <h3 className="text-sm font-black text-gray-800 border-b pb-2 uppercase tracking-wider">Order Information</h3>
              
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Choose product *</label>
                <select 
                  className="border-2 p-3 rounded-xl bg-gray-50 outline-none focus:border-teal-500" 
                  value={formData.productName} 
                  onChange={e => setFormData({...formData, productName: e.target.value})}
                >
                  <option>VoIP Corporate Package</option>
                  <option>Business Internet 500 Mbps</option>
                  <option>Fiber Internet 1 Gbps</option>
                  <option>5G Unlimited Mobile Plan</option>
                  <option>Fiber Internet 300 Mbps</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Quantity *</label>
                  <input type="number" min="1" className="border-2 p-3 rounded-xl outline-none focus:border-teal-500" value={formData.qty} onChange={e => setFormData({...formData, qty: e.target.value})} />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Unit price ($) *</label>
                  <input type="number" className="border-2 p-3 rounded-xl outline-none focus:border-teal-500" value={formData.unitPrice} onChange={e => setFormData({...formData, unitPrice: e.target.value})} />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Total amount</label>
                <div className="bg-gray-100 p-3 rounded-xl font-black text-teal-600 border-2 border-transparent">
                  $ {(formData.totalAmount || 0).toLocaleString()}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Status *</label>
                  <select className="border-2 p-3 rounded-xl bg-gray-50 outline-none focus:border-teal-500" value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})}>
                    <option>Pending</option><option>In progress</option><option>Completed</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Created by *</label>
                  <select className="border-2 p-3 rounded-xl bg-gray-50 outline-none focus:border-teal-500" value={formData.createdBy} onChange={e => setFormData({...formData, createdBy: e.target.value})}>
                    <option>Mr. Michael Harris</option><option>Mr. Ryan Cooper</option><option>Ms. Olivia Carter</option><option>Mr. Lucas Martin</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-4 mt-10 pt-6 border-t border-gray-100">
            <button type="button" onClick={onClose} className="px-10 py-3 font-bold text-gray-400 hover:text-gray-600 transition-all">Cancel</button>
            <button type="submit" className="px-10 py-3 bg-teal-500 text-white rounded-xl font-black shadow-lg shadow-teal-500/30 hover:bg-teal-600 transition-all active:scale-95">
              {initialData ? "Update Order" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}