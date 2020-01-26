const { bulkRead } = require("..");

exports.handler = async (event, context) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept"
      },
      body: JSON.stringify({ message: "Allowed." })
    };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const params = JSON.parse(event.body);
  const { lang } = event.queryStringParameters;
  let result;

  try {
    result = await bulkRead(params, lang);
  } catch (e) {
    console.log(e);
    throw e;
  }

  console.log(result);

  return {
    statusCode: 200,
    body: JSON.stringify(result)
  };
};
