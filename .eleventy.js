module.exports = function (eleventyConfig) {
  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");
}
