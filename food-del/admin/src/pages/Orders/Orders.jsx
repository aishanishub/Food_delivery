import React from 'react'
import './Orders.css'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { assets } from '../../assets/assets'


const Orders = () => {

  const url = "http://localhost:4000"

  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async()=>
  {
     const response = await axios.get(url + "/api/orders")
     if (response.data.success)
     {
      setOrders(response.data.data);
      console.log(response.data.data)
     }
     else{
      toast.error("Error")
     }
  }

  useEffect(()=>
  {
    fetchAllOrders();
  })


  return (
   <div className="order add">
    <h3>Order Page</h3>
    <div className="order-list">
      {orders.map(()=>{
        <div key={index} className="order-item">
          <img src={assets.parcel_icon} alt="" />
          <div>
            <p className="order-item-food">
              {orders.items.map((item,index)=>
              {
                if(index===orders.items.length-1)
                {
                  return item.name+ "x" + item.quantity
                }
                else
                {
                  return item.name+ "x" + item.quantity + ", "
                }
              })}
            </p>
            <p className="order-item-name">
              {order.address.firstName + " " + order.address.lastName}
            </p>
            <p className="order-item-phone">{order.address.phone}</p>
          </div>
          <select>
            <option value="Food Processing">Food Processing</option>
            <option value="Out for Delivery">Out For Delivery</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      })}
    </div>
   </div>
  )
}

export default Orders