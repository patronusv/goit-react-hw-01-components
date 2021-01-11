import React from 'react';

import PropTypes from 'prop-types';
import Wrapper from './styledProfile';

const Profile = ({ name, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <Wrapper>
      <div className="profile">
        <div className="description">
          <img src={avatar} alt="Аватар пользователя" className="avatar" />
          <p className="name">{name}</p>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </div>

        <ul className="stats list">
          <li>
            <span className="label">Followers</span>
            <span className="quantity">{followers}</span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="quantity">{views}</span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="quantity">{likes}</span>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Profile;
Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
Profile.defaultProps = {
  avatar: 'https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png',
};
