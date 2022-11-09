import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { LinkedIn } from "@mui/icons-material";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    signOut(auth);
  };

  return (
    <header className="header">
      <div className="header__left">
        <LinkedIn
          className="linkedin"
          sx={{ color: "#0a66c2", fontSize: "2.5rem" }}
        />
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <nav className="header__right">
        <ul>
          <HeaderOption Icon={SearchIcon} title="Search" />
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption avatar={true} title="Me" onClick={logoutOfApp} />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
