const { ddbDocClient } = require("../congifDynomdb");
const { ScanCommand } = require("@aws-sdk/lib-dynamodb");

async function findAll() {
  const params = {
    TableName: BOOKS_TABLE,
  };
  const data = await ddbDocClient.send(new ScanCommand(params));
  return data.Items || [];
}

module.exports = {
  findAll,
};
