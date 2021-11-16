exports.handler = async (event) => {
  console.log("FULL EVENT OBJ", JSON.stringify(event));
  const feeds = [
    "https://google.com/",
    "https://www.youtube.com/",
    "https://twitter.com/",
  ];
  const response = {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify({ feeds }),
  };
  return response;
};
