import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <header className="header">
        <h1>Trybe 💱 Wallet</h1>
        <div>
          <p data-testid="email-field">
            Email:
            {' '}
            { email }
          </p>
          <span>
            R$
          </span>
          <p data-testid="total-field">
            { expenses.reduce((acc, curr) => (
              acc + (Number(curr.value) * Number(curr.exchangeRates[curr.currency].ask))
            ), 0).toFixed(2) }
          </p>
          <p data-testid="header-currency-field">
            BRL
          </p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.arrayOf(PropTypes.shape({})),
};

Header.defaultProps = {
  email: 'teste@teste',
  expenses: [],
};

const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => (
  { email, expenses }
);

export default connect(mapStateToProps)(Header);
