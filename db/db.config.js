const aws = require('aws-sdk');

aws.config.update({
    region:"us-east-1",
    accessKeyId:process.env.ACCESS_KEY,
    secretAccessKey:process.env.SECRET_ACCESS_KEY
})

const db = new aws.DynamoDB.DocumentClient()
const table = 'product'

module.exports = {
    db,
    table
};

