import anecdotesService from "../services/anecdotes";

const reducer = (state = [], action) => {
  console.log("state now: ", state);
  console.log("action", action);

  switch (action.type) {
    case "INIT_ANECDOTES":
      return action.data;
    case "VOTE":
      const updatedAnecdote = state.find((a) => a.id === action.anecdoteId);
      const filteredState = state.filter((a) => a.id !== action.anecdoteId);
      return [
        ...filteredState,
        { ...updatedAnecdote, votes: updatedAnecdote.votes + 1 },
      ];
    case "NEW":
      return [...state, action.data];

    default:
      return state;
  }
};

/* ACTIONS */
export const vote = (id) => {
  return {
    type: "VOTE",
    anecdoteId: id,
  };
};

export const createAnecdote = (data) => {
  return {
    type: "NEW",
    data,
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
