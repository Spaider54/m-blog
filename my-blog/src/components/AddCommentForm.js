
import React,{useState} from 'react';
import "./AddCommentForm.css";

const AddCommentForm = ({ articleName, setArticleInfo }) => {

  const [username, setUsername] = useState('');
  const [commentText, setCommentText] = useState('');
  const UpdateCommennts = async () => {
    if (
      username === "" ||
      commentText === "" ||
      (username === "" &&
      commentText === "")
    ) {
      alert(
        "Hi Sir ,\nUsername OR Comment is Empty !!\n Try again .Thank you .."
      );

    } else {
      const result = await fetch(`/api/articles/${articleName}/addcomment`, {
        method: "POST",
        body: JSON.stringify({ username, text: commentText }),
        headers: {
          'Content-Type':'application/json',
        }
      });
      // Get The Resposne of The New Data In The ArticleName
      const body = await result.json();
      console.log(body);
      // Update the Article Page Satate
      setArticleInfo(body);
      // Reset the form 
      setUsername('');
      setCommentText('');

    }}

  return (
    <div className="addComment">
      <h3 id="addComment-text">Add Comment : </h3>
      <label>
        <p>Name :</p>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label>
        <p>Comment :</p>
        <textarea
          rows="4"
          cols="50"
          value={commentText}
          onChange={(event) => setCommentText(event.target.value)}
        />
      </label>
      <button onClick={UpdateCommennts}>Add Comment</button>
    </div>
  );
}
export default AddCommentForm; 