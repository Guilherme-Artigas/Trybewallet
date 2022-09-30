import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI } from '../redux/actions';
import './WalletForm.css';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAPI());
  }

  render() {
    const { currencies } = this.props;

    return (
      <form className="form">
        <label htmlFor="valorDespesa">
          Valor Despesa:
          {' '}
          <input
            type="number"
            data-testid="value-input"
          />
        </label>
        <label htmlFor="moeda">
          Moeda:
          {' '}
          <select data-testid="currency-input">
            {currencies.map((e, i) => (
              <option key={ `${e.name}-${i}` }>{e}</option>
            ))}
          </select>
        </label>
        <label htmlFor="metodoPagamento">
          Método de Pagamento.:
          {' '}
          <select data-testid="method-input">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Categoria.:
          {' '}
          <select data-testid="tag-input">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="descricão">
          Descrição:
          {' '}
          <input
            type="text"
            data-testid="description-input"
          />
        </label>
      </form>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func,
  currencies: PropTypes.arrayOf(PropTypes.string),
};

WalletForm.defaultProps = {
  dispatch: () => {},
  currencies: [],
};

const mapStateToProps = ({ wallet }) => wallet;

export default connect(mapStateToProps)(WalletForm);
