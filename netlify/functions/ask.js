const slugify = require("slugify");
const striptags = require('striptags');

exports.handler = async (event) => {
  
  console.log(event);

  try {
    const { question } = event.queryStringParameters;
    const plainQuestion = striptags(question);
    const path = slugify(plainQuestion);
    return {
      statusCode: "302",
      headers: {
        location: `/${path}`
      }
    };
  }
  catch(err) {
    console.log(err);
    return {
      statusCode: "500",
      body: JSON.stringify(err)
    };
  }

};

