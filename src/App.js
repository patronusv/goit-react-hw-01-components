import React from 'react';
import Profile from './components/profile/Profile';
import user from './data/user.json';
import statistics from './data/statistics.json';
import Statistic from './components/statistics/Statistic';
const App = () => {
  return (
    <>
      <Profile {...user} />
      <Statistic stats={statistics} title="Upload stats" />
    </>
  );
};

export default App;
