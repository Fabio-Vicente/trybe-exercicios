import React, { Component } from 'react'
import Input from './Input';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
        formularioComErros: false,
    };
  }


  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    if ((name === 'idade' && (value > 20 || value < 0)) ||
        (name === 'vaiComparecer' && !value)) {
        this.setState({
            formularioComErros: true,
        })
    }
    this.setState({
      [name]: value,
    });
  }

  handleError(error) {
      if (error) {
          this.setState({
            formularioComErros: true,
          })
      }
  }

  render() {
    const { estadoFavorito, idade, vaiComparecer, geo_tech } = this.state;
    console.log(vaiComparecer);
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
            <fieldset>
                <legend>Principal</legend>
                <label>
                    Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
                    <textarea name="estadoFavorito" value={estadoFavorito} onChange={this.handleChange} />
                </label>
                <Input
                    type="number"
                    name="idade"
                    value={idade > 20 ?
                        20 :
                        idade < 0 ?
                        0 :
                        idade}
                    handleChange={this.handleChange}
                />
                <Input
                    type="checkbox"
                    name="vaiComparecer"
                    value={vaiComparecer === false ?
                    true :
                    true}
                    handleChange={this.handleChange}
                />
            </fieldset>
          <select
            name="geo_tech"
            value={geo_tech}
            onChange={this.handleChange}>
              <option value="geograph">Geográfico</option>
              <option value="tech">Tecnológico</option>
          </select>
          <input type="file" />
        </form>
      </div>
    );
  }
}

export default Form;