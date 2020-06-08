import React, { useContext } from "react";
import s from "./Home.module.css";
import Card from "../Card/Card";
import Search from "../Search/Search";
import { GithubContext } from "../context/github/githubContext";

const Home = () => {
  // const cards = new Array(15).fill("").map((_, i) => i);
  // console.log(cards);
  const { loading, users } = useContext(GithubContext);
  return (
    <div className={s.Home}>
      <div className={s.Home_1}>
        <Search />
      </div>
      <div className={s.Home_2}>
        {loading ? (
          <p>loading....</p>
        ) : (
          users.map((user) => (
            <div className={s.cards} key={user.id}>
              <Card user={user} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
