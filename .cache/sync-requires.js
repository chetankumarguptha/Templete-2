const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/chetan/Gatsby/Gatsby-Thems/gatsby-starter-stylish/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/chetan/Gatsby/Gatsby-Thems/gatsby-starter-stylish/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/chetan/Gatsby/Gatsby-Thems/gatsby-starter-stylish/src/pages/index.js")))
}

