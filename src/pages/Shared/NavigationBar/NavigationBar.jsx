import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {
    const { user } = useContext(AuthContext)
    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav>
                                <Link to="/category/0">Home</Link>
                            </Nav>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {user && <Nav>
                                <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                            </Nav>}
                            <Nav>
                                {
                                    user ? <Button variant="secondary">Logout</Button> :

                                        <Link to="/login"><Button variant="secondary">Login</Button></Link>
                                }
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;