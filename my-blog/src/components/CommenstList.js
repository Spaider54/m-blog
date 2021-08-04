
import React from 'react';
import "./CommentsList.css";

const CommentsList = ({comments}) => {
  return (
    <>
      <h3>Comments : </h3>
      <div className="comments-list">
        {comments.length === 0 ? (
          <h4> No Comment Found , Add One</h4>
        ) : (
          comments.map((comment, key) => (
            <div className="comment" key={key}>
              <h3>{comment.username}</h3>
              <p>{comment.text}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}
export default CommentsList;
/*
       {comments.map((comment, key) => (
        <div className="comment" key={key}>
          <h3>{comment.username}</h3>
          <p>{comment.text}</p>
        </div>
      ))}

      */