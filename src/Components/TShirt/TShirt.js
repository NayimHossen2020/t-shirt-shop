import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import './TShirt.css';

const TShirt = (props) => {
    const { img, price } = props.shirt;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Price: {price}</Card.Text>
                <Button variant="primary">Add to cart</Button>
            </Card.Body>
        </Card>
    );
};

export default TShirt;