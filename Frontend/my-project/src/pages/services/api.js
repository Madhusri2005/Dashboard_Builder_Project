// // Fake API using localStorage

// export const getOrders = async () => {

//   const orders = JSON.parse(localStorage.getItem("orders")) || []

//   return orders
// }

// export const createOrder = async (order) => {

//   const orders = JSON.parse(localStorage.getItem("orders")) || []

//   const newOrder = {
//     id: Date.now(),
//     ...order
//   }

//   const updated = [...orders, newOrder]

//   localStorage.setItem("orders", JSON.stringify(updated))

//   return newOrder
// }
const BASE_URL = "http://localhost:8081/api";

export const dashboardApi = {
  // Fetch all orders for charts and tables
  getOrders: () => fetch(`${BASE_URL}/orders`).then(res => res.json()),
  
  // Save a new order from the "Create Order" form
  saveOrder: (order) => fetch(`${BASE_URL}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order)
  }).then(res => res.json()),

  // Fetch the saved dashboard layout
  getLayout: () => fetch(`${BASE_URL}/layout`).then(res => res.json()),

  // Save the drag-and-drop layout configuration
  saveLayout: (layout) => fetch(`${BASE_URL}/layout`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(layout)
  })
};
// services/api.js
export const createOrder = async (order) => {
  // Console log this to see if productName is actually here!
  console.log("Sending to Backend:", order); 
  
  const response = await axios.post(`${BASE_URL}/orders`, order);
  return response.data;
};