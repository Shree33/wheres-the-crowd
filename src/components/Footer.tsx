import React from 'react';
import { Box, Text, Anchor, Form, Button, TextInput } from 'grommet';


const Footer = () => (
  <Box tag="footer" justify="between" direction="row" pad="medium">
    
    <Form action="https://getform.io/f/b61c1bc5-c567-4f7e-ace8-3e55883a188d" method="POST">

      <Text>Want events sent to your mailbox? Put in your email here! </Text>
      <TextInput type="email" name="email"></TextInput>
      <Button type="submit" label="send" alignSelf="end" background={`brand`}>Send</Button>

    </Form>

    <Text>
      Questions? Contact us at: 
      <Anchor href="mailto:info@wheresthecrowd.com">
        <b>info@wheresthecrowd.com</b>
      </Anchor>
    </Text>
  </Box>
);

export default Footer;