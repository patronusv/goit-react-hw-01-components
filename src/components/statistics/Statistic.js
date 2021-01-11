import React from 'react';
import StatItem from './statItem/StatItem';
import PropTypes from 'prop-types';
const Statistic = ({ stats, title = '' }) => {
  return (
    <section className="statistics">
      {title !== '' ? <h2 className="title">Upload stats</h2> : null}
      <ul className="stat-list list">
        {stats.map(stat => (
          <StatItem {...stat} key={stat.id} />
        ))}
      </ul>
    </section>
  );
};

export default Statistic;
Statistic.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};
