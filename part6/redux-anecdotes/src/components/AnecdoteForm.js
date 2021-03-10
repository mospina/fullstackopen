import React from "react";
import { connect } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteForm = ({ handleCreateAnecdote }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    const anecdote = event.target.anecdote.value;
    event.target.anecdote.value = "";
    console.log("new", anecdote);
    handleCreateAnecdote(anecdote);
  };

  return (
    <div>
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

const mapDispatchToProps = (dispatch) => {
  const handleCreateAnecdote = (anecdote) => {
    dispatch(createAnecdote(anecdote));
    dispatch(setNotification(`you added: ${anecdote}`, 5));
  };
  return { handleCreateAnecdote };
};

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm);

export default ConnectedAnecdoteForm;
