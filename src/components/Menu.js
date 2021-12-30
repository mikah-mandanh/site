import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container, Form } from 'react-bootstrap';

function Menu(props) {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/">M&amp;Anh Services</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export { Menu }