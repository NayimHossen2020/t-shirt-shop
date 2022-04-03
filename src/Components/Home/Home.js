import React from 'react';
import Cart from '../Cart/Cart';
import useTShirts from '../hooks/useTShirts';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {
    const [tShirts] = useTShirts();

    return (
        <div className='home-container container'>
            <div className="product-container">
                {
                    tShirts.map(shirt => <TShirt key={shirt.id} shirt={shirt}></TShirt>)
                }
            </div>
            <div className="productCart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;