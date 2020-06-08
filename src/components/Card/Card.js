import React from "react";
import s from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ user }) => {
  return (
    <div className={s.container}>
      <div className={s.card}>
        <div className={s.info}>
          <div className={s.img}>
            <img
              src={user.avatar_url}
              alt={user.login}
              style={{ width: "120px", height: " 120px" }}
            />
          </div>
          <div className={s.text}>
            <h5>{user.login}</h5>
            <div className={s.link}>
              <Link to={"/profile/" + user.login}> Profile </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
