import React, { useState } from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { InputAdd } from "./InputAdd";

export const BoardFooter = () => {
  const classes = useStyles();
  const [showInput, setShowInput] = useState(false);

  if (!showInput) {
    return (
      <Button size="small" onClick={handleAddCard}>
        Add New Task
      </Button>
    );
  } else {
    return (
      <form className={classes.boardButton}>
        <InputAdd handleClose={handleCloseInput} />
        <Button color="primary">Add</Button>
      </form>
    );
  }
};
