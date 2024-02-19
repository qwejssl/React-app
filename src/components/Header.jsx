import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)




    return (
        <header>
            <div className="header">
                <span className="logo">House stuff</span>

                <ul className="nav">
                    <li>About us</li>
                    <li>Contacts</li>
                    <li>Account</li>
                    <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shopping-cart-button  ${cartOpen && 'active'}`} />
                </ul>

                {cartOpen && (
                    <div className="shop-cart"> 
                        <h2 className="cart-title">Shopping Cart</h2>
                        {props.orders.map((el) => (
                            <Order onDelete={props.onDelete} key={el.id} item={el} />
                        ))}
                    </div>
                )}
                
            </div>

            <div className="presentation"></div>
        </header>
    )
}


