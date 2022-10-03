import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';

describe('Testando comportamento do componente Wallet', () => {
  it('', () => {
    /* const { history } = */ renderWithRouterAndRedux(<Wallet />);

    // const { pathname } = history.location;
    const titleWallet = screen.getByRole('heading', { name: /wallet/i });
    const fieldEmail = screen.getByText(/email: teste@teste/i);
    const totalExpenses = screen.getByText(/despesas total: r\$ 0/i);
    const brlCurrency = screen.getByText(/brl/i);
    const fieldValueText = screen.getByText(/valor despesa\.:/i);
    const fieldValue = screen.getByRole('spinbutton');
    const coinText = screen.getByText(/moeda\.:/i);
    // within(coinText).getByRole('combobox');
    const payMethodText = screen.getByText(/método de pagamento\.:/i);
    // within(payMethodText).getByRole('combobox');
    const categoriesText = screen.getByText(/categoria\.:/i);
    // within(categoriesText).getByRole('combobox');
    const descText = screen.getByText(/descrição\.:/i);
    const fieldDescrip = screen.getByRole('textbox');
    const btnAddExp = screen.getByRole('button', { name: /adicionar despesa/i });

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

// verificar se existe wallet;
// verificar se existe campo email;
// verificar se existe campo despesas;
// verificar se existe o texto BRL;
// verificar se existe os campo: valor despesa, moeda, met pag, cat, descrição, e o botão adicionar despesa;
// verificar se a rota é /carteira;
