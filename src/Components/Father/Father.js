import React from 'react';
import MySelf from '../MySelf/MySelf';
import Brother from '../Brother/Brother';
import Sister from '../Brother/Brother';

const Father = ({ house, ornaments }) => {
    return (
        <div>
            <h2>This is father</h2>
            <h2>house :{house}</h2>
            <MySelf house={house} ornaments={ornaments}></MySelf>
            <Brother house={house}></Brother>
            <Sister house={house}></Sister>
        </div>
    );
};

export default Father;