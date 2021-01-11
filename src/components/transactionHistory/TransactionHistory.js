import React from 'react';
import TransactionHistoryItem from './transactionHistoryItem/TransactionHistoryItem';
import PropTypes from 'prop-types';
const TransactionHistory = ({ transactions }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(item => (
          <TransactionHistoryItem {...item} key={item.id} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
TransactionHistory.propTypes = {
  transactions: PropTypes.array,
};
