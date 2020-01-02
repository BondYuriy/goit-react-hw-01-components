import React from 'react';
import Profile from '../Profile/Profile';
import user from '../../data/user.json';
import Statistics from '../Statistics/Statistics';
import stats from '../../data/statistical-data.json';
import FriendList from '../FriendList/FriendList';
import friends from '../../data/friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import items from '../../data/transactions.json';

const App = () => (
  <>
    <Profile user={user} />
    <Statistics stats={stats} title="File upload" />
    <FriendList friends={friends} />
    <TransactionHistory items={items} />
  </>
);

export default App;
