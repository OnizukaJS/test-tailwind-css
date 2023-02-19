import React from "react";
import Tab from "./Tab";

const TabList = () => {
  return (
    <div
      role="tablist"
      aria-label="tabs"
      className="relative w-max mx-auto h-12 grid grid-cols-3 items-center px-[3px] rounded-full bg-gray-900/20 overflow-hidden shadow-2xl shadow-900/20 transition"
    >
      <div className="absolute indicator h-11 my-auto top-0 bottom-0 left-0 w-32 rounded-full bg-white shadow-md"></div>

      <Tab selected={true} tabNumber={1} tabIndex={0} title="Fist Tab" />

      <Tab selected={false} tabNumber={2} tabIndex={-1} title="Second Tab" />

      <Tab selected={false} tabNumber={3} tabIndex={-1} title="Third Tab" />
    </div>
  );
};

export default TabList;
