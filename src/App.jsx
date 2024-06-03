import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShopPage from './components/ShopSection/shop';
import CartPage from './components/CartPage/cart';
import Main from './components/HomePage/home';
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
