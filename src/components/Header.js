import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <header className="header">
        <h1>Trybe 💱 Wallet</h1>
        <div>
          <p data-testid="email-field">
            Email:
            {' '}
            { email }
          </p>
          <p data-testid="total-field">
            Despesas Total:
            R$
            {' '}
            {0}
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
  email: PropTypes.string.isRequired,
};

const mapStateToProps = ({ user }) => user;

export default connect(mapStateToProps)(Header);
