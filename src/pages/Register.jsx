import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "./AuthForm.css";
import Swal from "sweetalert2";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { register } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password.length < 4) {
            setError("La contraseña debe tener al menos 4 caracteres");
            return;
        }

        register(email, password);
        Swal.fire({
            title: "¡Registro exitoso!",
            text: "Tu cuenta fue creada exitosamente",
            icon: "success",
            confirmButtonColor: "#004437",
            timer: 1500,
        });
        navigate("/login");
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Crear cuenta</h2>
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
                        placeholder="Contraseña (mínimo 4 caracteres)"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Registrarme</button>
                </form>
                {error && <p className="error">{error}</p>}
                <p className="register-link">
                    ¿Ya tenés cuenta? <Link to="/login">Iniciá sesión</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;