
const BASE_URL = "http://localhost:8081/api";

export const dashboardApi = {
  
  getOrders: () => fetch(`${BASE_URL}/orders`).then(res => res.json()),

  saveOrder: (order) => fetch(`${BASE_URL}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order)
  }).then(res => res.json()),

  getLayout: () => fetch(`${BASE_URL}/layout`).then(res => res.json()),

  saveLayout: (layout) => fetch(`${BASE_URL}/layout`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(layout)
  })
};

export const createOrder = async (order) => {

  console.log("Sending to Backend:", order); 
  
  const response = await axios.post(`${BASE_URL}/orders`, order);
  return response.data;
};