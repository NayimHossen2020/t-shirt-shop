import React, { createContext, useState } from 'react';
import Uncle from '../../Components/Uncle/Uncle';
import Father from '../../Components/Father/Father';
import Aunty from '../Aunty/Aunty';
import './GrandPa.css';

export const RingContext = createContext('diamond');

const GrandPa = () => {
    const [house, setHouse] = useState(1);

    const ornaments = 'Diamond Ring';

    return (
        <RingContext.Provider value={ornaments}>
            <div className='grandPa'>
                <h2>Grand father</h2>
                <button onClick={() => setHouse(house + 1)}>Buy House</button>
                <h3>House: {house}</h3>
                <section className='grandPa1'>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default GrandPa;