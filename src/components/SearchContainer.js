import React, { Component } from "react"
import * as JsSearch from "js-search"
import { graphql, useStaticQuery } from 'gatsby';
import { Box, Heading, Button, Image, ResponsiveContext } from 'grommet';


const SEARCH_QUERY = graphql`
    query searchquery { 
      allGoogleSheetFormResponses1Row {
      nodes {
        id
        eventName: whatisthename
        date: when
        eventLink: linktotheevent
        place: where
        tags
        time
        address
        description
      }
    }
  }
`;


const Search = () => {

  const data = useStaticQuery(SEARCH_QUERY);
  const events = data.allGoogleSheetFormResponses1Row.nodes.map(({ node }) => node)
  const postIndex = new JsSearch.Search('id')
  postIndex.addIndex(['tags'])
  postIndex.addIndex([ 'eventName'])
  postIndex.addDocuments(events)
  const results = postIndex.search('go')
  return (
    <Box>
     Number of items: {data.length}
        {results}
    </Box>
    )
}

export default Search
