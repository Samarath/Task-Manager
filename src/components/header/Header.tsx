import React from "react";
import classes from "./header.module.scss";
import Image from "next/image";
import LogoutBtn from "@/assests/svg-icons/Logout";
import BGTaskIcon from "@/assests/svg-icons/B&GTaskIcon";

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <span className={classes.icon}>
          <BGTaskIcon />
        </span>{" "}
        Task Buddy
      </div>
      <div className={classes.container}>
        <div className={classes.userSection}>
          {/* <Image width={50} height={50} alt="user-img" src={"null"} /> */}
          User
        </div>
        <div className={classes.logoutBtn}>
          <LogoutBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
