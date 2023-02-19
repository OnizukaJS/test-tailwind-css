import React from "react";

interface PanelProps {
    panelNumber: number;
    title: string;
}

const Panel = ({ panelNumber, title }: PanelProps) => {
  return (
    <div
      role="tabpanel"
      id={`panel-${panelNumber}`}
      className={`tab-panel p-6 transition duration-300 ${panelNumber > 1 && "absolute top-0 invisible opacity-0"}`}
    >
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="mt-4 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet
        ac felis quis laoreet. Aliquam at finibus nunc. Donec mi sem, volutpat
        eget commodo a, sagittis ut tortor. Proin vel fringilla arcu. Donec ac
        faucibus metus. Proin aliquam quis risus vel interdum. Donec lacinia ut
        mauris sit amet condimentum. Fusce eget tempor metus. Vestibulum ut
        mauris justo. In hac habitasse platea dictumst. Duis eu elit blandit,
        porttitor nibh vel, sagittis libero. Maecenas sit amet venenatis quam.
        Integer sit amet nunc nec quam efficitur porttitor. Phasellus eget
        euismod nibh, tincidunt viverra massa.
      </p>
    </div>
  );
};

export default Panel;
