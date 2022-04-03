import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navigation></Navigation>
            <h1>This is header component</h1>
        </div>
    );
};

export default Header;