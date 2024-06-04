import React from "react";

function Installation() {
  const envVariables = [
    "CORS_ORIGIN=*",
    "MONGODB_URI=your mongodb uri",
    "DBNAME=your mongodb database name",
    "PORT=8000",
    "CLOUDINARY_SECRET=your cloudinary secret",
    "CLOUDINARY_KEY=your cloudinary key",
    "CLOUDINARY_NAME=your cloudinary name",
    "ACCESS_TOKEN_SECRET=123",
    "ACCESS_TOKEN_EXPIREY=1d",
    "REFRESH_TOKEN_SECRET=456",
    "REFRESH_TOKEN_EXPIREY=10d",
  ];
  return (
    <>
      <div className="bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-justify">
        <p className="text-3xl text-slate-600 dark:text-slate-200 font-semibold pt-2">
          Installation -
        </p>
        <p className="pt-2">To get started let's go with the prerequisites.</p>
        <a href="https://www.mongodb.com">
          <p>1. You must need an mongodb account setup.</p>
        </a>
        <a href="https://cloudinary.com">
          <p>2. You must have an cloudinary account setup.</p>
        </a>
        <p>
          Dont worry all have a free tier !! haven for projects and hackathons !
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-evenly items-center  bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-justify pt-5 pb-3 border-y-2 border-black dark:border-white my-2">
        <div>First step npm install op-db.</div>
        <div className="mockup-code">
          <pre data-prefix="$">
            <code>npm i op-db</code>
          </pre>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-evenly items-center  bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-justify pt-5 pb-3 border-y-2 border-slate-500 my-2">
        <div>
          Setup the environment file.
          <p>1. Create a .env file at the root directory only!</p>
          <p>2. Create an empty folder named public at the root then an temp folder within it.</p>
          <p className="text-orange-400">File structure <span className="text-red-500">public/temp</span> must be present at the root!</p>
          <p className="text-orange-500">
            Replace the env details with your data!
          </p>
        </div>
        <div className="mockup-code overflow-auto w-[100px] sm:w-fit">
          {envVariables.map((variable, index) => (
            <pre data-prefix={index + 1}>
              <code>{variable}</code>
            </pre>
          ))}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-evenly items-center  bg-slate-300 dark:bg-slate-700 text-slate-800 gap-2 sm:gap-0 dark:text-slate-200 text-justify pt-5 pb-3 border-y-2 border-black dark:border-white my-2">
        <div>Config your env as soon as possible!</div>
        <div className="mockup-code overflow-auto w-auto sm:w-[20px]">
          <pre data-prefix="$">
            <code>npm i dotenv</code>
          </pre>
        </div>
        <div className="mockup-code overflow-auto w-[100px] sm:w-[80px]">
          <pre data-prefix="1">
            <code>import dotenv from "dotenv";</code>
          </pre>
          <pre data-prefix="2">
            <code>dotenv.config(&#123; path: &quot;./.env&quot; &#125;);</code>
          </pre>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-evenly items-center  bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-justify pt-5 pb-3 border-y-2 border-slate-500 my-2">
        <div>
          Now import main function from op-db.
          <p>Run main function !</p>
          <p className="text-orange-500">
            for any errors check the console and recheck your env file !
          </p>
        </div>
        <div className="mockup-code overflow-auto w-[100px] sm:w-fit">
        <pre data-prefix="1">
            <code>import dotenv from "dotenv";</code>
          </pre>
          <pre data-prefix="2">
            <code>import main from "op-db"</code>
          </pre>
          <pre data-prefix="3">
            <code>dotenv.config(&#123; path: &quot;./.env&quot; &#125;);</code>
          </pre>
          <pre data-prefix="4">
            <code>main();</code>
          </pre>
        </div>
      </div>
      <p className="text-3xl text-slate-600 font-semibold text-center dark:text-slate-300">Now enjoy all your api endpoints !</p>
    </>
  );
}

export default Installation;
