import React, { Component } from 'react';
import './FormularioRegistro.css'; // Importamos los estilos CSS

class FormularioRegistro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      errors: {
        username: '',
        email: '',
        password: '',
      },
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.validateField(name, value);
      }
    );
  };

  validateField = (fieldName, value) => {
    let errors = { ...this.state.errors };

    switch (fieldName) {
      case 'username':
        errors.username =
          value.length < 3 ? 'El nombre de usuario debe tener al menos 3 caracteres' : '';
        break;
      case 'email':
        errors.email = !/\S+@\S+\.\S+/.test(value) ? 'Ingresa un correo electrónico válido' : '';
        break;
      case 'password':
        errors.password = value.length < 6 ? 'La contraseña debe tener al menos 6 caracteres' : '';
        break;
      default:
        break;
    }

    this.setState({ errors });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Puedes agregar lógica adicional aquí, por ejemplo, enviar los datos al servidor
  };

  render() {
    const { username, email, password, errors } = this.state;

    return (
      <form className="FormularioRegistro" onSubmit={this.handleSubmit}>
        <div>
          <label>Nombre de Usuario:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
            className="InputField"
          />
          <span>{errors.username}</span>
        </div>
        <div>
          <label>Correo Electrónico:</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
            className="InputField"
          />
          <span>{errors.email}</span>
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            className="InputField"
          />
          <span>{errors.password}</span>
        </div>
        <button type="submit">Registrarse</button>
      </form>
    );
  }
}

export default FormularioRegistro;