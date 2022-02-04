import React from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */


class App extends React.Component {
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */

  constructor() {
    super();
    this.state = {
      clicks1: 0,
      clicks2: 0,
      clicks3: 0,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick() {
    console.log('Clicou no botão!');
    this.setState((prev, _props) => ({
      clicks1: prev.clicks1 + 1,
    }), () => {
      if (!(this.state.clicks1 % 2)) {
        console.log('Verde');
      }
    });
  }
  
  handleClick2() {
    console.log('Clicou no botão 2!');
    this.setState((prev, _props) => ({
      clicks2: prev.clicks2 + 1,
    }))
  }
  
  handleClick3() {
    console.log('Clicou no botão 3!');
    this.setState((prev, _props) => ({
      clicks3: prev.clicks3 + 1,
    }))
  }

  render() {
    return (
      <>
        <button onClick={() => this.handleClick()}>Meu botão</button>
        <button onClick={this.handleClick2}>Meu botão 2</button>
        <button onClick={this.handleClick3}>Meu botão 3</button>
      </>
    )
  }
}

export default App;
