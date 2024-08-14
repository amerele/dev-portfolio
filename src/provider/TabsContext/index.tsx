import { createContext } from "react";

interface TabsContextType {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export default TabsContext;
