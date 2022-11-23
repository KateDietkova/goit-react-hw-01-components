import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendsList/FriendList";
import { TransactionHistory } from './TransactionHistory';
import { Box } from "./Box/Box";
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json'
import transactions from 'transactions.json';


export const App = () => {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Box mr={4}>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />

          <Statistics title="Upload stats" stats={data} />
        </Box>
        <FriendList friends={friends} />
      </Box>
      <TransactionHistory transactions={transactions}></TransactionHistory>
    </>
  );
};
