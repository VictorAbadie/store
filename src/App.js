import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';
import { Container } from 'react-bootstrap';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cancel from './pages/Cancel'
import Store from './pages/Store'
import Success from './pages/Success'
import CartProvider from './CartContext';

// localhost:3000 -> Home
// localhost:3000 -> Success

function App() {
  return (
    // This Container is being imported from bootstrap, but its CSS that takes the Store Name / Cart button from the far left and right of the page to more in the center for visual appeal 
    <CartProvider>
    <Container>
      <NavbarComponent></NavbarComponent>
      <BrowserRouter>
        <Routes>
          <Route index element={<Store />} />
          <Route path='success' element={<Success />} />
          <Route path='cancel' element={<Cancel />} />

        </Routes>
      </BrowserRouter>
    </Container>
    </CartProvider>
  )
}

export default App;
