import React from "react";

function Introduction() {
  const registerUserCode = [
    "async function registerUser() {",
    "  const url = 'http://localhost:8000/api/user/register';",
    "",
    "  const userData = {",
    "    username: 'exampleUsername',",
    "    fullname: 'Example Fullname',",
    "    email: 'example@example.com',",
    "    password: 'examplePassword',",
    "    project: 'exampleProject',",
    "  };",
    "",
    "  try {",
    "      const response = await fetch(url, {",
    "      method: 'POST',",
    "      headers: {",
    "        'Content-Type': 'application/json',",
    "      },",
    "      body: JSON.stringify(userData),",
    "      credentials: 'include', // This ensures cookies are included in the request",
    "    });",
    "",
    "    if (!response.success) {",
    "      throw new Error(`Error: ${response.message}`);",
    "    }",
    "",
    "    const data = await response.json();",
    "    console.log('Success:', data);",
    "  } catch (error) {",
    "    console.error('Error:', error);",
    "  }",
    "}",
    "",
    "",
    "registerUser();",
  ];
  const userLoginCode = [
    "async function loginUser() {",
    "  const url = 'http://localhost:8000/api/user/login';",
    "",
    "  const userData = {",
    "    username: 'exampleUsername',",
    "    password: 'examplePassword',",
    "  };",
    "",
    "  try {",
    "    const response = await fetch(url, {",
    "      method: 'POST',",
    "      headers: {",
    "        'Content-Type': 'application/json',",
    "      },",
    "      body: JSON.stringify(userData),",
    "      credentials: 'include', // This ensures cookies are included in the request",
    "    });",
    "",
    "    if (!response.success) {",
    "      throw new Error(`Error: ${response.message}`);",
    "    }",
    "",
    "    const data = await response.json();",
    "    console.log('Success:', data);",
    "  } catch (error) {",
    "    console.error('Error:', error);",
    "  }",
    "}",
    "",
    "// Call the function to test",
    "loginUser();",
  ];
  const logoutUserCode = [
    "async function logoutUser() {",
    "  const url = 'http://localhost:8000/api/user/logout';",
    "",
    "  try {",
    "    const response = await fetch(url, {",
    "      method: 'POST',",
    "      credentials: 'include', // This ensures cookies are included in the request",
    "    });",
    "",
    "    if (!response.success) {",
    "      throw new Error(`Error: ${response.message}`);",
    "    }",
    "",
    "    const data = await response.json();",
    "    console.log('Success:', data);",
    "  } catch (error) {",
    "    console.error('Error:', error);",
    "  }",
    "}",
    "",
    "// Call the function to test",
    "logoutUser();",
  ];

  return (
    <>
      <div className="bg-slate-300 dark:bg-slate-700 w-fit text-slate-800 dark:text-slate-200 text-justify">
        <p className="text-3xl text-slate-600 dark:text-slate-200 font-semibold pt-2">
          Introduction -
        </p>
        <p className="text-center text-xs text-balance bg-slate-200 my-4 rounded-md font-bold text-red-500 py-2">
          Note : This setup strictly uses cloudinary and mongodb. Both are
          trustworthy, secure and have a free teir. You can opt not to use
          cloudinary but you might face some errors with some endpoints.
        </p>
        <p className="pt-2">
          After the npm install you get a op-db in the node modules which
          consists of all the code.
        </p>
        <p>
          Basically what you get is a very simple and well planned backend code
          written in express js , mongoose and using cloudinary and mongodb.
          Perfect for your backend needs.
        </p>
      </div>
      <p className="text-center text-sm font-bold text-red-500 py-2">
        For detailed reference see the installation section for installation and
        api section for all available api details and endpoints !
      </p>
      <div className="flex flex-col gap-5 justify-evenly items-center  bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-justify pt-5 pb-3 border-y-2 border-black dark:border-white sm:my-2">
        <div>
          <p>
            Let's start by adding basic signup and login/logout functionality.
          </p>
          <p>
            With just a few steps, you can set up authentication for your
            project!
          </p>
          <ol className="list-decimal sm:ml-4">
            <li>
              From the frontend, make a POST request to{" "}
              <code className="text-orange-500">
                http://localhost:8000/api/user/register
              </code>
              .
              <p className="text-orange-500">
                Replace <code>localhost:8000</code> with your server URL.
              </p>
            </li>
            <li>
              From the frontend, make a POST request to{" "}
              <code className="text-orange-500">
                http://localhost:8000/api/user/login
              </code>
              .
              <p className="text-orange-500">
                Replace <code>localhost:8000</code> with your server URL.
              </p>
            </li>
            <li>
              From the frontend, make a POST request to{" "}
              <code className="text-orange-500">
                http://localhost:8000/api/user/logout
              </code>
              .
              <p className="text-orange-500">
                Replace <code>localhost:8000</code> with your server URL.
              </p>
            </li>
          </ol>
          <p>
            These endpoints, once connected to the frontend, will provide the
            authentication feature.
          </p>
        </div>
        <p className="text-center font-bold text-2xl text-gray-700 dark:text-gray-300">
          Register/Signup user request !
        </p>
        <div className="mockup-code overflow-auto sm:w-fit w-[180px] sm:h-[600px] h-[350px]">
          {registerUserCode.map((variable, index) => (
            <pre data-prefix={index + 1}>
              <code>{variable}</code>
            </pre>
          ))}
        </div>
        <p className="text-center font-bold text-2xl text-gray-700 dark:text-gray-300">
          Login user request !
        </p>
        <div className="mockup-code overflow-auto sm:w-fit w-[180px] sm:h-[600px] h-[350px]">
          {userLoginCode.map((variable, index) => (
            <pre data-prefix={index + 1}>
              <code>{variable}</code>
            </pre>
          ))}
        </div>
        <p className="text-center font-bold text-2xl text-gray-700 dark:text-gray-300">
          Logout user request !
        </p>
        <div className="mockup-code overflow-auto sm:w-fit w-[180px] sm:h-[600px] h-[350px]">
          {logoutUserCode.map((variable, index) => (
            <pre data-prefix={index + 1}>
              <code>{variable}</code>
            </pre>
          ))}
        </div>
      </div>
      <div className="bg-slate-300 dark:bg-slate-700 w-fit text-slate-800 dark:text-slate-200 text-justify">
        <p className="text-3xl text-slate-600 text-center dark:text-slate-200 font-semibold pt-2">
          Similarly -
        </p>
        <p className="pt-2">
          You can refer to the api section for all the api options and endpoints
          and setup all your application !
        </p>
        <p>
          Your database is setup now connecting the apis will take any of your
          application a step ahead. An make them complete !
        </p>
      </div>
    </>
  );
}

export default Introduction;
