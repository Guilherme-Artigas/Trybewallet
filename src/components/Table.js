import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Table.css';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table className="tabela">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((e) => (
            <tr key={ e.id }>
              <td>{e.description}</td>
              <td>{e.tag}</td>
              <td>{e.method}</td>
              <td>{Number(e.value).toFixed(2)}</td>
              <td>{e.exchangeRates[e.currency].name}</td>
              <td>{Number(e.exchangeRates[e.currency].ask).toFixed(2)}</td>
              <td>
                {(Number(e.value) * Number(e.exchangeRates[e.currency].ask)).toFixed(2)}
              </td>
              <td>{e.exchangeRates[e.currency].codein}</td>
              <td>
                <button
                  type="button"
                  className="btnEdit"
                >
                  Editar
                </button>
                <button
                  type="button"
                  className="btnDelete"
                  data-testid="delete-btn"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({})),
};

Table.defaultProps = {
  expenses: [],
};

const mapStateToProps = ({ wallet }) => wallet;

export default connect(mapStateToProps)(Table);
