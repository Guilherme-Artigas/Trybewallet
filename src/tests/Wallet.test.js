import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testando comportamento do componente Wallet', () => {
  it('', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const emailLogin = screen.getByRole('textbox');
    const passLogin = screen.getByPlaceholderText(/senha/i);
    const btnLogin = screen.getByRole('button', { name: /entrar/i });

    userEvent.type(emailLogin, 'teste123@qualquercoisa.com');
    userEvent.type(passLogin, '123456');
    userEvent.click(btnLogin);

    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');
    const titleWallet = screen.getByRole('heading', { name: /wallet/i });
    const fieldEmail = screen.getByTestId('email-field');
    const totalExpenses = screen.getByTestId('total-field');
    const brlCurrency = screen.getByText(/brl/i);

    // -- Elementos relacionados ao Form --

    const fieldValueText = screen.getByText(/valor despesa\.:/i);
    const fieldValue = screen.getByRole('spinbutton');
    userEvent.type(fieldValue, '10');
    expect(fieldValue.value).not.toBe('');

    const coinText = screen.getByText(/moeda\.:/i);

    const payMethodText = screen.getByText(/método de pagamento\.:/i);

    const categoriesText = screen.getByText(/categoria\.:/i);

    const descText = screen.getByText(/descrição\.:/i);
    const fieldDescrip = screen.getByRole('textbox');
    userEvent.type(fieldDescrip, 'teste');
    expect(fieldDescrip.value).not.toBe('');

    const btnAddExp = screen.getByRole('button', { name: /adicionar despesa/i });
    userEvent.click(btnAddExp);

    expect(titleWallet).toBeInTheDocument();
    expect(fieldEmail).toBeInTheDocument();
    expect(totalExpenses).toBeInTheDocument();
    expect(brlCurrency).toBeInTheDocument();
    expect(fieldValueText).toBeInTheDocument();
    expect(fieldValue).toBeInTheDocument();
    expect(coinText).toBeInTheDocument();
    expect(payMethodText).toBeInTheDocument();
    expect(categoriesText).toBeInTheDocument();
    expect(descText).toBeInTheDocument();
    expect(fieldDescrip).toBeInTheDocument();
    expect(btnAddExp).toBeInTheDocument();
  });
});
