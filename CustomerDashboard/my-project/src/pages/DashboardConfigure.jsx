// // // // // // import { useState } from "react";
// // // // // // import { useNavigate } from "react-router-dom";

// // // // // // export default function DashboardConfigure({ orders, setLayout }) {
// // // // // //   const navigate = useNavigate();
// // // // // //   const [placedWidgets, setPlacedWidgets] = useState([]);
// // // // // //   const [draggedItem, setDraggedItem] = useState(null);
// // // // // //   const [hoverIndex, setHoverIndex] = useState(null);
// // // // // //   const [editingWidgetId, setEditingWidgetId] = useState(null);

// // // // // //   const library = {
// // // // // //     Charts: ["Bar Chart", "Line Chart", "Pie Chart", "Area Chart"],
// // // // // //     KPIs: ["KPI Value"],
// // // // // //   };

// // // // // //   const activeWidget = placedWidgets.find((w) => w.id === editingWidgetId);

// // // // // //   // --- DYNAMIC DATA LOGIC ---
// // // // // //   const calculateData = (widget) => {
// // // // // //     if (!orders || orders.length === 0) return 0;

// // // // // //     const metric = widget.metric || "totalAmount";
// // // // // //     const agg = widget.aggregation || "Sum";

// // // // // //     if (agg === "Count") return orders.length;

// // // // // //     const values = orders.map((o) => Number(o[metric]) || 0);
// // // // // //     const sum = values.reduce((a, b) => a + b, 0);

// // // // // //     if (agg === "Average") return (sum / orders.length).toFixed(widget.precision || 0);
// // // // // //     return sum.toFixed(widget.precision || 0);
// // // // // //   };

// // // // // //   const renderChart = (w) => {
// // // // // //     const value = calculateData(w);
    
// // // // // //     switch (w.name) {
// // // // // //       case "KPI Value":
// // // // // //         return (
// // // // // //           <div className="flex flex-col items-center justify-center h-full">
// // // // // //             <span className="text-4xl font-black text-teal-600">
// // // // // //               {w.format === "Currency" ? `$${value}` : value}
// // // // // //             </span>
// // // // // //             <span className="text-[10px] text-gray-400 mt-1 uppercase">{w.aggregation || "Sum"} of {w.metric || "Total"}</span>
// // // // // //           </div>
// // // // // //         );
// // // // // //       case "Bar Chart":
// // // // // //       case "Pie Chart":
// // // // // //         return (
// // // // // //           <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-200">
// // // // // //              <span className="text-[10px] text-gray-400">Live Preview: {value}</span>
// // // // // //           </div>
// // // // // //         );
// // // // // //       default:
// // // // // //         return <div className="text-gray-300 text-[10px]">Select Data</div>;
// // // // // //     }
// // // // // //   };

// // // // // //   const handleDrop = (index) => {
// // // // // //     if (!draggedItem) return;
// // // // // //     const isChart = library.Charts.includes(draggedItem.data);
// // // // // //     const newWidget = {
// // // // // //       id: Date.now(),
// // // // // //       pos: index,
// // // // // //       name: draggedItem.data,
// // // // // //       title: "Untitled Widget",
// // // // // //       w: isChart ? 4 : 3,
// // // // // //       h: isChart ? 4 : 2,
// // // // // //       metric: "totalAmount",
// // // // // //       aggregation: "Sum",
// // // // // //       format: "Number",
// // // // // //       precision: 0,
// // // // // //     };
// // // // // //     setPlacedWidgets([...placedWidgets, newWidget]);
// // // // // //     setEditingWidgetId(newWidget.id);
// // // // // //     setDraggedItem(null);
// // // // // //     setHoverIndex(null);
// // // // // //   };

// // // // // //   const handleSaveLayout = () => {
// // // // // //     setLayout(placedWidgets);
// // // // // //     navigate("/"); // Go back to view the live dashboard
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="flex h-screen bg-[#F0F1F3] font-sans">
// // // // // //       {/* LEFT SIDEBAR: LIBRARY */}
// // // // // //       <div className="w-72 bg-white border-r p-6">
// // // // // //         <h2 className="font-bold text-gray-800 flex items-center gap-2 mb-8 cursor-pointer" onClick={() => navigate("/")}>
// // // // // //           <span className="text-xl">←</span> Exit Config
// // // // // //         </h2>
// // // // // //         <div className="space-y-4">
// // // // // //           {Object.entries(library).map(([cat, items]) => (
// // // // // //             <div key={cat} className="space-y-2">
// // // // // //               <p className="text-[10px] font-bold text-gray-400 uppercase">{cat}</p>
// // // // // //               {items.map((item) => (
// // // // // //                 <div key={item} draggable onDragStart={() => setDraggedItem({ data: item })}
// // // // // //                   className="p-3 text-xs bg-white border rounded-lg cursor-grab hover:border-teal-500 transition shadow-sm">
// // // // // //                   ⠿ {item}
// // // // // //                 </div>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* CENTER: CANVAS */}
// // // // // //       <div className="flex-1 p-8 overflow-auto">
// // // // // //         <div className="flex justify-between items-center mb-6">
// // // // // //            <h1 className="text-xl font-bold text-gray-800">Dashboard Canvas (12-Col Grid)</h1>
// // // // // //            <button onClick={handleSaveLayout} className="bg-teal-500 text-white px-6 py-2 rounded-lg font-bold shadow-lg hover:bg-teal-600 transition">
// // // // // //              Save Configuration
// // // // // //            </button>
// // // // // //         </div>
        
// // // // // //         <div className="grid grid-cols-12 auto-rows-[60px] gap-3 p-4 bg-white rounded-2xl border-2 border-dashed border-gray-200 min-h-[80vh]">
// // // // // //           {/* Grid Drop Zones */}
// // // // // //           {Array.from({ length: 120 }).map((_, i) => (
// // // // // //             <div key={i} onDragOver={(e) => { e.preventDefault(); setHoverIndex(i); }} onDrop={() => handleDrop(i)}
// // // // // //               className={`rounded border ${hoverIndex === i ? "bg-teal-50 border-teal-400" : "border-transparent"}`}></div>
// // // // // //           ))}

// // // // // //           {/* Actual Placed Widgets */}
// // // // // //           {placedWidgets.map((w) => (
// // // // // //             <div key={w.id} 
// // // // // //               style={{ gridColumn: `${(w.pos % 12) + 1} / span ${w.w}`, gridRow: `${Math.floor(w.pos / 12) + 1} / span ${w.h}` }}
// // // // // //               className={`relative bg-white border-2 shadow-sm rounded-xl p-4 flex flex-col group transition-all ${editingWidgetId === w.id ? 'border-teal-500 ring-4 ring-teal-50' : 'border-gray-100 hover:border-teal-200'}`}
// // // // // //               onClick={() => setEditingWidgetId(w.id)}>
// // // // // //               <div className="flex justify-between items-start mb-2">
// // // // // //                 <span className="text-[10px] font-bold text-gray-500 uppercase">{w.title}</span>
// // // // // //                 <button onClick={(e) => { e.stopPropagation(); setPlacedWidgets(placedWidgets.filter(x => x.id !== w.id)); }} className="text-red-400 hover:scale-110">🗑</button>
// // // // // //               </div>
// // // // // //               <div className="flex-1">{renderChart(w)}</div>
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* RIGHT SIDEBAR: SETTINGS */}
// // // // // //       {activeWidget && (
// // // // // //         <div className="w-[380px] bg-white border-l p-6 shadow-2xl overflow-y-auto">
// // // // // //           <div className="flex justify-between items-center mb-6 pb-4 border-b">
// // // // // //             <h3 className="font-bold text-gray-800">Widget Settings</h3>
// // // // // //             <button onClick={() => setEditingWidgetId(null)} className="text-gray-400 hover:text-black">✕</button>
// // // // // //           </div>

// // // // // //           <div className="space-y-5">
// // // // // //             {/* Title */}
// // // // // //             <div>
// // // // // //               <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Widget Title</label>
// // // // // //               <input type="text" value={activeWidget.title} 
// // // // // //                 onChange={(e) => setPlacedWidgets(placedWidgets.map(x => x.id === activeWidget.id ? {...x, title: e.target.value} : x))}
// // // // // //                 className="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none" />
// // // // // //             </div>

// // // // // //             {/* Data Metric */}
// // // // // //             <div>
// // // // // //               <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Select Metric</label>
// // // // // //               <select className="w-full border rounded-lg p-2 text-sm bg-white" 
// // // // // //                 value={activeWidget.metric}
// // // // // //                 onChange={(e) => setPlacedWidgets(placedWidgets.map(x => x.id === activeWidget.id ? {...x, metric: e.target.value} : x))}>
// // // // // //                 <option value="totalAmount">Total Amount</option>
// // // // // //                 <option value="qty">Quantity</option>
// // // // // //                 <option value="unitPrice">Unit Price</option>
// // // // // //               </select>
// // // // // //             </div>

// // // // // //             {/* Aggregation */}
// // // // // //             <div>
// // // // // //               <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Aggregation</label>
// // // // // //               <select className="w-full border rounded-lg p-2 text-sm bg-white" 
// // // // // //                 value={activeWidget.aggregation}
// // // // // //                 onChange={(e) => setPlacedWidgets(placedWidgets.map(x => x.id === activeWidget.id ? {...x, aggregation: e.target.value} : x))}>
// // // // // //                 <option>Sum</option>
// // // // // //                 <option>Average</option>
// // // // // //                 <option>Count</option>
// // // // // //               </select>
// // // // // //             </div>

// // // // // //             {/* Formatting */}
// // // // // //             <div className="grid grid-cols-2 gap-3">
// // // // // //               <div>
// // // // // //                 <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Format</label>
// // // // // //                 <select className="w-full border rounded-lg p-2 text-sm bg-white" 
// // // // // //                   value={activeWidget.format}
// // // // // //                   onChange={(e) => setPlacedWidgets(placedWidgets.map(x => x.id === activeWidget.id ? {...x, format: e.target.value} : x))}>
// // // // // //                   <option>Number</option>
// // // // // //                   <option>Currency</option>
// // // // // //                 </select>
// // // // // //               </div>
// // // // // //               <div>
// // // // // //                 <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Precision</label>
// // // // // //                 <input type="number" min="0" className="w-full border rounded-lg p-2 text-sm" 
// // // // // //                   value={activeWidget.precision}
// // // // // //                   onChange={(e) => setPlacedWidgets(placedWidgets.map(x => x.id === activeWidget.id ? {...x, precision: parseInt(e.target.value)} : x))} />
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             {/* Size Control */}
// // // // // //             <div className="grid grid-cols-2 gap-3 pt-4 border-t">
// // // // // //                <div>
// // // // // //                  <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Col Span (W)</label>
// // // // // //                  <input type="number" value={activeWidget.w} onChange={(e) => setPlacedWidgets(placedWidgets.map(x => x.id === activeWidget.id ? {...x, w: parseInt(e.target.value) || 1} : x))} className="w-full border p-2 rounded text-sm"/>
// // // // // //                </div>
// // // // // //                <div>
// // // // // //                  <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Row Span (H)</label>
// // // // // //                  <input type="number" value={activeWidget.h} onChange={(e) => setPlacedWidgets(placedWidgets.map(x => x.id === activeWidget.id ? {...x, h: parseInt(e.target.value) || 1} : x))} className="w-full border p-2 rounded text-sm"/>
// // // // // //                </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // }
// // // // // import { useState } from "react";
// // // // // import { useNavigate } from "react-router-dom";

// // // // // export default function DashboardConfigure({ orders, setLayout }) {
// // // // //   const navigate = useNavigate();
// // // // //   const [placedWidgets, setPlacedWidgets] = useState([]);
// // // // //   const [draggedItem, setDraggedItem] = useState(null);
// // // // //   const [hoverIndex, setHoverIndex] = useState(null);
// // // // //   const [editingWidgetId, setEditingWidgetId] = useState(null);

// // // // //   const library = {
// // // // //     Charts: ["Bar Chart", "Line Chart", "Area Chart"],
// // // // //     KPIs: ["KPI Value"],
// // // // //   };

// // // // //   const activeWidget = placedWidgets.find((w) => w.id === editingWidgetId);

// // // // //   // --- 1. DYNAMIC DATA CALCULATIONS ---
// // // // //   const getAggregatedValue = (widget) => {
// // // // //     if (!orders || orders.length === 0) return 0;
// // // // //     const metric = widget.metric || "totalAmount";
// // // // //     const values = orders.map((o) => Number(o[metric]) || 0);
// // // // //     const sum = values.reduce((a, b) => a + b, 0);

// // // // //     if (widget.aggregation === "Average") return (sum / orders.length).toFixed(widget.precision || 0);
// // // // //     if (widget.aggregation === "Count") return orders.length;
// // // // //     return sum.toFixed(widget.precision || 0);
// // // // //   };

// // // // //   // Helper to create small visual bars based on order counts per product
// // // // //   const getChartBars = () => {
// // // // //     if (!orders.length) return [20, 40, 30, 50]; // Fallback preview
// // // // //     const productCounts = orders.reduce((acc, curr) => {
// // // // //       acc[curr.product] = (acc[curr.product] || 0) + 1;
// // // // //       return acc;
// // // // //     }, {});
// // // // //     return Object.values(productCounts).map(v => (v / orders.length) * 100);
// // // // //   };

// // // // //   // --- 2. DYNAMIC RENDERER ---
// // // // //   const renderWidgetContent = (w) => {
// // // // //     const value = getAggregatedValue(w);
    
// // // // //     if (w.name === "KPI Value") {
// // // // //       return (
// // // // //         <div className="flex flex-col items-center justify-center h-full">
// // // // //           <span className="text-4xl font-black text-teal-600">
// // // // //             {w.format === "Currency" ? `$${value}` : value}
// // // // //           </span>
// // // // //           <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">{w.aggregation} of {w.metric}</p>
// // // // //         </div>
// // // // //       );
// // // // //     }

// // // // //     // Simple Dynamic Bar Chart Preview
// // // // //     const bars = getChartBars();
// // // // //     return (
// // // // //       <div className="w-full h-full flex items-end gap-1 px-2 pb-2">
// // // // //         {bars.map((height, i) => (
// // // // //           <div key={i} style={{ height: `${Math.max(height, 10)}%` }} className="bg-teal-500/80 w-full rounded-t-sm" />
// // // // //         ))}
// // // // //         {w.name.includes("Area") && (
// // // // //            <div className="absolute inset-0 bg-teal-500/10" style={{ clipPath: 'polygon(0% 100%, 0% 50%, 50% 20%, 100% 50%, 100% 100%)' }} />
// // // // //         )}
// // // // //       </div>
// // // // //     );
// // // // //   };

// // // // //   const handleDrop = (index) => {
// // // // //     if (!draggedItem) return;
// // // // //     const isChart = library.Charts.includes(draggedItem.data);
// // // // //     const newWidget = {
// // // // //       id: Date.now(),
// // // // //       pos: index,
// // // // //       name: draggedItem.data,
// // // // //       title: "Untitled Widget",
// // // // //       w: isChart ? 4 : 3,
// // // // //       h: isChart ? 4 : 2,
// // // // //       metric: "totalAmount",
// // // // //       aggregation: "Sum",
// // // // //       format: "Currency",
// // // // //       precision: 0,
// // // // //     };
// // // // //     setPlacedWidgets([...placedWidgets, newWidget]);
// // // // //     setEditingWidgetId(newWidget.id);
// // // // //     setDraggedItem(null);
// // // // //     setHoverIndex(null);
// // // // //   };

// // // // //   return (
// // // // //     <div className="flex h-screen bg-[#F0F1F3] font-sans">
// // // // //       {/* SIDEBAR LIBRARY */}
// // // // //       <div className="w-72 bg-white border-r p-6">
// // // // //         <h2 className="font-bold text-gray-800 flex items-center gap-2 mb-8 cursor-pointer" onClick={() => navigate("/")}>
// // // // //           <span className="text-xl">←</span> Exit Config
// // // // //         </h2>
// // // // //         <div className="space-y-4">
// // // // //           {Object.entries(library).map(([cat, items]) => (
// // // // //             <div key={cat}>
// // // // //               <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">{cat}</p>
// // // // //               <div className="space-y-2">
// // // // //                 {items.map(item => (
// // // // //                   <div key={item} draggable onDragStart={() => setDraggedItem({ data: item })}
// // // // //                     className="p-3 text-xs bg-gray-50 border border-gray-200 rounded-lg cursor-grab hover:border-teal-500 shadow-sm transition-colors">
// // // // //                     ⠿ {item}
// // // // //                   </div>
// // // // //                 ))}
// // // // //               </div>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* CANVAS AREA */}
// // // // //       <div className="flex-1 p-8 overflow-auto">
// // // // //         <div className="flex justify-between items-center mb-6">
// // // // //            <h1 className="text-xl font-bold text-gray-800">Layout Canvas</h1>
// // // // //            <button onClick={() => { setLayout(placedWidgets); navigate("/"); }} 
// // // // //              className="bg-teal-500 text-white px-6 py-2 rounded-lg font-bold shadow-md">
// // // // //              Save Configuration
// // // // //            </button>
// // // // //         </div>
        
// // // // //         {/* IMPROVED VISIBLE GRID */}
// // // // //         <div className="grid grid-cols-12 auto-rows-[60px] gap-2 p-2 bg-[#E5E7EB] rounded-xl border border-gray-300 relative min-h-[85vh]">
// // // // //           {/* Visual Grid Markers */}
// // // // //           {Array.from({ length: 120 }).map((_, i) => (
// // // // //             <div key={i} 
// // // // //               onDragOver={(e) => { e.preventDefault(); setHoverIndex(i); }} 
// // // // //               onDrop={() => handleDrop(i)}
// // // // //               className={`rounded border ${hoverIndex === i ? "bg-teal-100 border-teal-500" : "bg-white/40 border-gray-200"}`}
// // // // //             />
// // // // //           ))}

// // // // //           {/* Widgets */}
// // // // //           {placedWidgets.map((w) => (
// // // // //             <div key={w.id} 
// // // // //               style={{ gridColumn: `${(w.pos % 12) + 1} / span ${w.w}`, gridRow: `${Math.floor(w.pos / 12) + 1} / span ${w.h}` }}
// // // // //               className={`absolute inset-0 z-10 bg-white border-2 shadow-sm rounded-xl p-4 flex flex-col transition-all overflow-hidden ${editingWidgetId === w.id ? 'border-teal-500 ring-4 ring-teal-50' : 'border-gray-100'}`}
// // // // //               onClick={(e) => { e.stopPropagation(); setEditingWidgetId(w.id); }}
// // // // //               // Position calculation for absolute inside grid item
// // // // //               style={{
// // // // //                 gridColumn: `${(w.pos % 12) + 1} / span ${w.w}`,
// // // // //                 gridRow: `${Math.floor(w.pos / 12) + 1} / span ${w.h}`
// // // // //               }}>
// // // // //               <div className="flex justify-between items-start mb-2 pointer-events-none">
// // // // //                 <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter truncate">{w.title}</span>
// // // // //                 <button onClick={(e) => { e.stopPropagation(); setPlacedWidgets(placedWidgets.filter(x => x.id !== w.id)); }} 
// // // // //                   className="text-red-400 hover:text-red-600 pointer-events-auto">🗑</button>
// // // // //               </div>
// // // // //               <div className="flex-1 pointer-events-none">{renderWidgetContent(w)}</div>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* SETTINGS PANEL */}
// // // // //       {activeWidget && (
// // // // //         <div className="w-[350px] bg-white border-l p-6 shadow-xl animate-in slide-in-from-right">
// // // // //           <div className="flex justify-between items-center mb-6 border-b pb-4">
// // // // //             <h3 className="font-bold">Widget Settings</h3>
// // // // //             <button onClick={() => setEditingWidgetId(null)}>✕</button>
// // // // //           </div>
          
// // // // //           <div className="space-y-4">
// // // // //             <div>
// // // // //               <label className="text-[10px] font-bold text-gray-400 uppercase">Widget Title</label>
// // // // //               <input type="text" className="w-full border p-2 rounded mt-1 text-sm" value={activeWidget.title} 
// // // // //                 onChange={(e) => setPlacedWidgets(placedWidgets.map(x => x.id === activeWidget.id ? {...x, title: e.target.value} : x))} />
// // // // //             </div>

// // // // //             <div>
// // // // //               <label className="text-[10px] font-bold text-gray-400 uppercase">Aggregation</label>
// // // // //               <select className="w-full border p-2 rounded mt-1 text-sm bg-white" value={activeWidget.aggregation}
// // // // //                 onChange={(e) => setPlacedWidgets(placedWidgets.map(x => x.id === activeWidget.id ? {...x, aggregation: e.target.value} : x))}>
// // // // //                 <option>Sum</option>
// // // // //                 <option>Average</option>
// // // // //                 <option>Count</option>
// // // // //               </select>
// // // // //             </div>

// // // // //             <div className="grid grid-cols-2 gap-2">
// // // // //                <div>
// // // // //                  <label className="text-[10px] font-bold text-gray-400 uppercase">Metric</label>
// // // // //                  <select className="w-full border p-2 rounded mt-1 text-sm bg-white" value={activeWidget.metric}
// // // // //                   onChange={(e) => setPlacedWidgets(placedWidgets.map(x => x.id === activeWidget.id ? {...x, metric: e.target.value} : x))}>
// // // // //                   <option value="totalAmount">Total Amount</option>
// // // // //                   <option value="qty">Qty</option>
// // // // //                   <option value="unitPrice">Price</option>
// // // // //                  </select>
// // // // //                </div>
// // // // //                <div>
// // // // //                  <label className="text-[10px] font-bold text-gray-400 uppercase">Format</label>
// // // // //                  <select className="w-full border p-2 rounded mt-1 text-sm bg-white" value={activeWidget.format}
// // // // //                   onChange={(e) => setPlacedWidgets(placedWidgets.map(x => x.id === activeWidget.id ? {...x, format: e.target.value} : x))}>
// // // // //                   <option>Currency</option>
// // // // //                   <option>Number</option>
// // // // //                  </select>
// // // // //                </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // import { useState, useMemo } from "react";
// // // // import { useNavigate } from "react-router-dom";

// // // // export default function DashboardConfigure({ orders = [], setLayout }) {
// // // //   const navigate = useNavigate();
// // // //   const [placedWidgets, setPlacedWidgets] = useState([]);
// // // //   const [draggedItem, setDraggedItem] = useState(null);
// // // //   const [hoverIndex, setHoverIndex] = useState(null);
// // // //   const [editingWidgetId, setEditingWidgetId] = useState(null);

// // // //   const library = {
// // // //     Charts: ["Bar Chart", "Line Chart", "Pie Chart", "Area Chart", "Scatter Plot"],
// // // //     Tables: ["Table"],
// // // //     KPIs: ["KPI Value"],
// // // //   };

// // // //   const activeWidget = placedWidgets.find((w) => w.id === editingWidgetId);

// // // //   // --- DYNAMIC DATA PROCESSING ---
// // // //   const chartData = useMemo(() => {
// // // //     const counts = {};
// // // //     orders.forEach((o) => { counts[o.product] = (counts[o.product] || 0) + 1; });
// // // //     return Object.entries(counts).map(([name, value]) => ({ name, value }));
// // // //   }, [orders]);

// // // //   const getKPIValue = (w) => {
// // // //     if (!orders.length) return 0;
// // // //     const metric = w.metric || "totalAmount";
// // // //     const sum = orders.reduce((acc, curr) => acc + (Number(curr[metric]) || 0), 0);
// // // //     if (w.aggregation === "Average") return (sum / orders.length).toFixed(w.precision || 0);
// // // //     if (w.aggregation === "Count") return orders.length;
// // // //     return sum.toFixed(w.precision || 0);
// // // //   };

// // // //   // --- DYNAMIC CHART RENDERERS ---
// // // //   const renderVisual = (w) => {
// // // //     if (w.name === "KPI Value") {
// // // //       const val = getKPIValue(w);
// // // //       return (
// // // //         <div className="flex flex-col items-center justify-center h-full">
// // // //           <span className="text-3xl font-bold text-gray-800">{w.format === "Currency" ? `$${val}` : val}</span>
// // // //         </div>
// // // //       );
// // // //     }

// // // //     if (w.name === "Table") {
// // // //       return (
// // // //         <div className="text-[9px] text-gray-400 overflow-hidden">
// // // //           <table className="w-full text-left">
// // // //             <thead><tr className="border-b"><th>ID</th><th>Amt</th></tr></thead>
// // // //             <tbody>{orders.slice(0, 3).map((o, i) => <tr key={i} className="border-b"><td>{o.orderId}</td><td>{o.totalAmount}</td></tr>)}</tbody>
// // // //           </table>
// // // //         </div>
// // // //       );
// // // //     }

// // // //     // Dynamic Bar Chart logic
// // // //     if (w.name === "Bar Chart") {
// // // //       return (
// // // //         <div className="flex items-end gap-1 h-full px-2 pb-2">
// // // //           {chartData.map((d, i) => (
// // // //             <div key={i} className="bg-teal-400 w-full" style={{ height: `${(d.value / orders.length) * 100}%` }} />
// // // //           ))}
// // // //         </div>
// // // //       );
// // // //     }

// // // //     return <div className="flex items-center justify-center h-full text-gray-300 text-[10px]">Preview for {w.name}</div>;
// // // //   };

// // // //   const handleDrop = (index) => {
// // // //     if (!draggedItem) return;
// // // //     const isChart = library.Charts.includes(draggedItem.data);
// // // //     const newWidget = {
// // // //       id: Date.now(), pos: index, name: draggedItem.data, title: `New ${draggedItem.data}`,
// // // //       w: isChart ? 6 : 3, h: isChart ? 4 : 2,
// // // //       metric: "totalAmount", aggregation: "Sum", format: "Currency"
// // // //     };
// // // //     setPlacedWidgets([...placedWidgets, newWidget]);
// // // //     setEditingWidgetId(newWidget.id);
// // // //   };

// // // //   return (
// // // //     <div className="flex h-screen bg-[#F0F1F3] font-sans">
// // // //       {/* SIDEBAR: LIBRARY */}
// // // //       <div className="w-72 bg-white border-r p-6 overflow-y-auto">
// // // //         <button onClick={() => navigate("/")} className="text-sm font-bold mb-6 text-gray-500 hover:text-black">← Back</button>
// // // //         <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Widget Library</p>
// // // //         <div className="space-y-4">
// // // //           {Object.entries(library).map(([cat, items]) => (
// // // //             <div key={cat} className="border border-gray-100 rounded-lg overflow-hidden shadow-sm">
// // // //               <div className="p-3 text-xs font-bold bg-gray-50 flex justify-between">{cat}<span>▼</span></div>
// // // //               <div className="p-2 space-y-1 bg-white">
// // // //                 {items.map(item => (
// // // //                   <div key={item} draggable onDragStart={() => setDraggedItem({ data: item })}
// // // //                     className="p-2 text-[11px] text-gray-600 hover:bg-teal-50 rounded cursor-grab border border-transparent hover:border-teal-100 transition">
// // // //                     ⠿ {item}
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       {/* CANVAS: VISIBLE LIGHT GREY GRID */}
// // // //       <div className="flex-1 p-8 overflow-auto">
// // // //         <div className="flex justify-between items-center mb-6">
// // // //           <h1 className="text-lg font-bold">Configure Dashboard</h1>
// // // //           <button onClick={() => { setLayout(placedWidgets); navigate("/"); }} className="bg-teal-500 text-white px-6 py-2 rounded-lg font-bold">Save Layout</button>
// // // //         </div>

// // // //         <div className="grid grid-cols-12 auto-rows-[50px] gap-2 p-2 bg-[#F8F9FA] border border-gray-200 rounded-xl relative min-h-[100%]">
// // // //           {/* Light Grid Background Cells */}
// // // //           {Array.from({ length: 144 }).map((_, i) => (
// // // //             <div key={i} onDragOver={(e) => { e.preventDefault(); setHoverIndex(i); }} onDrop={() => handleDrop(i)}
// // // //               className={`rounded border ${hoverIndex === i ? "bg-teal-50 border-teal-300" : "bg-white/50 border-gray-100"}`} />
// // // //           ))}

// // // //           {/* Rendered Widgets */}
// // // //           {placedWidgets.map((w) => (
// // // //             <div key={w.id} 
// // // //               style={{ gridColumn: `${(w.pos % 12) + 1} / span ${w.w}`, gridRow: `${Math.floor(w.pos / 12) + 1} / span ${w.h}` }}
// // // //               className={`absolute inset-0 z-10 bg-white border shadow-sm rounded-xl p-3 flex flex-col group ${editingWidgetId === w.id ? 'ring-2 ring-teal-500' : 'border-gray-100'}`}
// // // //               onClick={(e) => { e.stopPropagation(); setEditingWidgetId(w.id); }}>
// // // //               <div className="flex justify-between mb-2">
// // // //                 <span className="text-[10px] font-bold text-gray-400 uppercase truncate">{w.title}</span>
// // // //                 <button onClick={(e) => { e.stopPropagation(); setPlacedWidgets(placedWidgets.filter(x => x.id !== w.id)); }} className="opacity-0 group-hover:opacity-100 text-red-400 text-xs">🗑</button>
// // // //               </div>
// // // //               <div className="flex-1 overflow-hidden">{renderVisual(w)}</div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       {/* CONFIGURATION PANEL */}
// // // //       {activeWidget && (
// // // //         <div className="w-80 bg-white border-l p-6 shadow-2xl">
// // // //           <div className="flex justify-between items-center mb-6 border-b pb-4">
// // // //             <h3 className="font-bold text-gray-800">Settings</h3>
// // // //             <button onClick={() => setEditingWidgetId(null)} className="text-gray-400">✕</button>
// // // //           </div>
// // // //           <div className="space-y-4">
// // // //             <div>
// // // //               <label className="text-[10px] font-bold text-gray-400 uppercase">Title</label>
// // // //               <input type="text" className="w-full border p-2 rounded text-sm" value={activeWidget.title} 
// // // //                 onChange={(e) => setPlacedWidgets(placedWidgets.map(x => x.id === activeWidget.id ? {...x, title: e.target.value} : x))} />
// // // //             </div>
// // // //             <div>
// // // //               <label className="text-[10px] font-bold text-gray-400 uppercase">Aggregation</label>
// // // //               <select className="w-full border p-2 rounded text-sm bg-white" value={activeWidget.aggregation}
// // // //                 onChange={(e) => setPlacedWidgets(placedWidgets.map(x => x.id === activeWidget.id ? {...x, aggregation: e.target.value} : x))}>
// // // //                 <option>Sum</option><option>Average</option><option>Count</option>
// // // //               </select>
// // // //             </div>
// // // //             <div className="grid grid-cols-2 gap-2">
// // // //                <div>
// // // //                  <label className="text-[10px] font-bold text-gray-400 uppercase">Width</label>
// // // //                  <input type="number" className="w-full border p-2 rounded text-sm" value={activeWidget.w} onChange={(e) => setPlacedWidgets(placedWidgets.map(x => x.id === activeWidget.id ? {...x, w: parseInt(e.target.value)} : x))} />
// // // //                </div>
// // // //                <div>
// // // //                  <label className="text-[10px] font-bold text-gray-400 uppercase">Height</label>
// // // //                  <input type="number" className="w-full border p-2 rounded text-sm" value={activeWidget.h} onChange={(e) => setPlacedWidgets(placedWidgets.map(x => x.id === activeWidget.id ? {...x, h: parseInt(e.target.value)} : x))} />
// // // //                </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }
// // // import { useState, useMemo } from "react";
// // // import { useNavigate } from "react-router-dom";

// // // export default function DashboardConfigure({ orders = [], setLayout }) {
// // //   const navigate = useNavigate();
// // //   const [placedWidgets, setPlacedWidgets] = useState([]);
// // //   const [draggedItem, setDraggedItem] = useState(null);
// // //   const [hoverIndex, setHoverIndex] = useState(null);
// // //   const [editingWidgetId, setEditingWidgetId] = useState(null);

// // //   const library = {
// // //     Charts: ["Bar Chart", "Line Chart", "Pie Chart", "Area Chart", "Scatter Plot"],
// // //     Tables: ["Table"],
// // //     KPIs: ["KPI Value"],
// // //   };

// // //   const activeWidget = placedWidgets.find((w) => w.id === editingWidgetId);

// // //   // --- 1. DATA PROCESSING FOR DIFFERENT CHARTS ---
// // //   const data = useMemo(() => {
// // //     if (!orders.length) return [];
    
// // //     // Group by product for Bar/Area
// // //     const productGroup = orders.reduce((acc, curr) => {
// // //       acc[curr.product] = (acc[curr.product] || 0) + Number(curr.totalAmount);
// // //       return acc;
// // //     }, {});

// // //     // Group by status for Pie
// // //     const statusGroup = orders.reduce((acc, curr) => {
// // //       acc[curr.status || 'Pending'] = (acc[curr.status || 'Pending'] || 0) + 1;
// // //       return acc;
// // //     }, {});

// // //     return {
// // //       products: Object.entries(productGroup).map(([name, val]) => ({ name, val })),
// // //       status: Object.entries(statusGroup).map(([name, val]) => ({ name, val })),
// // //       raw: orders
// // //     };
// // //   }, [orders]);

// // //   // --- 2. UNIQUE RENDERER PER CHART ---
// // //   const renderWidgetContent = (w) => {
// // //     if (!orders.length) return <div className="text-gray-300 text-[10px] text-center mt-4">Add order data to view</div>;

// // //     const maxVal = Math.max(...data.products.map(p => p.val), 1);

// // //     switch (w.name) {
// // //       case "KPI Value":
// // //         const total = orders.reduce((acc, curr) => acc + (Number(curr[w.metric || "totalAmount"]) || 0), 0);
// // //         return (
// // //           <div className="flex flex-col items-center justify-center h-full">
// // //             <span className="text-2xl font-black text-teal-600">${total.toLocaleString()}</span>
// // //             <p className="text-[9px] text-gray-400 font-bold uppercase">{w.aggregation} {w.metric}</p>
// // //           </div>
// // //         );

// // //       case "Bar Chart":
// // //         return (
// // //           <div className="flex items-end justify-between h-full w-full gap-2 px-1 pb-2">
// // //             {data.products.map((p, i) => (
// // //               <div key={i} className="bg-teal-500 w-full rounded-t-sm relative group" style={{ height: `${(p.val / maxVal) * 100}%` }}>
// // //                 <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[8px] p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
// // //                   ${p.val}
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         );

// // //       case "Line Chart":
// // //       case "Area Chart":
// // //         const points = data.products.map((p, i) => `${(i / (data.products.length - 1)) * 100},${100 - (p.val / maxVal) * 80}`).join(" ");
// // //         return (
// // //           <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
// // //             {w.name === "Area Chart" && <polyline fill="rgba(20, 184, 166, 0.2)" points={`0,100 ${points} 100,100`} />}
// // //             <polyline fill="none" stroke="#14b8a6" strokeWidth="4" strokeLinejoin="round" points={points} />
// // //           </svg>
// // //         );

// // //       case "Pie Chart":
// // //         const statusMax = Math.max(...data.status.map(s => s.val));
// // //         return (
// // //           <div className="flex flex-wrap items-center justify-center h-full gap-1">
// // //             {data.status.map((s, i) => (
// // //               <div key={i} className="flex flex-col items-center">
// // //                 <div className="w-8 h-8 rounded-full border-4 border-teal-500 flex items-center justify-center text-[8px] font-bold" 
// // //                      style={{ opacity: s.val / statusMax }}>{s.val}</div>
// // //                 <span className="text-[7px] text-gray-400 truncate w-10 text-center">{s.name}</span>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         );

// // //       case "Table":
// // //         return (
// // //           <div className="h-full overflow-auto text-[9px]">
// // //             <table className="w-full text-left">
// // //               <thead className="sticky top-0 bg-white border-b text-gray-400">
// // //                 <tr><th>Product</th><th className="text-right">Price</th></tr>
// // //               </thead>
// // //               <tbody>
// // //                 {orders.map((o, i) => (
// // //                   <tr key={i} className="border-b border-gray-50">
// // //                     <td className="py-1 truncate max-w-[60px]">{o.product}</td>
// // //                     <td className="text-right font-bold text-teal-600">${o.totalAmount}</td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //         );

// // //       default: return null;
// // //     }
// // //   };

// // //   const handleDrop = (index) => {
// // //     if (!draggedItem) return;
// // //     const isChart = library.Charts.includes(draggedItem.data);
// // //     const newWidget = {
// // //       id: Date.now(), pos: index, name: draggedItem.data, title: draggedItem.data,
// // //       w: isChart ? 6 : 3, h: isChart ? 4 : 2,
// // //       metric: "totalAmount", aggregation: "Sum"
// // //     };
// // //     setPlacedWidgets([...placedWidgets, newWidget]);
// // //     setEditingWidgetId(newWidget.id);
// // //     setDraggedItem(null);
// // //     setHoverIndex(null);
// // //   };

// // //   return (
// // //     <div className="flex h-screen bg-[#F0F1F3] font-sans overflow-hidden">
// // //       {/* SIDEBAR */}
// // //       <div className="w-72 bg-white border-r p-6 flex flex-col z-20 shadow-lg">
// // //         <h2 className="font-black text-gray-800 flex items-center gap-2 mb-10 cursor-pointer" onClick={() => navigate("/")}>
// // //           <span className="text-xl">←</span> CONFIGURE
// // //         </h2>
// // //         <div className="space-y-6 overflow-y-auto pr-2">
// // //           {Object.entries(library).map(([cat, items]) => (
// // //             <div key={cat}>
// // //               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">{cat}</p>
// // //               <div className="grid grid-cols-1 gap-2">
// // //                 {items.map(item => (
// // //                   <div key={item} draggable onDragStart={() => setDraggedItem({ data: item })}
// // //                     className="p-3 bg-white border border-gray-100 rounded-xl cursor-grab hover:border-teal-500 hover:bg-teal-50/30 transition-all flex items-center gap-3 shadow-sm group">
// // //                     <span className="text-gray-300 group-hover:text-teal-500">⠿</span>
// // //                     <span className="text-xs font-semibold text-gray-600">{item}</span>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       {/* CANVAS */}
// // //       <div className="flex-1 p-8 overflow-hidden flex flex-col">
// // //         <div className="flex justify-between items-center mb-6">
// // //           <h1 className="text-xl font-bold text-gray-800">Layout Designer</h1>
// // //           <button onClick={() => { setLayout(placedWidgets); navigate("/"); }} 
// // //             className="bg-teal-500 text-white px-8 py-2.5 rounded-xl font-bold shadow-xl shadow-teal-500/30 hover:bg-teal-600">
// // //             Save Dashboard
// // //           </button>
// // //         </div>

// // //         <div className="flex-1 bg-[#E5E7EB] rounded-3xl p-4 overflow-auto border-4 border-white shadow-inner">
// // //           <div className="grid grid-cols-12 auto-rows-[60px] gap-3 relative min-h-full pb-20">
// // //             {/* GRID BACKGROUND */}
// // //             {Array.from({ length: 144 }).map((_, i) => (
// // //               <div key={i} onDragOver={(e) => { e.preventDefault(); setHoverIndex(i); }} onDrop={() => handleDrop(i)}
// // //                 className={`rounded-xl border ${hoverIndex === i ? 'bg-white border-teal-400 ring-2 ring-teal-200' : 'bg-white/40 border-white/60'}`} />
// // //             ))}

// // //             {/* PLACED WIDGETS */}
// // //             {placedWidgets.map((w) => (
// // //               <div key={w.id} 
// // //                 style={{ 
// // //                   gridColumn: `${(w.pos % 12) + 1} / span ${w.w}`, 
// // //                   gridRow: `${Math.floor(w.pos / 12) + 1} / span ${w.h}` 
// // //                 }}
// // //                 className={`z-10 bg-white border-2 rounded-2xl p-4 flex flex-col transition-all min-h-[120px] shadow-lg ${editingWidgetId === w.id ? 'border-teal-500 scale-[1.02]' : 'border-transparent'}`}
// // //                 onClick={(e) => { e.stopPropagation(); setEditingWidgetId(w.id); }}>
                
// // //                 <div className="flex justify-between items-center mb-3">
// // //                   <span className="text-[10px] font-black text-gray-400 uppercase tracking-tighter truncate">{w.title}</span>
// // //                   <button onClick={(e) => { e.stopPropagation(); setPlacedWidgets(placedWidgets.filter(x => x.id !== w.id)); }} className="text-red-400 hover:scale-110">✕</button>
// // //                 </div>
// // //                 <div className="flex-1 min-h-0">{renderWidgetContent(w)}</div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* SETTINGS */}
// // //       {activeWidget && (
// // //         <div className="w-80 bg-white border-l p-6 shadow-2xl animate-in slide-in-from-right z-30">
// // //           <div className="flex justify-between items-center mb-8 border-b pb-4">
// // //             <h3 className="font-bold text-gray-800">Widget Config</h3>
// // //             <button onClick={() => setEditingWidgetId(null)} className="text-gray-400 text-xl">✕</button>
// // //           </div>
// // //           <div className="space-y-6">
// // //             <div>
// // //               <label className="text-[10px] font-bold text-gray-400 uppercase">Custom Title</label>
// // //               <input type="text" className="w-full border-2 border-gray-100 p-2.5 rounded-xl text-sm mt-1 focus:border-teal-500 outline-none" value={activeWidget.title} 
// // //                 onChange={(e) => setPlacedWidgets(placedWidgets.map(x => x.id === activeWidget.id ? {...x, title: e.target.value} : x))} />
// // //             </div>
// // //             <div className="grid grid-cols-2 gap-4">
// // //               <div>
// // //                 <label className="text-[10px] font-bold text-gray-400 uppercase">Width (1-12)</label>
// // //                 <input type="number" className="w-full border-2 border-gray-100 p-2.5 rounded-xl text-sm" value={activeWidget.w} 
// // //                   onChange={(e) => setPlacedWidgets(placedWidgets.map(x => x.id === activeWidget.id ? {...x, w: Math.min(12, parseInt(e.target.value) || 1)} : x))} />
// // //               </div>
// // //               <div>
// // //                 <label className="text-[10px] font-bold text-gray-400 uppercase">Height</label>
// // //                 <input type="number" className="w-full border-2 border-gray-100 p-2.5 rounded-xl text-sm" value={activeWidget.h} 
// // //                   onChange={(e) => setPlacedWidgets(placedWidgets.map(x => x.id === activeWidget.id ? {...x, h: parseInt(e.target.value) || 1} : x))} />
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }
// // import { useState, useMemo } from "react";
// // import { useNavigate } from "react-router-dom";
// // import DynamicWidget from "../components/DynamicWidget";

// // export default function DashboardConfigure({ orders = [], setLayout }) {
// //   const navigate = useNavigate();
// //   const [placedWidgets, setPlacedWidgets] = useState([]);
// //   const [draggedItem, setDraggedItem] = useState(null);
// //   const [hoverIndex, setHoverIndex] = useState(null);
// //   const [editingWidgetId, setEditingWidgetId] = useState(null);

// //   const library = {
// //     Charts: ["Bar Chart", "Line Chart", "Pie Chart", "Area Chart", "Scatter Plot"],
// //     Tables: ["Table"],
// //     KPIs: ["KPI Value"],
// //     Filters: ["Date Filter"]
// //   };

// //   const activeWidget = placedWidgets.find((w) => w.id === editingWidgetId);

// //   // --- 1. ENHANCED DATA PROCESSING ---
// //   const processedData = useMemo(() => {
// //     if (!orders.length) return { products: [], status: [], scatter: [] };
    
// //     const productGroup = orders.reduce((acc, curr) => {
// //       acc[curr.product] = (acc[curr.product] || 0) + Number(curr.totalAmount);
// //       return acc;
// //     }, {});

// //     const statusGroup = orders.reduce((acc, curr) => {
// //       acc[curr.status] = (acc[curr.status] || 0) + 1;
// //       return acc;
// //     }, {});

// //     const scatterData = orders.map(o => ({ x: o.qty, y: o.unitPrice }));

// //     return {
// //       products: Object.entries(productGroup).map(([name, val]) => ({ name, val })),
// //       status: Object.entries(statusGroup).map(([name, val]) => ({ name, val })),
// //       scatter: scatterData
// //     };
// //   }, [orders]);

// //   // --- 2. DYNAMIC CALCULATION FOR KPI & CHARTS ---
// //   const getCalculatedValue = (w) => {
// //     if (!orders.length) return 0;
// //     const metric = w.metric || "totalAmount";
// //     const values = orders.map(o => Number(o[metric]) || 0);
    
// //     let result = 0;
// //     if (w.aggregation === "Sum") result = values.reduce((a, b) => a + b, 0);
// //     else if (w.aggregation === "Average") result = values.reduce((a, b) => a + b, 0) / values.length;
// //     else if (w.aggregation === "Count") return orders.length;

// //     return result.toFixed(w.precision || 0);
// //   };

// //   // --- 3. WIDGET RENDERER ---
// //   const renderWidgetContent = (w) => {
// //     if (!orders.length) return <div className="text-[10px] text-gray-400 text-center py-4">No Data Available</div>;

// //     switch (w.name) {
// //       case "KPI Value":
// //         const val = getCalculatedValue(w);
// //         return (
// //           <div className="flex flex-col items-center justify-center h-full">
// //             <span className="text-2xl font-black text-teal-600">
// //               {w.format === "Currency" ? `$${Number(val).toLocaleString()}` : val}
// //             </span>
// //             <p className="text-[8px] text-gray-400 font-bold uppercase">{w.aggregation} of {w.metric}</p>
// //           </div>
// //         );

// //       case "Scatter Plot":
// //         return (
// //           <div className="relative w-full h-full border-l border-b border-gray-200">
// //             {processedData.scatter.map((p, i) => (
// //               <div key={i} className="absolute w-2 h-2 bg-teal-500 rounded-full opacity-60" 
// //                    style={{ left: `${(p.x / 10) * 90}%`, bottom: `${(p.y / 1000) * 90}%` }} />
// //             ))}
// //           </div>
// //         );

// //       case "Bar Chart":
// //       case "Area Chart":
// //         const maxVal = Math.max(...processedData.products.map(p => p.val), 1);
// //         const points = processedData.products.map((p, i) => 
// //           `${(i / (processedData.products.length - 1)) * 100},${100 - (p.val / maxVal) * 80}`).join(" ");
// //         return (
// //           <div className="w-full h-full pt-2">
// //             {w.name === "Bar Chart" ? (
// //               <div className="flex items-end justify-between h-full gap-1">
// //                 {processedData.products.map((p, i) => (
// //                   <div key={i} className="bg-teal-500 w-full rounded-t" style={{ height: `${(p.val / maxVal) * 90}%` }} />
// //                 ))}
// //               </div>
// //             ) : (
// //               <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
// //                 <polyline fill="rgba(20, 184, 166, 0.2)" points={`0,100 ${points} 100,100`} />
// //                 <polyline fill="none" stroke="#14b8a6" strokeWidth="3" points={points} />
// //               </svg>
// //             )}
// //           </div>
// //         );

// //       case "Table":
// //         return (
// //           <div className="h-full overflow-auto text-[9px]">
// //             <table className="w-full text-left">
// //               <thead><tr className="border-b text-gray-400"><th>Product</th><th className="text-right">Total</th></tr></thead>
// //               <tbody>
// //                 {orders.slice(0, 5).map((o, i) => (
// //                   <tr key={i} className="border-b border-gray-50"><td className="py-1 truncate">{o.product}</td><td className="text-right">${o.totalAmount}</td></tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         );
      
// //       case "Date Filter":
// //         return <div className="flex items-center justify-center h-full border rounded border-dashed text-[10px] text-gray-400">Date Range Picker Placeholder</div>;

// //       default: return null;
// //     }
// //   };

// //   const handleDrop = (index) => {
// //     if (!draggedItem) return;
// //     const isChart = library.Charts.includes(draggedItem.data);
// //     const newWidget = {
// //       id: Date.now(), pos: index, name: draggedItem.data, title: draggedItem.data,
// //       w: isChart ? 5 : 2, h: isChart ? 5 : 2, // Default sizes per project rules
// //       metric: "totalAmount", aggregation: "Sum", format: "Currency", precision: 0
// //     };
// //     setPlacedWidgets([...placedWidgets, newWidget]);
// //     setEditingWidgetId(newWidget.id);
// //   };

// //   return (
// //     <div className="flex h-screen bg-[#F0F1F3] font-sans overflow-hidden">
// //       {/* LEFT LIBRARY */}
// //       <div className="w-64 bg-white border-r p-5 shadow-xl z-20 overflow-y-auto">
// //         <h2 className="font-black text-gray-800 mb-8 cursor-pointer" onClick={() => navigate("/")}>← DASHBOARD</h2>
// //         {Object.entries(library).map(([cat, items]) => (
// //           <div key={cat} className="mb-6">
// //             <p className="text-[10px] font-bold text-gray-400 uppercase mb-3">{cat}</p>
// //             <div className="space-y-2">
// //               {items.map(item => (
// //                 <div key={item} draggable onDragStart={() => setDraggedItem({ data: item })}
// //                      className="p-3 bg-gray-50 border border-gray-100 rounded-xl cursor-grab hover:border-teal-500 hover:bg-white transition-all text-xs font-semibold flex items-center gap-2">
// //                   <span className="text-teal-500">⠿</span> {item}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* CENTER CANVAS */}
// //       <div className="flex-1 p-6 flex flex-col overflow-hidden">
// //         <div className="flex justify-between items-center mb-4">
// //           <h1 className="text-xl font-bold">12-Column Desktop Grid</h1>
// //           <button onClick={() => { setLayout(placedWidgets); navigate("/"); }} 
// //                   className="bg-teal-500 text-white px-6 py-2 rounded-xl font-bold shadow-lg hover:bg-teal-600 transition-all">
// //             Save Dashboard
// //           </button>
// //         </div>

// //         <div className="flex-1 bg-gray-200/50 rounded-2xl p-4 overflow-auto border-2 border-white shadow-inner">
// //           <div className="grid grid-cols-12 auto-rows-[50px] gap-2 relative">
// //             {/* Grid Markers */}
// //             {Array.from({ length: 120 }).map((_, i) => (
// //               <div key={i} onDragOver={(e) => e.preventDefault()} onDrop={() => handleDrop(i)}
// //                    className="rounded-lg bg-white/40 border border-white/60 h-full w-full" />
// //             ))}

// //             {/* Placed Widgets */}
// //             {placedWidgets.map((w) => (
              
// //               <div key={w.id} 
              
// //                    style={{ gridColumn: `${(w.pos % 12) + 1} / span ${w.w}`, gridRow: `${Math.floor(w.pos / 12) + 1} / span ${w.h}` }}
// //                    className={`absolute inset-0 z-10 bg-white border-2 rounded-xl p-3 flex flex-col shadow-md transition-all ${editingWidgetId === w.id ? 'border-teal-500 ring-4 ring-teal-50' : 'border-transparent'}`}
// //                    onClick={(e) => { e.stopPropagation(); setEditingWidgetId(w.id); }}>
                    
// //                 <div className="flex justify-between items-start mb-1">
// //                   <span className="text-[9px] font-bold text-gray-400 uppercase truncate">{w.title}</span>
// //                   <button onClick={(e) => { e.stopPropagation(); setPlacedWidgets(placedWidgets.filter(x => x.id !== w.id)); }} className="text-red-400 text-xs">✕</button>
// //                 </div>
// //                 <div className="flex-1 overflow-hidden">{renderWidgetContent(w)}</div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       {/* RIGHT SETTINGS PANEL */}
// //       {activeWidget && (
// //         <div className="w-80 bg-white border-l p-6 shadow-2xl overflow-y-auto z-30">
// //           <div className="flex justify-between items-center mb-6 pb-2 border-b">
// //             <h3 className="font-bold">Settings</h3>
// //             <button onClick={() => setEditingWidgetId(null)}>✕</button>
// //           </div>
          
// //           <div className="space-y-4">
// //             <div>
// //               <label className="text-[10px] font-bold text-gray-400 uppercase">Title</label>
// //               <input className="w-full border p-2 rounded text-sm mt-1" value={activeWidget.title} 
// //                      onChange={(e) => setPlacedWidgets(placedWidgets.map(x => x.id === activeWidget.id ? {...x, title: e.target.value} : x))} />
// //             </div>

// //             <div className="grid grid-cols-2 gap-2">
// //               <div>
// //                 <label className="text-[10px] font-bold text-gray-400 uppercase">Metric</label>
// //                 <select className="w-full border p-2 rounded text-sm mt-1 bg-white" value={activeWidget.metric}
// //                         onChange={(e) => setPlacedWidgets(placedWidgets.map(x => x.id === activeWidget.id ? {...x, metric: e.target.value} : x))}>
// //                   <option value="totalAmount">Total Amount</option><option value="qty">Quantity</option><option value="unitPrice">Unit Price</option>
// //                 </select>
// //               </div>
// //               <div>
// //                 <label className="text-[10px] font-bold text-gray-400 uppercase">Agg</label>
// //                 <select className="w-full border p-2 rounded text-sm mt-1 bg-white" value={activeWidget.aggregation}
// //                         onChange={(e) => setPlacedWidgets(placedWidgets.map(x => x.id === activeWidget.id ? {...x, aggregation: e.target.value} : x))}>
// //                   <option>Sum</option><option>Average</option><option>Count</option>
// //                 </select>
// //               </div>
// //             </div>

// //             <div className="grid grid-cols-2 gap-2">
// //               <div>
// //                 <label className="text-[10px] font-bold text-gray-400 uppercase">Columns (W)</label>
// //                 <input type="number" max="12" className="w-full border p-2 rounded text-sm" value={activeWidget.w} 
// //                        onChange={(e) => setPlacedWidgets(placedWidgets.map(x => x.id === activeWidget.id ? {...x, w: parseInt(e.target.value)} : x))} />
// //               </div>
// //               <div>
// //                 <label className="text-[10px] font-bold text-gray-400 uppercase">Rows (H)</label>
// //                 <input type="number" className="w-full border p-2 rounded text-sm" value={activeWidget.h} 
// //                        onChange={(e) => setPlacedWidgets(placedWidgets.map(x => x.id === activeWidget.id ? {...x, h: parseInt(e.target.value)} : x))} />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }
// import { useState, useMemo, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import DynamicWidget from "../components/DynamicWidget";

// export default function DashboardConfigure({ orders = [], setLayout, currentLayout = [] }) {
//   const navigate = useNavigate();
  
//   // Initialize with currentLayout so it's not blank when you click "Edit"
//   const [placedWidgets, setPlacedWidgets] = useState(currentLayout);
//   const [draggedItem, setDraggedItem] = useState(null);
//   const [editingWidgetId, setEditingWidgetId] = useState(null);

//   const library = {
//     Charts: ["Bar Chart", "Line Chart", "Pie Chart", "Area Chart", "Scatter Plot"],
//     Tables: ["Table"],
//     KPIs: ["KPI Value"],
//     Filters: ["Date Filter"]
//   };

//   const activeWidget = placedWidgets.find((w) => w.id === editingWidgetId);

//   // --- 1. DATA CALCULATION ENGINE ---
//   const getCalculatedValue = (w) => {
//     if (!orders.length) return 0;
//     const metric = w.metric || "totalAmount";
//     const values = orders.map(o => Number(o[metric]) || 0);
    
//     let result = 0;
//     if (w.aggregation === "Sum") result = values.reduce((a, b) => a + b, 0);
//     else if (w.aggregation === "Average") result = values.reduce((a, b) => a + b, 0) / values.length;
//     else if (w.aggregation === "Count") return orders.length;

//     return Number(result).toFixed(w.precision || 0);
//   };

//   // --- 2. IMPROVED DROP LOGIC ---
//   const handleDrop = (index) => {
//     if (!draggedItem) return;
    
//     const isChart = library.Charts.includes(draggedItem.data);
//     const newWidget = {
//       id: Date.now(), 
//       pos: index, 
//       name: draggedItem.data, 
//       title: draggedItem.data,
//       w: isChart ? 4 : 3, // Follows project sizing rules
//       h: isChart ? 6 : 3, 
//       metric: "totalAmount", 
//       aggregation: "Sum", 
//       format: "Currency", 
//       precision: 0
//     };

//     setPlacedWidgets(prev => [...prev, newWidget]);
//     setEditingWidgetId(newWidget.id);
//     setDraggedItem(null);
//   };

//   return (
//     <div className="flex h-screen bg-[#F0F1F3] font-sans overflow-hidden">
//       {/* LEFT LIBRARY */}
//       <div className="w-64 bg-white border-r p-5 shadow-xl z-20 overflow-y-auto">
//         <h2 className="font-black text-teal-600 mb-2">DashboardBuilder</h2>
//         <p className="text-[10px] font-bold text-gray-400 uppercase mb-8 cursor-pointer hover:text-gray-600" onClick={() => navigate("/")}>
//           ← Back to View
//         </p>
        
//         {Object.entries(library).map(([cat, items]) => (
//           <div key={cat} className="mb-6">
//             <p className="text-[10px] font-bold text-gray-400 uppercase mb-3 tracking-widest">{cat}</p>
//             <div className="space-y-2">
//               {items.map(item => (
//                 <div 
//                   key={item} 
//                   draggable 
//                   onDragStart={() => setDraggedItem({ data: item })}
//                   className="p-3 bg-gray-50 border border-gray-100 rounded-xl cursor-grab active:cursor-grabbing hover:border-teal-500 hover:bg-white transition-all text-xs font-semibold flex items-center gap-2 group"
//                 >
//                   <span className="text-gray-300 group-hover:text-teal-500 transition-colors">⠿</span> {item}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* CENTER CANVAS */}
//       <div className="flex-1 p-6 flex flex-col overflow-hidden">
//         <div className="flex justify-between items-center mb-4">
//           <div>
//             <h1 className="text-xl font-black text-gray-800 uppercase tracking-tight">Configuration Canvas</h1>
//             <p className="text-xs text-gray-400 font-medium">12-Column Responsive Desktop Grid</p>
//           </div>
//           <div className="flex gap-3">
//             <button 
//               onClick={() => setPlacedWidgets([])}
//               className="px-4 py-2 text-xs font-bold text-red-400 hover:bg-red-50 rounded-lg transition-colors"
//             >
//               Clear All
//             </button>
//             <button 
//               onClick={() => { setLayout(placedWidgets); navigate("/"); }} 
//               className="bg-gray-900 text-white px-6 py-2 rounded-xl font-bold shadow-lg hover:bg-teal-600 transition-all active:scale-95"
//             >
//               Save Dashboard
//             </button>
//           </div>
//         </div>

//         <div className="flex-1 bg-gray-200/40 rounded-3xl p-4 overflow-auto border-2 border-white shadow-inner">
//           <div className="grid grid-cols-12 auto-rows-[40px] gap-2 relative min-h-full">
//             {/* Drop Zones / Grid Markers */}
//             {Array.from({ length: 144 }).map((_, i) => (
//               <div 
//                 key={i} 
//                 onDragOver={(e) => e.preventDefault()} 
//                 onDrop={() => handleDrop(i)}
//                 className="rounded-lg bg-white/20 border border-white/40 h-full w-full" 
//               />
//             ))}

//             {/* Placed Widgets */}
//             {placedWidgets.map((w) => (
//               <div 
//                 key={w.id} 
//                 style={{ 
//                   gridColumn: `${(w.pos % 12) + 1} / span ${w.w}`, 
//                   gridRow: `${Math.floor(w.pos / 12) + 1} / span ${w.h}` 
//                 }}
//                 className={`absolute inset-0 z-10 bg-white border-2 rounded-2xl p-4 flex flex-col shadow-sm transition-all group ${
//                   editingWidgetId === w.id ? 'border-teal-500 ring-4 ring-teal-50 shadow-xl' : 'border-transparent hover:border-gray-200'
//                 }`}
//                 onClick={(e) => { e.stopPropagation(); setEditingWidgetId(w.id); }}
//               >
//                 <div className="flex justify-between items-start mb-2">
//                   <span className="text-[10px] font-black text-gray-400 uppercase tracking-tighter truncate">{w.title}</span>
//                   <button 
//                     onClick={(e) => { 
//                       e.stopPropagation(); 
//                       setPlacedWidgets(prev => prev.filter(x => x.id !== w.id));
//                       if(editingWidgetId === w.id) setEditingWidgetId(null);
//                     }} 
//                     className="opacity-0 group-hover:opacity-100 text-gray-300 hover:text-red-500 transition-opacity"
//                   >
//                     ✕
//                   </button>
//                 </div>
                
//                 {/* DYNAMIC CONTENT INJECTION */}
//                 <div className="flex-1 min-h-0">
//                   <DynamicWidget type={w.name} data={orders} settings={w} />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* RIGHT SETTINGS PANEL */}
//       {activeWidget && (
//         <div className="w-80 bg-white border-l p-8 shadow-2xl overflow-y-auto z-30 animate-in slide-in-from-right duration-300">
//           <div className="flex justify-between items-center mb-8 pb-4 border-b">
//             <h3 className="font-black text-gray-800 uppercase tracking-widest text-sm">Widget Settings</h3>
//             <button onClick={() => setEditingWidgetId(null)} className="text-gray-400 hover:text-black">✕</button>
//           </div>
          
//           <div className="space-y-6">
//             <div>
//               <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block">Widget Title</label>
//               <input 
//                 className="w-full border-2 border-gray-50 bg-gray-50 p-3 rounded-xl text-sm focus:bg-white focus:border-teal-500 outline-none transition-all" 
//                 value={activeWidget.title} 
//                 onChange={(e) => setPlacedWidgets(prev => prev.map(x => x.id === activeWidget.id ? {...x, title: e.target.value} : x))} 
//               />
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block">Metric</label>
//                 <select 
//                   className="w-full border-2 border-gray-50 bg-gray-50 p-3 rounded-xl text-xs font-bold outline-none" 
//                   value={activeWidget.metric}
//                   onChange={(e) => setPlacedWidgets(prev => prev.map(x => x.id === activeWidget.id ? {...x, metric: e.target.value} : x))}
//                 >
//                   <option value="totalAmount">Amount</option>
//                   <option value="qty">Quantity</option>
//                   <option value="unitPrice">Price</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block">Agg</label>
//                 <select 
//                   className="w-full border-2 border-gray-50 bg-gray-50 p-3 rounded-xl text-xs font-bold outline-none" 
//                   value={activeWidget.aggregation}
//                   onChange={(e) => setPlacedWidgets(prev => prev.map(x => x.id === activeWidget.id ? {...x, aggregation: e.target.value} : x))}
//                 >
//                   <option>Sum</option><option>Average</option><option>Count</option>
//                 </select>
//               </div>
//             </div>

//             <div className="p-4 bg-teal-50 rounded-2xl">
//               <label className="text-[10px] font-black text-teal-600 uppercase tracking-widest mb-4 block text-center">Size & Layout</label>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="text-center">
//                   <p className="text-[9px] font-bold text-teal-400 mb-1">Width</p>
//                   <input type="number" min="1" max="12" className="w-full text-center bg-white p-2 rounded-lg font-bold" value={activeWidget.w} 
//                          onChange={(e) => setPlacedWidgets(prev => prev.map(x => x.id === activeWidget.id ? {...x, w: parseInt(e.target.value)} : x))} />
//                 </div>
//                 <div className="text-center">
//                   <p className="text-[9px] font-bold text-teal-400 mb-1">Height</p>
//                   <input type="number" min="1" max="20" className="w-full text-center bg-white p-2 rounded-lg font-bold" value={activeWidget.h} 
//                          onChange={(e) => setPlacedWidgets(prev => prev.map(x => x.id === activeWidget.id ? {...x, h: parseInt(e.target.value)} : x))} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import DynamicWidget from "../components/DynamicWidget";

export default function DashboardConfigure({ orders = [], setLayout, currentLayout = [] }) {
  const navigate = useNavigate();
  
  // Local state for dragging/editing, initialized from the Database via props
  const [placedWidgets, setPlacedWidgets] = useState(currentLayout);
  const [draggedItem, setDraggedItem] = useState(null);
  const [editingWidgetId, setEditingWidgetId] = useState(null);

  const library = {
    Charts: ["Bar Chart", "Line Chart", "Pie Chart", "Area Chart", "Scatter Plot"],
    Tables: ["Table"],
    KPIs: ["KPI Value"],
    Filters: ["Date Filter"]
  };

  const activeWidget = placedWidgets.find((w) => w.id === editingWidgetId);

  // --- 1. INFINITE GRID CALCULATION ---
  // Calculates rows based on widget positions to ensure the canvas grows
  const totalRows = useMemo(() => {
    const maxRowUsed = placedWidgets.reduce((max, w) => {
      const rowEnd = Math.floor(w.pos / 12) + w.h;
      return Math.max(max, rowEnd);
    }, 0);
    return Math.max(25, maxRowUsed + 10);
  }, [placedWidgets]);

  const gridCells = useMemo(() => Array.from({ length: totalRows * 12 }), [totalRows]);

  // --- 2. DROP LOGIC (Snapping to Grid) ---
  const handleDrop = (index) => {
    if (!draggedItem) return;
    
    const isChart = library.Charts.includes(draggedItem.data);
    const newWidget = {
      id: Date.now(), // Matches Long id in Spring Boot Layout model
      pos: index, 
      name: draggedItem.data, 
      title: draggedItem.data,
      w: isChart ? 6 : 3, // Default 12-column grid widths
      h: isChart ? 8 : 4, 
      metric: "totalAmount", // Matches DB Order field
      aggregation: "Sum"
    };

    setPlacedWidgets(prev => [...prev, newWidget]);
    setEditingWidgetId(newWidget.id);
    setDraggedItem(null);
  };

  // --- 3. BACKEND SAVE TRIGGER ---
  const handleFinalSave = () => {
    // This triggers the handleSetLayout(newLayout) in App.jsx, which calls the API
    setLayout(placedWidgets); 
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-[#F0F1F3] font-sans overflow-hidden">
      {/* LEFT LIBRARY */}
      <div className="w-64 bg-white border-r p-5 shadow-xl z-20 overflow-y-auto">
        <h2 className="font-black text-teal-600 text-xl tracking-tighter mb-2 uppercase">DashCraft</h2>
        <button 
          onClick={() => navigate("/")}
          className="text-[10px] font-bold text-gray-400 uppercase mb-8 hover:text-teal-600 flex items-center gap-1 transition-colors"
        >
          ← Back to View
        </button>
        
        {Object.entries(library).map(([cat, items]) => (
          <div key={cat} className="mb-6">
            <p className="text-[10px] font-black text-gray-400 uppercase mb-3 tracking-widest">{cat}</p>
            <div className="space-y-2">
              {items.map(item => (
                <div 
                  key={item} 
                  draggable 
                  onDragStart={() => setDraggedItem({ data: item })}
                  className="p-3 bg-gray-50 border border-gray-100 rounded-xl cursor-grab active:cursor-grabbing hover:border-teal-500 hover:bg-white hover:shadow-md transition-all text-xs font-semibold flex items-center gap-2 group"
                >
                  <span className="text-gray-300 group-hover:text-teal-500 transition-colors text-lg">⠿</span> {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CENTER CANVAS */}
      <div className="flex-1 p-6 flex flex-col overflow-hidden">
        <div className="flex justify-between items-center mb-4 px-2">
          <div>
            <h1 className="text-xl font-black text-gray-800 uppercase tracking-tight">Configuration Canvas</h1>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">12-Column Desktop Responsive Grid</p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => setPlacedWidgets([])}
              className="px-4 py-2 text-xs font-bold text-red-400 hover:bg-red-50 rounded-lg transition-colors"
            >
              Clear Canvas
            </button>
            <button 
              onClick={handleFinalSave} 
              className="bg-gray-900 text-white px-8 py-2 rounded-xl font-bold shadow-lg hover:bg-teal-600 transition-all active:scale-95"
            >
              Save Dashboard
            </button>
          </div>
        </div>

        {/* THE GRID CONTAINER */}
        <div className="flex-1 bg-gray-200/50 rounded-[2.5rem] p-6 overflow-auto border-4 border-white shadow-inner relative custom-scrollbar">
          <div 
            className="grid grid-cols-12 gap-3 relative"
            style={{ 
                gridTemplateRows: `repeat(${totalRows}, 40px)`,
                minHeight: '100%' 
            }}
          >
            {/* Background Grid Cells (Drop Zones) */}
            {gridCells.map((_, i) => (
              <div 
                key={i} 
                onDragOver={(e) => e.preventDefault()} 
                onDrop={() => handleDrop(i)}
                className="rounded-lg bg-white/10 border border-white/20 h-full w-full hover:bg-white/40 transition-colors" 
              />
            ))}

            {/* Placed Widgets */}
            {placedWidgets.map((w) => (
              <div 
                key={w.id} 
                style={{ 
                  gridColumn: `${(w.pos % 12) + 1} / span ${w.w}`, 
                  gridRow: `${Math.floor(w.pos / 12) + 1} / span ${w.h}`,
                  zIndex: 10
                }}
                className={`group relative bg-white border-2 rounded-2xl p-4 flex flex-col shadow-sm transition-all ${
                  editingWidgetId === w.id ? 'border-teal-500 ring-4 ring-teal-50 shadow-xl' : 'border-transparent hover:border-gray-300'
                }`}
                onClick={(e) => { e.stopPropagation(); setEditingWidgetId(w.id); }}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest truncate pr-4">{w.title}</span>
                  <button 
                    onClick={(e) => { 
                      e.stopPropagation(); 
                      setPlacedWidgets(prev => prev.filter(x => x.id !== w.id));
                      if(editingWidgetId === w.id) setEditingWidgetId(null);
                    }} 
                    className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-opacity"
                  >
                    ✕
                  </button>
                </div>
                
                <div className="flex-1 pointer-events-none opacity-60 overflow-hidden">
                  <DynamicWidget type={w.name} data={orders} settings={w} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SETTINGS PANEL */}
      {activeWidget && (
        <div className="w-80 bg-white border-l p-8 shadow-2xl overflow-y-auto z-30 animate-in slide-in-from-right duration-300">
          <div className="flex justify-between items-center mb-8 pb-4 border-b">
            <div>
                <h3 className="font-black text-gray-800 uppercase tracking-widest text-sm">Settings</h3>
                <p className="text-[10px] text-gray-400 font-bold">{activeWidget.name}</p>
            </div>
            <button onClick={() => setEditingWidgetId(null)} className="text-gray-400 hover:text-black p-2 bg-gray-50 rounded-full">✕</button>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block">Widget Title</label>
              <input 
                className="w-full border-2 border-gray-100 bg-gray-50 p-3 rounded-xl text-sm focus:bg-white focus:border-teal-500 outline-none transition-all" 
                value={activeWidget.title} 
                onChange={(e) => setPlacedWidgets(prev => prev.map(x => x.id === activeWidget.id ? {...x, title: e.target.value} : x))} 
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block">Data Metric</label>
                <select 
                  className="w-full border-2 border-gray-100 bg-gray-50 p-3 rounded-xl text-xs font-bold outline-none" 
                  value={activeWidget.metric}
                  onChange={(e) => setPlacedWidgets(prev => prev.map(x => x.id === activeWidget.id ? {...x, metric: e.target.value} : x))}
                >
                  <option value="totalAmount">Amount ($)</option>
                  <option value="qty">Quantity</option>
                  <option value="unitPrice">Unit Price</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block">Aggregation</label>
                <select 
                  className="w-full border-2 border-gray-100 bg-gray-50 p-3 rounded-xl text-xs font-bold outline-none" 
                  value={activeWidget.aggregation}
                  onChange={(e) => setPlacedWidgets(prev => prev.map(x => x.id === activeWidget.id ? {...x, aggregation: e.target.value} : x))}
                >
                  <option>Sum</option><option>Average</option><option>Count</option>
                </select>
              </div>
            </div>

            <div className="p-6 bg-teal-50 rounded-3xl border border-teal-100">
              <label className="text-[10px] font-black text-teal-600 uppercase tracking-widest mb-4 block text-center">Canvas Dimensions</label>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-[9px] font-black text-teal-400 mb-2 uppercase">Width (Col)</p>
                  <input type="number" min="1" max="12" className="w-full text-center bg-white border-2 border-teal-100 p-2 rounded-xl font-black text-teal-600 shadow-sm" 
                         value={activeWidget.w} 
                         onChange={(e) => setPlacedWidgets(prev => prev.map(x => x.id === activeWidget.id ? {...x, w: parseInt(e.target.value)} : x))} />
                </div>
                <div className="text-center">
                  <p className="text-[9px] font-black text-teal-400 mb-2 uppercase">Height (Row)</p>
                  <input type="number" min="1" max="40" className="w-full text-center bg-white border-2 border-teal-100 p-2 rounded-xl font-black text-teal-600 shadow-sm" 
                         value={activeWidget.h} 
                         onChange={(e) => setPlacedWidgets(prev => prev.map(x => x.id === activeWidget.id ? {...x, h: parseInt(e.target.value)} : x))} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}