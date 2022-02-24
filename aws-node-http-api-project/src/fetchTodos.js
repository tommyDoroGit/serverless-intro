"use strict";
const AWS = require("aws-sdk");

const fetchTodos = async (event) => {
  const dynamoDB = new AWS.DynamoDB.DocumentClient();

  let todos;

  try {
    const results = await dynamoDB.scan({ TableName: "TodoTable" }).promise();
    todos = results.Items;
  } catch (err) {
    alert(err);
  }

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(todos),
  };
};

module.exports = {
  handler: fetchTodos,
};
