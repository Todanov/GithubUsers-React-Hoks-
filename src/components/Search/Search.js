import React, { useState, useContext } from "react";
import { GithubContext } from "../context/github/githubContext";

const Search = () => {
  const [value, setValue] = useState("");
  const github = useContext(GithubContext);

  const onSubmit = (event) => {
    if (event.key !== "Enter") {
      return;
    }
    if (value.trim()) {
      github.search(value.trim());
    } else {
      console.log("search users");
    }
  };
  return (
    <input
      type="text"
      placeholder="Search name "
      style={{ width: "600px", height: "20px" }}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyPress={onSubmit}
    ></input>
  );
};

export default Search;
