import React from 'react';
import StatItem from './statItem/StatItem';
import PropTypes from 'prop-types';
import Wrapper from './styledStatistic';
const Statistic = ({ stats, title = '' }) => {
  return (
    <Wrapper>
      <section className="statistics">
        {title !== '' ? <h2 className="title">Upload stats</h2> : null}
        <ul className="stat-list list">
          {stats.map(stat => (
            <StatItem {...stat} key={stat.id} />
          ))}
        </ul>
      </section>
    </Wrapper>
  );
};

export default Statistic;
Statistic.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};
