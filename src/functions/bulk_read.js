const { bulkRead } = require("..");

exports.handler = async event => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "POST"
      }
    };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const params = JSON.parse(event.body);
  const { lang } = event.queryStringParameters;
  const result = await bulkRead(params, lang);

  return {
    statusCode: 200,
    body: JSON.stringify(result)
  };
};
