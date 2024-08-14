import { Tab, Tabs, TabList, TabPanel, TabPanels, Box } from "@chakra-ui/react";
import { memo, useState } from "react";

const TabsList: React.FC<any> = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const handleTabsChange = (i: number) => {
    setTabIndex(i);
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
          <Tab>Contatos</Tab>
        </TabList>
      </Tabs>
    </Box>
  );
};

export default memo(TabsList);
