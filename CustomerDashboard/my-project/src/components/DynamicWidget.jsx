// // // // src/components/DynamicWidget.jsx
// // // import React from 'react';

// // // export default function DynamicWidget({ type, data = [], settings = {} }) {
// // //   if (!data || data.length === 0) {
// // //     return <div className="flex items-center justify-center h-full text-[10px] text-gray-400 italic">No order data yet</div>;
// // //   }

// // //   // Aggregate data by product for charts
// // //   const productData = data.reduce((acc, curr) => {
// // //     acc[curr.product] = (acc[curr.product] || 0) + Number(curr.totalAmount);
// // //     return acc;
// // //   }, {});
// // //   const chartItems = Object.entries(productData).map(([name, val]) => ({ name, val }));
// // //   const maxVal = Math.max(...chartItems.map(i => i.val), 1);

// // //   switch (type) {
// // //     case "KPI Value":
// // //       const total = data.reduce((acc, curr) => acc + (Number(curr.totalAmount) || 0), 0);
// // //       return (
// // //         <div className="flex flex-col items-center justify-center h-full">
// // //           <span className="text-2xl font-black text-teal-600">${total.toLocaleString()}</span>
// // //           <p className="text-[8px] text-gray-400 font-bold uppercase">Total Revenue</p>
// // //         </div>
// // //       );

// // //     case "Bar Chart":
// // //       return (
// // //         <div className="flex items-end justify-between h-full w-full gap-1 pt-4">
// // //           {chartItems.map((item, i) => (
// // //             <div key={i} className="group relative flex-1">
// // //               <div 
// // //                 className="bg-teal-500 rounded-t-sm transition-all duration-500" 
// // //                 style={{ height: `${(item.val / maxVal) * 80}%` }}
// // //               />
// // //               <span className="hidden group-hover:block absolute -top-6 left-0 bg-gray-800 text-white text-[8px] p-1 rounded">
// // //                 {item.name}
// // //               </span>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       );

// // //     case "Table":
// // //       return (
// // //         <div className="h-full overflow-auto">
// // //           <table className="w-full text-[10px]">
// // //             <tbody className="divide-y divide-gray-100">
// // //               {data.slice(0, 5).map((o, i) => (
// // //                 <tr key={i}>
// // //                   <td className="py-1 text-gray-600">{o.product}</td>
// // //                   <td className="py-1 text-right font-bold text-teal-600">${o.totalAmount}</td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //       );
// // // //
// // //     default:
// // //       return <div className="text-gray-300 text-[10px]">Preview for {type}</div>;
// // //   }
// // // }
// // import React from 'react';

// // export default function DynamicWidget({ type, data = [], settings = {} }) {
// //   // If no data, show a friendly placeholder
// //   if (!data || data.length === 0) {
// //     return (
// //       <div className="flex flex-col items-center justify-center h-full text-center p-4">
// //         <div className="text-2xl mb-2 opacity-20">📊</div>
// //         <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">No Order Data</p>
// //       </div>
// //     );
// //   }

// //   // --- DATA PROCESSING ---
// //   // Grouping data by product for the charts
// //   const productGroup = data.reduce((acc, curr) => {
// //     acc[curr.product] = (acc[curr.product] || 0) + Number(curr.totalAmount);
// //     return acc;
// //   }, {});
  
// //   const chartItems = Object.entries(productGroup).map(([name, val]) => ({ name, val }));
// //   const maxVal = Math.max(...chartItems.map(i => i.val), 1);

// //   // --- CHART RENDERERS ---
// //   switch (type) {
// //     case "KPI Value":
// //       const totalRevenue = data.reduce((acc, curr) => acc + (Number(curr.totalAmount) || 0), 0);
// //       return (
// //         <div className="flex flex-col items-center justify-center h-full">
// //           <span className="text-2xl font-black text-teal-600">${totalRevenue.toLocaleString()}</span>
// //           <p className="text-[8px] text-gray-400 font-bold uppercase tracking-tighter">Total Revenue</p>
// //         </div>
// //       );

// //     case "Bar Chart":
// //       return (
// //         <div className="flex items-end justify-between h-full w-full gap-1 pt-6">
// //           {chartItems.map((item, i) => (
// //             <div key={i} className="bg-teal-500 rounded-t-sm flex-1 transition-all hover:bg-teal-400" 
// //                  style={{ height: `${(item.val / maxVal) * 90}%` }} title={item.name} />
// //           ))}
// //         </div>
// //       );

// //     case "Line Chart":
// //     case "Area Chart":
// //       const points = chartItems.map((item, i) => {
// //         const x = (i / (chartItems.length - 1 || 1)) * 100;
// //         const y = 100 - (item.val / maxVal) * 80;
// //         return `${x},${y}`;
// //       }).join(" ");

// //       return (
// //         <div className="h-full w-full pt-4">
// //           <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
// //             {type === "Area Chart" && (
// //               <polyline fill="rgba(20, 184, 166, 0.2)" points={`0,100 ${points} 100,100`} />
// //             )}
// //             <polyline 
// //               fill="none" 
// //               stroke="#14b8a6" 
// //               strokeWidth="4" 
// //               strokeLinecap="round" 
// //               strokeLinejoin="round" 
// //               points={points} 
// //             />
// //             {chartItems.map((item, i) => (
// //               <circle key={i} cx={(i / (chartItems.length - 1 || 1)) * 100} cy={100 - (item.val / maxVal) * 80} r="3" fill="#14b8a6" />
// //             ))}
// //           </svg>
// //         </div>
// //       );

// //     case "Pie Chart":
// //       let cumulativePercent = 0;
// //       const totalVal = chartItems.reduce((a, b) => a + b.val, 0);
      
// //       return (
// //         <div className="flex items-center justify-center h-full">
// //           <svg viewBox="-1 -1 2 2" className="w-4/5 h-4/5 -rotate-90">
// //             {chartItems.map((item, i) => {
// //               const [startX, startY] = [Math.cos(2 * Math.PI * cumulativePercent), Math.sin(2 * Math.PI * cumulativePercent)];
// //               cumulativePercent += item.val / totalVal;
// //               const [endX, endY] = [Math.cos(2 * Math.PI * cumulativePercent), Math.sin(2 * Math.PI * cumulativePercent)];
// //               const largeArcFlag = item.val / totalVal > 0.5 ? 1 : 0;
// //               const pathData = `M 0 0 L ${startX} ${startY} A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;
// //               const opacity = 1 - (i * 0.2);
// //               return <path key={i} d={pathData} fill={`rgba(20, 184, 166, ${opacity})`} stroke="white" strokeWidth="0.02" />;
// //             })}
// //           </svg>
// //         </div>
// //       );

// //     case "Table":
// //       return (
// //         <div className="h-full overflow-hidden pt-2">
// //           <table className="w-full text-[9px] text-left">
// //             <thead>
// //               <tr className="text-gray-400 border-b border-gray-50 font-bold uppercase">
// //                 <th className="pb-1">Item</th>
// //                 <th className="pb-1 text-right">Total</th>
// //               </tr>
// //             </thead>
// //             <tbody className="divide-y divide-gray-50">
// //               {chartItems.slice(0, 4).map((item, i) => (
// //                 <tr key={i}>
// //                   <td className="py-1 text-gray-600 truncate max-w-[60px]">{item.name}</td>
// //                   <td className="py-1 text-right font-bold text-teal-600">${item.val}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       );

// //     case "Scatter Plot":
// //       return (
// //         <div className="h-full w-full border-l border-b border-gray-100 relative mt-2">
// //           {data.map((o, i) => (
// //             <div 
// //               key={i} 
// //               className="absolute w-2 h-2 bg-teal-500 rounded-full opacity-50"
// //               style={{ 
// //                 left: `${(o.qty / 20) * 90}%`, 
// //                 bottom: `${(o.unitPrice / 2000) * 90}%` 
// //               }} 
// //             />
// //           ))}
// //         </div>
// //       );

// //     default:
// //       return <div className="text-[10px] text-gray-400 uppercase font-bold text-center pt-8">Widget Ready</div>;
// //   }
// // }
// // src/components/DynamicWidget.jsx
// import React from 'react';
// import { 
//   BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
//   PieChart, Pie, Cell, Legend,
//   LineChart, Line, AreaChart, Area,
//   ScatterChart, Scatter
// } from 'recharts';

// const COLORS = ['#52c41a', '#faad14', '#ff4d4f', '#1890ff', '#722ed1'];

// export default function DynamicWidget({ type, data = [], settings = {} }) {
//   if (!data || data.length === 0) {
//     return <div className="flex items-center justify-center h-full text-gray-400 text-xs italic">No data available</div>;
//   }

//   // Data Preparation
//   const productData = Object.entries(
//     data.reduce((acc, curr) => {
//       acc[curr.product] = (acc[curr.product] || 0) + Number(curr.totalAmount);
//       return acc;
//     }, {})
//   ).map(([name, value]) => ({ name, value }));

//   const statusData = Object.entries(
//     data.reduce((acc, curr) => {
//       acc[curr.status] = (acc[curr.status] || 0) + 1;
//       return acc;
//     }, {})
//   ).map(([name, value]) => ({ name, value }));

//   switch (type) {
//     case "Bar Chart":
//       return (
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart data={productData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
//             <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
//             <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#999'}} />
//             <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#999'}} />
//             <Tooltip cursor={{fill: '#f5f5f5'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}} />
//             <Bar dataKey="value" fill="#52c41a" radius={[4, 4, 0, 0]} barSize={40} />
//           </BarChart>
//         </ResponsiveContainer>
//       );

//     case "Pie Chart":
//       return (
//         <ResponsiveContainer width="100%" height="100%">
//           <PieChart>
//             <Pie data={statusData} innerRadius="60%" outerRadius="80%" paddingAngle={5} dataKey="value">
//               {statusData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip />
//             <Legend verticalAlign="middle" align="right" layout="vertical" iconType="rect" wrapperStyle={{fontSize: '12px', paddingLeft: '20px'}} />
//           </PieChart>
//         </ResponsiveContainer>
//       );

//     case "Table":
//       return (
//         <div className="w-full h-full overflow-auto">
//           <table className="w-full text-left text-xs border-collapse">
//             <thead>
//               <tr className="bg-gray-50 text-gray-500 font-bold uppercase text-[10px]">
//                 <th className="p-3 border-b">Order ID</th>
//                 <th className="p-3 border-b">Quantity</th>
//                 <th className="p-3 border-b">Product</th>
//                 <th className="p-3 border-b text-right">Total Amount</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-100">
//               {data.map((o, i) => (
//                 <tr key={i} className="hover:bg-gray-50 transition-colors">
//                   <td className="p-3 text-gray-600 font-medium">{o.id}</td>
//                   <td className="p-3 text-gray-500">{o.qty}</td>
//                   <td className="p-3 text-gray-700 font-semibold">{o.product}</td>
//                   <td className="p-3 text-right font-bold text-gray-900">${o.totalAmount}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           {data.length === 0 && <div className="p-10 text-center text-gray-400">No data</div>}
//         </div>
//       );

//     case "KPI Value":
//       const metric = settings.metric || "totalAmount";
//       const total = data.reduce((acc, curr) => acc + (Number(curr[metric]) || 0), 0);
//       return (
//         <div className="h-full flex flex-col justify-center">
//           <span className="text-2xl font-bold text-gray-800">
//             {settings.format === "Currency" ? `$ ${total.toLocaleString()}` : total}
//           </span>
//         </div>
//       );
//     // src/components/DynamicWidget.jsx (Updated Cases)

//     case "Line Chart":
//       return (
//         <div className="h-full w-full min-h-[180px]"> 
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={productData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
//               <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
//               <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10}} />
//               <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10}} />
//               <Tooltip />
//               <Line type="monotone" dataKey="value" stroke="#14b8a6" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       );

//     case "Area Chart":
//       return (
//         <div className="h-full w-full min-h-[180px]">
//           <ResponsiveContainer width="100%" height="100%">
//             <AreaChart data={productData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
//               <defs>
//                 <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3}/>
//                   <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
//                 </linearGradient>
//               </defs>
//               <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
//               <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10}} />
//               <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10}} />
//               <Tooltip />
//               <Area type="monotone" dataKey="value" stroke="#14b8a6" fillOpacity={1} fill="url(#colorVal)" />
//             </AreaChart>
//           </ResponsiveContainer>
//         </div>
//       );

//     case "Scatter Plot":
//       // For scatter, we use the raw order data to show relationship between Qty and Price
//       const scatterPoints = data.map(o => ({ x: o.qty, y: o.totalAmount, name: o.product }));
//       return (
//         <div className="h-full w-full min-h-[180px]">
//           <ResponsiveContainer width="100%" height="100%">
//             <ScatterChart margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//               <XAxis type="number" dataKey="x" name="Quantity" unit="qty" axisLine={false} tick={{fontSize: 10}} />
//               <YAxis type="number" dataKey="y" name="Amount" unit="$" axisLine={false} tick={{fontSize: 10}} />
//               <Tooltip cursor={{ strokeDasharray: '3 3' }} />
//               <Scatter name="Orders" data={scatterPoints} fill="#14b8a6" />
//             </ScatterChart>
//           </ResponsiveContainer>
//         </div>
//       );

//     default:
//       return <div className="text-gray-400 text-xs">Widget: {type}</div>;
//   }
// }
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
  LineChart, Line, AreaChart, Area,
  ScatterChart, Scatter
} from 'recharts';

const COLORS = ['#14b8a6', '#0f766e', '#5eead4', '#2dd4bf', '#115e59'];

export default function DynamicWidget({ type, data = [], settings = {} }) {
  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-300">
        <span className="text-xl mb-1">📉</span>
        <p className="text-[10px] font-bold uppercase tracking-widest">Waiting for data</p>
      </div>
    );
  }

  // --- DATA PREPARATION ---
  // Grouping by Product for Category Charts
 // --- DATA PREPARATION ---
  // Updated to check for productName to match your Backend Entity
  const productData = Object.entries(
    data.reduce((acc, curr) => {
      // We look for productName first, then fallback to product
      const key = curr.productName || curr.product || "Unknown"; 
      const val = Number(curr.totalAmount) || 0;
      acc[key] = (acc[key] || 0) + val;
      return acc;
    }, {})
  ).map(([name, value]) => ({ name, value }));

  // Grouping by Status for Pie Charts
  const statusData = Object.entries(
    data.reduce((acc, curr) => {
      acc[curr.status || 'Pending'] = (acc[curr.status || 'Pending'] || 0) + 1;
      return acc;
    }, {})
  ).map(([name, value]) => ({ name, value }));

  switch (type) {
    case "Bar Chart":
      return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={productData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 700, fill: '#94a3b8'}} />
            <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} />
            <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}} />
            <Bar dataKey="value" fill="#14b8a6" radius={[6, 6, 0, 0]} barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      );

    case "Pie Chart":
      return (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={statusData} innerRadius="65%" outerRadius="90%" paddingAngle={8} dataKey="value">
              {statusData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" align="center" iconType="circle" wrapperStyle={{fontSize: '10px', fontWeight: 'bold', paddingTop: '10px'}} />
          </PieChart>
        </ResponsiveContainer>
      );

    case "Line Chart":
      return (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={productData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 700, fill: '#94a3b8'}} />
            <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#14b8a6" strokeWidth={4} dot={{ r: 4, fill: '#14b8a6', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      );

    case "Area Chart":
      return (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={productData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 700, fill: '#94a3b8'}} />
            <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#14b8a6" strokeWidth={3} fillOpacity={1} fill="url(#colorVal)" />
          </AreaChart>
        </ResponsiveContainer>
      );

    case "KPI Value":
      const metric = settings.metric || "totalAmount";
      const total = data.reduce((acc, curr) => acc + (Number(curr[metric]) || 0), 0);
      return (
        <div className="h-full flex flex-col justify-center items-center">
          <span className="text-3xl font-black text-gray-900 tracking-tighter">
            {settings.format === "Currency" ? `$${total.toLocaleString()}` : total.toLocaleString()}
          </span>
          <p className="text-[10px] font-black text-teal-500 uppercase tracking-widest mt-1">
            {settings.aggregation || 'Total'} {settings.metric || 'Revenue'}
          </p>
        </div>
      );
    case "Table":
  return (
    <div className="w-full h-full overflow-auto custom-scrollbar">
      <table className="w-full text-left text-[11px]">
        <thead>
          <tr className="text-gray-400 font-bold uppercase border-b border-gray-100 sticky top-0 bg-white">
            <th className="pb-2">Order</th>
            <th className="pb-2">Product</th> 
            <th className="pb-2 text-right">Amount</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {data.map((o, i) => (
            <tr key={i} className="hover:bg-gray-50 transition-colors">
              <td className="py-2 font-bold text-gray-700">{o.id || o.orderId}</td>
              
              {/* This line checks for 'product', then 'productName', then 'item' */}
              <td className="py-2 text-gray-500">
                {o.productName || o.product_name || o.item || "Value Missing in DB"}
              </td>
              
              <td className="py-2 text-right font-black text-teal-600">
                ${o.totalAmount || o.amount || 0}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ); 

    default:
      return (
        <div className="flex items-center justify-center h-full text-gray-300 text-[10px] font-bold uppercase italic">
          {type} Ready
        </div>
      );
  }
}