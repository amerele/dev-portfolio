import { useState } from "react";
import StylesProvider from "./StylesProvider";
import RoutesProvider from "./RoutesProvider";
import TabsContext from "./TabsContext";

const AppProvider = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <StylesProvider>
        <RoutesProvider />
      </StylesProvider>
    </TabsContext.Provider>
  );
};

export default AppProvider;
