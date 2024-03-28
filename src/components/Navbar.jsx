import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBootstrap from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Navbar = () => {
    const cartProductSelector = useSelector((state) => state.cart)
    return (
        <>
            <NavbarBootstrap expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Nav>
                        <Nav.Link to='/' as={Link}>Products</Nav.Link>
                    </Nav>
                    <NavbarBootstrap.Toggle />
                    <NavbarBootstrap.Collapse className='justify-content-end'>
                        <NavbarBootstrap.Text>
                            <Nav.Link to='/cart' as={Link}>My Bag {cartProductSelector.length}</Nav.Link>
                        </NavbarBootstrap.Text>
                    </NavbarBootstrap.Collapse>
                </Container>
            </NavbarBootstrap>

        </>
    );
}

export default Navbar; 
