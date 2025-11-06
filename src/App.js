import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PerfumesFemeninos from "./pages/PerfumesFemeninos";
import PerfumesMasculinos from "./pages/PerfumesMasculinos";
import ProductDetail from "./components/ProductDetail";
import Login from "./pages/Login";
import DashboardPage from "./pages/DashboardPage";
import Carrito from "./pages/Carrito";
import Register from "./pages/Register";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/femeninos" element={<PerfumesFemeninos />} />
        <Route path="/masculinos" element={<PerfumesMasculinos />} />
        <Route path="/detalle/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;