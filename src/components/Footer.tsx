import React from 'react';
import { Box, Text, Anchor } from 'grommet';

const Footer = () => (
  <Box tag="footer" justify="between" direction="row" pad="medium">
    
    <form action="https://getform.io/f/b61c1bc5-c567-4f7e-ace8-3e55883a188d" method="POST">

      <Text>Want events sent to your mailbox? Put in your email here! </Text>
      <input type="email" name="email"></input>
      <button type="submit">Send</button>

    </form>

    <Text>
      Questions? Contact us at: 
      <Anchor href="mailto:info@wheresthecrowd.com">
        <b>info@wheresthecrowd.com</b>
      </Anchor>
    </Text>
  </Box>
);

export default Footer;