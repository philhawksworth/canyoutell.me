const querystring = require("querystring");
const slugify = require("slugify");
const striptags = require('striptags');

exports.handler = async (event) => {

  try {
    const { question } = event.queryStringParameters;
    const plainQuestion = striptags(question);
    const path = slugify(plainQuestion);
  }
  catch(err) {
    console.log(err);
    console.log(event);
    
  }
  return {
    statusCode: "302",
    headers: {
      location: `/${path}`
    }
  };

};

