"use strict";
const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const addTodo = async (event) => {
  const dynamoDB = new AWS.DynamoDB.DocumentClient();
  const { todo } = JSON.parse(event.body);
  const createdAt = new Date();
  const id = v4();

  console.log("this is an id", id);

  const newTodo = {
    id,
    todo,
    createdAt,
    completed: false,
  };

  await dynamoDB
    .put({
      TableName: "TodoTable",
      Item: newTodo,
    })
    .promise();

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(newTodo),
  };
};

module.exports = {
  handler: addTodo,
};
