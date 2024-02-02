import React, { Component } from 'react';
import './GaleriaImagenes.css'; // Importamos los estilos CSS

class GaleriaImagenes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imagenes: [],
      imagenSeleccionada: null,
    };
  }

  componentDidMount() {
    // Realizar una petición a la API de imágenes (Unsplash)
    fetch('https://api.unsplash.com/photos/?client_id=vjKFH4Z7vByvZvuFOukfDH8xmBEu59IotjKncYUdsEA&per_page=12')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ imagenes: data });
      })
      .catch((error) => {
        console.error('Error al cargar imágenes:', error);
      });
  }

  abrirModal = (imagen) => {
    this.setState({ imagenSeleccionada: imagen });
  };

  cerrarModal = () => {
    this.setState({ imagenSeleccionada: null });
  };

  render() {
    const { imagenes, imagenSeleccionada } = this.state;

    return (
      <div className="GaleriaImagenes">
        <h2>Galería de Imágenes</h2>
        <div className="GridImagenes">
          {imagenes.map((imagen) => (
            <div key={imagen.id} className="Imagen" onClick={() => this.abrirModal(imagen)}>
              <img src={imagen.urls.thumb} alt={imagen.alt_description} />
            </div>
          ))}
        </div>
        {imagenSeleccionada && (
          <div className="Modal">
            <div className="ContenidoModal">
              <span className="CerrarModal" onClick={this.cerrarModal}>
                &times;
              </span>
              <img src={imagenSeleccionada.urls.full} alt={imagenSeleccionada.alt_description} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default GaleriaImagenes;