import "./App.css";

import { TwitterFollowCard } from "./TwitterFollowCard";

const formatUserName = (userName) => `@${userName}`;
const users = [
  {
    userName: "luisfejaramillor",
    name: "Luis JARAMILLO",
  },
  {
    userName: "midudev",
    name: "Miguel Durán",
  },
  {
    userName: "elonmuskr",
    name: "Elon Musk",
  },
];

export const App = () => {
  return (
    <section className="App">
      {users.map(user => {
        return (
          <TwitterFollowCard
            formatUserName={formatUserName}
            userName={user.userName}
            name={user.name}
            key={user.userName}
          />
        );
      })}
    </section>
  );
};
