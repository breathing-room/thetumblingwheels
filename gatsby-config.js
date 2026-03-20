/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'The Tumbling Wheels',
    author: 'Joanna Tomassoni',
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'Jacques Francois Shadow',
          'Cardo',
          'PT Serif',
          'Merriweather',
          'Inter',
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-78794744-1"],
        gtagConfig: {
          anonymize_ip: false,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
          delayOnRouteUpdate: 0,
        },
      },
    },
  ]
}
