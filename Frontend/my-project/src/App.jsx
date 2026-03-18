
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TableView from "./pages/TableView";
import DashboardConfigure from "./pages/DashboardConfigure";
import DashboardView from "./pages/DashboardView";

const API_BASE = "http://localhost:8081/api";

export default function App() {
  const [orders, setOrders] = useState([]);
  const [layout, setLayout] = useState([]);


  useEffect(() => {
 
    fetch(`${API_BASE}/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error("Error fetching orders:", err));
    fetch(`${API_BASE}/layout`)
      .then((res) => res.json())
      .then((data) => setLayout(data))
      .catch((err) => console.error("Error fetching layout:", err));
  }, []);


  
  const handleAddOrder = async (newOrder) => {
    try {
      const response = await fetch(`${API_BASE}/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newOrder),
      });
      const savedOrder = await response.json();
      setOrders((prev) => [savedOrder, ...prev]);
    } catch (err) {
      console.error("Failed to add order:", err);
    }
  };

  const handleDeleteOrder = async (id) => {
    // Note: You may need a @DeleteMapping in your OrderController for this
    setOrders((prev) => prev.filter((o) => o.id !== id));
    // Implementation: fetch(`${API_BASE}/orders/${id}`, { method: 'DELETE' })
  };

  const handleUpdateOrder = async (updatedOrder) => {
    try {
      await fetch(`${API_BASE}/orders`, {
        method: "POST", // Spring Boot .save() handles both create and update
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedOrder),
      });
      setOrders((prev) =>
        prev.map((o) => (o.id === updatedOrder.id ? updatedOrder : o))
      );
    } catch (err) {
      console.error("Failed to update order:", err);
    }
  };

  // 3. LAYOUT PERSISTENCE: Save the drag-and-drop config
  const handleSetLayout = async (newLayout) => {
    setLayout(newLayout);
    try {
      await fetch(`${API_BASE}/layout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newLayout),
      });
    } catch (err) {
      console.error("Failed to save layout:", err);
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#F0F1F3] flex flex-col">
        {/* Navigation Bar */}
        <nav className="bg-white border-b px-8 py-4 flex justify-between items-center shadow-sm z-50">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-black text-teal-600 tracking-tighter uppercase">DashCraft</h1>
            <div className="flex gap-6 text-sm font-bold text-gray-500">
              <Link to="/" className="hover:text-teal-500 transition-colors">Dashboard</Link>
              <Link to="/orders" className="hover:text-teal-500 transition-colors">Orders</Link>
            </div>
          </div>
          <Link 
            to="/configure" 
            className="bg-gray-900 text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-teal-600 transition-all shadow-lg shadow-gray-200"
          >
            ⚙ Configure Canvas
          </Link>
        </nav>

        {/* Page Content */}
        <main className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={<DashboardView layout={layout} orders={orders} />} 
            />

            <Route 
              path="/orders" 
              element={
                <TableView 
                  orders={orders} 
                  onAddOrder={handleAddOrder} 
                  onUpdateOrder={handleUpdateOrder} 
                  onDeleteOrder={handleDeleteOrder} 
                />
              } 
            />

            <Route 
              path="/configure" 
              element={
                <DashboardConfigure 
                  orders={orders} 
                  currentLayout={layout} 
                  setLayout={handleSetLayout} 
                />
              } 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}