import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const Header = ({ title }) => {
  return (
    <Box bg="teal.500" p={4}>
      <Heading color="white">{title}</Heading>
    </Box>
  );
};

export default Header;