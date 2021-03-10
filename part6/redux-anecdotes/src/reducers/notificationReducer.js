const reducer = (state = null, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return action.data;
    case "REMOVE_NOTIFICATION":
      return null;
    default:
      return state;
  }
};

/* ACTIONS */
export const setNotification = (content, timer) => {
  return (dispatch, getState) => {
    const { notification } = getState();

    if (notification) {
      clearTimeout(notification.id);
    }

    const id = setTimeout(() => {
      dispatch(removeNotification());
    }, timer * 1000);

    dispatch({
      type: "SET_NOTIFICATION",
      data: {
        content,
        id,
      },
    });
  };
};

const removeNotification = () => ({
  type: "REMOVE_NOTIFICATION",
});

export default reducer;
