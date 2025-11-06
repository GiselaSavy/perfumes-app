import { Link } from "react-router-dom";

function ProductCard({ perfume }) {
  const precioDescuento = perfume.precio - (perfume.precio * perfume.descuento) / 100;

  return (
    <div className="card">
      <img src={perfume.imagen} alt={perfume.nombre} />
      <h3>{perfume.nombre}</h3>
      <p><s>${perfume.precio}</s> <strong>${precioDescuento}</strong></p>
      <Link to={`/detalle/${perfume.id}`}>
        <button>Ver Detalle</button>
      </Link>
    </div>
  );
}
export default ProductCard;