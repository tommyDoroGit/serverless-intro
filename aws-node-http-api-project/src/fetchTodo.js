"use strict";
const AWS = require("aws-sdk");

const fetchTodo = async (event) => {
  const dynamoDB = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;

  let todo;

  try {
    const result = await dynamoDB
      .get({ TableName: "TodoTable", Key: { id } })
      .promise();
    todo = result.Item;
  } catch (err) {
    alert(err);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(todo),
  };
};

module.exports = {
  handler: fetchTodo,
};
