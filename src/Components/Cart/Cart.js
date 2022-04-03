import React from 'react';
import './Cart.css';

const Cart = ({ cart, removeItem }) => {
    return (
        <div>
            <h2>Item selected: {cart.length}</h2>
            {
                cart.map(shirt =>
                    <p>{shirt.price}
                        <button onClick={() => removeItem(shirt)}>x</button>
                    </p>)
            }
        </div>
    );
};

export default Cart;