import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline, alt }) => (
  <>
    <span className={isOnline ? styles.active : styles.status}>{isOnline}</span>
    <img className={styles.avatar} src={avatar} alt={alt} width="48" />
    <p className={styles.name}>{name}</p>
  </>
);

FriendListItem.defaultProps = {
  alt: 'user avatar',
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  alt: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
