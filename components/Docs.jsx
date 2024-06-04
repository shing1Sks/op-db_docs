"use client";

import Footer from "@/components/Footer.jsx";
import Installation from "@/components/doc-components/Installation.jsx";
import Introduction from "@/components/doc-components/Introduction.jsx";
import Usage from "@/components/doc-components/Usage.jsx";
import React, { useState } from "react";

const topics = [
  { id: "introduction", title: "Introduction" },
  { id: "installation", title: "Installation" },
  { id: "usage", title: "Usage" },
];

function Docs() {
  const [currentTopic, setCurrentTopic] = useState(topics[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleTopicClick = (id) => {
    setCurrentTopic(id);
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };
  return (
    <>
      <div className="flex bg-slate-100 dark:bg-slate-500">
        <button
          className="md:hidden fixed top-16 left-1 z-20 bg-slate-500 text-gray-300 px-4 py-2 rounded"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          ☰
        </button>
        <nav
          className={`fixed pt-[60px] overflow-auto sm:top-0 left-0 h-full z-10 w-fit bg-gray-100 dark:bg-slate-500 transition-transform transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0`}
        >
          <ul className="mt-16 md:mt-0">
            {topics.map((topic) => (
              <li
                key={topic.id}
                className={`py-4 pr-16 pl-10 cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-600 ${
                  currentTopic === topic.id ? "underline" : ""
                }`}
                onClick={() => handleTopicClick(topic.id)}
              >
                {topic.title}
              </li>
            ))}
          </ul>
        </nav>
        <main className="flex-grow p-3 sm:p-8 mt-[60px] pt-16 sm:pt-0 bg-slate-300 dark:bg-slate-700">
          {currentTopic === "introduction" && (
            <div>
              <Introduction />
            </div>
          )}
          {currentTopic === "installation" && (
            <div>
              <Installation />
            </div>
          )}
          {currentTopic === "usage" && (
            <div>
              <Usage />
            </div>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Docs;
