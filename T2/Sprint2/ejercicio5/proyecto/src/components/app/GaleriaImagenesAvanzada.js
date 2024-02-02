import React, { Component } from 'react';
import './GaleriaImagenesAvanzada.css';

class GaleriaImagenesAvanzada extends Component {
  state = {
    imagenes: [],
    imagenSeleccionada: null,
    pagina: 1,
    terminosBusqueda: '',
  };

  componentDidMount() {
    this.cargarImagenes();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  cargarImagenes = async () => {
    const { pagina, terminosBusqueda } = this.state;
    const apiKey = '2KIMBimCuE6CuH27oYHjoBMHrgIjrMWK1-kiGexoaeA';
    let apiUrl = `https://api.unsplash.com/photos?client_id=${apiKey}&per_page=10&page=${pagina}`;

    if (terminosBusqueda) {
      apiUrl = `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${terminosBusqueda}&per_page=10&page=${pagina}`;
    }

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      // Verifica si hay resultados en la propiedad 'results' o en el propio objeto
      const resultados = data.results || data;

      this.setState((prevState) => ({ imagenes: [...prevState.imagenes, ...resultados] }));
    } catch (error) {
      console.error('Error al cargar imágenes:', error);
    }
  };

  handleScroll = () => {
    const { terminosBusqueda } = this.state;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const clientHeight = window.innerHeight;

    if (scrollTop + clientHeight >= scrollHeight - 20) {
      this.setState((prevState) => ({ pagina: prevState.pagina + 1 }), this.cargarImagenes);
    }
  };

  handleInputChange = (event) => {
    this.setState({ terminosBusqueda: event.target.value, pagina: 1, imagenes: [] }, this.cargarImagenes);
  };

  abrirModal = (imagen) => {
    this.setState({ imagenSeleccionada: imagen });
  };

  cerrarModal = () => {
    this.setState({ imagenSeleccionada: null });
  };

  handleDesplazamiento = async (direccion) => {
    const gridContainer = document.querySelector('.GridImagenes');
    const { pagina, terminosBusqueda } = this.state;
    const apiKey = '2KIMBimCuE6CuH27oYHjoBMHrgIjrMWK1-kiGexoaeA';

    let apiUrl = `https://api.unsplash.com/photos?client_id=${apiKey}&per_page=10&page=${pagina + 1}`;

    if (terminosBusqueda) {
      apiUrl = `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${terminosBusqueda}&per_page=10&page=${pagina + 1}`;
    }

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      // Verifica si hay resultados en la propiedad 'results' o en el propio objeto
      const resultados = data.results || data;

      if (direccion === 'derecha') {
        // Desplaza hacia la derecha
        gridContainer.scrollLeft += gridContainer.clientWidth;
      } else if (direccion === 'izquierda' && pagina > 1) {
        // Desplaza hacia la izquierda solo si hay páginas anteriores
        gridContainer.scrollLeft -= gridContainer.clientWidth;
      }

      // Actualiza el estado con las nuevas imágenes y la página
      this.setState((prevState) => ({ imagenes: [...prevState.imagenes, ...resultados], pagina: prevState.pagina + 1 }));
    } catch (error) {
      console.error('Error al cargar imágenes:', error);
    }
  };

  render() {
    const { imagenes, terminosBusqueda, imagenSeleccionada } = this.state;

    return (
      <div className="GaleriaImagenesAvanzada">
        <h2>Galería de Imágenes Avanzada</h2>
        <div className="Busqueda">
          <input
            type="text"
            placeholder="Buscar imágenes..."
            value={terminosBusqueda}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="GridContainer">
          <button
            className="BotonesDesplazamiento Izquierda"
            onClick={() => this.handleDesplazamiento('izquierda')}
          >
            &#8249;
          </button>
          <div className="GridImagenes">
            {imagenes.map((imagen) => (
              <div key={imagen.id} className="Imagen" onClick={() => this.abrirModal(imagen)}>
                <img src={imagen.urls.regular} alt={imagen.alt_description} />
              </div>
            ))}
          </div>
          <button
            className="BotonesDesplazamiento Derecha"
            onClick={() => this.handleDesplazamiento('derecha')}
          >
            &#8250;
          </button>
        </div>
        {imagenSeleccionada && (
          <div className="Modal" onClick={this.cerrarModal}>
            <div className="ContenidoModal">
              <span className="CerrarModal">&times;</span>
              <img src={imagenSeleccionada.urls.full} alt={imagenSeleccionada.alt_description} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default GaleriaImagenesAvanzada;