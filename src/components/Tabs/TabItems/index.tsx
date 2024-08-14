// TabItems.tsx
import { useContext } from "react";
import { TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import TabsContext from "../../../provider/TabsContext";

export const TabItems = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("TabItems must be used within a TabsProvider");
  }
  const { activeTab } = context;

  return (
    <Tabs index={activeTab}>
      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>Three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
