"use client";
import Footer from "./Footer.jsx";
import Model_Code from "./Model_Code.jsx";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import React from "react";

function HomeSec() {
  const userModel = [
    "User",
    "username",
    "project",
    "fullname",
    "password",
    "email",
    "refreshtoken",
    "score",
    "avatar",
    "userdata",
    "likes",
    "comments",
    "posts",
    "followers",
    "createdAt",
    "updatedAt",
  ];
  const userCode = [
    "const schema = new mongoose.Schema(",
    "  {",
    "    username: {",
    "      type: String,",
    "      required: [true, 'Please provide a username'],",
    "      unique: true,",
    "      lowercase: true,",
    "      trim: true,",
    "      index: true,",
    "    },",
    "    project: {",
    "      type: String,",
    "      required: [true, 'Please provide a project name'],",
    "      lowercase: true,",
    "      trim: true,",
    "      index: true,",
    "    },",
    "    fullname: {",
    "      type: String,",
    "      required: [true, 'Please provide a fullname'],",
    "      lowercase: true,",
    "      trim: true,",
    "      index: true,",
    "    },",
    "    password: {",
    "      type: String,",
    "      required: [true, 'Please provide a password'],",
    "    },",
    "    email: {",
    "      type: String,",
    "      lowercase: true,",
    "      trim: true,",
    "    },",
    "    refreshtoken: {",
    "      type: String,",
    "    },",
    "    score: {",
    "      type: Number,",
    "      default: 0,",
    "    },",
    "    avatar: {",
    "      type: String,",
    "    },",
    "    userdata: {",
    "      type: Object,",
    "    },",
    "    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],",
    "    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],",
    "    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],",
    "    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],",
    "  },",
    "  { timestamps: true }",
    ");",
  ];
  const postModel = [
    "Post",
    "title",
    "content",
    "images",
    "owner",
    "views",
    "comments",
    "likes",
    "project",
    "createdAt",
    "updatedAt",
  ];
  const postCode = [
    "const schema = new mongoose.Schema(",
    "  {",
    "    title: { type: String, required: true },",
    "    content: { type: String, required: true },",
    "    images: [{ type: String }],",
    "    owner: {",
    "      type: mongoose.Schema.Types.ObjectId,",
    "      ref: 'User',",
    "      required: true,",
    "    },",
    "    views: { type: Number, default: 0 },",
    "    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],",
    "    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],",
    "    project: { type: String, required: true },",
    "  },",
    "  { timestamps: true }",
    ");",
  ];
  const commentModel = [
    "Comment",
    "user",
    "text",
    "post",
    "createdAt",
    "updatedAt",
  ];
  const commentCode = [
    "const schema = new mongoose.Schema(",
    "  {",
    "    user: {",
    "      type: mongoose.Schema.Types.ObjectId,",
    "      ref: 'User',",
    "    },",
    "    text: {",
    "      type: String,",
    "      required: true,",
    "    },",
    "    post: {",
    "      type: mongoose.Schema.Types.ObjectId,",
    "      ref: 'Post',",
    "    },",
    "  },",
    "  { timestamps: true }",
    ");",
  ];

  const words = [
    {
      text: "Your",
    },
    {
      text: "All-in-One",
    },
    {
      text: "Database",
    },
    {
      text: "Solution",
    },
    {
      text: "!",
    }
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-[60px] w-full dark:bg-grid-white/[0.2] bg-grid-black/[0.2] pt-8 pb-20">
        <p className="text-center text-3xl text-black font-bold dark:text-white my-4">
          Introducing op-db:
        </p>
        <TypewriterEffectSmooth words={words} />
        <p className="w-[80%] text-gray-800 dark:text-gray-200">
          The op-db package streamlines database setup into a few simple steps,
          creating a versatile server that can be fully customized and, once
          hosted, serves most of your project needs for all your projects.
        </p>
        <p className="w-[90%] text-gray-800 dark:text-gray-200">
          With its innovative project segregation system, op-db allows you to
          reuse the same API endpoints across multiple projects, making it an
          ideal choice for hackathons and small-scale projects. This smart
          system ensures that your projects remain organized and efficient,
          reducing the overhead of managing separate databases and servers for
          each new initiative.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-evenly text-left py-4 border-t-2 border-t-black my-1 border-b-2 border-b-black dark:border-t-white dark:border-b-white">
        <div className="text-4xl text-gray-800 font-bold dark:text-white">
          Get Started - !{" "}
        </div>
        <div className="mockup-code">
          <pre data-prefix="$">
            <code>npm i op-db</code>
          </pre>
        </div>
      </div>
      <div className="flex flex-row text-left border-t-2 border-b-2 my-2 border-gray-200 dark:bg-slate-700">
        <div className="w-[60%] px-4 py-2">
          <p className="text-center text-xl text-gray-800 dark:text-gray-200">
            Key Features of op-db:
          </p>
          <ol className="text-gray-800 dark:text-gray-50">
            <li>
              1. Simplified Setup: Get your database up and running quickly with
              minimal configuration.
            </li>
            <li>
              2. Multi-Project Support: Utilize the same server for multiple
              projects through op-db's intelligent segregation system.
            </li>
            <li>
              3. Full Customization: Tailor the server and endpoints to fit the
              specific needs of your projects.
            </li>
            <li>
              4. Reusable API Endpoints: Save time and effort by reusing API
              endpoints across different projects.
            </li>
            <li>
              5. Ideal for Hackathons: Perfect for hackathons, where rapid
              development and deployment are crucial.
            </li>
            <li>
              6. Small-Scale Projects: A great fit for small-scale projects that
              require robust database solutions without the complexity.
            </li>
          </ol>
        </div>
        <div className="flex items-center justify-center w-[40%]">
          Explore the power of op-db and elevate your project's database
          management to new heights. For more information, visit op-db on
          GitHub.
        </div>
      </div>
      <div>
        <p className="text-3xl mt-4">The models you get !</p>
        <div className="flex flex-col sm:flex-row items-center justify-evenly">
          <Model_Code model={userModel} code={userCode} />
          <Model_Code model={postModel} code={postCode} />
          <Model_Code model={commentModel} code={commentCode} />
        </div>
      </div>
      <div className="mt-[60px] w-full dark:bg-grid-white/[0.2] bg-grid-black/[0.2] py-3 mb-4 border-b-2 border-gray-300 border-t-2">
        <p className="text-3xl text-center text-gray-700 dark:text-white font-bold">
          How iT works ? -- Overveiw !
        </p>
        <p className="text-gray-600 dark:text-gray-200 text-lg text-justify px-4">
          op-db is a simplified, pre-written backend code designed with general
          purposes in mind. The design allows it to be used for multiple
          projects with just one-time configuration and deployment. It achieves
          this by incorporating a very special project property in its
          documents, which always segregates the results based on the project
          needs. Once set up, you can read the documentation and understand the
          APIs, allowing you to easily focus on the frontend part.
        </p>
        <p className="text-gray-600 dark:text-gray-200 text-lg text-justify px-4">
          This code is written with multiple purposes in mind. It can be used to
          create generic apps that require simple login/logout functionalities
          as well as complex apps that involve extensive user data management.
          It also includes APIs tailored for social media projects, providing
          features such as posts, comments, likes, and other necessary
          functionalities. Additionally, it offers APIs for game development
          projects that require leaderboards and score systems for multiplayer
          games and other related features.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default HomeSec;
