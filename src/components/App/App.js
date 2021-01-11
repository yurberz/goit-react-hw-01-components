import React from "react";
import styles from "./App.module.css";
import data from "../../data";
import Profile from "../Profile/Profile";
import Statistics from "../Statistics/Statistics";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

function App() {
  return (
    <div className={styles.container}>
      <Profile {...data.user} />

      <Statistics title="Upload stats" stats={data.statisticalData} />
      <Statistics stats={data.statisticalData} />

      <FriendList friends={data.friends} />

      <TransactionHistory items={data.transactions} />
    </div>
  );
}

export default App;
