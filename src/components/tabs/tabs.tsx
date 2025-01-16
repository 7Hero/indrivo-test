import { PropsWithChildren, useState } from "react";
import { TabsContext, useTabs } from "./tabs.context";

import "./tabs.css";

export const Tabs = ({ children }: PropsWithChildren) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
};

export const TabList = ({ children }: PropsWithChildren) => (
  <nav className="tabs">{children}</nav>
);

export const Tab = ({ index, label }: { index: number; label: string }) => {
  const { activeTab, setActiveTab } = useTabs();
  return (
    <button
      onClick={() => setActiveTab(index)}
      className={`tabs__tab ${activeTab === index ? "tabs__tab--active" : ""}`}
    >
      <div className="tabs__tab-label">{label}</div>
    </button>
  );
};

export const TabContent = ({
  children,
  index,
}: PropsWithChildren<{ index: number }>) => {
  const { activeTab } = useTabs();
  return activeTab === index && <>{children}</>;
};
