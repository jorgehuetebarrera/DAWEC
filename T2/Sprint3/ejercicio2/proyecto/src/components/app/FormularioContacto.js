import React from 'react';
import { useForm } from 'react-hook-form';

const FormularioContacto = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alert('Formulario enviado con éxito');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nombre:</label>
        <input {...register('nombre', { required: true })} />
        {errors.nombre && <span>Este campo es obligatorio</span>}
      </div>
      <div>
        <label>Email:</label>
        <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && <span>Por favor, introduce un correo electrónico válido</span>}
      </div>
      <div>
        <label>Mensaje:</label>
        <textarea {...register('mensaje', { required: true })} />
        {errors.mensaje && <span>Este campo es obligatorio</span>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioContacto;