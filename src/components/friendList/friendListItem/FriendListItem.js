import React from 'react';
import PropTypes from 'prop-types';
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      {isOnline ? (
        <span
          className="status"
          style={{
            display: 'inline-block',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: 'green',
          }}
        ></span>
      ) : (
        <span
          className="status"
          style={{
            display: 'inline-block',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: 'red',
          }}
        ></span>
      )}

      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
