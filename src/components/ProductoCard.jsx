import { Link } from "react-router-dom";
import "./ProductoCard.css";

export default function ProductoCard({ producto }) {
  return (
    <div className="producto-card">
      <div className="producto-card__imagen">{producto.img}</div>
      <div className="producto-card__info">
        <p className="producto-card__categoria">{producto.categoria}</p>
        <h3 className="producto-card__nombre">{producto.nombre}</h3>
        <p className="producto-card__desc">{producto.desc}</p>
        <div className="producto-card__footer">
          <span className="producto-card__precio">
            ${producto.precio.toLocaleString("es-AR")}
          </span>
          <Link to={`/producto/${producto.id}`}>
            <button className="producto-card__btn">VER →</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
