import React from 'react';
import { Box, Text, Anchor, Form, Button, TextInput, FormField } from 'grommet';


const Footer = () => (
  <Box tag="footer" justify="between" direction="row" pad="medium">
    <Form direction="row" action="https://getform.io/f/b61c1bc5-c567-4f7e-ace8-3e55883a188d" method="POST">
      <Box direction="row" >
        <FormField name ="instructions" label="Want events sent to your mailbox? Put in your email here!"> 
        <TextInput type="email" name="email"></TextInput>
        </FormField>
        <Button type="submit" label="send" alignSelf="end" secondary gap="xsmall" margin="xsmall"></Button>
      </Box>
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