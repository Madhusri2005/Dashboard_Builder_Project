
import DynamicWidget from "../components/DynamicWidget";

export default function DashboardView({ layout = [], orders = [] }) {
  if (!layout || layout.length === 0) {
    return <div className="p-20 text-center text-gray-400 font-bold uppercase">No Widgets Configured</div>;
  }

  return (
    <div className="p-8 bg-[#F0F1F3] min-h-screen">
      
      <div className="grid grid-cols-12 gap-5 auto-rows-[100px] max-w-[1600px] mx-auto">
        {layout.map((w) => (
          <div 
            key={w.id || w.i}
            className="bg-white rounded-[1.5rem] p-5 shadow-sm border border-gray-100 flex flex-col overflow-hidden"
            style={{ 
           
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