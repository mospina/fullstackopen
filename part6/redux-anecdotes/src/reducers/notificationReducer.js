const reducer = (state = null, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return action.notification;
    case "REMOVE_NOTIFICATION":
      return null;
    default:
      return state;
  }
};

/* ACTIONS */
export const setNotification = (notification, timer) => {
  return (dispatch) => {
    dispatch({
      type: "SET_NOTIFICATION",
      notification,
    });
    setTimeout(() => {
      dispatch(removeNotification());
    }, timer * 1000);
  };
};

const removeNotification = () => ({
  type: "REMOVE_NOTIFICATION",
});

export default reducer;
