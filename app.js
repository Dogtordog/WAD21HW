const express = require('express');
const pool = require('./database');
const app = express();
// register the ejs view engine
app.set('view engine', 'ejs');
// listen for requests on port 3000
app.listen(3000);
/* app.get() is used to respond to Get requests, and it takes two arguments:
1- arg1: represents what path/url you want to listen to (e.g., '/' listens to index path)
2- arg2: represents a function that takes in request and response objects */
app.get('/', (req, res) => {
    let title = "Home"
    /* res.sendFile('./views/index.html', { root: __dirname }); */
    res.render('index', {title : title});
   });
   app.get('/posts', (req, res) => {
    let posts = [
     { },
     { },
     ];
     res.render('index', { posts: posts });
    });
app.get('/404', (req, res) => {
    /* res.sendFile('./views/index.html', { root: __dirname }); */
    res.render('404');
   });
app.get('/contactus', (req, res) => {
    /* res.sendFile('./views/index.html', { root: __dirname }); */
    res.render('contactus');
   });
  //from database
   app.get('/posts', async(req, res) => {
    try {
    console.log("get posts request has arrived");
    const posts = await pool.query(
    "SELECT * FROM nodetable"
    );
    res.json(posts.rows);
    } catch (err) {
    console.error(err.message);
    }
   });

   app.get('/posts/:id', async(req, res) => {
    try {
    console.log("get a post request has arrived");
    const posts = await pool.query(
    "SELECT * FROM nodetable WHERE id = $1", [id]
    );
    res.json(posts.rows[0]);
    } catch (err) {
    console.error(err.message);
    }
   });

   app.put('/posts/:id', async(req, res) => {
    try {
    const { id } = req.params;
    const post = req.body;
    console.log("update request has arrived");
    const updatepost = await pool.query(
    "UPDATE nodetable SET (title, body, urllink) = ($2, $3, $4) WHERE id = $1", [id, post.title, post.body, post.urllink]
    );
    res.json(post);
    } catch (err) {
    console.error(err.message);
    }
   });
   app.delete('/posts/:id', async(req, res) => {
    try {
    const { id } = req.params;
    const post = req.body;
    console.log("delete a post request has arrived");
    const deletepost = await pool.query(
    "DELETE FROM nodetable WHERE id = $1", [id]
    );
    res.json(post);
    } catch (err) {
    console.error(err.message);
    }
    });
   
// We will discuss this method next week, when we speak about Middlewares
app.use((req, res) => {
    /* res.status(404).sendFile('./views/404.html', { root: __dirname });*/
     res.status(404).render('404');
    });
    