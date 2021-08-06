const fs = require("fs-extra");
const marked = require("marked");


module.exports = (eleventyConfig) => {

  
  // Markdown filters
  eleventyConfig.addFilter("markdownify", (str) => marked(str));
    
  eleventyConfig.addFilter("unslugify", (slug) => {
    const result = slug.replace(/\-/g, " ");
    return unescape(result.charAt(0).toUpperCase() + result.substr(1));
  });

  eleventyConfig.addPassthroughCopy("src/site/img");
  eleventyConfig.addPassthroughCopy("src/site/site.webmanifest");

  // where do things live?
  return {
    dir: {
      input: "src/site",
      output: "dist"
    },
    templateFormats : ["njk", "css", "ico"],
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk",
    
  };

};
