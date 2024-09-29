const CleanCss = require("clean-css");

module.exports = function (eleventyConfig) {
  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
  eleventyConfig.addPassthroughCopy("img");

  // This makes the dev server rebuild when anything
  // changes in a CSS file, but does not reload the
  // page in the browser.
  eleventyConfig.addWatchTarget("css/");

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCss({}).minify(code).styles;
  })
}
