const querystring = require("querystring");
const slugify = require("slugify");
const striptags = require('striptags');

exports.handler = async (event) => {

  const { question } = event.queryStringParameters;
  const plainQuestion = striptags(question);
  const path = slugify(plainQuestion);
  
  return {
    statusCode: "302",
    headers: {
      location: `/${path}`
    }
  };

};

