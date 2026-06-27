import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const categorias = ["CAMISETAS", "SHORTS", "CONJUNTOS", "ACCESORIOS", "OFERTAS"];

export default function Navbar() {
  const [busqueda, setBusqueda] = useState("");
  const [mostrarBusqueda, setMostrarBusqueda] = useState(false);
  const [carrito] = useState(0);
  const navigate = useNavigate();

  const handleBuscar = (e) => {
    e.preventDefault();
    if (busqueda.trim()) {
      navigate(`/tienda?busqueda=${busqueda}`);
      setBusqueda("");
      setMostrarBusqueda(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        {/* LOGO */}
        <Link to="/">
          <div className="navbar__logo-titulo"><img src="/Logo.png" alt="" /></div>
        </Link>

        {/* LINKS */}
        <div className="navbar__links">
          <Link to="/" className="navbar__link">INICIO</Link>
          {categorias.map((cat) => (
            <Link
              key={cat}
              to={`/tienda?categoria=${cat.toLowerCase()}`}
              className="navbar__link"
            >
              {cat}
            </Link>
          ))}
        </div>

        {/* ICONOS */}
        <div className="navbar__iconos">
          {mostrarBusqueda ? (
            <form onSubmit={handleBuscar} className="navbar__busqueda-form">
              <input
                autoFocus
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Buscar..."
                className="navbar__busqueda-input"
              />
              <button type="submit" className="navbar__icon-btn">🔍</button>
              <button type="button" className="navbar__icon-btn" onClick={() => setMostrarBusqueda(false)}>✕</button>
            </form>
          ) : (
            <button className="navbar__icon-btn" onClick={() => setMostrarBusqueda(true)}>🔍</button>
          )}
          <button className="navbar__icon-btn">👤</button>
          <div className="navbar__carrito-wrapper">
            <Link to="/tienda">
              <button className="navbar__icon-btn">🛒</button>
            </Link>
            <span className="navbar__carrito-badge">{carrito}</span>
          </div>
        </div>
      </nav>

      {/* BARRA BENEFICIOS */}
      <div className="beneficios">
        {[
          { icon: "🚚", texto: "ENVÍOS A TODO EL PAÍS" },
          { icon: "🔒", texto: "PAGOS 100% SEGUROS" },
          { icon: "🔄", texto: "CAMBIOS Y DEVOLUCIONES" },
        ].map((b) => (
          <div key={b.texto} className="beneficios__item">
            <span className="beneficios__icono">{b.icon}</span>
            <span className="beneficios__texto">{b.texto}</span>
          </div>
        ))}
      </div>
    </>
  );
}
