import React from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log("anecdotes now: ", anecdotes);

  const vote = (id) => {
    console.log("vote", id);
    dispatch({
      type: "VOTE",
      anecdoteId: id,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const anecdote = event.target.anecdote.value;
    event.target.anecdote.value = "";
    console.log("new", anecdote);
    dispatch({
      type: "NEW",
      anecdote,
    });
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes
        .sort((a, b) => {
          if (a.votes > b.votes) return -1;
          else return 1;
        })
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        ))}
      <h2>create new</h2>
      <form onSubmit={onSubmit}>
        <div>
          <input name="anecdote" id="newAnecdote" type="text" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default App;
