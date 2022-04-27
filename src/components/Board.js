import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  boardCard: {
    width: "300px",
    display: "flex",
    maxHeight: "100%",
    overflowX: "hidden",
    overflowY: "hidden",
    marginLeft: "8px",
    marginRight: "8px",
    flexDirection: "column",
  },
  boardHeader: {
    padding: 4,
    alignItems: "center",
    justifyContent: "space-between",
  },
  boardHeaderButton: {
    marginRight: "-12px",
  },
  boardButton: {
    padding: 8,
    justifyContent: "center",
  },
  divider: {
    marginTop: 8,
  },
  cardRoot: {
    margin: 15,
  },
  details: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    paddingBottom: 4,
  },
  bottomBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
}));

const borderColors = {
  Bug: "red",
  Task: "#00ffff",
  Design: "#b31aff",
  Story: "#ffcc00",
};

export const Board = ({ board }) => {
  const props = {
    color: borderColors[board.category],
  };
  const classes = useStyles(props);

  return (
    <Card
      className={clsx(classes.cardRoot)}
      variant="outlined"
      sx={{
        borderLeft: `5px solid ${borderColors[board.category]}`,
      }}
    >
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6">{board.title}</Typography>
          <Grid item xs={12} className={classes.bottomBox}>
            {board.category && (
              <Chip
                size="small"
                label={board.category}
                sx={{
                  backgroundColor: `${borderColors[board.category]}`,
                }}
              />
            )}
            <Avatar
              sx={{
                height: 30,
                width: 30,
              }}
            >
              {board.assignTo.substring(0, 2)}
            </Avatar>
          </Grid>
        </CardContent>
      </div>
    </Card>
  );
};
