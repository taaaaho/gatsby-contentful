// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/takahohayashi/Documents/web/contentful/gatsby-contentful/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/takahohayashi/Documents/web/contentful/gatsby-contentful/src/templates/blog-post.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/takahohayashi/Documents/web/contentful/gatsby-contentful/src/pages/blog.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/takahohayashi/Documents/web/contentful/gatsby-contentful/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/takahohayashi/Documents/web/contentful/gatsby-contentful/.cache/json/layout-index.json"),
  "blog-gatsby-contentful.json": require("/Users/takahohayashi/Documents/web/contentful/gatsby-contentful/.cache/json/blog-gatsby-contentful.json"),
  "blog-automate-with-webhooks.json": require("/Users/takahohayashi/Documents/web/contentful/gatsby-contentful/.cache/json/blog-automate-with-webhooks.json"),
  "blog-hello-world.json": require("/Users/takahohayashi/Documents/web/contentful/gatsby-contentful/.cache/json/blog-hello-world.json"),
  "blog-static-sites-are-great.json": require("/Users/takahohayashi/Documents/web/contentful/gatsby-contentful/.cache/json/blog-static-sites-are-great.json"),
  "blog.json": require("/Users/takahohayashi/Documents/web/contentful/gatsby-contentful/.cache/json/blog.json"),
  "index.json": require("/Users/takahohayashi/Documents/web/contentful/gatsby-contentful/.cache/json/index.json")
}