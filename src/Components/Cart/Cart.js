import React from 'react';
import './Cart.css';

const Cart = ({ cart, removeItem }) => {

    let comment;
    if (cart.length === 0) {
        comment = <p>Please Add some items</p>
    } else if (cart.length === 1) {
        comment = <p>Please add more one</p>
    }
    else {
        comment = <p><small>Thanks for adding item</small></p>
    }

    return (
        <div>
            <h2>Item selected: {cart.length}</h2>
            {
                cart.map(shirt =>
                    <p>{shirt.price}
                        <button onClick={() => removeItem(shirt)}>x</button>
                    </p>)
            }
            {cart.length === 0 || <p className='orange'>YAY! your buying</p>}
            {cart.length === 3 && <div className='orange'>
                <h2>Trigonal</h2>
                <p>Tin jon ke ki gift</p>
            </div>}
            {comment}
            {cart.length !== 4 ? <p>Keep adding</p> : <button>remove all</button>}
            {cart.length <= 1 ? <></> : <button>Order now</button>}
        </div>
    );
};

export default Cart;