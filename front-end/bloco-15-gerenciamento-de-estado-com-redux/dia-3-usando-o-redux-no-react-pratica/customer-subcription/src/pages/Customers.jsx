import React, { Component } from 'react';
import { connect } from 'react-redux';

class Customers extends Component {
  render() {
    const { isLogged, customers, history } = this.props;
    return (
      <>
        {!isLogged
          ? <span>Login não efetuado</span>
          : (
            <>
              {!customers.length
                ? <span>Nenhum cliente cadastrado</span>
                : customers.map(({ name, age, email }) => (
                  <div className="customer-card">
                    <span>{name}</span>
                    <span>{age}</span>
                    <span>{email}</span>
                  </div>
                ))}
              <button type="button" onClick={() => history.push('/customers/register')}>Cadastrar cliente</button>
            </>
          )}
      </>
    );
  }
}

const mapStateToProps = ({ user: { isLogged }, customers }) => ({
  isLogged,
  customers,
})

export default connect(mapStateToProps)(Customers);
