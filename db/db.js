//AWS S3 bucket: fecphotogallery2019
//https://s3-<location>.amazonaws.com/fecphotogallery2019/photos

const pg = require('pg');
const pool = new pg.Pool({
  user: 'partypeoplegames',
  host: '127.0.0.1',
  database: 'photoGallery',
  password: '',
  port: '3210'
});

//user clicks a product
const getProductPics = (cb) => {

}

//
const getViewPic = (cb) => {

}

// pool.query(“SELECT NOW() ”, (err, res) => {
//   console.log(err, res);
//   pool.end();
// });

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

module.exports = { getViewPic, getProductPics }