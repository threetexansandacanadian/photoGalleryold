//AWS S3 bucket: fecphotogallery2019
//'https://s3.amazonaws.com/fecphotogallery2019/photos/';

const pg = require('pg');
const pool = new pg.Pool({
  user: 'partypeoplegames',
  host: '127.0.0.1',
  database: 'photoGallery',
  password: '',
  port: '3211'
});

let productId = '1';
let photoId = '1';

// user clicks a product, send back all product photos object
const getProductPics = (productId, (cb) => {
  pool.query(`SELECT * FROM photos WHERE product_id = ${productId}`, (error, results) => {
    if (error) {
      console.log('could not load pictures for product id :', productId, ' error:', errror);
      cb(error);
    } else {
      cb(null, result);
    }
  });
});

// user clicks a photo, send back one photo object
const getViewPic = (photoId, cb) => {
  pool.query(`SELECT url FROM photos WHERE id = ${photoId}`, (error, result) => {
    if (error) {
      console.log('could not load picture by id :', photoId, ' error:', error);
      cb(error);
    } else {
      cb(null, result);
    }
  });
};

let policyAWS = {
  "Id": "Policy1553802725184",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt1553802718887",
      "Action": [
        "s3:GetBucketAcl",
        "s3:GetBucketCORS",
        "s3:GetBucketLocation",
        "s3:GetBucketLogging",
        "s3:GetBucketNotification",
        "s3:GetBucketPolicy",
        "s3:GetBucketPolicyStatus",
        "s3:GetBucketPublicAccessBlock",
        "s3:GetBucketRequestPayment",
        "s3:GetBucketTagging",
        "s3:GetBucketVersioning",
        "s3:GetBucketWebsite",
        "s3:GetEncryptionConfiguration",
        "s3:GetInventoryConfiguration",
        "s3:GetLifecycleConfiguration",
        "s3:GetMetricsConfiguration",
        "s3:GetObject",
        "s3:GetObjectAcl",
        "s3:GetObjectTagging",
        "s3:GetObjectTorrent",
        "s3:GetObjectVersion",
        "s3:GetObjectVersionAcl",
        "s3:GetObjectVersionForReplication",
        "s3:GetObjectVersionTagging",
        "s3:GetObjectVersionTorrent",
        "s3:GetReplicationConfiguration"
      ],
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::fecphotogallery2019",
      "Principal": {
        "AWS": [
          "\"Principal\": \"*\""
        ]
      }
    }
  ]
}

module.exports = { getProductPics, getViewPic }