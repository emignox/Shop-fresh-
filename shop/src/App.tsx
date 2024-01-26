import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shop";
import Home from "./pages/home";
import SignUp from "./pages/signUp";
import Log from "./pages/login";
import Gallery from "./pages/gallery";
import SingleProduct from "./pages/product";

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/sign" element={<SignUp />} />
        <Route path="/login" element={<Log />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:productTitle" element={<SingleProduct />} />
        <Route path="/" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
