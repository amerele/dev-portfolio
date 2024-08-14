import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '../../style';

interface IProps {
  children: TChildren;
}

const StylesProvider: React.FC<IProps> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default StylesProvider;
