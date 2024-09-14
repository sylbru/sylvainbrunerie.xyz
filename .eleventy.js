const CleanCss = require("clean-css");

module.exports = function (eleventyConfig) {
  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCss({}).minify(code).styles;
  })
}
