import React from "react"



const OrderItem = ({order, index}) => {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{order.order}</td>
            <td>{order.cost_in_dollar}$</td>
            <td>{order.cost_in_rubles}</td>
            <td>{order.delivery_date}</td>
        </tr>
    )
    
}


export default OrderItem;