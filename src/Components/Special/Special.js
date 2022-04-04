import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Special = () => {

    const ring = useContext(RingContext)

    return (
        <div style={{ border: "2px solid tomato" }}>
            <h2>This is special</h2>
            <h3>Gift : {ring}</h3>
        </div>
    );
};

export default Special;