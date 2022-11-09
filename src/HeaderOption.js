import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./HeaderOption.css";

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <li onClick={onClick} aria-label={title} className="headerOption">
      {Icon && (
        <Icon
          className="headerOption__icon"
          sx={{ height: "1em", width: "1em" }}
        />
      )}
      {avatar && (
        <Avatar
          src={user.photoUrl}
          alt="Avatar Placeholder"
          className="headerOption__icon"
          sx={{ height: "1.2em", width: "1.2em" }}
        >
          {/* This is called optional chaining (?.) */}
          {user?.email[0]}
        </Avatar>
      )}
      <p aria-hidden="true" className="headerOption__title">
        {title}
      </p>
    </li>
  );
}

export default HeaderOption;
