const express = require('express');
const app = express();
const port = process.env.PORT || 7000;
const searchWiki = require('./wikipediaApi/index');

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/:search', (req, res) => {
  searchWiki(req.params.search)
    .then(result => {
      res.json({ result });
    })
    .catch(error => console.log(error));
})

app.listen(port, () => console.log(`Node server is running on port: ${port}`));