const { builder } = require('@netlify/functions');
const striptags = require('striptags');


const pageTemplate = (data) => {
  return `
  <html>
    <body>
      <h1>${ data }?</h1>
      <h2>It depends.</h2>
    <body>
  </html>
  `;
};


const unslugify = (slug) => {
  const result = slug.substr(1).replace(/\-/g, " ");
  return unescape(result.charAt(0).toUpperCase() + result.substr(1).toLowerCase());
}


// DPR provided by a Netlify On-Demand Builder function
const handler = async (event) => {

  // make an effort not to let scripts and HTML through tio the page
  const plainQuestion = striptags(unescape(event.path));
  const question = unslugify(plainQuestion);

  // add the question to the page and render it as a persisting view for this URL
  return {
    statusCode: 200,
    body: pageTemplate(question)
  };

};

exports.handler = builder(handler);
