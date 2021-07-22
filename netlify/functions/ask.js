const slugify = require("slugify");
const striptags = require('striptags');
const querystring = require("querystring");

exports.handler = async (event) => {
  
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  console.log(event);

  try {
    const params = querystring.parse(event.body);
    // const { question } = event.queryStringParameters;
    const plainQuestion = striptags(params.question);
    const path = slugify(plainQuestion);

    console.log(`path: ${path}`);
    

    return {
      statusCode: 302,
      headers: {
        location: `/${path}`
      }
    };
  }
  catch(err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err)
    };
  }

};

