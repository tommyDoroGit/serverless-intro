"use strict";
const AWS = require("aws-sdk");

const updateTodo = async (event) => {
  const dynamoDB = new AWS.DynamoDB.DocumentClient();
  const { completed } = JSON.parse(event.body);
  const { id } = event.pathParameters;

  console.log("this is an id", id);

  await dynamoDB
    .update({
      TableName: "TodoTable",
      Key: { id },
      UpdateExpression: "set completed = :completed",
      ExpressionAttributeValues: { ":completed": completed },
      ReturnValues: "ALL_NEW",
    })
    .promise();

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({
      msg: "Todo updated",
    }),
  };
};

module.exports = {
  handler: updateTodo,
};
