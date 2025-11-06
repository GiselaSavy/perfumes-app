import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "./AuthForm.css";
import Swal from "sweetalert2";

function Login() {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
  Swal.fire({
    title: "¡Bienvenido!",
    text: "Has iniciado sesión con éxito",
    icon: "success",
    confirmButtonColor: "#004437",
    timer: 1500,
  });
  navigate("/dashboard");
} else {
  setError("Correo o contraseña incorrectos");
}
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Entrar</button>
        </form>
        {error && <p className="error">{error}</p>}
        <p className="register-link">
          ¿No tenés cuenta? <Link to="/register">Registrate aquí</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;