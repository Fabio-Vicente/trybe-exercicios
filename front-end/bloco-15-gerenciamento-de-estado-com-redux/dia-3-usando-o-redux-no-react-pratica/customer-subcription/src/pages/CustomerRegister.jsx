import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';
import { addCustomer } from '../store/actions/customers';

class CustomerRegister extends Component {
  state = {
    name: '',
    age: '',
    email: '',
  }

  handleInputChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleSubmit(submit) {
    const { addCustomer: addCustomerToStore } = this.props;
    submit.preventDefault();
    addCustomerToStore({ ...this.state });
  }

  render() {
    const { history } = this.props;
    return (
      <main>
        <form onSubmit={(submit) => this.handleSubmit(submit)}>
          <Input name="name" handleChange={(inputChange) => this.handleInputChange(inputChange)} />
          <Input name="age" handleChange={(inputChange) => this.handleInputChange(inputChange)} />
          <Input type="email" name="email" handleChange={(inputChange) => this.handleInputChange(inputChange)} />
          <button type="submit">Cadastrar</button>
        </form>
        <button type="button" onClick={() => history.push('/customers')}>Clientes</button>
      </main>
    );
  }
}

const mapDispatchToProps = { addCustomer }

export default connect(null, mapDispatchToProps)(CustomerRegister);
