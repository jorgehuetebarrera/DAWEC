import React, { useState } from 'react';

const CategoriasList = ({ categorias, agregarCategoria, seleccionarCategoria, agregarTarea }) => {
  const [nuevaTareaTexto, setNuevaTareaTexto] = useState('');

  const manejarAgregarTarea = () => {
    // Puedes modificar esto según tus necesidades específicas
    if (nuevaTareaTexto.trim() !== '') {
      agregarTarea({ texto: nuevaTareaTexto, categoria: 'Default' });
      setNuevaTareaTexto('');
    }
  };

  return (
    <div>
      <h3>Categorías</h3>
      <ul>
        {categorias.map((categoria) => (
          <li key={categoria} onClick={() => seleccionarCategoria(categoria)}>
            {categoria}
          </li>
        ))}
      </ul>
      <button onClick={agregarCategoria}>Nueva Categoría</button>

      {/* Agregar nueva tarea */}
      <input
        type="text"
        value={nuevaTareaTexto}
        onChange={(e) => setNuevaTareaTexto(e.target.value)}
        placeholder="Nueva Tarea"
      />
      <button onClick={manejarAgregarTarea}>Agregar Tarea</button>
    </div>
  );
};

export default CategoriasList;