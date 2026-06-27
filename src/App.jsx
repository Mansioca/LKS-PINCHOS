import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Tienda from "./pages/Tienda.jsx";
import Detalle from "./pages/Detalle.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/tienda"      element={<Tienda />} />
        <Route path="/producto/:id" element={<Detalle />} />
        <Route path="*"            element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
