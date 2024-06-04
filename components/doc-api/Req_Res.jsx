import React from "react";
import Model_Code from "../Model_Code.jsx";

function Req_Res({ statement, req, type, res, model, code ,endpoint}) {
  return (
    <div className="flex flex-col w-full justify-center sm:gap-2 items-center">
      <p className="bg-slate-300 mt-14 text-xl dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-justify w-[750px]">
        {statement}
      </p>
      <p className="text-lg sm:text-xl text-red-600 text-center">{type} @ {endpoint} !</p>
      <div className="flex flex-col sm:flex-row sm:gap-16">
        <Model_Code model={model} code={code}  className={"sm:w-[300px] w-[280px]"} />
        <div className="flex flex-col">
          <p className="bg-slate-300 font-bold py-2 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-justify">
            Request body sample -
          </p>
          <div className="mockup-code overflow-auto sm:w-[400px] w-[180px] sm:h-fit h-[200px]">
            {req.map((variable, index) => (
              <pre key={index} data-prefix={index + 1}>
                <code>{variable}</code>
              </pre>
            ))}
          </div>
          <p className="bg-slate-300 font-bold py-2 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-justify">
            Response sample -
          </p>
          <div className="mockup-code overflow-auto sm:w-[400px] w-[180px] sm:h-[750px] h-[350px]">
            {res.map((variable, index) => (
              <pre key={index} data-prefix={index + 1}>
                <code>{variable}</code>
              </pre>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Req_Res;
