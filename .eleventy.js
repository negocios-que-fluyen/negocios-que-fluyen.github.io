module.exports = function(eleventyConfig) {
  // Copia los archivos estáticos directamente a _site
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("assets");
  
  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
      pages: "_pages"
    }
  };
};
