import { Tab, Tabs, TabList, Box } from "@chakra-ui/react";
import { memo, useContext } from "react";
import TabsContext from "../../../provider/TabsContext";

const TabHeader: React.FC<any> = () => {  ;
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error("TabItems must be used within a TabsProvider");
  }
  const { setActiveTab } = context;

  const handleTabsChange = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <Box w={"70%"}>
      <Tabs
        variant="soft-rounded"
        colorScheme="yellow"
        onChange={handleTabsChange}
      >
        <TabList>
          <Tab>Projetos</Tab>
          <Tab>Sobre mim</Tab>
          <Tab>Contato</Tab>
        </TabList>
      </Tabs>
    </Box>
  );
};

export default memo(TabHeader);
