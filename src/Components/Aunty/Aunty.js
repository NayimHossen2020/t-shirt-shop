import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Aunty = ({ house }) => {

    const ring = useContext(RingContext);
    return (
        <div>
            <h2>This is aunty</h2>
            <h3>House: {house}</h3>
            <h4>Ornament: {ring}</h4>
        </div>
    );
};

export default Aunty;