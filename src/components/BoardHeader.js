import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  boardHeader: {
    padding: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export const BoardHeader = ({ title }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.boardHeader}>
      <Typography component="h6" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>
    </Grid>
  );
};
