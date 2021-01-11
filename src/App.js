import React from 'react';
import Profile from './components/profile/Profile';
import user from './data/user.json';
import statistics from './data/statistics.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import Statistic from './components/statistics/Statistic';
import FriendList from './components/friendList/FriendList';
import TransactionHistory from './components/transactionHistory/TransactionHistory';
const App = () => {
  return (
    <>
      <Profile {...user} />
      <Statistic stats={statistics} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};

export default App;
