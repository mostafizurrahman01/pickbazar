import { Card, Button } from 'react-bootstrap';
import React from 'react';


const Item = ({item}) => {
    return (
        <div className="col-md-4">
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.img} />
            <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    <small>{item.author}</small>
                    <h5 className="mt-2">Price: {item.price}</h5>

                </Card.Text>
                    <Button variant="primary">Buy Now</Button>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Item;