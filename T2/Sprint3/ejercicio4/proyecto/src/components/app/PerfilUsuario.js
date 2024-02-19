import React, { useState } from 'react';
import { getAuth, updateProfile, updatePassword, updateEmail } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const PerfilUsuario = ({ user, onUpdateProfile, onLogout }) => {
  const [formData, setFormData] = useState({
    name: user.displayName,
    email: user.email,
    profileImage: user.photoURL,
    newProfileImage: null,
    newPassword: '', // Campo para nueva contraseña
    newEmail: '' // Campo para nuevo correo electrónico
  });

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      newProfileImage: e.target.files[0]
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const currentUser = auth.currentUser;

      if (currentUser) {
        if (formData.newPassword !== '') {
          await updatePassword(currentUser, formData.newPassword);
        }

        if (formData.newEmail !== '') {
          await updateEmail(currentUser, formData.newEmail);
        }

        // Subir la nueva imagen de perfil al almacenamiento en la nube
        if (formData.newProfileImage) {
          const storage = getStorage();
          const imageRef = ref(storage, `imagenes_perfil/${currentUser.uid}/${formData.newProfileImage.name}`);
          await uploadBytes(imageRef, formData.newProfileImage);
          const url = await getDownloadURL(imageRef);
          formData.profileImage = url;
        }

        await updateProfile(currentUser, {
          displayName: formData.name,
          photoURL: formData.profileImage
        });

        onUpdateProfile(formData);
      } else {
        console.error('Usuario no autenticado.');
      }
    } catch (error) {
      console.error('Error al actualizar perfil:', error.message);
    }
  };

  return (
    <div>
      <h2>Perfil de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Correo electrónico:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Nueva Contraseña:
          <input type="password" name="newPassword" value={formData.newPassword} onChange={handleChange} />
        </label>
        <br />
        <label>
          Nuevo Correo Electrónico:
          <input type="email" name="newEmail" value={formData.newEmail} onChange={handleChange} />
        </label>
        <br />
        <label>
          Imagen de Perfil:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        <br />
        <button type="submit">Guardar Cambios</button>
        <button onClick={onLogout}>Logout</button>
      </form>
      <img src={formData.profileImage} alt="Imagen de perfil" />
    </div>
  );
};

export default PerfilUsuario;