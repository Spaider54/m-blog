
import React from 'react';
import './UpVotesSection.css';

const UpVotesSection = ({articleName,upvote, setArticleInfo}) => {

  const upvoteArticle = async () => {

    const result= await fetch(`/api/articles/${articleName}/upvote`,{method:'GET'});
    const body = await result.json();
    setArticleInfo(body);
    console.log(body);
  }
  return (
    <div className="UpVoteSection">
      <button onClick={upvoteArticle}>+</button>
      <p>This post has been upvoted {upvote} times</p>
    </div>
  );
}

export default UpVotesSection; 