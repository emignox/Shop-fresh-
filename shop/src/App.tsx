import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shop";
import Home from "./pages/home";
import SignUp from "./pages/signUp";
import Log from "./pages/login";
import Gallery from "./pages/gallery";
import SingleProduct from "./pages/product";
import { CartProvider } from "./components/cartContext";
import Cart from "./pages/cart";

function App() {
  return (
    <CartProvider>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Log />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:productTitle" element={<SingleProduct />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
