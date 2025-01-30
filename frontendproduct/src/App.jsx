import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import UpdateProduct from './pages/UpdateProduct';
import Login from './pages/Login';
import Navbar from './components/Navbar';

// Función para verificar si el usuario está autenticado
const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

function App() {
  const [auth, setAuth] = useState(isAuthenticated());

  useEffect(() => {
    setAuth(isAuthenticated()); // Se ejecuta cada vez que cambia el estado del usuario
  }, []);

  return (
    <Router>
      {/* Si el usuario está autenticado, mostramos el Navbar */}
      {auth && <Navbar />}

      <Routes>
        {/* Página principal con el Login y el Home */}
        <Route path="/" element={auth ? <Navigate to="/products" /> : <Home />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />

        {/* Rutas protegidas */}
        <Route
          path="/products"
          element={auth ? <Products /> : <Navigate to="/login" />}
        />
        <Route
          path="/add-product"
          element={auth ? <AddProduct /> : <Navigate to="/login" />}
        />
        <Route
          path="/update-product/:id"
          element={auth ? <UpdateProduct /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
