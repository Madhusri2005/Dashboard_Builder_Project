// export default function SuccessToaster({ message, onClose }) {
//   return (
//     <div className="fixed top-6 right-6 z-[200] animate-in fade-in slide-in-from-top-4 duration-300">
//       <div className="bg-[#ECFDF5] border border-[#10B981] rounded-lg px-4 py-3 shadow-lg flex items-center gap-3">
//         <div className="bg-[#10B981] text-white rounded-full p-1">
//           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
//             <polyline points="20 6 9 17 4 12" />
//           </svg>
//         </div>
//         <p className="text-[#065F46] text-sm font-medium">{message}</p>
//         <button onClick={onClose} className="text-[#065F46] hover:opacity-70 ml-4 font-bold">✕</button>
//       </div>
//     </div>
//   );
// }
import { useEffect } from "react";

export default function SuccessToaster({ message, onClose }) {
  // Auto-close after 3 seconds to save the user a click
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-6 right-6 z-[9999] animate-in fade-in slide-in-from-top-4 duration-300">
      <div className="bg-[#ECFDF5] border border-[#10B981] rounded-lg px-4 py-3 shadow-lg flex items-center gap-3">
        <div className="bg-[#10B981] text-white rounded-full p-1 flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className="text-[#065F46] text-sm font-medium">{message}</p>
        <button 
          onClick={onClose} 
          className="text-[#065F46] hover:opacity-70 ml-4 font-bold p-1"
        >
          ✕
        </button>
      </div>
    </div>
  );
}