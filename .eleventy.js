const fs = require("fs-extra");
const marked = require("marked");


module.exports = (eleventyConfig) => {

  
  // Markdown filter
  eleventyConfig.addFilter("markdownify", (str) => marked(str));
  
  
  eleventyConfig.addFilter("unslugify", (slug) => {
    const result = slug.replace(/\-/g, " ");
    return unescape(result.charAt(0).toUpperCase() + result.substr(1));
  });



  // where do things live?
  return {
    dir: {
      input: "src/site",
      output: "dist"
    },
    templateFormats : ["njk", "css"],
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk",
    
  };

};
