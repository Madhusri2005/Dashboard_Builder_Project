
import { useEffect, useState } from "react"
import OrderTable from "../components/order/OrderTable"
import CreateOrderDialog from "../components/order/CreateOrderDialog"
import { getOrders, createOrder } from "./services/api" // Verify this path is correct

function CustomerOrders() {
  const [orders, setOrders] = useState([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    loadOrders()
  }, [])

  const loadOrders = async () => {
    try {
      const data = await getOrders()
      setOrders(data)
    } catch (error) {
      console.error("Failed to load orders:", error);
    }
  }

  const handleCreate = async (order) => {
    // DEBUG: Check if 'order' contains 'productName' here
    console.log("New Order Data being sent:", order);

    try {
      await createOrder(order)
      setOpen(false) // Close the dialog after success
      loadOrders()   // Refresh the list
    } catch (error) {
      console.error("Failed to create order:", error);
    }
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-black text-gray-800 uppercase tracking-tight">
              Customer Orders
            </h1>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
              Manage real-time order data
            </p>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-xl font-bold shadow-lg transition-all active:scale-95 flex items-center gap-2"
          >
            <span className="text-lg">+</span> Create Order
          </button>
        </div>

        <CreateOrderDialog
          isOpen={open}
          onClose={() => setOpen(false)}
          onSubmit={handleCreate}
        />

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <OrderTable orders={orders} />
        </div>
      </div>
    </div>
  )
}

export default CustomerOrders