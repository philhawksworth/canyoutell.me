const pageTemplate = (data) => {
  return `
  <html>
    <body>
      <code>${ JSON.stringify(data) }</code>
    <body>
  </html>
  `;
};


exports.handler = async (event) => {

  const { params } = event.queryStringParameters;

  return {
    statusCode: 200,
    body: pageTemplate(params)
  };

};