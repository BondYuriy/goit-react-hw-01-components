import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TABLE_TITLE = {
  type: 'Type',
  amount: 'Amount',
  currency: 'Currency',
};

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transaction}>
      <thead>
        <tr>
          <th>{TABLE_TITLE.type}</th>
          <th>{TABLE_TITLE.amount}</th>
          <th>{TABLE_TITLE.currency}</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          const { type, amount, currency, id } = item;

          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TransactionHistory;
