import React, { useEffect } from "react";
import "./App.css";
import PanelList from "./components/PanelList";
import TabList from "./components/TabList";

function App() {
  let tabs: NodeListOf<Element>;
  let indicator: HTMLElement;
  let panels: NodeListOf<Element>;

  useEffect(() => {
    tabs = document.querySelectorAll(".tab");
    indicator = document.querySelector(".indicator") as HTMLElement;
    panels = document.querySelectorAll(".tab-panel");

    indicator.style.width = tabs[0].getBoundingClientRect().width + "px";
    indicator!.style.left =
      tabs[0].getBoundingClientRect().left -
      tabs[0].parentElement!.getBoundingClientRect().left +
      "px";

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        let tabTarget = tab.getAttribute("aria-controls");

        indicator.style.width = tab.getBoundingClientRect().width + "px";
        indicator.style.left =
          tab.getBoundingClientRect().left -
          tab.parentElement!.getBoundingClientRect().left +
          "px";

        panels.forEach((panel) => {
          let panelId = panel.getAttribute("id");

          if (tabTarget === panelId) {
            panel.classList.remove("invisible", "opacity-100");
            panel.classList.add("visible", "opacity-100");
          } else {
            panel.classList.add("invisible", "opacity-0");
          }
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center bg-gradient-to-br from-purple-200 to-indigo-400">
      <div className="max-w-3xl mx-auto px-8 sm:px-0">
        <div className="sm:w-7/12 sm:mx-auto">
          <TabList />

          <PanelList />
        </div>
      </div>
    </div>
  );
}

export default App;
