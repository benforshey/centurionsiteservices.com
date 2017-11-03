module.exports = {
  siteMetadata: {
    title: `Centurion Site Services`,
    description: `Centurion Site Services: construction, preservation, renovation, and site services.`,
    siteUrl: `https://centurionsiteservices.com`
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `cms.centurionsiteservices.com`,
        protocol: 'https',
        hostingWPCOM: false,
        useACF: true,
        // auth: {
        //   htaccess_user: '',
        //   htaccess_pass: '',
        //   htaccess_sendImmediately: false,
        //   wpcom_app_clientSecret: '',
        //   wpcom_app_clientId: '',
        //   wpcom_user: '',
        //   wpcom_pass: ''
        // },
        verboseOutput: false
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`
    },
    `gatsby-plugin-offline`
  ]
}
