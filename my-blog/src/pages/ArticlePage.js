import React,{useState,useEffect} from "react";
import './ArticlePage.css';
import articles from "./article-content";
import ArticlesList from "../components/ArticlesList";
import CommenstList from "../components/CommenstList";
import AddCommentForm from "../components/AddCommentForm";
import UpVotesSection from "../components/UpVotesSection";
const ArticlePage = ({ match }) => {

  const name = match.params.name;
  const article = articles.find(article => article.name === name);
  const othersarticles = articles.filter((article) => article.name !== name);
  
  const [articleInfo, setArticleInfo] = useState({name:'', upvote: 0, comments: [] });
  useEffect(() => {
      const fetchData = async () => {
        console.log(`The Name is of article Target : ${name}`);
        const result = await fetch(`/api/articles/${name}`);
        const data = await result.json();
        setArticleInfo(data);
      };
      fetchData();
    
   }, [name]);
  
  if(!article) return <h1> The Article Does not existe !!!!</h1>
  return (
    <>
      <h1 id="title"> {article.title} </h1>

      <p>
        {article.content.map((pg, key) => (
          <p key={key}>{pg}</p>
        ))}
      </p>
      <UpVotesSection
        articleName={name}
        upvote={articleInfo.upvote}
        setArticleInfo={setArticleInfo}
      />
      
      <CommenstList comments={articleInfo.comments} />
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
      <h3>Other Articles : </h3>
      <ArticlesList articles={othersarticles} />
    </>
  );
};

export default ArticlePage;
