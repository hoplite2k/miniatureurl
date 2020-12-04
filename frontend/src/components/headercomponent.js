import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg="primary" variant="light" expand="lg" collapseOnSelect >
                <Container>
                    <div className='navbar-text'><span className='fas fa-link'></span> MINIATURE URL</div>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;
