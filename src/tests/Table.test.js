import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testes do componente Table', () => {
  it('', async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const emailLogin = screen.getByRole('textbox');
    const passLogin = screen.getByPlaceholderText(/senha/i);
    const btnLogin = screen.getByRole('button', { name: /entrar/i });

    userEvent.type(emailLogin, 'teste123@qualquercoisa.com');
    userEvent.type(passLogin, '123456');
    userEvent.click(btnLogin);

    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');

    const fieldValue = screen.getByRole('spinbutton');
    userEvent.type(fieldValue, '10');

    const coins = screen.getByTestId('currency-input');
    expect(coins).toBeInTheDocument();

    await waitFor(() => { expect(coins).toHaveValue('USD'); });

    userEvent.selectOptions(coins, 'ETH');

    expect(fieldValue).toHaveValue(10);
    const fieldDescrip = screen.getByRole('textbox');
    userEvent.type(fieldDescrip, 'teste');

    const btnAddExp = screen.getByRole('button', { name: /adicionar despesa/i });
    userEvent.click(btnAddExp);

    const expDescrp1 = await screen.findByRole('cell', { name: /teste/i });
    expect(expDescrp1).toHaveTextContent('teste');

    const editBtnTable = await screen.findByRole('button', { name: /editar/i });
    userEvent.click(editBtnTable);

    const editBtnForm = screen.getByRole('button', { name: /editar despesa/i });
    expect(editBtnForm).toBeInTheDocument();

    userEvent.type(fieldDescrip, 'testeEditado');
    userEvent.click(editBtnForm);
    const expDescrp2 = await screen.findByRole('cell', { name: /testeEditado/i });
    expect(expDescrp2).toHaveTextContent('testeEditado');

    const deleteBtn = await screen.findByRole('button', { name: /excluir/i });
    userEvent.click(deleteBtn);

    expect(expDescrp1).not.toBeInTheDocument();
  });
});
