import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={s.container}>
      <div className={s.conatainer_l}>Githap Search </div>
      <div className={s.conatainer_r}>
        <ul className={s.conatainer_r_ul}>
          <NavLink to="/" className={s.conatainer_r_ul1}>
            HOME{" "}
          </NavLink>
          <NavLink to="/profile" className={s.conatainer_r_ul1}>
            Profile
          </NavLink>
          <NavLink to="/information" className={s.conatainer_r_ul1}>
            Information
          </NavLink>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
