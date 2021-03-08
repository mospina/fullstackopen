const reducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_FILTER":
      return action.filter;
    case "RESET_FILTER":
      return "";
    default:
      return state;
  }
};

/* ACTIONS */
export const changeFilter = (filter) => ({
  type: "CHANGE_FILTER",
  filter,
});

export const resetFilter = () => ({
  type: "RESET_FILTER",
});

export default reducer;
