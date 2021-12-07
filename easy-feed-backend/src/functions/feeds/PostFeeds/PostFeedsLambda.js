"use strict";
const AWS = require('aws-sdk')
const dotenv = require('dotenv')

module.exports.PostFeedsLambda = async (event, context) => {
  // const split = context.invokedFunctionArn.split(':'),
  //       topic = `arn:aws:sns:${split[3]}:${split[4]}:${process.env.TOPIC_NAME}`,
  //       sns = new AWS.SNS();

  // console.log("FULL PostFeedsLambda EVENT:", event);

  console.log('CONTEXTOS dotenv', process.env)
  const response = {
    statusCode: 201,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify({ data:"feeds created" }),
  };
  return response;
};
