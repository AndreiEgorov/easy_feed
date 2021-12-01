"use strict";

module.exports.GetFeedsLambda = async (event) => {
  console.log("FULL GetFeedsLambda EVENT:", event);
  const staticFeeds = [
    "https://cli.vuejs.org/",
    "https://www.google.com/",
    "https://aws.amazon.com/",
  ];

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify({ feeds: staticFeeds }),
  };
  return response;
};
