import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shop";
import Home from "./pages/home";
import SignUp from "./pages/signUp";
import Log from "./pages/login";

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/sign" element={<SignUp />} />
        <Route path="/login" element={<Log />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </Router>
  );
}

export default App;
