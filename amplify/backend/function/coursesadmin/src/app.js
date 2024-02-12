/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/



const { DynamoDBClient } = require('@aws-sdk/client-dynamodb')
const { DeleteCommand, DynamoDBDocumentClient, GetCommand, PutCommand, QueryCommand, ScanCommand } = require('@aws-sdk/lib-dynamodb')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const bodyParser = require('body-parser')
const express = require('express')
const uuid = require('uuid')
const { validation } = require('./courses.validation')

const ddbClient = new DynamoDBClient({ region: process.env.TABLE_REGION })
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient)

let tableName = "courses-prod"

const userIdPresent = false; // TODO: update in case is required to use that definition
const partitionKeyName = "";
const partitionKeyType = "";
const sortKeyName = "";
const sortKeyType = "";
const hasSortKey = sortKeyName !== "";
const path = "/item";
const UNAUTH = 'UNAUTH';
const hashKeyPath = '/:' + partitionKeyName;
const sortKeyPath = hasSortKey ? '/:' + sortKeyName : '';

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

// convert url string param to expected Type
const convertUrlType = (param, type) => {
  switch(type) {
    case "N":
      return Number.parseInt(param)
    default:
      return param
  }
}

/************************************
* HTTP Get method to list objects *
************************************/

app.get('/courses', async function(req, res) {
  const params = {
    TableName: tableName,
  }

  try {
    const data = await ddbDocClient.send(new ScanCommand(params))
    res.json(data.Items)
  } catch (err) {
    res.statusCode = 500;
    res.json({error: 'Could not load items: ' + err.message});
  }
});

app.get('/courses/:id', async function(req, res) {
  const params = {
    TableName: tableName,
    Key: {
      id: req.params.id,
    },
  }

  try {
    const data = await ddbDocClient.send(new GetCommand(params))
    res.json(data.Items)
  } catch (err) {
    res.statusCode = 500;
    res.json({error: 'Could not load items: ' + err.message});
  }
});

app.post('/courses', async function(req, res) {
  const { error } = validation.validate(req.body)

  if(error) {
    res.statusCode = 404
    res.json({ message: error.message })
  }

  const course = {
    ...req.body,
    packages: req.body.packages.map((item) => ({ ...item, id: uuid.v4() }))
  }

  const params = {
    TableName: tableName,
    Item: course
  }

  try {
    const data = await ddbDocClient.send(new PutCommand(params))
    res.json(data.Items)
  } catch (err) {
    res.statusCode = 500;
    res.json({error: 'Could not load items: ' + err.message});
  }
});

app.post('/courses', async function(req, res) {
  const { error } = validation.validate(req.body)

  if(error) {
    res.statusCode = 404
    res.json({ message: error.message })
  }

  const course = {
    ...req.body,
    packages: req.body.packages.map((item) => ({ ...item, id: uuid.v4() }))
  }

  const params = {
    TableName: tableName,
    Item: course
  }

  try {
    const data = await ddbDocClient.send(new PutCommand(params))
    res.json(data.Items)
  } catch (err) {
    res.statusCode = 500;
    res.json({error: 'Could not load items: ' + err.message});
  }
});

app.delete('/course/:id', async function(req, res) {
  const { id } = req.params

  let removeItemParams = {
    TableName: tableName,
    Key: id
  }

  try {
    let data = await ddbDocClient.send(new DeleteCommand(removeItemParams));
    res.json({url: req.url, data: data});
  } catch (err) {
    res.statusCode = 500;
    res.json({error: err, url: req.url});
  }
});

app.listen(3000, function() {
  console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
