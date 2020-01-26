const { read } = require("..");

exports.handler = async event => {
  const { id, item, lang } = event.queryStringParameters;

  const result = await read(id, item, lang);

  return {
    statusCode: 200,
    body: result
  };
};
