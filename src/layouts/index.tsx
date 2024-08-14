import { Box, Flex } from '@chakra-ui/react';
import type { ReactNode } from 'react';


type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box w={'100%'} transition="0.5s ease-out">
      <Flex wrap="wrap" margin="1" minHeight="90vh">
        <Box width="100%" as="main" marginY={1}>
          {children}
        </Box>
      </Flex>
    </Box>
  );
};

export default Layout;