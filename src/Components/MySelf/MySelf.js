import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ house, ornaments }) => {
    return (
        <div>
            <h2>This is MySelf</h2>
            <h3>House: {house}</h3>
            <Special ornaments={ornaments}></Special>
        </div>
    );
};

export default MySelf;