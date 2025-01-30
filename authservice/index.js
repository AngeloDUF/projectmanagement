const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.log('❌ Error al conectar a MongoDB', err));

// Modelo de Usuario
const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String
});
const User = mongoose.model('User', UserSchema);

// 📌 **Ruta de Registro de Usuario (`/register`)**
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "El usuario ya está registrado" });
        }

        // Hashear la contraseña antes de guardarla
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear el nuevo usuario
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (err) {
        res.status(500).json({ error: "Error en el servidor" });
    }
});

// 📌 **Ruta de Login de Usuario (`/login`)**
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log("🛠 Recibida solicitud de login:", email, password);

    try {
        const user = await User.findOne({ email });
        if (!user) {
            console.log("❌ Usuario no encontrado");
            return res.status(400).json({ error: "Usuario no encontrado" });
        }

        console.log("✅ Usuario encontrado:", user);

        // Comparar contraseñas
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log("❌ Contraseña incorrecta");
            return res.status(400).json({ error: "Credenciales inválidas" });
        }

        console.log("✅ Login exitoso");

        // Generar un token JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.error("❌ Error en el servidor:", err);
        res.status(500).json({ error: "Error en el servidor" });
    }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 AuthService running on port ${PORT}`));
