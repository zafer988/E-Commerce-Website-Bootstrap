import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { remove } from '../store/CartSlice';

const Cart = () => {
    const productCart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const removeProduct = (id) => {
        dispatch(remove(id));
    };
    const cards = productCart.map((product) => (
        <div className='col-md-12' key={product.id}>
            <Card className='h-100' style={{ marginBottom: '100px' }}>
                <div className='text-center'>
                    <Card.Img src={product.image} style={{ width: '100px', height: '130px' }} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>${product.price}</Card.Text>
                </Card.Body>
                <Card.Footer style={{ background: 'white', textAlign: 'center' }}>
                    <Button variant="danger" onClick={() => removeProduct(product.id)}>Remove item</Button>
                </Card.Footer>
            </Card>
        </div>
    ));
    return (
        <div className='row'>
            {cards}
        </div>
    );
};
export default Cart;
