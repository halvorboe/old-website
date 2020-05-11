const { hot } = require("react-hot-loader/root");

// prefer default export if available
const preferDefault = (m) => (m && m.default) || m;

exports.components = {
  "component---cache-dev-404-page-js": hot(
    preferDefault(
      require("/home/dev/projects/complex.codes/.cache/dev-404-page.js")
    )
  ),
  "component---src-pages-404-js": hot(
    preferDefault(require("/home/dev/projects/complex.codes/src/pages/404.js"))
  ),
  "component---src-pages-about-js": hot(
    preferDefault(
      require("/home/dev/projects/complex.codes/src/pages/about.js")
    )
  ),
  "component---src-pages-index-js": hot(
    preferDefault(
      require("/home/dev/projects/complex.codes/src/pages/index.js")
    )
  ),
  "component---src-templates-post-template-js": hot(
    preferDefault(
      require("/home/dev/projects/complex.codes/src/templates/PostTemplate.js")
    )
  ),
};
