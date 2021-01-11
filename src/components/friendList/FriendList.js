import React from 'react';
import FriendListItem from './friendListItem/FriendListItem';
import PropTypes from 'prop-types';
import Wrapper from './styledFriendList';

const FriendList = ({ friends }) => {
  return (
    <Wrapper>
      <ul className="friend-list list">
        {friends.map(friend => (
          <FriendListItem {...friend} key={friend.id} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default FriendList;
FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
