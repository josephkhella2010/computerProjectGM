/* const { ddbDocClient } = require("../awsConfig/AwsConfig");
const { ScanCommand } = require("@aws-sdk/lib-dynamodb");

const PRODUCTS_TABLE = "Product"; // replace with your actual DynamoDB table name

async function findAllProducts() {
  const params = {
    TableName: PRODUCTS_TABLE,
  };

  const data = await ddbDocClient.send(new ScanCommand(params));
  return data.Items || [];
}

module.exports = {
  findAllProducts,
}; */
// DynamoDBFunction.js
/* 
const { ddbDocClient } = require("../awsConfig/AwsConfig");
const { ScanCommand } = require("@aws-sdk/lib-dynamodb");
require("dotenv").config();

const PRODUCTS_TABLE = "Product"; // Make sure this matches your actual DynamoDB table name

async function findAllProducts() {
  const params = {
    TableName: PRODUCTS_TABLE,
  };

  try {
    const data = await ddbDocClient.send(new ScanCommand(params));
    return data.Items || [];
  } catch (error) {
    console.error("🔥 DynamoDB error in findAllProducts:", error); // ✅ ADDED for debugging
    throw error; // Re-throw to handle in route
  }
}

module.exports = {
  findAllProducts,
};
 */
