import { Heading } from "@chakra-ui/react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { Text } from "@chakra-ui/react";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Heading>Oops...</Heading>
      {isRouteErrorResponse(error) ? (
        <Text>the page is not exist</Text>
      ) : (
        <Text>Sorry , An Unexpected Error</Text>
      )}
    </>
  );
};

export default ErrorPage;
