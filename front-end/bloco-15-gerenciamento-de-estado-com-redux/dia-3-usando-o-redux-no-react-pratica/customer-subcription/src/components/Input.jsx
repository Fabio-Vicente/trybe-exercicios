import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { name, type = 'text', handleChange } = this.props;
    return (
      <label htmlFor={ name }>
        {`${name[0].toUpperCase()}${name.slice(1)}`}
        { /* https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript */ }
        <input
          id={ name }
          type={ type }
          name={ name }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default Input;
