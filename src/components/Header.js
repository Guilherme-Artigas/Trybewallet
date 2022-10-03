import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, total } = this.props;
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
            { total.toFixed(2) }
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
  total: PropTypes.number,
};

Header.defaultProps = {
  email: 'teste@teste',
  total: 0,
};

const mapStateToProps = ({ user: { email }, wallet: { total } }) => (
  { email, total }
);

export default connect(mapStateToProps)(Header);
