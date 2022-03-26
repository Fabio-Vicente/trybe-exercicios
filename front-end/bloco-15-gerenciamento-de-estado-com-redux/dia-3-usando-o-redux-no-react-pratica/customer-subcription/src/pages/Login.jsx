import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';
import { login } from '../store/actions/user';

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleInputChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    })
  }

  handleSubmit(submit) {
    const {
      props: { history, login },
      state: { email, password }
    } = this;
    submit.preventDefault();
    login(email, password);
    history.push('/customers');
  }

  render() {
    return (
      <form onSubmit={ (submit) => this.handleSubmit(submit) }>
        <Input type="email" name="email" handleChange={ (change) => this.handleInputChange(change) } />
        <Input type="password" name="password" handleChange={ (change) => this.handleInputChange(change) } />
        <button type="submit">Login</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  login,
}

export default connect(null, mapDispatchToProps)(Login);
