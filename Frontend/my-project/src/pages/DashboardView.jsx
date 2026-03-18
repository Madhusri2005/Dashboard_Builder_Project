// // // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // export default function DashboardView({ layout, orders }) {
// // // // // // //   const navigate = useNavigate();

// // // // // // //   // Check if we have any widgets to display
// // // // // // //   const hasConfig = layout && layout.length > 0;

// // // // // // //   return (
// // // // // // //     <div className="p-8 min-h-screen bg-gray-50 font-sans">
// // // // // // //       {/* Header Section */}
// // // // // // //       <div className="mb-6 flex justify-between items-center">
// // // // // // //         <div>
// // // // // // //           <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
// // // // // // //           <p className="text-gray-500 text-sm">Real-time data updates from Customer Orders</p>
// // // // // // //         </div>
        
// // // // // // //         {/* Reconfigure button visible if layout exists */}
// // // // // // //         {hasConfig && (
// // // // // // //           <button
// // // // // // //             onClick={() => navigate("/configure")}
// // // // // // //             className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors"
// // // // // // //           >
// // // // // // //             Edit Configuration
// // // // // // //           </button>
// // // // // // //         )}
// // // // // // //       </div>

// // // // // // //       {/* Navigation Tabs */}
// // // // // // //       <div className="flex gap-8 border-b border-gray-200 mb-8 bg-white px-4 pt-4 rounded-t-lg">
// // // // // // //         <button className="text-emerald-600 border-b-2 border-emerald-600 pb-2 font-medium">Dashboard</button>
// // // // // // //         <button onClick={() => navigate("/table")} className="text-gray-400 pb-2 hover:text-gray-600">Table</button>
// // // // // // //       </div>

// // // // // // //       {/* Conditional Rendering */}
// // // // // // //       {!hasConfig ? (
// // // // // // //         // EMPTY STATE (Required: By default, no widgets are configured)
// // // // // // //         <div className="flex flex-col items-center justify-center py-32 bg-white rounded-xl border border-dashed border-gray-300">
// // // // // // //           <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-4 border border-gray-100">
// // // // // // //             <span className="text-3xl">📊</span>
// // // // // // //           </div>
// // // // // // //           <h2 className="text-lg font-semibold text-gray-800">Dashboard Not Configured</h2>
// // // // // // //           <p className="text-gray-500 mb-6 text-center max-w-xs">
// // // // // // //             Your dashboard is currently empty. Click the button below to start building.
// // // // // // //           </p>
// // // // // // //           <button
// // // // // // //             onClick={() => navigate("/configure")}
// // // // // // //             className="flex items-center gap-2 border border-emerald-500 text-emerald-600 px-5 py-2 rounded-lg hover:bg-emerald-50 transition-colors"
// // // // // // //           >
// // // // // // //             <span>⚙️</span> Configure dashboard
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       ) : (
// // // // // // //         // ACTUAL DASHBOARD CANVAS (Required: 12-column Desktop Grid)
// // // // // // //         <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 auto-rows-min">
// // // // // // //           {layout.map((widget) => (
// // // // // // //             <div
// // // // // // //               key={widget.id}
// // // // // // //               style={{
// // // // // // //                 gridColumn: `span ${widget.width}`,
// // // // // // //                 gridRow: `span ${widget.height}`,
// // // // // // //               }}
// // // // // // //               className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 overflow-hidden"
// // // // // // //             >
// // // // // // //               <h3 className="font-bold text-gray-700 mb-2 border-b pb-1">
// // // // // // //                 {widget.title || "Untitled Widget"}
// // // // // // //               </h3>
              
// // // // // // //               {/* Widget Content placeholder - logic based on widget.type */}
// // // // // // //               <div className="flex items-center justify-center h-full min-h-[100px]">
// // // // // // //                 {widget.type === "KPI" && <p className="text-2xl font-bold">Data Point</p>}
// // // // // // //                 {widget.type !== "KPI" && <p className="text-gray-400 italic">Chart Rendering...</p>}
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }
// // // // // // export default function DashboardView({ layout, orders }) {
// // // // // //   if (layout.length === 0) {
// // // // // //     return (
// // // // // //       <div className="flex flex-col items-center justify-center h-[80vh] text-gray-400">
// // // // // //         <p className="text-xl font-medium">Dashboard is empty</p>
// // // // // //         <p className="text-sm">Go to "Edit Layout" to add widgets</p>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="p-8">
// // // // // //       {/* Tailwind Responsive Grid:
// // // // // //          grid-cols-4 (Mobile)
// // // // // //          md:grid-cols-8 (Tablet)
// // // // // //          lg:grid-cols-12 (Desktop)
// // // // // //       */}
// // // // // //       <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6 auto-rows-min">
// // // // // //         {layout.map((w) => (
// // // // // //           <div 
// // // // // //             key={w.id}
// // // // // //             style={{ 
// // // // // //               gridColumn: `span ${w.w}`, 
// // // // // //               gridRow: `span ${w.h}` 
// // // // // //             }}
// // // // // //             className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col min-h-[150px]"
// // // // // //           >
// // // // // //             <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">{w.title}</h3>
// // // // // //             <div className="flex-1 flex items-center justify-center font-bold text-teal-600">
// // // // // //               {/* This is where you would call your chart rendering functions */}
// // // // // //               {w.name} Preview
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }
// // // // // import WidgetRenderer from "../components/WidgetRenderer";

// // // // // export default function DashboardView({ layout, orders }) {
// // // // //   return (
// // // // //     <div className="p-8">
// // // // //       <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6 auto-rows-min">
// // // // //         {layout.map((w) => (
// // // // //           <div key={w.id} style={{ gridColumn: `span ${w.w}`, gridRow: `span ${w.h}` }} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
// // // // //             <h3 className="text-[10px] font-black text-gray-400 uppercase mb-4">{w.title}</h3>
// // // // //             <WidgetRenderer widget={w} orders={orders} />
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // import DynamicWidget from "../components/DynamicWidget";

// // // // export default function DashboardView({ layout = [], orders = [] }) {
// // // //   if (layout.length === 0) {
// // // //     return (
// // // //       <div className="h-[80vh] flex flex-col items-center justify-center text-center">
        
// // // //         <h2 className="text-xl font-black text-gray-800">Your Dashboard is Empty</h2>
// // // //         <p className="text-gray-400 text-sm mb-6">Go to 'Edit Layout' to drag and drop your first widget.</p>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="p-8">
// // // //       {/* 12-Column Responsive Grid */}
// // // //       <div className="grid grid-cols-12 auto-rows-[40px] gap-6">
// // // //         {layout.map((w) => (
// // // //           <div 
// // // //             key={w.id}
// // // //             style={{ 
// // // //               gridColumn: `span ${w.w}`, 
// // // //               gridRow: `span ${w.h}` 
// // // //             }}
// // // //             className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 flex flex-col"
// // // //           >
// // // //             <div className="flex justify-between items-center mb-4">
// // // //               <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{w.title}</h3>
// // // //               <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></div>
// // // //             </div>
// // // //             <div className="flex-1 min-h-0">
// // // //               <DynamicWidget type={w.name} data={orders} settings={w} />
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }
// // // import DynamicWidget from "../components/DynamicWidget";
// // // import { useNavigate } from "react-router-dom";

// // // export default function DashboardView({ layout = [], orders = [] }) {
// // //   const navigate = useNavigate();

// // //   // --- 1. EMPTY STATE ---
// // //   // If the backend returns an empty array, show the call-to-action
// // //   if (!layout || layout.length === 0) {
// // //     return (
// // //       <div className="h-[80vh] flex flex-col items-center justify-center text-center px-6">
// // //         <div className="w-20 h-20 bg-gray-100 rounded-[2rem] flex items-center justify-center mb-6 border border-gray-200 shadow-inner">
// // //            <span className="text-3xl">🏗️</span>
// // //         </div>
// // //         <h2 className="text-2xl font-black text-gray-800 uppercase tracking-tighter">Dashboard Not Configured</h2>
// // //         <p className="text-gray-400 text-sm mb-8 max-w-xs font-medium">
// // //           Your saved configuration is empty. Head to the editor to design your layout.
// // //         </p>
// // //         <button 
// // //           onClick={() => navigate("/configure")}
// // //           className="bg-gray-900 text-white px-8 py-3 rounded-2xl font-bold hover:bg-teal-600 transition-all shadow-xl shadow-gray-200 active:scale-95 flex items-center gap-2"
// // //         >
// // //           <span>⚙️</span> Go to Configuration
// // //         </button>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="p-4 md:p-8 bg-[#F0F1F3] min-h-screen">
// // //       <div className="max-w-[1600px] mx-auto">
// // //         <header className="mb-8 flex justify-between items-end">
// // //           <div>
// // //             <h1 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">Operational Overview</h1>
// // //             <p className="text-[10px] font-black text-teal-600 uppercase tracking-[0.2em] mt-1">
// // //               Live Backend Data Sync
// // //             </p>
// // //           </div>
// // //           <div className="text-right hidden md:block">
// // //             <p className="text-[10px] font-bold text-gray-400 uppercase">Total Orders In DB</p>
// // //             <p className="text-lg font-black text-gray-800">{orders.length}</p>
// // //           </div>
// // //         </header>

// // //         {/* --- 2. RESPONSIVE GRID SYSTEM ---
// // //             Mobile: grid-cols-4 
// // //             Tablet: md:grid-cols-8
// // //             Desktop: lg:grid-cols-12
// // //         */}
// // //         <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 auto-rows-[45px] gap-6">
// // //           {layout.map((w) => (
// // //             <div 
// // //               key={w.id}
// // //               style={{ 
// // //                 // The span values are saved in your Spring Boot DB
// // //                 gridColumn: `span ${w.w}`, 
// // //                 gridRow: `span ${w.h}` 
// // //               }}
// // //               className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-gray-100 flex flex-col hover:shadow-xl transition-all duration-500 group"
// // //             >
// // //               {/* Widget Header */}
// // //               <div className="flex justify-between items-center mb-4">
// // //                 <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest group-hover:text-teal-600 transition-colors">
// // //                   {w.title}
// // //                 </h3>
// // //                 <div className="w-2 h-2 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.5)] animate-pulse"></div>
// // //               </div>

// // //               {/* --- 3. WIDGET RENDERING --- */}
// // //               <div className="flex-1 min-h-0">
// // //                 <DynamicWidget 
// // //                   type={w.name} 
// // //                   data={orders} 
// // //                   settings={w} 
// // //                 />
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // import DynamicWidget from "../components/DynamicWidget";

// // export default function DashboardView({ layout = [], orders = [] }) {
// //   if (!layout || layout.length === 0) {
// //     return <div className="p-20 text-center text-gray-400">Dashboard is empty.</div>;
// //   }

// //   return (
// //     <div className="p-8 bg-[#F0F1F3] min-h-screen">
// //       {/* 12-Column Grid matching Desktop requirement */}
// //       <div className="grid grid-cols-12 gap-6 auto-rows-[100px] max-w-[1600px] mx-auto">
// //         {layout.map((w) => (
// //           <div 
// //             key={w.id || w.i}
// //             className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 flex flex-col overflow-hidden"
// //             style={{ 
// //               // We use grid-column and grid-row spans from your saved DB layout
// //               gridColumn: `span ${w.w || 4}`, 
// //               gridRow: `span ${w.h || 2}` 
// //             }}
// //           >
// //             <div className="flex justify-between items-center mb-4">
// //               <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest truncate">
// //                 {w.title || "Untitled"}
// //               </h3>
// //               <div className="w-2 h-2 rounded-full bg-teal-500"></div>
// //             </div>
            
// //             <div className="flex-1 min-h-0 relative">
// //               <DynamicWidget type={w.name || w.type} data={orders} settings={w} />
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// import DynamicWidget from "../components/DynamicWidget";

// export default function DashboardView({ layout = [], orders = [] }) {
//   return (
//     <div className="p-8 bg-[#F0F1F3] min-h-screen">
//       {/* FIX 1: Strict 12-column grid with a fixed row height. 
//          This must match the 'rowHeight' you used in the Configuration Canvas.
//       */}
//       <div className="grid grid-cols-12 gap-6 auto-rows-[120px] max-w-[1600px] mx-auto">
//         {layout.map((w) => (
//           <div 
//             key={w.id}
//             className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 flex flex-col overflow-hidden"
//             style={{ 
//               // FIX 2: Explicitly use the 'w' (width) and 'h' (height) from your DB
//               gridColumn: `span ${w.w || 4}`, 
//               gridRow: `span ${w.h || 2}` 
//             }}
//           >
//             <div className="flex justify-between items-center mb-4 border-b border-gray-50 pb-2">
//               <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest truncate">
//                 {w.title || w.name}
//               </h3>
//               <div className="w-2 h-2 rounded-full bg-teal-500 shadow-sm"></div>
//             </div>
            
//             <div className="flex-1 min-h-0 relative">
//               <DynamicWidget type={w.name} data={orders} settings={w} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import DynamicWidget from "../components/DynamicWidget";

export default function DashboardView({ layout = [], orders = [] }) {
  if (!layout || layout.length === 0) {
    return <div className="p-20 text-center text-gray-400 font-bold uppercase">No Widgets Configured</div>;
  }

  return (
    <div className="p-8 bg-[#F0F1F3] min-h-screen">
      {/* STRICT GRID CONFIGURATION:
          1. grid-cols-12: Matches your 12-column requirement.
          2. auto-rows-[100px]: Matches the rowHeight in your Configure Canvas.
          3. gap-5: Matches the margin [20, 20] in your React-Grid-Layout.
      */}
      <div className="grid grid-cols-12 gap-5 auto-rows-[100px] max-w-[1600px] mx-auto">
        {layout.map((w) => (
          <div 
            key={w.id || w.i}
            className="bg-white rounded-[1.5rem] p-5 shadow-sm border border-gray-100 flex flex-col overflow-hidden"
            style={{ 
              // We use the coordinates saved in your Spring Boot Backend
              gridColumn: `span ${w.w || 4}`, 
              gridRow: `span ${w.h || 2}` 
            }}
          >
            {/* Neat Header matching your reference image */}
            <div className="flex justify-between items-center mb-4 border-b border-gray-50 pb-2">
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest truncate">
                {w.title || "Untitled"}
              </h3>
              <div className="w-2 h-2 rounded-full bg-teal-500"></div>
            </div>
            
            <div className="flex-1 min-h-0 relative">
              <DynamicWidget type={w.name} data={orders} settings={w} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}