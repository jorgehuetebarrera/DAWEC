import React, { Component } from 'react';
import './Cronometro.css'; // Importamos los estilos CSS

class Cronometro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tiempo: 0,
      activo: false,
    };

    this.intervalo = null;
  }

  componentWillUnmount() {
    this.detenerCronometro();
  }

  iniciarCronometro = () => {
    if (!this.state.activo) {
      this.setState({ activo: true });
      this.intervalo = setInterval(() => {
        this.setState((prevState) => ({
          tiempo: prevState.tiempo + 1,
        }));
      }, 1000);
    }
  };

  pausarCronometro = () => {
    this.detenerCronometro();
  };

  reiniciarCronometro = () => {
    this.detenerCronometro();
    this.setState({
      tiempo: 0,
      activo: false,
    });
  };

  detenerCronometro = () => {
    if (this.state.activo) {
      clearInterval(this.intervalo);
      this.setState({ activo: false });
    }
  };

  render() {
    const { tiempo, activo } = this.state;

    return (
      <div className="Cronometro">
        <h2>{this.formatTiempo(tiempo)}</h2>
        <div className="Botones">
          <button onClick={this.iniciarCronometro} disabled={activo}>
            Iniciar
          </button>
          <button onClick={this.pausarCronometro} disabled={!activo}>
            Pausar
          </button>
          <button onClick={this.reiniciarCronometro}>Reiniciar</button>
        </div>
      </div>
    );
  }

  formatTiempo = (segundos) => {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    return `${minutos < 10 ? '0' : ''}${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
  };
}

export default Cronometro;