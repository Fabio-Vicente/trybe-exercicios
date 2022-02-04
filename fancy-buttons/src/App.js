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
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick() {
    console.log('Clicou no botão!')
  }
  
  handleClick2() {
    console.log('Clicou no botão 2!')
  }
  
  handleClick3() {
    console.log('Clicou no botão 3!')
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Meu botão</button>
        <button onClick={this.handleClick2}>Meu botão 2</button>
        <button onClick={this.handleClick3}>Meu botão 3</button>
      </>
    )
  }
}

export default App;
