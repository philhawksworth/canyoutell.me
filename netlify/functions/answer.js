const { builder } = require('@netlify/functions');
const striptags = require('striptags');
const pageTemplate = require('../templates/layout.js');


const unslugify = (slug) => {
  const result = slug.substr(1).replace(/\-/g, " ");
  return unescape(result.charAt(0).toUpperCase() + result.substr(1));
}

// our handler function
const handler = async (event) => {
  
  // make an effort not to let scripts and HTML through tio the page
  const plainQuestion = striptags(unescape(event.path));
  const answer = event.queryStringParameters.answer || "It depends"
  const question = unslugify(plainQuestion);
  
  // add the question to the page and render it as a persisting view for this URL
  return {
    statusCode: 200,
    body: pageTemplate(plainQuestion, question, answer)
  };
  
};

// DPR provided by a Netlify On-Demand Builder function
exports.handler = builder(handler);
