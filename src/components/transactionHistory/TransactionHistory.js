import React from 'react';
import TransactionHistoryItem from './transactionHistoryItem/TransactionHistoryItem';
import PropTypes from 'prop-types';
import Wrapper from './styledTransactionHistory';
const TransactionHistory = ({ transactions }) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default TransactionHistory;
TransactionHistory.propTypes = {
  transactions: PropTypes.array,
};
