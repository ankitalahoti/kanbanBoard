import React from "react";
import { makeStyles } from "@mui/styles";
import { Divider, Grid, Paper } from "@mui/material";
import { BoardsList } from "./BoardsList";
import { BoardHeader } from "./BoardHeader";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  root: {
    padding: 8,
    display: "flex",
    flex: "1 1 auto",
    height: "100%",
  },
  boardsWrap: {
    display: "flex",
    flex: "1 1 auto",
    overflowX: "auto",
    overflowY: "hidden",
    height: "100%",
  },
  boardsContent: {
    display: "flex",
    paddingTop: "24px",
    paddingBottom: "24px",
    height: "100%",
  },
  boardCard: {
    width: "380px",
    display: "flex",
    maxHeight: "100%",
    overflowX: "hidden",
    overflowY: "hidden",
    margin: "16px",
    flexDirection: "column",
  },
}));

const TasksPage = () => {
  const classes = useStyles();
  const tasks = useSelector((state) => state.tasks.tasksList);

  return (
    <>
      <Grid container className={classes.root} spacing={3}>
        <Grid container className={classes.boardsWrap}>
          <Grid className={classes.boardsContent}>
            {tasks &&
              tasks.map((task) => {
                return (
                  <Paper key={task.id} className={classes.boardCard}>
                    <BoardHeader title={task.title} />
                    <Divider />
                    <BoardsList boards={task.boards} />
                    <Divider />
                  </Paper>
                );
              })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default TasksPage;
