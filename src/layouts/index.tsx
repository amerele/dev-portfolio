import { Box, Flex } from "@chakra-ui/react";
import { type ReactNode } from "react";
import Header from "./header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box w={"100%"} transition="0.5s ease-out">
      <Flex wrap="wrap" margin="1" minHeight="90vh" m={0}>
        <Box width="100%" as="main">
          <Header />
          {children}
        </Box>
      </Flex>
    </Box>
  );
};

export default Layout;
