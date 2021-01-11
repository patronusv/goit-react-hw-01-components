import React from 'react';
import Profile from './components/profile/Profile';
import user from './data/user.json';
import statistics from './data/statistics.json';
import friends from './data/friends.json';
import Statistic from './components/statistics/Statistic';
import FriendList from './components/friendList/FriendList';
const App = () => {
  return (
    <>
      <Profile {...user} />
      <Statistic stats={statistics} title="Upload stats" />
      <FriendList friends={friends} />
    </>
  );
};

export default App;
