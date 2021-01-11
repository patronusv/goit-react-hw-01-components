import React from 'react';
import PropTypes from 'prop-types';
import Li from './styledFriendListItem';
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Li className="item">
      {isOnline ? (
        <span
          className="status"
          style={{
            display: 'inline-block',
            width: '15px',
            height: '15px',
            borderRadius: '50%',
            backgroundColor: 'green',
          }}
        ></span>
      ) : (
        <span
          className="status"
          style={{
            display: 'inline-block',
            width: '15px',
            height: '15px',
            borderRadius: '50%',
            backgroundColor: 'red',
          }}
        ></span>
      )}

      <img className="avatar" src={avatar} alt={name + "'s avatar"} width="48" />
      <p className="name">{name}</p>
    </Li>
  );
};

export default FriendListItem;
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
