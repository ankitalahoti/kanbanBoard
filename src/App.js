import React from "react";
import { Header } from "./components/Header";
import TasksPage from "./components/TasksPage";
import { CssBaseline } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flex: "1 1 auto",
    padding: "64px 15px 15px",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <main className={classes.content}>
          <TasksPage />
        </main>
      </div>
    </>
  );
};

export default App;
