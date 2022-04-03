import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import useTShirts from '../hooks/useTShirts';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {
    const [tShirts] = useTShirts();
    const [cart, setCart] = useState([]);

    const addToCart = (selectedItem) => {
        const newCart = [...cart, selectedItem];
        setCart(newCart);
    };

    const removeItem = (removed) => {
        const rest = cart.filter(shirt => shirt.id !== removed.id);
        setCart(rest)
    }

    return (
        <div className='home-container container'>
            <div className="product-container">
                {
                    tShirts.map(shirt => <TShirt
                        key={shirt.id}
                        shirt={shirt}
                        addToCart={addToCart}
                    ></TShirt>)
                }
            </div>
            <div className="productCart-container">
                <Cart
                    cart={cart}
                    removeItem={removeItem}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;