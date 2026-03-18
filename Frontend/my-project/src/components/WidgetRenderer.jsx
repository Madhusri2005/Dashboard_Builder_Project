// src/components/WidgetRenderer.jsx
export default function WidgetRenderer({ widget, orders }) {
  if (!orders || orders.length === 0) return <div className="text-gray-300 text-xs text-center">Waiting for order data...</div>;

  const total = orders.reduce((acc, curr) => acc + (Number(curr.totalAmount) || 0), 0);

  switch (widget.name) {
    case "KPI Value":
      return (
        <div className="text-center">
          <p className="text-3xl font-black text-teal-600">${total.toLocaleString()}</p>
          <p className="text-[9px] text-gray-400 uppercase font-bold">Total Revenue</p>
        </div>
      );
    case "Bar Chart":
      const maxVal = Math.max(...orders.map(o => o.totalAmount), 1);
      return (
        <div className="flex items-end justify-around h-24 w-full gap-1">
          {orders.slice(-5).map((o, i) => (
            <div key={i} className="bg-teal-500 w-full rounded-t" style={{ height: `${(o.totalAmount / maxVal) * 100}%` }} />
          ))}
        </div>
      );
    case "Table":
      return (
        <div className="w-full text-[10px]">
          {orders.slice(0, 3).map((o, i) => (
            <div key={i} className="flex justify-between border-b py-1">
              <span>{o.product}</span>
              <span className="font-bold">${o.totalAmount}</span>
            </div>
          ))}
        </div>
      );
    default:
      return <div className="text-xs text-gray-400 italic">Widget: {widget.name}</div>;
  }
}