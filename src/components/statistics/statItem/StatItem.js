import React from 'react';
import PropTypes from 'prop-types';
const StatItem = ({ label, percentage }) => {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
};

export default StatItem;
StatItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
