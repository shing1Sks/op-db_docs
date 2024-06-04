"use client";
import React from "react";

import Footer from "@/components/Footer.jsx";
import AddScore from "@/components/doc-api/AddScore.jsx";
import ChngPass from "@/components/doc-api/ChngPass.jsx";
import GetD from "@/components/doc-api/GetD.jsx";
import GetUser from "@/components/doc-api/GetUser.jsx";
import Lead from "@/components/doc-api/Lead.jsx";
import StoreD from "@/components/doc-api/StoreD.jsx";
import UpdtAva from "@/components/doc-api/UpdtAva.jsx";
import UpdtEm from "@/components/doc-api/UpdtEm.jsx";
import UserLogin from "@/components/doc-api/UserLogin.jsx";
import UserLogout from "@/components/doc-api/UserLogout.jsx";
import UserReg from "@/components/doc-api/UserReg.jsx";
import AddCom from "@/components/doc-api/posts/AddCom.jsx";
import Create from "@/components/doc-api/posts/Create.jsx";
import DelCom from "@/components/doc-api/posts/DelCom.jsx";
import Get from "@/components/doc-api/posts/Get.jsx";
import GetUsrPosts from "@/components/doc-api/posts/GetUsrPosts.jsx";
import LiPosts from "@/components/doc-api/posts/LiPosts.jsx";
import Like from "@/components/doc-api/posts/Like.jsx";
import Search from "@/components/doc-api/posts/Search.jsx";
import Unlike from "@/components/doc-api/posts/Unlike.jsx";
import Updt from "@/components/doc-api/posts/Updt.jsx";
import { useState } from "react";

const topics = [
  { id: "user/register" },
  { id: "user/login" },
  { id: "user/logout" },
  { id: "user/get-user" },
  { id: "user/add-score" },
  { id: "user/leaderboard" },
  { id: "user/update-avatar" },
  { id: "user/update-email" },
  { id: "user/change-password" },
  { id: "user/store-data" },
  { id: "user/get-stored-data" },
  { id: "posts/create" },
  { id: "posts/get-user-posts" },
  { id: "posts/get-posts" },
  { id: "posts/update" },
  { id: "posts/search" },
  { id: "posts/like" },
  { id: "posts/unlike" },
  { id: "posts/liked-posts" },
  { id: "posts/comments (add)" },
  { id: "posts/comments (del)" },
];

function Api() {
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
          className={`fixed pt-[60px] sm:top-0 overflow-auto left-0 h-full z-10 w-fit bg-gray-100 dark:bg-slate-500 transition-transform transform ${
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
                {topic.id}
              </li>
            ))}
          </ul>
        </nav>
        <main className="flex-grow p-3 sm:p-8 mt-[60px] pt-16 sm:pt-0 bg-slate-300 dark:bg-slate-700">
          {currentTopic === "user/register" && (
            <div>
              <UserReg />
            </div>
          )}
          {currentTopic === "user/login" && (
            <div>
              <UserLogin />
            </div>
          )}
          {currentTopic === "user/logout" && (
            <div>
              <UserLogout />
            </div>
          )}
          {currentTopic === "user/get-user" && (
            <div>
              <GetUser />
            </div>
          )}
          {currentTopic === "user/add-score" && (
            <div>
              <AddScore />
            </div>
          )}
          {currentTopic === "user/leaderboard" && (
            <div>
              <Lead />
            </div>
          )}
          {currentTopic === "user/update-avatar" && (
            <div>
              <UpdtAva />
            </div>
          )}
          {currentTopic === "user/update-email" && (
            <div>
              <UpdtEm />
            </div>
          )}
          {currentTopic === "user/change-password" && (
            <div>
              <ChngPass />
            </div>
          )}
          {currentTopic === "user/store-data" && (
            <div>
              <StoreD />
            </div>
          )}
          {currentTopic === "user/get-stored-data" && (
            <div>
              <GetD />
            </div>
          )}
          {currentTopic === "posts/create" && (
            <div>
              <Create />
            </div>
          )}
          {currentTopic === "posts/get-user-posts" && (
            <div>
              <GetUsrPosts />
            </div>
          )}
          {currentTopic === "posts/get-posts" && (
            <div>
              <Get />
            </div>
          )}
          {currentTopic === "posts/update" && (
            <div>
              <Updt />
            </div>
          )}
          {currentTopic === "posts/search" && (
            <div>
              <Search />
            </div>
          )}
          {currentTopic === "posts/like" && (
            <div>
              <Like />
            </div>
          )}
          {currentTopic === "posts/unlike" && (
            <div>
              <Unlike />
            </div>
          )}
          {currentTopic === "posts/liked-posts" && (
            <div>
              <LiPosts />
            </div>
          )}
          {currentTopic === "posts/comments (add)" && (
            <div>
              <AddCom />
            </div>
          )}
          {currentTopic === "posts/comments (del)" && (
            <div>
              <DelCom />
            </div>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Api;
