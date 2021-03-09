import anecdotesService from "../services/anecdotes";

const reducer = (state = [], action) => {
  console.log("state now: ", state);
  console.log("action", action);

  switch (action.type) {
    case "INIT_ANECDOTES":
      return action.data;
    case "VOTE":
      const filteredState = state.filter((a) => a.id !== action.data.id);
      return [...filteredState, action.data];
    case "NEW":
      return [...state, action.data];

    default:
      return state;
  }
};

/* ACTIONS */
export const vote = (anecdote) => {
  return async (dispatch) => {
    const changes = { ...anecdote, votes: anecdote.votes + 1 };
    const data = await anecdotesService.update(anecdote.id, changes);
    dispatch({
      type: "VOTE",
      data,
    });
  };
};

export const createAnecdote = (anecdote) => {
  return async (dispatch) => {
    const data = await anecdotesService.create({
      content: anecdote,
      votes: 0,
    });
    dispatch({
      type: "NEW",
      data,
    });
  };
};

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdotesService.getAll();
    dispatch({
      type: "INIT_ANECDOTES",
      data: anecdotes,
    });
  };
};

export default reducer;
