const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const db = require('../db/');

const path = '/Users/partypeoplegames/13 weeks/FEC/photoGallery/client';
const picsPath = 'https://s3.amazonaws.com/fecphotogallery2019/photos/';
app.use(bodyParser.json({ urlencoded: false }));
app.use(express.static(__dirname + path));

//user clicks a specific image, image loads in large view

app.get('/photo' + photoPath, (req, res) => {
  console.log('querying photos from DB');
  //look at this
});

//user selects a product, get all images for that product
app.get('/', (req, res) => {
  console.log('querying photos from DB');

});

//LOOK I MADE SOME MORE CHANGES

const PORT = 3210;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})