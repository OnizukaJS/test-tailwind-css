import React from "react";

interface TabProps {
  selected: boolean;
  tabNumber: number;
  tabIndex: number;
  title: string;
}

const Tab = ({ selected, tabNumber, tabIndex, title }: TabProps) => {
  return (
    <button
      role="tab"
      aria-selected={selected}
      aria-controls={`panel-${tabNumber}`}
      id={`tab-${tabNumber}`}
      tabIndex={tabIndex}
      className="relative block h-10 px-6 tab rounded-full"
    >
      <span className="text-gray-800">{title}</span>
    </button>
  );
};

export default Tab;
