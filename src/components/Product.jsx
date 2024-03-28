import React from 'react'
import { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { add } from '../store/CartSlice'
import { getProducts } from '../store/ProductSlice';
import { useDispatch, useSelector } from 'react-redux'
const Products = () => {
    const data = useSelector((state) => state.product.data)
    const loading = useSelector((state) => state.product.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    const addToCart = (product) => {
        dispatch(add(product))
    }
    const cards = data.map((product) => (
        <div className='col-md-3'>
            <Card key={product.id} className='h-100' style={{ marginBottom: '100px' }}>
                <div className='text-center'>
                    <Card.Img src={product.image} style={{ width: '100px', height: '130px' }} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>${product.price}</Card.Text>
                </Card.Body>
                <Card.Footer style={{ background: 'white', textAlign: 'center' }}>
                    <Button variant="primary" onClick={() => addToCart(product)}>Add To Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ))
    if (loading === true) {
        return <p>Loading...</p>
    }
    return (
        <>
            <h1>Product Dashboard</h1>
            <div className='row'>
                {cards}
            </div>

        </>
    )
}
export default Products