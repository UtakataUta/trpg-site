module.exports = {
  pathPrefix: "trpg-site",
  siteMetadata: {
    title: `utakata's TRPG log`,
    description: `This is a homepage that utakata's information about TRPG.`,
    author: `@TRPG_utakata`,
    siteUrl: `https://yoshikawa0711.github.io/trpg-site`,
    keywords: [
      "Utakata",
      "TRPG_utakata",
      "TRPG",
      "Call of Cthulhu",
      "CoC",
      "泡沫",
      "クトゥルフ神話TRPG",
      "探索者", 
    ],
    social: {
      twitter: `TRPG_utakata`,
      facebook: ``,
      github: `yoshikawa0711`,
      email: `ayato1998711+trpg@gmail.com`,
      linkedin: ``,
      formspree: ''
    },
    image: '/icon.png',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Icon Theme`,
        short_name: `icon`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#129ca6`,
        display: `minimal-ui`,
        icon: `src/images/utakata-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-images`,
          {
            resolve: `gatsby-remark-highlight-code`,
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "<GA Code>",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      }
    },
    // {
    //   resolve: `gatsby-plugin-disqus`,
    //   options: {
    //     shortname: `fresh`
    //   }
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`
  ],
}
