import { useState } from "react";
import { login } from "../services/authService"; // Servicio de login
import { useNavigate } from "react-router-dom"; // Para redirigir después del login

const Login = ({ setAuth }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // Hook para redirección

    const handleLogin = async (e) => {
        e.preventDefault();
        const result = await login(email, password);
        if (result.token) {
            localStorage.setItem("token", result.token); // Guardar el token
            setAuth(true); // Actualizar estado de autenticación
            navigate("/products"); // Redirige a la página de productos
        } else {
            setError(result.error || "Credenciales incorrectas");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
