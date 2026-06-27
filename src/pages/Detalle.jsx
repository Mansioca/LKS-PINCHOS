import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Detalle.css";

// ── Reemplazá con fetch(`http://localhost:3001/api/productos/${id}`) cuando tengas MySQL ──
const PRODUCTOS_MOCK = [
  { id: "1",  nombre: "Camiseta Argentina", categoria: "Camisetas", precio: 8500,  img: "/CAM-ARG.jpg", desc: "Edición especial Mundial 2026. Talle S al XXL." },
  { id: "2",  nombre: "Camiseta Brasil",    categoria: "Camisetas", precio: 8500,  img: "🇧🇷", desc: "Réplica oficial con tecnología DryFit." },
  { id: "3",  nombre: "Camiseta Francia",   categoria: "Camisetas", precio: 9000,  img: "🇫🇷", desc: "Edición limitada campeones vigentes." },
  { id: "4",  nombre: "Camiseta España",    categoria: "Camisetas", precio: 8500,  img: "🇪🇸", desc: "La Roja — tela transpirable premium." },
  { id: "5",  nombre: "Short Argentina",    categoria: "Shorts",    precio: 4500,  img: "🩳", desc: "Short oficial albiceleste con escudo bordado." },
  { id: "6",  nombre: "Short Brasil",       categoria: "Shorts",    precio: 4500,  img: "🩳", desc: "Short verde y amarillo, tela liviana." },
  { id: "7",  nombre: "Conjunto Argentina", categoria: "Conjuntos", precio: 12000, img: "👕", desc: "Camiseta + short albiceleste. Edición Mundial." },
  { id: "8",  nombre: "Conjunto Brasil",    categoria: "Conjuntos", precio: 12000, img: "👕", desc: "Camiseta + short verde/amarillo." },
  { id: "9",  nombre: "Pelota Oficial",     categoria: "Accesorios",precio: 15000, img: "⚽", desc: "Pelota oficial FIFA 2026 — Al Rihla." },
  { id: "10", nombre: "Bufanda Argentina",  categoria: "Accesorios",precio: 2800,  img: "🧣", desc: "Doble capa tejida, colores albiceleste." },
  { id: "11", nombre: "Gorra Mundial",      categoria: "Accesorios",precio: 3200,  img: "🧢", desc: "Logo oficial USA·MEX·CAN 2026." },
  { id: "12", nombre: "Medias Deportivas",  categoria: "Accesorios",precio: 1200,  img: "🧦", desc: "Pack x2, antideslizante, talle único." },
];

const TALLES = ["S", "M", "L", "XL", "XXL"];

export default function Detalle() {
  const { id } = useParams();
  const [producto, setProducto]         = useState(null);
  const [talleSeleccionado, setTalle]   = useState(null);
  const [agregado, setAgregado]         = useState(false);

  useEffect(() => {
    // ── Reemplazá con: fetch(`http://localhost:3001/api/productos/${id}`) ──
    const encontrado = PRODUCTOS_MOCK.find((p) => p.id === id);
    setProducto(encontrado || null);
  }, [id]);

  const handleAgregar = () => {
    if (!talleSeleccionado) return alert("Seleccioná un talle");
    setAgregado(true);
    setTimeout(() => setAgregado(false), 2000);
  };

  if (!producto) {
    return (
      <div className="detalle__no-encontrado">
        <p>Producto no encontrado.</p>
      </div>
    );
  }

  return (
    <div className="detalle">
      <p className="detalle__breadcrumb">
        <Link to="/">Inicio</Link> / <Link to="/tienda">Tienda</Link> / {producto.nombre}
      </p>

      <div className="detalle__grid">
        {/* IMAGEN */}
        <div className="detalle__imagen">
        <img src={producto.img} alt={producto.nombre} />
        </div>  
        

        {/* INFO */}
        <div>
          <p className="detalle__categoria">{producto.categoria}</p>
          <h1 className="detalle__nombre">{producto.nombre}</h1>
          <p className="detalle__precio">${producto.precio.toLocaleString("es-AR")}</p>
          <p className="detalle__desc">{producto.desc}</p>

          <p className="detalle__talles-titulo">TALLE</p>
          <div className="detalle__talles">
            {TALLES.map((t) => (
              <button
                key={t}
                onClick={() => setTalle(t)}
                className={`detalle__talle-btn ${talleSeleccionado === t ? "detalle__talle-btn--activo" : ""}`}
              >
                {t}
              </button>
            ))}
          </div>

          <button
            onClick={handleAgregar}
            className={`detalle__agregar-btn ${agregado ? "detalle__agregar-btn--agregado" : ""}`}
          >
            {agregado ? "✓ AGREGADO AL CARRITO" : "AGREGAR AL CARRITO"}
          </button>
        </div>
      </div>
    </div>
  );
}
