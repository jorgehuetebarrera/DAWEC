import React, { Component } from 'react';
import './AppTareas.css'; // Importamos los estilos CSS

class AppTareas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tareas: [],
      nuevaTarea: '',
      filtro: 'todas',
    };
  }

  componentDidMount() {
    // Cargar tareas desde el almacenamiento local al montar el componente
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
    this.setState({ tareas: tareasGuardadas });
  }

  componentDidUpdate() {
    // Actualizar el almacenamiento local cuando las tareas cambian
    localStorage.setItem('tareas', JSON.stringify(this.state.tareas));
  }

  agregarTarea = () => {
    const { nuevaTarea, tareas } = this.state;
    if (nuevaTarea.trim() !== '') {
      const nuevaListaTareas = [...tareas, { texto: nuevaTarea, completada: false }];
      this.setState({ tareas: nuevaListaTareas, nuevaTarea: '' });
    }
  };

  marcarComoCompletada = (index) => {
    const { tareas } = this.state;
    const nuevaListaTareas = [...tareas];
    nuevaListaTareas[index].completada = !nuevaListaTareas[index].completada;
    this.setState({ tareas: nuevaListaTareas });
  };

  eliminarTarea = (index) => {
    const { tareas } = this.state;
    const nuevaListaTareas = [...tareas];
    nuevaListaTareas.splice(index, 1);
    this.setState({ tareas: nuevaListaTareas });
  };

  cambiarFiltro = (filtro) => {
    this.setState({ filtro });
  };

  render() {
    const { tareas, nuevaTarea, filtro } = this.state;

    const tareasFiltradas = tareas.filter((tarea) => {
      if (filtro === 'completadas') {
        return tarea.completada;
      } else if (filtro === 'pendientes') {
        return !tarea.completada;
      } else {
        return true;
      }
    });

    return (
      <div className="AppTareas">
        <h2>Lista de Tareas</h2>
        <div className="Formulario">
          <input
            type="text"
            value={nuevaTarea}
            onChange={(e) => this.setState({ nuevaTarea: e.target.value })}
            placeholder="Nueva tarea"
          />
          <button onClick={this.agregarTarea}>Agregar</button>
        </div>
        <div className="Filtros">
          <button onClick={() => this.cambiarFiltro('todas')} className={filtro === 'todas' ? 'activo' : ''}>
            Todas
          </button>
          <button
            onClick={() => this.cambiarFiltro('completadas')}
            className={filtro === 'completadas' ? 'activo' : ''}
          >
            Completadas
          </button>
          <button onClick={() => this.cambiarFiltro('pendientes')} className={filtro === 'pendientes' ? 'activo' : ''}>
            Pendientes
          </button>
        </div>
        <ul>
          {tareasFiltradas.map((tarea, index) => (
            <li key={index}>
              <span className={tarea.completada ? 'completada' : ''}>{tarea.texto}</span>
              <button onClick={() => this.marcarComoCompletada(index)}>
                {tarea.completada ? 'Desmarcar' : 'Marcar'}
              </button>
              <button onClick={() => this.eliminarTarea(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AppTareas;