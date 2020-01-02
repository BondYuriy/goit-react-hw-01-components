import React from 'react';
import PropTypes from 'prop-types';
import StatList from './StatList/StatList';
import styles from './Statistics.module.css';

const Statistics = ({ stats, title }) => (
  <section className={styles.statistics}>
    {title.length > 0 && <h2 className={styles.title}>{title}</h2>}
    <StatList stats={stats} />
  </section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  stats: PropTypes.array.isRequired,
};

export default Statistics;
