import React from "react"
import Search from "../components/SearchContainer"
import { Box, Heading, Button, Image, ResponsiveContext } from 'grommet';






const IndexPage = () => (
  <div>
    <h1 style={{ marginTop: `3em`, textAlign: `center` }}>
      Search all of the events!
    </h1>
    <div>
      <Search />
    </div>
  </div>
)

export default IndexPage