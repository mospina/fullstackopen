import React from "react";
import { connect } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = ({ anecdotes, handleVote }) => {
  return (
    <div>
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
              <button onClick={() => handleVote(anecdote)}>vote</button>
            </div>
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  const anecdotes = state.anecdotes.filter(
    (a) => a.content.toLowerCase().search(state.filter) >= 0
  );

  return { anecdotes };
};

const mapDispatchToProps = (dispatch) => {
  const handleVote = (anecdote) => {
    dispatch(vote(anecdote));
    dispatch(setNotification(`you vote for: ${anecdote.content}`, 5));
  };

  return {
    handleVote,
  };
};

const ConnectedAnecdotes = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList);

export default ConnectedAnecdotes;
