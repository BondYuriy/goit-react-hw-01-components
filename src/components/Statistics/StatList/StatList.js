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
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      percentage: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default StatList;
