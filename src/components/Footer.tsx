import React from 'react';
import { Box, Text, Anchor } from 'grommet';

const Footer = () => (
  <Box tag="footer" justify="between" direction="row" pad="medium">
    <Text>
      This site is powered by &nbsp;
      <Anchor href="https://www.netlify.com/">
        <b>Netlify</b>
      </Anchor>
      &nbsp; ❤
    </Text>
    <Text>
      Questions? Contact us at: 
      <Anchor href="mailto:info@wheresthecrowd.com">
        <b>info@wheresthecrowd.com</b>
      </Anchor>
    </Text>
  </Box>
);

export default Footer;