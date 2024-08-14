import * as React from "react";
import { CustomHeader } from "./styles";
import { Box } from "@chakra-ui/react";
import TabHeader from "../../components/Tabs/TabHeader";

const Header: React.FC<any> = () => {
  return (
    <>
      <CustomHeader>
        <Box
          alignContent={"center"}
          h={"70px"}
          padding={"0 20px 0 80px"}
          borderRight={"1px solid rgba(0,0,0,.4)"}
        >
          Bruno Gomes
        </Box>

        <TabHeader/>
      </CustomHeader>
    </>
  );
};

export default Header;
