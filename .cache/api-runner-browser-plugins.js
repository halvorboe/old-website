module.exports = [
  {
    plugin: require("../node_modules/gatsby-remark-images/gatsby-browser.js"),
    options: { plugins: [], maxWidth: 590 },
  },
  {
    plugin: require("../node_modules/gatsby-plugin-manifest/gatsby-browser.js"),
    options: {
      plugins: [],
      name: "complex-codes-blog",
      short_name: "complex-codes",
      start_url: "/",
      background_color: "#663399",
      theme_color: "#663399",
      display: "minimal-ui",
      icon: "src/images/icon.png",
    },
  },
  {
    plugin: require("../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js"),
    options: { plugins: [], trackingId: "UA-164691340-1" },
  },
  {
    plugin: require("../gatsby-browser.js"),
    options: { plugins: [] },
  },
];
