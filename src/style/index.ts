import { extendTheme } from '@chakra-ui/react';

import { config } from './config';

export const theme = extendTheme({
  fonts: {
    heading: 'Plus Jakarta Sans, sans-serif',
    body: 'Plus Jakarta Sans, sans-serif',
  },
  components: {
  },
  colors: {
    primary: '#FFFAE5',
    secundary: '#FFDD32',
  },
  config,
});