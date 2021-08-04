var express = require("express");
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const url = "mongodb://localhost:27017";
const dbName = "my-blog";



const withDB = async (operations,res) => {
  try{
   MongoClient.connect(url, async function (err, client) {
      assert.equal(null, err);
   
      // Set the name of the database
      const db = client.db(dbName);
   
     await operations(db);
   
      // CLose the Connection to database      
      client.close();
    });

  } catch (error) {
    res
      .status(500)
      .json({ message: `ERROR CONNECTION TO DATABASE \n ${error}` });
  }
}



router.get("/:name", async function (req, res, next) {
  withDB(async (db) => {
      const articleName = req.params.name;
      // The Article Info
      const articleInfo = await db
          .collection("articles")
          .findOne({ name: articleName });
        res.status(200).json(articleInfo);
  },res);
  });


/* Add Comments  */
router.post("/:name/addcomment", async function (req, res, next) {
  withDB(async (db) => {
      const articleName = req.params.name;
    const { username, text } = req.body;
         // The Article Info Find article
      var articleInfo = await db
        .collection("articles")
        .findOne({ name: articleName });
      await db.collection("articles").updateOne(
        { name: articleName },
        {
          '$set': {
            comments: articleInfo.comments.concat({ username, text }),
          },
        }
      );
      // Get The New Version of the Article after Updateing it
      articleInfo = await db
        .collection("articles")
        .findOne({ name: articleName });

    res.status(200).json(articleInfo);
    
   },res);
});


/* Get the Number of Votes of an Article */
router.get("/:name/upvote", function (req, res, next) {
  withDB(async (db) => {
      const articleName = req.params.name;
     var articleInfo = await db
        .collection("articles")
        .findOne({ name: articleName });
      await db.collection("articles").updateOne(
        { name: articleName },
        {
          '$set': {
            upvote: articleInfo.upvote + 1,
          },
        }
      );
      // Get The New Version of the Article after Updateing it
      articleInfo = await db
        .collection("articles")
        .findOne({ name: articleName });
      
      res.status(200).json(articleInfo);

  },res);

});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("article", {
    title: `${req.body.title}`,
    content: `${req.body.content}`,
  });
});

module.exports = router;
