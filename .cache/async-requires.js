// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": require("gatsby-module-loader?name=component---src-templates-blog-post-js!/Users/takahohayashi/Documents/web/contentful/gatsby-contentful/src/templates/blog-post.js"),
  "component---src-pages-blog-js": require("gatsby-module-loader?name=component---src-pages-blog-js!/Users/takahohayashi/Documents/web/contentful/gatsby-contentful/src/pages/blog.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/takahohayashi/Documents/web/contentful/gatsby-contentful/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/takahohayashi/Documents/web/contentful/gatsby-contentful/.cache/json/layout-index.json"),
  "blog-automate-with-webhooks.json": require("gatsby-module-loader?name=path---blog-automate-with-webhooks!/Users/takahohayashi/Documents/web/contentful/gatsby-contentful/.cache/json/blog-automate-with-webhooks.json"),
  "blog-hello-world.json": require("gatsby-module-loader?name=path---blog-hello-world!/Users/takahohayashi/Documents/web/contentful/gatsby-contentful/.cache/json/blog-hello-world.json"),
  "blog-static-sites-are-great.json": require("gatsby-module-loader?name=path---blog-static-sites-are-great!/Users/takahohayashi/Documents/web/contentful/gatsby-contentful/.cache/json/blog-static-sites-are-great.json"),
  "blog-gatsby-contentful.json": require("gatsby-module-loader?name=path---blog-gatsby-contentful!/Users/takahohayashi/Documents/web/contentful/gatsby-contentful/.cache/json/blog-gatsby-contentful.json"),
  "blog.json": require("gatsby-module-loader?name=path---blog!/Users/takahohayashi/Documents/web/contentful/gatsby-contentful/.cache/json/blog.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/takahohayashi/Documents/web/contentful/gatsby-contentful/.cache/json/index.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/takahohayashi/Documents/web/contentful/gatsby-contentful/.cache/layouts/index.js")
}