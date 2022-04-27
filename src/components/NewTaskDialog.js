import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  TextField,
  MenuItem,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "./../redux/actions/tasks";
import { makeStyles } from "@mui/styles";

const catrgories = ["Design", "Task", "Bug", "Story"];

const useStyles = makeStyles(() => ({
  field: {
    margin: 10,
    width: 300,
  },
}));

export const AddTask = ({ handleClose, open }) => {
  const classes = useStyles();
  const { handleSubmit, control } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addTask(data));
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New Task</DialogTitle>
      <DialogContent>
        <form className="root" onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.field}>
            <Controller
              name="title"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="Title"
                  variant="filled"
                  value={value}
                  onChange={onChange}
                  fullWidth
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{ required: "Title required" }}
            />
          </div>
          <div className={classes.field}>
            <Controller
              name="category"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  select
                  fullWidth
                  defaultValue=""
                  label="Category"
                  error={!!error}
                  onChange={onChange}
                  helperText={error ? error.message : null}
                >
                  {catrgories.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              )}
              rules={{ required: "Category required" }}
            />
          </div>
          <div className={classes.field}>
            <Controller
              name="assignTo"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="Assign To"
                  variant="filled"
                  value={value}
                  onChange={onChange}
                  fullWidth
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{ required: "Assign To required" }}
            />
          </div>
          <DialogActions>
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" variant="contained">
              Save
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};
