import { useState } from "react";


function handleClick(x, check1, check2, change1, change2) {
  if (x === 1 && check2 === false) change1(!check1);
  else if (check2 === true && x == 1) {
    change1(!check1);
    change2(false);
  } else if (x === 2 && check1 === false) change2(!check2);
  else if (x === 2 && check1 === true) {
    change2(!check2);
    change1(false);
  }
}

function RideT() {
  const [check1, change1] = useState(false);
  const [check2, change2] = useState(false);

  const hrs = [];
  for (let i = 1; i <= 12; i++) {
    hrs.push(i);
  }
  const min = [];
  for (let i = 0; i <= 59; i++) {
    min.push(i);
  }
  const drivers = ["Santhapan1", "Santhapan2"];

  return (
    <>
      <div className="flex flex-col items-center bg-bckgrnd h-screen m-0 gap-5 ">
        <div className="flex justify-center items-center text-bckgrnd w-full bg-org h-16 rounded-lg">
          <h1>Book a new ride</h1>
        </div>

        <div className="flex flex-col  w-3/4 bg-white container p-10 rounded-2xl">
          <h4>From:</h4>
          <input
            type="text"
            className="border-solid border h-10 border-bord outline-0 rounded-2xl pl-5"
          ></input>
          <h4>To:</h4>
          <input
            type="text"
            className="border-solid border h-10 border-bord outline-0 rounded-2xl pl-5"
          ></input>
          <h4 className="mt-2">Pick Up</h4>
          <div className="flex flex-row gap-2">
            <select className="appearance-none border-solid border border-bord outline-none rounded-md p-1">
              {hrs.map((k) => (
                <option className="text-justify" key={k}>
                  {k}
                </option>
              ))}
            </select>
            <select className="appearance-none border-solid border border-bord outline-none rounded-md p-1">
              {min.map((k) => (
                <option key={k}>{k}</option>
              ))}
            </select>
            <select className="appearance-none border-solid border border-bord outline-none rounded-md p-1">
              <option value="">am</option>
              <option value="">pm</option>
            </select>
          </div>
          <div className="flex flex-row justify-between mt-6">
            <button
              onClick={() => handleClick(1, check1, check2, change1, change2)}
              style={{ backgroundColor: check1 ? "#FFB647" : null }}
              className="border-solid border border-bord w-24 px-3 py-1 rounded-2xl "
            >
              Urgent
            </button>
            <button
              onClick={() => handleClick(2, check1, check2, change1, change2)}
              style={{ backgroundColor: check2 ? "#FFB647" : null }}
              className="border-solid border border-bord w-24 px-3 py-1 rounded-2xl"
            >
              Go Alone
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RideT;
