import { useParams, Link, useNavigate } from "react-router-dom";
import perfumes from "../data/perfumes";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import Swal from "sweetalert2";
function ProductDetail() {
  const { id } = useParams();
  const perfume = perfumes.find((p) => p.id === Number(id));
  const { agregarAlCarrito } = useContext(CartContext);
  const { usuario } = useContext(UserContext);
  const navigate = useNavigate();

  const precioDescuento = perfume.precio - (perfume.precio * perfume.descuento) / 100;

  const handleAdd = () => {
    if (!usuario) {
      Swal.fire({
        title: "¡Inicia sesión para comprar!",
        text: "Debes estar logueado para agregar productos al carrito",
        icon: "warning",
        confirmButtonText: "Ir al login",
        confirmButtonColor: "#004437",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
      return;
    }

    agregarAlCarrito(perfume);
    Swal.fire({
      title: "¡Producto agregado!",
      text: "Tu perfume fue añadido al carrito 🛍️",
      icon: "success",
      confirmButtonColor: "#004437",
      timer: 1500,
    });
  };

  return (
    <div
      style={{
        marginTop: "100px",
        display: "flex",
        gap: "30px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={perfume.imagen} alt={perfume.nombre} width="250" />
      <div>
        <h2>{perfume.nombre}</h2>
        <p>
          <s>${perfume.precio}</s> ${precioDescuento} (-{perfume.descuento}%)
        </p>
        <p>
          <b>Familia Olfativa:</b> {perfume.familia}
        </p>
        <ul>
          <li><b>Salida:</b> {perfume.notas.salida}</li>
          <li><b>Cuerpo:</b> {perfume.notas.cuerpo}</li>
          <li><b>Fondo:</b> {perfume.notas.fondo}</li>
        </ul>
        <div className="botones-detalle">
          <button className="btn-carrito" onClick={handleAdd}>
            Añadir al carrito
          </button>
          <Link to={-1}>
            <button className="btn-volver">Volver</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;