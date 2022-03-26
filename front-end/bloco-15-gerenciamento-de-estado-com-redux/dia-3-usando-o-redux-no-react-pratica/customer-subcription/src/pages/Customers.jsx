import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toogleCustomersOrder, removeCustomer } from '../store/actions/customers';

class Customers extends Component {
  render() {
    const {
      isLogged,
      customersList,
      sortedCustomersList,
      isSorted,
      toogleCustomersOrder: toogleCustomersOrderInStore,
      removeCustomer: removeCustomerFromStore,
      history,
    } = this.props;
    const customers = isSorted ? sortedCustomersList : customersList;
    return (
      <>
        {!isLogged
          ? <span>Login não efetuado</span>
          : (
            <>
              {!customers.length
                ? <span>Nenhum cliente cadastrado</span>
                : customers.map((costumer) => (
                  <div key={costumer.email} className="customer-card">
                    <span>{costumer.name}</span>
                    <span>{costumer.age}</span>
                    <span>{costumer.email}</span>
                    <button type="button" onClick={ () => removeCustomerFromStore(costumer)}>X</button>
                  </div>
                ))}
              <button type="button" onClick={() => history.push('/customers/register')}>Cadastrar cliente</button>
              <button type="button" onClick={toogleCustomersOrderInStore}>Reordenar</button>
            </>
          )}
      </>
    );
  }
}

const mapStateToProps = ({
  user: { isLogged },
  customers: { customersList, sortedCustomersList, isSorted }
}) => ({
  isLogged,
  customersList,
  sortedCustomersList,
  isSorted,
})

const mapDispatchToProps = {
  toogleCustomersOrder,
  removeCustomer,
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
