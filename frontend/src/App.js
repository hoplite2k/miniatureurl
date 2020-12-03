import React from 'react';
import Header from './components/headercomponent';
import Footer from './components/footercomponent';
import Main from './components/maincomponent';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='py-3'>
        <Container>
          <Main />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
