import React from 'react';
import FriendListItem from './friendListItem/FriendListItem';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendListItem {...friend} key={friend.id} />
      ))}
    </ul>
  );
};

export default FriendList;
FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
