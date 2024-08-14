import styled from "styled-components";
import { theme } from "../../style";
import { Box } from "@chakra-ui/react";

export const CustomHeader = styled(Box)`
  background: linear-gradient(90deg, #ffe566, #ffee99, #fffae5 149%);
  width: 100vw;
  height: 120px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
