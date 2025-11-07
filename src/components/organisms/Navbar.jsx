import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
// 1. Importa 'Link' de React Router
import { Link } from 'react-router-dom';

// 2. Estandarizamos el nombre a 'Navbar' (Mayúscula inicial)
function NavBar() { 
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                {/* 3. CORRECCIÓN DE NAVEGACIÓN: */}
                {/* Usamos 'as={Link}' y 'to="/"' */}
                {/* 'href' recarga la página entera y rompe React. 'Link' hace la navegación interna. */}
                <Navbar.Brand as={Link} to="/" className="navbar-brand">
                    Helpet
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* 4. CORRECCIÓN (igual que arriba) */}
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/iniciarsesion">Iniciar Sesión</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

// 5. Exportamos el componente con el nombre correcto
export default NavBar;
