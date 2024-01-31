// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  // Add Passthrough Copy for images and styles
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  // Add shortcode for author name
  eleventyConfig.addShortcode('authorName', function() {
      return "Colton Hyer";
  });
};
