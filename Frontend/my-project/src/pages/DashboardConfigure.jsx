
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import DynamicWidget from "../components/DynamicWidget";

export default function DashboardConfigure({ orders = [], setLayout, currentLayout = [] }) {
  const navigate = useNavigate();

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

  const totalRows = useMemo(() => {
    const maxRowUsed = placedWidgets.reduce((max, w) => {
      const rowEnd = Math.floor(w.pos / 12) + w.h;
      return Math.max(max, rowEnd);
    }, 0);
    return Math.max(25, maxRowUsed + 10);
  }, [placedWidgets]);

  const gridCells = useMemo(() => Array.from({ length: totalRows * 12 }), [totalRows]);

  const handleDrop = (index) => {
    if (!draggedItem) return;
    
    const isChart = library.Charts.includes(draggedItem.data);
    const newWidget = {
      id: Date.now(), 
      pos: index, 
      name: draggedItem.data, 
      title: draggedItem.data,
      w: isChart ? 6 : 3, 
      h: isChart ? 8 : 4, 
      metric: "totalAmount",
      aggregation: "Sum"
    };

    setPlacedWidgets(prev => [...prev, newWidget]);
    setEditingWidgetId(newWidget.id);
    setDraggedItem(null);
  };

 
  const handleFinalSave = () => {
   
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