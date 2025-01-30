const API_URL = "http://localhost:5000/products"; // URL del backend

export const login = async (email, password) => {
    try {
        const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (data.token) {
            localStorage.setItem("token", data.token); // Guarda el token en localStorage
        }
        return data;
    } catch (error) {
        console.error("Error en login:", error);
        return { error: "Error de conexión" };
    }
};
