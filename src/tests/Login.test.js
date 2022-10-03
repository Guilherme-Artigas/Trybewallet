import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testando comportamentos da página de Login', () => {
  it('Elementos do componente Login estão present: ', async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const titleLogin = screen.getByRole('heading', { name: /wallet/i });
    const fieldEmail = screen.getByRole('textbox');
    const fieldPassword = screen.getByPlaceholderText(/senha/i);
    const btnLogin = screen.getByRole('button', { name: /entrar/i });
    const { pathname } = history.location;

    const regexEmail1 = /\S+@\S+\.\S+/;
    const verifiedEmail1 = regexEmail1.test(fieldEmail.value);
    expect(verifiedEmail1).toBe(false);

    userEvent.type(fieldEmail, 'teste123@qualquercoisa.com');
    userEvent.type(fieldPassword, '123456');

    const regexEmail2 = /\S+@\S+\.\S+/;
    const verifiedEmail2 = regexEmail2.test(fieldEmail.value);

    expect(titleLogin).toBeInTheDocument();

    expect(fieldEmail).toBeInTheDocument();
    expect(verifiedEmail2).toBe(true);

    expect(fieldPassword).toBeInTheDocument();
    expect(fieldPassword.value.length).toBe(6); // Gostaria de deixar dinâmico, o importânte é ser > 6

    expect(btnLogin).toBeInTheDocument();
    expect(pathname).toBe('/');

    userEvent.click(btnLogin);
    await waitFor(() => { expect(history.location.pathname).toBe('/carteira'); });

  // verificar se o botão ativa quando essas duas condições forem atendidas;
  // verificar se quando o botão esta ativo e é clicado as funções dispatch, updateEmail e push são chamadas;
  // verificar se quando o botão esta ativo e é clicado muda para a rota /carteira;
  });
});
