// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';


// Adicione esse teste.
test('Verificando se o botão e o campo email estão funcionando.', () => {
  render(<App />);

  const EMAIL_USER = 'email@email.com';

  /* expect(textEmail).not.toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:'); */

  const btnSend = screen.getByTestId('id-send');
  const inputEmail = screen.getByLabelText('Email');
  userEvent.type(inputEmail, EMAIL_USER);
  userEvent.click(btnSend);

  const textEmail = screen.getByTestId('id-email-user');
  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
});

test('Testando se não é exibida mensagem se não for passado um e-mail para o componente.', () => {
  render(<App />)
  const isValidElement = screen.queryByRole('heading', { level: 3 });
  expect(isValidElement).not.toBeInTheDocument();
});