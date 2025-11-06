import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import "./Navbar.css";

function Navbar() {
  const { usuario, setUsuario } = useContext(UserContext);
  const { carrito } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "¿Cerrar sesión?",
      text: "Tu sesión se cerrará",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#004437",
      cancelButtonColor: "#888",
      confirmButtonText: "Sí, salir",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("usuario");
        setUsuario(null);
        Swal.fire({
          title: "Sesión cerrada",
          icon: "success",
          confirmButtonColor: "#004437",
          timer: 1200,
        });
        navigate("/");
      }
    });
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          Rincón de Aromas
        </Link>

        <div className="nav-links">
          <Link to="/">Inicio</Link>
          <Link to="/femeninos">Femeninos</Link>
          <Link to="/masculinos">Masculinos</Link>
        </div>

        <div className="nav-right">
          <Link to="/carrito" className="carrito">
            <i className="fas fa-shopping-cart"></i>
            {carrito.length > 0 && (
              <span className="cart-count">{carrito.length}</span>
            )}
          </Link>

          {!usuario ? (
            <button
              className="btn-login"
              onClick={() => navigate("/login")}
            >
              Iniciar Sesión
            </button>
          ) : (
            <button
              className="btn-login"
              onClick={handleLogout}
            >
              Cerrar Sesión
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;