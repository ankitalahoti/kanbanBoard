import React from "react";
import { Grid } from "@mui/material";
import { Board } from "./Board";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  boardContent: {
    overflowY: "auto",
    height: "100%",
  },
}));

export const BoardsList = ({ boards }) => {
  const classes = useStyles();
  const searchText = useSelector((state) => state.tasks.searchText);
  let filteredTasks = [];
  if (searchText) {
    filteredTasks = boards.filter((board) =>
      board.title.toLowerCase().startsWith(searchText.toLowerCase())
    );
  }
  const filteredTasksList = searchText ? filteredTasks : boards;

  return (
    <Grid className={classes.boardContent}>
      {filteredTasksList &&
        filteredTasksList.map((board) => (
          <Grid key={board.id} item xs={12}>
            <Board board={board} />
          </Grid>
        ))}
    </Grid>
  );
};
