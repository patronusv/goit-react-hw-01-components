import React from 'react';
import Profile from './components/profile/Profile';
import user from './data/user.json';
const App = () => {
  return (
    <>
      <Profile {...user} />;
    </>
  );
};

export default App;
