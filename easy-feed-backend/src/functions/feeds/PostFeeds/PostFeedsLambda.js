"use strict";

module.exports.PostFeedsLambda = async (event) => {
  console.log("FULL PostFeedsLambda EVENT:", event);

  const response = {
    statusCode: 201,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify({ "feeds created" }),
  };
  return response;
};
