import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
function Carrito() {
  const { carrito, vaciarCarrito } = useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <div style={{ marginTop: "120px", textAlign: "center" }}>
        <h2>Tu carrito está vacío 🛒</h2>
        <Link to="/"><button className="btn-volver">Volver</button></Link>
      </div>
    );
  }

  return (
    <div style={{ marginTop: "120px", padding: "20px" }}>
      <h2>Tus compras</h2>
      {carrito.map((item, i) => (
        <div key={i} style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#f4f4f4",
          padding: "10px",
          borderRadius: "8px",
          marginBottom: "10px"
        }}>
          <p><strong>{item.nombre}</strong></p>
          <p>${item.precio - (item.precio * item.descuento) / 100}</p>
        </div>
      ))}
      <button onClick={vaciarCarrito} className="btn-carrito">Vaciar carrito</button>
    </div>
  );
}

export default Carrito;