const dotenv = require("dotenv");

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config();
}

const { spaceId, accessToken } = process.env;

module.exports = {
  siteMetadata: {
    title: `ayutech-blog`,
    description: `An awesome blog displaying my technical memos`,
    author: `@ex_endeavor`
  },
  plugins: [
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId,
        accessToken
      }
    }
  ]
};