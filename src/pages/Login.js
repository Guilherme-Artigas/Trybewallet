import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { upDateEmail } from '../redux/actions';
import './Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userEmail: '',
      userPass: '',
      activateButton: true,
    };

    this.handle = this.handle.bind(this);
    this.validateButton = this.validateButton.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { userEmail } = this.state;
    const { dispatch, history: { push } } = this.props;
    dispatch(upDateEmail(userEmail));
    push('/carteira');
  }

  handle({ target: { name, value } }) {
    this.setState({ [name]: value }, () => this.validateButton());
  }

  validateButton() {
    const { userEmail, userPass } = this.state;
    const regexEmail = /\S+@\S+\.\S+/;
    const verifiedEmail = regexEmail.test(userEmail);
    const minimumPasswordSize = 6;
    const verifiedPass = userPass.length >= minimumPasswordSize;
    this.setState({ activateButton: !(verifiedEmail && verifiedPass) });
  }

  render() {
    const { activateButton } = this.state;
    return (
      <section className="login">
        <h1>Trybe 💱 Wallet</h1>
        <input
          type="text"
          placeholder="Usuário"
          data-testid="email-input"
          name="userEmail"
          onChange={ this.handle }
        />
        <input
          type="password"
          placeholder="Senha"
          data-testid="password-input"
          name="userPass"
          onChange={ this.handle }
        />
        <button
          type="button"
          disabled={ activateButton }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </section>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.shape({ push: PropTypes.func }),
};

Login.defaultProps = {
  dispatch: () => {},
  history: { push: () => {} },
};

export default connect()(Login);
