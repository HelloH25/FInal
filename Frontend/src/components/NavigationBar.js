import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

import { Link, Outlet } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand><Link to='/home'>Home</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to='/Proyectos'>Proyectos</Link></Nav.Link>
                            <Nav.Link><Link to='/Usuarios'>Usuarios</Link></Nav.Link>
                            <Nav.Link><Link to='/Profile'>Profile</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    )
}

export default NavigationBar
