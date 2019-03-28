const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const db = require('../db');

const path = '/Users/partypeoplegames/13 weeks/FEC/photoGallery/client';
app.use(bodyParser.json({ urlencoded: false }));
app.use(express.static(__dirname + path));


const photoPath = '?' + '';
app.get('/photo' + photoPath, (req, res) => {
  console.log('querying photos from DB');

});

//LOOK I MADE SOME MORE CHANGES

const port = 3210;
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})