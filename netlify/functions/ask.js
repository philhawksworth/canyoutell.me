const slugify = require("slugify");
const striptags = require('striptags');
const querystring = require("querystring");

exports.handler = async (event) => {
  
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const params = querystring.parse(event.body);
    const plainQuestion = striptags(params.question);
    const path = slugify(plainQuestion);
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

