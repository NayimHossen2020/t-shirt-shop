import React from 'react';

const Special = ({ ornaments }) => {
    return (
        <div style={{ border: "2px solid tomato" }}>
            <h2>This is special</h2>
            <h3>Gift : {ornaments}</h3>
        </div>
    );
};

export default Special;