import { GET_TASKS, ADD_TASK, UPDATE_SEARCH_TEXT } from "../types";
import axios from "axios";
const url = "/db.json";

export const getTasks = (tasksList) => {
  return {
    type: GET_TASKS,
    tasksList,
  };
};

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    task,
  };
};

export const updateSearchText = (searchText) => {
  return {
    type: UPDATE_SEARCH_TEXT,
    searchText,
  };
};

export const fetchTasks = () => {
  return async (dispatch) => {
    // dispatch(setLoader(true));
    try {
      const tasks = await axios.get(url);
      dispatch(getTasks(tasks.data.tasksList));
      // dispatch(setLoader(false));
    } catch (e) {
      console.log(e);
    }
  };
};
