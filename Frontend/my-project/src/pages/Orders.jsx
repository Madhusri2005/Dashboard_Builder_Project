
import { useState } from "react";

export default function Orders({ orders, setOrders }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    address: "", city: "", state: "", postalCode: "",
    country: "United States", product: "Fiber Internet 300 Mbps",
    qty: 1, unitPrice: 0, status: "Pending", createdBy: "Mr. Michael Harris"
  });

  const totalAmount = formData.qty * formData.unitPrice;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = { ...formData, totalAmount, id: Date.now(), date: new Date().toISOString() };
    setOrders([...orders, newOrder]);
    setShowForm(false);
  };

  return (
    <div className="p-8 bg-[#F0F1F3] min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Customer Orders</h1>
        <button onClick={() => setShowForm(true)} className="bg-teal-500 text-white px-6 py-2 rounded-lg font-bold">
          Create Order
        </button>
      </div>

      {/* EMPTY STATE */}
      {orders.length === 0 ? (
        <div className="bg-white p-20 text-center rounded-3xl border-2 border-dashed border-gray-200 text-gray-400">
          By default, no data exists in the Customer Order table.
        </div>
      ) : (
        <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
          <thead className="bg-gray-50 text-[10px] uppercase text-gray-400">
            <tr><th className="p-4 text-left">Customer</th><th className="p-4 text-left">Product</th><th className="p-4 text-right">Total</th></tr>
          </thead>
          <tbody>
            {orders.map(o => (
              <tr key={o.id} className="border-t border-gray-100 text-sm">
                <td className="p-4">{o.firstName} {o.lastName}</td>
                <td className="p-4">{o.product}</td>
                <td className="p-4 text-right font-bold text-teal-600">${o.totalAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* POPUP FORM */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <form onSubmit={handleSubmit} className="bg-white w-full max-w-4xl rounded-3xl p-8 max-h-[90vh] overflow-y-auto shadow-2xl">
            <h2 className="text-xl font-bold mb-6 border-b pb-4">Create New Order</h2>
            
            <div className="grid grid-cols-2 gap-6">
              {/* CUSTOMER INFO GROUP */}
              <div className="space-y-4">
                <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest">Customer Information</h3>
                <input required placeholder="First Name" className="w-full border p-2 rounded" onChange={e => setFormData({...formData, firstName: e.target.value})} />
                <input required placeholder="Last Name" className="w-full border p-2 rounded" onChange={e => setFormData({...formData, lastName: e.target.value})} />
                <input required type="email" placeholder="Email ID" className="w-full border p-2 rounded" onChange={e => setFormData({...formData, email: e.target.value})} />
                <select className="w-full border p-2 rounded" onChange={e => setFormData({...formData, country: e.target.value})}>
                  <option>United States</option><option>Canada</option><option>Australia</option><option>Singapore</option><option>Hong Kong</option>
                </select>
              </div>

              {/* ORDER INFO GROUP */}
              <div className="space-y-4">
                <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest">Order Information</h3>
                <select className="w-full border p-2 rounded" onChange={e => setFormData({...formData, product: e.target.value})}>
                  <option>Fiber Internet 300 Mbps</option>
                  <option>5G Unlimited Mobile Plan</option>
                  <option>Fiber Internet 1 Gbps</option>
                  <option>Business Internet 500 Mbps</option>
                  <option>VoIP Corporate Package</option>
                </select>
                <div className="grid grid-cols-2 gap-2">
                  <input type="number" min="1" placeholder="Qty" className="w-full border p-2 rounded" value={formData.qty} 
                         onChange={e => setFormData({...formData, qty: Math.max(1, parseInt(e.target.value))})} />
                  <input type="number" placeholder="Unit Price ($)" className="w-full border p-2 rounded" 
                         onChange={e => setFormData({...formData, unitPrice: parseFloat(e.target.value) || 0})} />
                </div>
                <div className="bg-gray-50 p-2 rounded border border-gray-200">
                  <label className="text-[10px] font-bold text-gray-400 uppercase">Total Amount (Read Only)</label>
                  <div className="text-lg font-bold text-teal-600">${totalAmount}</div>
                </div>
                <select className="w-full border p-2 rounded" onChange={e => setFormData({...formData, createdBy: e.target.value})}>
                  <option>Mr. Michael Harris</option><option>Mr. Ryan Cooper</option><option>Ms. Olivia Carter</option><option>Mr. Lucas Martin</option>
                </select>
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-3">
              <button type="button" onClick={() => setShowForm(false)} className="px-6 py-2 text-gray-500 font-bold">Cancel</button>
              <button type="submit" className="bg-teal-500 text-white px-8 py-2 rounded-xl font-bold shadow-lg shadow-teal-500/30">Create Order</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}