import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { AddTask } from "./NewTaskDialog";
import { updateSearchText } from "../redux/actions/tasks";
import { useDispatch } from "react-redux";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

export const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const handleDialogOpen = () => {
    setOpenModal(true);
  };

  const handleDialogClose = () => {
    setOpenModal(false);
  };

  const handleTextChange = (e) => {
    dispatch(updateSearchText(e.target.value));
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          Kanban board
        </Typography>
        <Button color="inherit" onClick={handleDialogOpen}>
          Add New Task
        </Button>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onChange={handleTextChange}
          />
        </Search>
        <AddTask handleClose={handleDialogClose} open={openModal} />
      </Toolbar>
    </AppBar>
  );
};
