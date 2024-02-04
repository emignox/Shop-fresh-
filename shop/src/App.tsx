import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shop";
import Home from "./pages/home";
import SignUp from "./pages/signUp";
import Log from "./pages/login";
import Gallery from "./pages/gallery";
import SingleProduct from "./pages/product";
import { CartProvider } from "./components/cartContext";
import Cart from "./pages/cart";
import About from "./pages/about";
import Pay from "./pages/pay";
import Contact from "./pages/contact";

function App() {
  return (
    <CartProvider>
      <Router basename="/fresh">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Log />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:productTitle" element={<SingleProduct />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
