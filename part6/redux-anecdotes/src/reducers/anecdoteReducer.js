const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

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
      return [...state, asObject(action.anecdote)];

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

export const createAnecdote = (anecdote) => {
  return {
    type: "NEW",
    anecdote,
  };
};

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: "INIT_ANECDOTES",
    data: anecdotes,
  };
};

export default reducer;
