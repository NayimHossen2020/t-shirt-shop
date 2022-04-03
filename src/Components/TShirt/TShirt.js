import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './TShirt.css';

const TShirt = ({ addToCart, shirt }) => {
    const { img, price } = shirt;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Price: {price}</Card.Text>
                <Button onClick={() => addToCart(shirt)} variant="primary">Add to cart</Button>
            </Card.Body>
        </Card>
    );
};

export default TShirt;