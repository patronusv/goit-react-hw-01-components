import React from 'react';
import PropTypes from 'prop-types';
import Li from './styledStatItem';
const StatItem = ({ label, percentage }) => {
  return (
    <Li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </Li>
  );
};

export default StatItem;
StatItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
