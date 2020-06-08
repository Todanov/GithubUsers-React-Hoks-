import React, { useContext, Fragment, useEffect } from "react";
import s from "./Profile.module.css";
import { GithubContext } from "../context/github/githubContext";
import { Repos } from "../Repository/Repository";

const Profile = ({ match }) => {
  console.log(match);
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext);
  const urlName = match.params.name;

  useEffect(() => {
    getUser(urlName);
    console.log(urlName);
    // getRepos(urlName);
  }, []);
  if (loading) {
    return <p className={s.loading}>loading...</p>;
  }
  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  return (
    <div className={s.Home}>
      <div className={s.information}>
        <div className={s.Profile}>
          <img src={avatar_url} alt={name} className={s.img} />
          <div className={s.bio}>
            {bio && (
              <Fragment>
                <h3>BIO</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <div className={s.link}>
              <a href={html_url} />
              Открыть Профиль
            </div>
            <div className={s.info}> информация о сайтах</div>
            <div className={s.follow}>
              <ul className={s.follow0}>
                {login && (
                  <li>
                    <strong>Username:</strong>
                    {login}
                  </li>
                )}
                {company && (
                  <li>
                    <strong>Company:</strong>
                    {company}{" "}
                  </li>
                )}
                {blog && (
                  <li>
                    <strong>Web-site:</strong>
                    {blog}{" "}
                  </li>
                )}
              </ul>
              <div className={s.follow1}>Подписчики: {followers}</div>
              <div className={s.follow2}>Подписан:{following}</div>
              <div className={s.follow3}>Репозитории :{public_repos}</div>
              <div className={s.follow4}>Gits :{public_gists}</div>
            </div>
          </div>
          <div className={s.name}>
            {name}
            {location && <p>Местоположение: {location}</p>}
          </div>
        </div>
      </div>
      <div className={s.repos}>
        <Repos repos={repos} />
      </div>
    </div>
  );
};

export default Profile;
