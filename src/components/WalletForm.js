import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiCoins, fetchApiWallet, upDateWallet } from '../redux/actions';
import './WalletForm.css';

class WalletForm extends Component {
  state = {
    id: -1,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    exchangeRates: {},
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchApiCoins());
  }

  handle = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleClick = async () => {
    const objectCoins = await fetchApiWallet();
    this.setState((prev) => ({
      id: prev.id + 1,
      exchangeRates: objectCoins,
    }), () => {
      const { dispatch } = this.props;
      dispatch(upDateWallet(this.state));
      this.setState({ value: '', description: '' });
    });
  };

  render() {
    const { currencies } = this.props;
    const { value, description } = this.state;

    return (
      <form className="form">
        <label htmlFor="valorDespesa">
          Valor Despesa.:
          {' '}
          <input
            type="number"
            data-testid="value-input"
            name="value"
            value={ value }
            onChange={ this.handle }
          />
        </label>
        <label htmlFor="moeda">
          Moeda.:
          {' '}
          <select data-testid="currency-input" name="currency" onChange={ this.handle }>
            {currencies.map((e, i) => (
              <option key={ `${e.name}-${i}` }>{e}</option>
            ))}
          </select>
        </label>
        <label htmlFor="metodoPagamento">
          Método de Pagamento.:
          {' '}
          <select data-testid="method-input" name="method" onChange={ this.handle }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Categoria.:
          {' '}
          <select data-testid="tag-input" onChange={ this.handle } name="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="descricão">
          Descrição.:
          {' '}
          <input
            type="text"
            data-testid="description-input"
            name="description"
            value={ description }
            onChange={ this.handle }
          />
        </label>
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
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
