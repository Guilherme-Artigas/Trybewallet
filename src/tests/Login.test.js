import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Login from '../pages/Login';

describe('Testando comportamentos da página de Login', () => {
  it('Elementos do componente Login estão present: ', () => {
    const { history } = renderWithRouterAndRedux(<Login />);

    const titleLogin = screen.getByRole('heading', { name: /wallet/i });
    const fieldEmail = screen.getByRole('textbox');
    const fieldPassword = screen.getByPlaceholderText(/senha/i);
    const btnLogin = screen.getByRole('button', { name: /entrar/i });
    const { pathname } = history.location;

    expect(titleLogin).toBeInTheDocument();
    expect(fieldEmail).toBeInTheDocument();
    expect(fieldPassword).toBeInTheDocument();
    expect(btnLogin).toBeInTheDocument();
    expect(pathname).toBe('/');

  // verificar se é um email válido;
  // verificar se a senha tem mais de 6 dígitos;
  // verificar se o botão ativa quando essas duas condições forem atendidas;
  // verificar se quando o botão esta ativo e é clicado as funções dispatch, updateEmail e push são chamadas;
  // verificar se quando o botão esta ativo e é clicado muda para a rota /carteira;
  });
});
