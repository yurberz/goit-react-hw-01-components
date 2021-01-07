import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}

function FriendListItem({ id, avatar, name, isOnline }) {
  const status = isOnline ? styles.online : styles.offline;
  return (
    <li className={styles.item} key={id}>
      <span className={status}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.defaultProps = {
  isOnline: true,
};

FriendListItem.propTypes = {
  id: PropTypes.string,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

export default FriendList;
