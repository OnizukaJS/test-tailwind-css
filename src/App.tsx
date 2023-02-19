import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex items-center bg-gradient-to-br from-purple-200 to-indigo-400">
      <div className="max-w-3xl mx-auto px-8 sm:px-0">
        <div className="sm:w-7/12 sm:mx-auto">
          <div
            role="tablist"
            aria-label="tabs"
            className="relative w-max mx-auto h-12 grid grid-cols-3 items-center px-[3xl] rounded-full bg-gray-900/20 overflow-hidden shadow-2xl shadow-900/20 transition"
          >
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
