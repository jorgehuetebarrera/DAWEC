import React, { useState, useEffect } from 'react';
import Login from './InicioSesion.js';
import Registro from './Registro.js';
import Profile from './PerfilUsuario.js';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import './App.css';

const firebaseConfig = {
  apiKey: "AIzaSyA4Bi04R9pyESA3oOqhEV-rBGjHk01T1oI",
  authDomain: "usuarios-60a4a.firebaseapp.com",
  projectId: "usuarios-60a4a",
  storageBucket: "usuarios-60a4a.appspot.com",
  messagingSenderId: "534839821721",
  appId: "1:534839821721:web:5c346a98be0890d516bf08"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const App = () => {
  const [user, setUser] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setUser(user);
      setIsProfileOpen(!!user); // Actualiza el estado de apertura del perfil cuando cambia el usuario
    });
    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  const onUpdateProfile = (formData) => {
    console.log(formData);
  };

  return (
    <div className="App">
      <h1>User Authentication Demo</h1>
      {user ? (
        <div>
          {isProfileOpen && <Profile user={user} onLogout={handleLogout} onUpdateProfile={onUpdateProfile} />}
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <Login />
          <h2>Registro</h2>
          <Registro />
        </div>
      )}
    </div>
  );
};

export default App;