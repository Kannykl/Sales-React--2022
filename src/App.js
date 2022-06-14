import axios from "axios";
import React, { useEffect, useState } from "react"
import TableItem from "./components/TableItem";
import GraphicItem from "./components/GraphicItem";
import './styles/App.css'


function App() {

  const  [orders, setOrders ] = useState([])

  async function fetchOrders(){
    await axios.post("http://127.0.0.1:80/api/v1/refresh_sales/")
    const response = await axios.get("http://127.0.0.1:80/api/v1/get_sales/")
    setOrders(response.data)
  }

  useEffect(() => {
    fetchOrders()
  }, [])


  return (
    <div className="App">
      <TableItem orders={orders}/>
      <GraphicItem orders={orders} />
    </div>
  );
}

export default App;
