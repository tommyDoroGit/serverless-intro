"use strict";
const AWS = require("aws-sdk");

const deleteTodo = async (event) => {
  const dynamoDB = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;

  console.log("this is an id", id);

  await dynamoDB
    .delete({
      TableName: "TodoTable",
      Key: { id },
    })
    .promise();

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Methods": "DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT",
    },
    body: JSON.stringify({
      msg: "Todo deleted",
    }),
  };
};

module.exports = {
  handler: deleteTodo,
};
