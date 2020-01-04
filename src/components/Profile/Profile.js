import React from 'react';
import PropTypes from 'prop-types';
import Description from './Description/Description';
import Stats from './Stats/Stats';
import styles from './Proflie.module.css';

// eslint-disable-next-line react/prop-types
const Profile = ({ user }) => (
  <div className={styles.profile}>
    <Description user={user} />
    <Stats user={user} />
  </div>
);

Stats.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Profile;
