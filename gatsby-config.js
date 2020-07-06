const appConfig = require('./appConfig');
require("dotenv").config({
  path: `.env`,
})
var GSAobj = JSON.parse(process.env.GSA_KEY)
//var GSAobj = JSON.parse(GSAstring)


const SPREADSHEET_ID = '199tGxqYHxHclVMH7bailF69PoxrP32GGapC-I4ivaBo';

const { theme, ...siteMetadata } = appConfig;

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-typescript`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
        spreadsheetId: SPREADSHEET_ID,
        worksheetTitle: 'Form Responses 1',
        credentials: GSAobj,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/media`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'event-calendar',
        short_name: 'calendar',
        start_url: '/',
        background_color: theme.background,
        theme_color: theme.brand,
        display: 'minimal-ui',
        icon: 'media/icon.svg',
      },
    },
    // 'gatsby-plugin-offline',
  ],
};
