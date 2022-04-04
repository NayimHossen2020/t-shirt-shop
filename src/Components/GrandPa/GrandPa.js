import React, { useState } from 'react';
import Uncle from '../../Components/Uncle/Uncle';
import Father from '../../Components/Father/Father';
import Aunty from '../Aunty/Aunty';
import './GrandPa.css';

const GrandPa = () => {
    const [house, setHouse] = useState(1);

    const ornaments = 'Diamond Ring';

    return (
        <div className='grandPa'>
            <h2>Grand father</h2>
            <button onClick={() => setHouse(house + 1)}>Buy House</button>
            <h3>House: {house}</h3>
            <section className='grandPa1'>
                <Father house={house} ornaments={ornaments}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>
        </div>
    );
};

export default GrandPa;