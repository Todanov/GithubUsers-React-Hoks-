import React from "react";

export const Repos = ({ repos }) => {
  return (
    <div>
      {repos.map((repo) => (
        <div key={repo.id}>
          <div>
            <a href={repo.html_url}>{repo.name}</a>
          </div>
        </div>
      ))}
    </div>
  );
};
