import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{
      background: "#000", minHeight: "calc(100vh - 100px)",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      textAlign: "center"
    }}>
      <div style={{ fontSize: 80, marginBottom: 16 }}>⚽</div>
      <h1 style={{ color: "#fff", fontSize: 80, fontWeight: 900, margin: 0, letterSpacing: -4 }}>
        404
      </h1>
      <p style={{ color: "#555", fontSize: 15, marginBottom: 32 }}>
        Esta página no existe.
      </p>
      <Link to="/">
        <button style={{
          background: "#fff", color: "#000",
          border: "none", borderRadius: 4,
          padding: "12px 28px",
          fontWeight: 900, fontSize: 13,
          letterSpacing: 1, cursor: "pointer"
        }}>
          VOLVER AL INICIO
        </button>
      </Link>
    </div>
  );
}
