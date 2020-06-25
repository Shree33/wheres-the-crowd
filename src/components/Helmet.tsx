import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet as ReactHelmet } from 'react-helmet';

const BASE_TAGS = [
  { charset: 'utf-8' },
  {
    'http-equiv': 'X-UA-Compatible',
    content: 'IE=edge',
  },
  {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1',
  },
];

const HELMET_QUERY = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        subTitle
      }
    }
  }
`;

const Helmet = () => {
  const data = useStaticQuery(HELMET_QUERY);
  const { title, subtitle } = data.site.siteMetadata;

  const metaTags = [
    { itemprop: 'name', content: title },
    { itemprop: 'description', content: subtitle },
    { name: 'description', content: subtitle },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: title },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: subtitle },

    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: subtitle },
    { property: 'og:site_name', content: title },
  ];

  return (
    <ReactHelmet
      title={title}
      htmlAttributes={{ lang: 'en' }}
      meta={BASE_TAGS.concat(metaTags)}
    >
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat|Raleway"
        rel="stylesheet"
      />
                  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
           integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
           crossorigin=""/>
           <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
           integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
           crossorigin=""></script>
    </ReactHelmet>
  );
};

export default Helmet;