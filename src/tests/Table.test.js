import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testes do componente Table', () => {
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

    // const fieldValue = screen.getByRole('spinbutton');
    // userEvent.type(fieldValue, '10');
    // const fieldDescrip = screen.getByRole('textbox');
    // userEvent.type(fieldDescrip, 'teste');

    // const btnAddExp = screen.getByRole('button', { name: /adicionar despesa/i });
    // userEvent.click(btnAddExp);

    // const expDescrp = screen.getByRole('cell', { name: /teste/i });
    // expect(expDescrp).toBeInTheDocument();
  });
});

// const tableHeader = screen.getByRole('columnheader', { name: /descrição/i });
// const descrip = screen.getByRole('columnheader', { name: /descrição/i });
// const tag = screen.getByRole('columnheader', { name: /tag/i });
// const currency = screen.getByRole('columnheader', { name: /câmbio utilizado/i });
// const value = screen.getByRole('columnheader', { name: /valor convertido/i });
// const coin = screen.getByRole('columnheader', { name: /moeda de conversão/i });
// const btnfield = screen.getByRole('columnheader', { name: /editar\/excluir/i });

// expect(tableHeader).toBeInTheDocument();
// expect(descrip).toBeInTheDocument();
// expect(tag).toBeInTheDocument();
// expect(currency).toBeInTheDocument();
// expect(value).toBeInTheDocument();
// expect(coin).toBeInTheDocument();
// expect(btnfield).toBeInTheDocument();
