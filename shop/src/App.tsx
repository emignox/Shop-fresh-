import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import ShopPage from "./pages/ShopPage";
// import GalleryPage from "./pages/GalleryPage";
// import ContactPage from "./pages/ContactPage";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
