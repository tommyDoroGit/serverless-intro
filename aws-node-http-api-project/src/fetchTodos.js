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
    body: JSON.stringify(todos),
  };
};

module.exports = {
  handler: fetchTodos,
};
