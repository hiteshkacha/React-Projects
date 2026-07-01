import React, { useState } from "react";

const App = () => {

  const [count, setCount] = useState(0);
  const [countTo , setCountTo] = useState(0);

  return (
    <>
      <div className="container text-center mt-5">
        <h1>useState example</h1>
          <div>
            <h2>Count: {count}</h2>
          </div>
          <div className="flex justify-center gap-3 mt-3">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={() => setCount(count + 1)}>Increment</button>
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded" onClick={() => setCount(count - 1)}>Decrement</button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded" onClick={() => setCount(0)}>Reset</button>
          </div>
          <div className="mt-3">
            <input type="number" value={countTo} onChange={(e) => setCountTo(Number(e.target.value) || 0)} />
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded" onClick={() => setCount(countTo)}>Set Count</button>
          </div>
      </div>
    </>
  );
};

export default App;
