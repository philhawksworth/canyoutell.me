const querystring = require("querystring");
const slugify = require("slugify");
const striptags = require('striptags');

exports.handler = async (event) => {

  console.log({event});
  
  
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 500,
      body: "HTTP method not allowed"
    };
  } 


  const { question } = querystring.parse(event.body);
  const plainQuestion = striptags(question);
  const path = slugify(plainQuestion);
  

  console.log(question);
  return {
    statusCode: "302",
    headers: {
      location: `/${path}`
    }
  };

};
