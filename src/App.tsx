import React, { useEffect } from "react";
import "./App.css";

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
  }, [])

  return (
    <div className="min-h-screen flex items-center bg-gradient-to-br from-purple-200 to-indigo-400">
      <div className="max-w-3xl mx-auto px-8 sm:px-0">
        <div className="sm:w-7/12 sm:mx-auto">
          <div
            role="tablist"
            aria-label="tabs"
            className="relative w-max mx-auto h-12 grid grid-cols-3 items-center px-[3px] rounded-full bg-gray-900/20 overflow-hidden shadow-2xl shadow-900/20 transition"
          >
            <div className="absolute indicator h-11 my-auto top-0 bottom-0 left-0 w-32 rounded-full bg-white shadow-md"></div>
            <button
              role="tab"
              aria-selected="true"
              aria-controls="panel-1"
              id="tab-1"
              tabIndex={0}
              className="relative block h-10 px-6 tab rounded-full"
            >
              <span className="text-gray-800">First Tab</span>
            </button>

            <button
              role="tab"
              aria-selected="false"
              aria-controls="panel-2"
              id="tab-2"
              tabIndex={-1}
              className="relative block h-10 px-6 tab rounded-full"
            >
              <span className="text-gray-800">Second Tab</span>
            </button>

            <button
              role="tab"
              aria-selected="false"
              aria-controls="panel-3"
              id="tab-3"
              tabIndex={-1}
              className="relative block h-10 px-6 tab rounded-full"
            >
              <span className="text-gray-800">Third Tab</span>
            </button>
          </div>

          <div className="mt-6 relative rounded-3xl bg-purple-50">
            <div
              role="tabpanel"
              id="panel-1"
              className="tab-panel p-6 transition duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                First tab panel
              </h2>
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                laoreet ac felis quis laoreet. Aliquam at finibus nunc. Donec mi
                sem, volutpat eget commodo a, sagittis ut tortor. Proin vel
                fringilla arcu. Donec ac faucibus metus. Proin aliquam quis
                risus vel interdum. Donec lacinia ut mauris sit amet
                condimentum. Fusce eget tempor metus. Vestibulum ut mauris
                justo. In hac habitasse platea dictumst. Duis eu elit blandit,
                porttitor nibh vel, sagittis libero. Maecenas sit amet venenatis
                quam. Integer sit amet nunc nec quam efficitur porttitor.
                Phasellus eget euismod nibh, tincidunt viverra massa.
              </p>
            </div>

            <div
              role="tabpanel"
              id="panel-2"
              className="absolute top-0 invisible opacity-0 tab-panel p-6 transition duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                Second tab panel
              </h2>
              <p className="mt-4 text-gray-600">
                Integer egestas ornare justo. Donec molestie fermentum faucibus.
                Praesent vel urna justo. Curabitur erat purus, faucibus quis
                ipsum vitae, venenatis fermentum mauris. Aliquam orci augue,
                euismod sit amet interdum et, varius sed nibh. Donec eget varius
                lectus. Pellentesque cursus, orci vel congue dictum, risus nibh
                varius sapien, lobortis ullamcorper erat purus a libero. Donec
                quis orci tellus.
              </p>
            </div>

            <div
              role="tabpanel"
              id="panel-3"
              className="absolute top-0 invisible opacity-0 tab-panel p-6 transition duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                Third tab panel
              </h2>
              <p className="mt-4 text-gray-600">
                Sed tristique cursus dolor, nec fringilla justo mollis
                facilisis. Aliquam accumsan, nisl vel lacinia mattis, lorem nunc
                placerat neque, sed volutpat arcu nulla sed turpis. Nullam
                faucibus tellus odio, vel mattis metus lacinia ut. Cras vel
                rutrum nunc, in semper mauris. Nulla semper aliquet mi, ac
                consequat ante accumsan in. Ut bibendum arcu pulvinar venenatis
                euismod. Vestibulum mi turpis, pretium iaculis pharetra ut,
                accumsan in nunc. In volutpat diam sed nunc euismod, at
                consequat libero euismod. Etiam a mi velit. Ut venenatis
                faucibus mi, in rhoncus nisl accumsan non.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
