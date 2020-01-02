import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.list}>
      {friends.map(friend => {
        const { avatar, name, isOnline, id } = friend;
        return (
          <li className={styles.item} key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  friends: PropTypes.array.isRequired,
};

export default FriendList;
