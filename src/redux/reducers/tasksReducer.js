import { GET_TASKS, ADD_TASK, UPDATE_SEARCH_TEXT } from "../types";

const initialState = {
  tasksList: [],
  searchText: null,
};

export const tasksReducer = (state = initialState, action) => {
  const { type, tasksList, task, searchText } = action;
  switch (type) {
    case GET_TASKS:
      return { ...state, tasksList: tasksList };
    case ADD_TASK:
      const newTaskLists = state.tasksList;
      task.id = newTaskLists[0].boards.length + 1;
      newTaskLists[0].boards.push(task);
      return {
        ...state,
        tasksList: [...state.tasksList, newTaskLists],
      };
    case UPDATE_SEARCH_TEXT:
      return { ...state, searchText: searchText };

    default:
      return state;
  }
};
