import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductoCard from "../components/ProductoCard.jsx";
import "./Tienda.css";

// ── Reemplazá con fetch("http://localhost:3001/api/productos") cuando tengas MySQL ──
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

const CATEGORIAS = ["Todos", "Camisetas", "Shorts", "Conjuntos", "Accesorios"];

export default function Tienda() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando]   = useState(true);
  const [categoriaActiva, setCat] = useState("Todos");
  const [busqueda, setBusqueda]   = useState("");
  const [searchParams]            = useSearchParams();

  useEffect(() => {
    setTimeout(() => {
      setProductos(PRODUCTOS_MOCK);
      setCargando(false);
    }, 400);
  }, []);

  useEffect(() => {
    const cat = searchParams.get("categoria");
    const bus = searchParams.get("busqueda");
    if (cat) setCat(cat.charAt(0).toUpperCase() + cat.slice(1));
    if (bus) setBusqueda(bus);
  }, [searchParams]);

  const filtrados = productos.filter((p) => {
    const porCat = categoriaActiva === "Todos" || p.categoria === categoriaActiva;
    const porBus = p.nombre.toLowerCase().includes(busqueda.toLowerCase());
    return porCat && porBus;
  });

  return (
    <div className="tienda">
      <h1 className="tienda__titulo">Tienda</h1>
      <p className="tienda__cantidad">{filtrados.length} productos encontrados</p>

      <div className="tienda__filtros">
        <div className="tienda__categorias">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat}
              onClick={() => setCat(cat)}
              className={`tienda__cat-btn ${categoriaActiva === cat ? "tienda__cat-btn--activo" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <input
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar producto..."
          className="tienda__busqueda"
        />
      </div>

      {cargando ? (
        <div className="tienda__estado">
          <p className="tienda__estado-texto">Cargando productos...</p>
        </div>
      ) : filtrados.length === 0 ? (
        <div className="tienda__estado">
          <div className="tienda__estado-icono">⚽</div>
          <p className="tienda__estado-texto">No se encontraron productos.</p>
        </div>
      ) : (
        <div className="tienda__grilla">
          {filtrados.map((p) => (
            <ProductoCard key={p.id} producto={p} />
          ))}
        </div>
      )}
    </div>
  );
}
