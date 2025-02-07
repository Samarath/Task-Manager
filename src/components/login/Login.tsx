import classes from "./login.module.scss";
import TaskIcon from "../../assests/svg-icons/TaskIcon";

import HomeCircleIcon from "@/assests/svg-icons/HomeCircleIcon";
import { Button } from "@mui/material";
import GoogleIcon from "@/assests/svg-icons/GoogleIcon";
import React from "react";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
  const navigation = useRouter();
  return (
    <div className={classes["login-container"]}>
      <div className={classes["content"]}>
        <h1 className={classes["title"]}>
          <span className={classes["icon"]}>
            <TaskIcon />
          </span>{" "}
          Task Buddy
        </h1>
        <p className={classes["sub-title"]}>
          Streamline your workflow and track progress effortlessly with our
          all-in-one task management app.
        </p>
        <div
          className={classes["login-btn"]}
          onClick={() => navigation.push("/task")}
        >
          <Button
            variant="outlined"
            color="primary"
            className={classes["g-btn"]}
          >
            <span className={classes["icon"]}>
              <GoogleIcon />
            </span>{" "}
            Continue with Google
          </Button>
        </div>
      </div>
      <div className={classes["icon-design"]}>
        <HomeCircleIcon width="745" height="773" />
      </div>
    </div>
  );
};
export default Login;
