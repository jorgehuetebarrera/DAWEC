import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const Registro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Registro exitoso
    } catch (error) {
      console.error('Error de registro:', error.message);
    }
  };

  return (
    <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo electrónico" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
      <button onClick={handleRegister}>Registrarse</button>
    </div>
  );
};

export default Registro;