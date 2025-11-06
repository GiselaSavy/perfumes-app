import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
function DashboardPage() {
  const { usuario, logout } = useContext(UserContext);

  if (!usuario) {
    return (
      <div style={{ marginTop: "120px", textAlign: "center" }}>
        <h2>No estás logueado</h2>
        <Link to="/login">Ir al Login</Link>
      </div>
    );
  }
  return (
    <div style={{ marginTop: "120px", textAlign: "center" }}>
      <h2>Bienvenido a nuestro Rincón... <br />En tu sección encontrarás tu perfume ideal</h2>
      
    </div>
  );
}

export default DashboardPage;