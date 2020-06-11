const appConfig = require('./appConfig');
require('dotenv').config();

const buildCredentials = ({ PROJECT_ID, PRIVATE_KEY, PRIVATE_KEY_ID }) => ({
  type: "service_account",
  project_id: "events-279922",
  private_key_id: PRIVATE_KEY_ID,
  private_key: PRIVATE_KEY,
  client_email: "eventsprocessor@events-279922.iam.gserviceaccount.com",
  client_id: '115316605307835110587',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/eventsprocessor%40events-279922.iam.gserviceaccount.com",
});

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
        credentials: buildCredentials(process.env),
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
        name: 'gatsby-starter-event-calendar',
        short_name: 'starter-calendar',
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
