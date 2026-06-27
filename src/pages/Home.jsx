import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <div className="hero">
        <div className="hero__fondo"></div>
        <div className="hero__contenido">
          <p className="hero__subtitulo">Vestí tu pasión</p>
          <h1 className="hero__titulo">
            MUNDIAL<br />
            <span className="hero__titulo-outline">SHOP</span>
          </h1>
          <p className="hero__desc">
            Ropa de fútbol con estilo, calidad<br />y actitud para la cancha y el día a día.
          </p>
          <Link to="/tienda">
            <button className="hero__btn">VER COLECCIÓN →</button>
          </Link>
        </div>
        <div className="hero__imagen"></div>
      </div>

      {/* CATEGORÍAS 
      <div className="categorias">
        <h2 className="categorias__titulo">Categorías</h2>
        <div className="categorias__grid">
          {[
            { nombre: "Camisetas",  icon: "👕", cat: "camisetas" },
            { nombre: "Shorts",     icon: "🩳", cat: "shorts" },
            { nombre: "Conjuntos",  icon: "🥋", cat: "conjuntos" },
            { nombre: "Accesorios", icon: "⚽", cat: "accesorios" },
          ].map((c) => (
            <Link key={c.cat} to={`/tienda?categoria=${c.cat}`}>
              <div className="categorias__card">
                <div className="categorias__card-icono">{c.icon}</div>
                <p className="categorias__card-nombre">{c.nombre}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>*/}
    </div>
  );
}
