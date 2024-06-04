import React from "react";

function Model_Code({ model, code ,className="" }) {
  const [show, setShow] = React.useState(true);
  return (
    <div className={`${className} w-[400px] h-[500px] border-2 border-black rounded-md flex flex-col pt-2 pb-5 my-5`}>
      <div className="border-b-1 border-gray-800 flex flex-row items-center justify-evenly">
        <button
          onClick={() => setShow(!show)}
          className={`${show ? " underline" : ""} text-black dark:text-white`}
        >
          Model
        </button>
        <button
          onClick={() => setShow(!show)}
          className={`${!show ? "underline" : ""} text-black dark:text-white`}
        >
          Schema Code
        </button>
      </div>
      <div className="mt-3 px-3 overflow-auto">
        {show ? (
          model.map((element, index) => {
            return <p className={`${index==0?"text-xl text-gray-700 text-center dark:text-gray-300 font-bold":"text-center"}`} key={index}>{`${index == 0 ? "" : index+"."} ${element}`}</p>;
          })
        ) : (
          <div class="mockup-code text-left">
            {code.map((element, index) => {
                return <pre data-prefix={index+1} key={index}><code>{element}</code></pre>
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Model_Code;
