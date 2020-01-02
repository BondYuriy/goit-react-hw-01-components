import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatList.module.css';

const StatList = ({ stats }) => {
  return (
    <ul className={styles.list}>
      {stats.map(stat => {
        const { id, label, percentage } = stat;

        return (
          <li key={id} className={styles.item}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{`${percentage}%`}</span>
          </li>
        );
      })}
    </ul>
  );
};

StatList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  stats: PropTypes.array.isRequired,
};

export default StatList;
