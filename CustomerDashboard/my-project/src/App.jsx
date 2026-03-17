// // // import { useState, useEffect } from "react";
// // // import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// // // import TableView from "./pages/TableView";
// // // import DashboardConfigure from "./pages/DashboardConfigure";
// // // import DashboardView from "./pages/DashboardView";

// // // export default function App() {
// // //   // 1. STATE MANAGEMENT
// // //   // Orders: Shared between TableView and Dashboard charts
// // //   const [orders, setOrders] = useState(() => {
// // //     const saved = localStorage.getItem("custom_dashboard_orders");
// // //     return saved ? JSON.parse(saved) : [];
// // //   });

// // //   // Layout: Stores the widget configuration (pos, size, settings)
// // //   const [layout, setLayout] = useState(() => {
// // //     const saved = localStorage.getItem("custom_dashboard_layout");
// // //     return saved ? JSON.parse(saved) : [];
// // //   });
// // //   // App.jsx (Partial update for the KPI logic)
// // // const stats = [
// // //   { label: "Total Orders", value: orders.length, icon: "📦" },
// // //   { label: "Total Revenue", value: `$ ${orders.reduce((a,b) => a + b.totalAmount, 0)}`, icon: "💰" },
// // //   { label: "Total Customers", value: new Set(orders.map(o => o.lastName)).size, icon: "👤" },
// // //   { label: "Total Sold Qty", value: orders.reduce((a,b) => a + b.qty, 0), icon: "📈" }
// // // ];

// // //   // 2. PERSISTENCE
// // //   useEffect(() => {
// // //     localStorage.setItem("custom_dashboard_orders", JSON.stringify(orders));
// // //   }, [orders]);

// // //   useEffect(() => {
// // //     localStorage.setItem("custom_dashboard_layout", JSON.stringify(layout));
// // //   }, [layout]);

// // //   // 3. ORDER ACTIONS (CRUD)
// // //   const addOrder = (newOrder) => {
// // //     setOrders((prev) => [newOrder, ...prev]);
// // //   };

// // //   const deleteOrder = (id) => {
// // //     setOrders((prev) => prev.filter((o) => o.id !== id));
// // //   };

// // //   const updateOrder = (updatedOrder) => {
// // //     setOrders((prev) =>
// // //       prev.map((o) => (o.id === updatedOrder.id ? updatedOrder : o))
// // //     );
// // //   };

// // //   return (
// // //     <Router>
// // //       <div className="min-h-screen bg-[#F0F1F3] flex flex-col">
// // //         {/* GLOBAL NAVIGATION BAR */}
// // //         <nav className="bg-white border-b px-8 py-4 flex justify-between items-center shadow-sm z-50">
// // //           <div className="flex items-center gap-8">
// // //             <h1 className="text-xl font-black text-teal-600 tracking-tighter">
// // //               DASH<span className="text-gray-800">CRAFT</span>
// // //             </h1>
// // //             <div className="flex gap-6 text-sm font-bold text-gray-500">
// // //               <Link to="/" className="hover:text-teal-500 transition-colors">Dashboard</Link>
// // //               <Link to="/orders" className="hover:text-teal-500 transition-colors">Orders</Link>
// // //             </div>
// // //           </div>
// // //           <Link 
// // //             to="/configure" 
// // //             className="bg-gray-900 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-gray-800 transition-all"
// // //           >
// // //             ⚙ Edit Layout
// // //           </Link>
// // //         </nav>

// // //         {/* PAGE CONTENT */}
// // //         <main className="flex-1">
// // //           <Routes>
// // //             <Route 
// // //               path="/" 
// // //               element={<DashboardView layout={layout} orders={orders} />} 
// // //             />
// // //             <Route 
// // //               path="/orders" 
// // //               element={
// // //                 <TableView 
// // //                   orders={orders} 
// // //                   onAddOrder={addOrder} 
// // //                   onDeleteOrder={deleteOrder} 
// // //                   onUpdateOrder={updateOrder} 
// // //                 />
// // //               } 
// // //             />
// // //             <Route 
// // //               path="/configure" 
// // //               element={
// // //                 <DashboardConfigure 
// // //                   orders={orders} 
// // //                   setLayout={setLayout} 
// // //                   placedWidgets={layout} 
// // //                 />
// // //               } 
// // //             />
// // //           </Routes>
// // //         </main>
// // //       </div>
// // //     </Router>
// // //   );
// // // }
// // import { useState, useEffect } from "react";
// // import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// // import TableView from "./pages/TableView";
// // import DashboardConfigure from "./pages/DashboardConfigure";
// // import DashboardView from "./pages/DashboardView";

// // export default function App() {
// //   const [orders, setOrders] = useState(() => {
// //     const saved = localStorage.getItem("db_orders");
// //     return saved ? JSON.parse(saved) : [];
// //   });
// //   const handleUpdateOrder = (updatedOrder) => {
// //   setOrders(orders.map(o => o.id === updatedOrder.id ? updatedOrder : o));
// // };

// //   const [layout, setLayout] = useState(() => {
// //     const saved = localStorage.getItem("db_layout");
// //     return saved ? JSON.parse(saved) : [];
// //   });
  
// //   // Sync with LocalStorage for now so you don't lose progress
// //   useEffect(() => {
// //     localStorage.setItem("db_orders", JSON.stringify(orders));
// //     localStorage.setItem("db_layout", JSON.stringify(layout));
// //   }, [orders, layout]);

// //   return (
// //     <Router>
// //       <div className="min-h-screen bg-[#F0F1F3] flex flex-col">
// //         <nav className="bg-white border-b px-8 py-4 flex justify-between items-center shadow-sm z-50">
// //           <div className="flex items-center gap-8">
// //             <h1 className="text-xl font-black text-teal-600 tracking-tighter">DASHCRAFT</h1>
// //             <div className="flex gap-6 text-sm font-bold text-gray-500">
// //               <Link to="/" className="hover:text-teal-500">Dashboard</Link>
// //               <Link to="/orders" className="hover:text-teal-500">Orders</Link>
// //             </div>
// //           </div>
// //           <Link to="/configure" className="bg-gray-900 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-teal-600">
// //             ⚙ Edit Layout
// //           </Link>
// //         </nav>

// //         <main className="flex-1">
// //           <Routes>
// //             <Route path="/" element={<DashboardView layout={layout} orders={orders} />} />
// //            <Route path="/orders" element={
// //   <TableView 
// //     orders={orders} 
// //     onAddOrder={handleAddOrder} 
// //     onUpdateOrder={handleUpdateOrder} // Add this!
// //     onDeleteOrder={handleDeleteOrder} 
// //   />
// // } />
// //             <Route path="/configure" element={
// //               <DashboardConfigure 
// //                 orders={orders} 
// //                 currentLayout={layout} 
// //                 setLayout={setLayout} 
// //               />
// //             } />
// //           </Routes>
// //         </main>
// //       </div>
// //     </Router>
// //   );
// // }
// import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import TableView from "./pages/TableView";
// import DashboardConfigure from "./pages/DashboardConfigure";
// import DashboardView from "./pages/DashboardView";

// export default function App() {
//   // 1. STATE MANAGEMENT
//   const [orders, setOrders] = useState(() => {
//     const saved = localStorage.getItem("db_orders");
//     return saved ? JSON.parse(saved) : [];
//   });

//   const [layout, setLayout] = useState(() => {
//     const saved = localStorage.getItem("db_layout");
//     return saved ? JSON.parse(saved) : [];
//   });

//   // 2. PERSISTENCE (Sync with LocalStorage)
//   useEffect(() => {
//     localStorage.setItem("db_orders", JSON.stringify(orders));
//     localStorage.setItem("db_layout", JSON.stringify(layout));
//   }, [orders, layout]);

//   // 3. ACTION HANDLERS (The missing functions)
//   const handleAddOrder = (newOrder) => {
//     setOrders((prev) => [newOrder, ...prev]);
//   };

//   const handleDeleteOrder = (id) => {
//     setOrders((prev) => prev.filter((o) => o.id !== id));
//   };

//   const handleUpdateOrder = (updatedOrder) => {
//     setOrders((prev) =>
//       prev.map((o) => (o.id === updatedOrder.id ? updatedOrder : o))
//     );
//   };

//   return (
//     <Router>
//       <div className="min-h-screen bg-[#F0F1F3] flex flex-col">
//         {/* Navigation Bar */}
//         <nav className="bg-white border-b px-8 py-4 flex justify-between items-center shadow-sm z-50">
//           <div className="flex items-center gap-8">
//             <h1 className="text-xl font-black text-teal-600 tracking-tighter">DashboardBuilder</h1>
//             <div className="flex gap-6 text-sm font-bold text-gray-500">
//               <Link to="/" className="hover:text-teal-500 transition-colors">Dashboard</Link>
//               <Link to="/orders" className="hover:text-teal-500 transition-colors">Orders</Link>
//             </div>
//           </div>
//           <Link 
//             to="/configure" 
//             className="bg-gray-900 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-teal-600 transition-all"
//           >
//             ⚙ Configure Dashboard
//           </Link>
//         </nav>

//         {/* Page Content */}
//         <main className="flex-1">
//           <Routes>
//             {/* Dashboard View (Live Sync) */}
//             <Route 
//               path="/" 
//               element={<DashboardView layout={layout} orders={orders} />} 
//             />

//             {/* Orders Management with detailed Popup logic */}
//             <Route 
//               path="/orders" 
//               element={
//                 <TableView 
//                   orders={orders} 
//                   onAddOrder={handleAddOrder} 
//                   onUpdateOrder={handleUpdateOrder} 
//                   onDeleteOrder={handleDeleteOrder} 
//                 />
//               } 
//             />

//             {/* Configure Canvas (Draggable Interface) */}
//             <Route 
//               path="/configure" 
//               element={
//                 <DashboardConfigure 
//                   orders={orders} 
//                   currentLayout={layout} 
//                   setLayout={setLayout} 
//                 />
//               } 
//             />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TableView from "./pages/TableView";
import DashboardConfigure from "./pages/DashboardConfigure";
import DashboardView from "./pages/DashboardView";

// API Utility to match your Spring Boot Controllers
const API_BASE = "http://localhost:8081/api";

export default function App() {
  const [orders, setOrders] = useState([]);
  const [layout, setLayout] = useState([]);

  // 1. INITIAL FETCH: Replaces LocalStorage
  useEffect(() => {
    // Fetch Orders for Table and Charts
    fetch(`${API_BASE}/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error("Error fetching orders:", err));

    // Fetch Saved Dashboard Layout
    fetch(`${API_BASE}/layout`)
      .then((res) => res.json())
      .then((data) => setLayout(data))
      .catch((err) => console.error("Error fetching layout:", err));
  }, []);

  // 2. ACTION HANDLERS: Connect to Spring Boot Controller
  
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