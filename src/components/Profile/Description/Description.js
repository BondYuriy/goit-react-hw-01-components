import React from 'react';
import PropTypes from 'prop-types';
import styles from './Description.module.css';

const Description = ({ user: { avatar, alt, name, tag, location } }) => (
  <div className={styles.description}>
    <img className={styles.avatar} src={avatar} alt={alt} />
    <p className={styles.name}>{name}</p>
    <p className={styles.tag}>{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>
);

Description.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  alt: 'user avatar',
};

Description.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    alt: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default Description;
