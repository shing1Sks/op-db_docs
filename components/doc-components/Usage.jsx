import React from "react";

function Usage() {
  return (
    <>
      <div className="bg-slate-300 dark:bg-slate-700 w-fit text-slate-800 dark:text-slate-200 text-justify">
        <p className="text-3xl text-slate-600 dark:text-slate-200 font-semibold pt-2">
          Use Cases Overview and General Guide -
        </p>
      </div>
      <div className="flex flex-col gap-5 justify-evenly items-center  bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-justify pt-5 pb-3 border-y-2 border-black dark:border-white my-2">
        <p className="text-xl text-slate-600 dark:text-slate-200 font-semibold pt-2">
          General User login/logout based projects !
        </p>
        <div>
          <p>
            If your project does not have any special requirements then you can
            definitly use the login/logout api and make your application
            complete by adding the following endpoints:
          </p>
          <ol className="list-decimal sm:ml-4">
            <li>
              <code className="text-slate-500">
                http://localhost:8000/api/user/register
              </code>
            </li>
            <li>
              <code className="text-slate-500">
                http://localhost:8000/api/user/login
              </code>
            </li>
            <li>
              <code className="text-slate-500">
                http://localhost:8000/api/user/logout
              </code>
            </li>
          </ol>
          <p>
            These endpoints, once connected to the frontend, will provide the
            authentication feature.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5 justify-evenly items-center  bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-justify pt-5 pb-3 border-y-2 border-black dark:border-white my-2">
        <p className="text-xl text-slate-600 dark:text-slate-200 font-semibold pt-2">
          General User login/logout + user specific data handling based projects
          !
        </p>
        <div>
          <p>
            If your project requires you to keep track some data with each user
            then you can utilise the userdata property of the user model which
            is specifically designed to keep track of user. This feature
            encourages creative use to meet requirements for your game dev or
            some other project. The following endpoints will be required:
          </p>
          <ol className="list-decimal sm:ml-4">
            <li>
              <code className="text-slate-500">
                http://localhost:8000/api/user/register
              </code>
            </li>
            <li>
              <code className="text-slate-500">
                http://localhost:8000/api/user/login
              </code>
            </li>
            <li>
              <code className="text-slate-500">
                http://localhost:8000/api/user/logout
              </code>
            </li>
            <li>
              <code className="text-slate-500">
                http://localhost:8000/api/user/store-data
              </code>
            </li>
            <li>
              <code className="text-slate-500">
                http://localhost:8000/api/user/get-stored-data
              </code>
            </li>
          </ol>
          <p>
            The userdata field can store json objects to accomplish the required
            task.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5 justify-evenly items-center  bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-justify pt-5 pb-3 border-y-2 border-black dark:border-white my-2">
        <p className="text-xl text-slate-600 dark:text-slate-200 font-semibold pt-2">
          GameDev projects with user score keeptrack and leaderboards !
        </p>
        <div>
          <p>
            If your project needs to keeps track of a field - score and get leaderboards. The following endpoints will be required:
          </p>
          <ol className="list-decimal sm:ml-4">
            <li>
              <code className="text-slate-500">
                http://localhost:8000/api/user/register
              </code>
            </li>
            <li>
              <code className="text-slate-500">
                http://localhost:8000/api/user/login
              </code>
            </li>
            <li>
              <code className="text-slate-500">
                http://localhost:8000/api/user/logout
              </code>
            </li>
            <li>
              <code className="text-slate-500">
                http://localhost:8000/api/user/logout
              </code>
            </li>
            <li>
              <code className="text-slate-500">
                http://localhost:8000/api/user/add-score
              </code>
            </li>
            <li>
              <code className="text-slate-500">
                http://localhost:8000/api/user/leaderboard
              </code>
            </li>
          </ol>
          <p>
            Once user logged in the score can be updated which appects both positive and negative vlaues.
            The leaderboards gives the result in rank basis on a global order. The range of results can be altered throught the env file.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5 justify-evenly items-center  bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-justify pt-5 pb-3 border-y-2 border-black dark:border-white my-2">
        <p className="text-xl text-slate-600 dark:text-slate-200 font-semibold pt-2">
          General Social Media Type Project !
        </p>
        <div>
          <p>
            If you intend to create a social media app or add social media like feature then you can use the following endpoints:
          </p>
          <ol className="list-decimal sm:ml-4">
            <li>
              <code className="text-slate-500">
                http://localhost:8000/api/user/register
              </code>
            </li>
            <li>
              <code className="text-slate-500">
                http://localhost:8000/api/user/login
              </code>
            </li>
            <li>
              <code className="text-slate-500">
                http://localhost:8000/api/user/logout
              </code>
            </li>
            <li>
                Posts
              <code className="text-slate-500">
                http://localhost:8000/api/posts/create
              </code>
            </li>
            <li>
                Get posts created by user
              <code className="text-slate-500">
                http://localhost:8000/api/posts/get-user-posts
              </code>
            </li>
            <li>
                Get posts
              <code className="text-slate-500">
                http://localhost:8000/api/posts/get-posts
              </code>
            </li>
            <li>
                Search posts
              <code className="text-slate-500">
                http://localhost:8000/api/posts/search
              </code>
            </li>
            <li>And many more .. refer the api documentation</li>
          </ol>
          <p>
            This npm package comes pre packed with tons of api endpoints to meet any general social media app needs like post management and comment system.
          </p>
        </div>
      </div>
      <div className="bg-slate-300 dark:bg-slate-700 w-fit text-slate-800 dark:text-slate-200 text-center">
        <p className="text-sm text-green-700 dark:text-orange-200 font-semibold pt-2">
            This is just an overview of necessary endpoints for specific types of projects ! Its best to refer the complete api documentation to understand the endponts and the types available.
        </p>
      </div>
    </>
  );
}

export default Usage;
