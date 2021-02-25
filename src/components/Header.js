import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header = () => {
    return (
        <Navbar fixed="top" expand="lg" className="header">
            <Container>
                <Navbar.Brand href="#">Home Buyer Helper</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header
