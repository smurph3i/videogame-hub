import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Heading>Oops Error</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This Page does not exist"
            : "An unexpected error occurred"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
