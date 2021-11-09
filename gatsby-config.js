module.exports = {
  pathPrefix: `/github-demo-page`,
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "github-demo-page",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
