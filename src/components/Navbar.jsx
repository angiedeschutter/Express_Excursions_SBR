
import { Navbar, Nav, Container, Image } from 'react-bootstrap'

export default function NavBar() {
    return (
        <>
            <Navbar  >
                <Container>
                    <Image src='/logo.png' alt='logo'/>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="about">About</Nav.Link>
                        <Nav.Link href="continents">Destinations</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}