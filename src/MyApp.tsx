import React, { useState } from 'react';

export default function MyApp() {
  const [sharedCount, setSharedCount] = useState(0);

  function handleSharedClick() {
    setSharedCount(sharedCount + 1);
  }

  return (
    <div className="text-center space-y-4">
      <h1>Click</h1>

      <h2 className="font-semibold">Independent (A)</h2>
      <ButtonA />
      <ButtonA />

      <h2 className="font-semibold mt-4">Shared (B)</h2>
      <div className="space-x-2"></div>
      <ButtonB count={sharedCount} onClick={handleSharedClick} />
      <ButtonB count={sharedCount} onClick={handleSharedClick} />

      <button
        onClick={() => setSharedCount(0)}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition" >
        Reset Shared Count
      </button>
    </div>
  );
}

function ButtonA() {
  const [count, setCount] = useState(0);

  function handleClick() {
    alert('You clicked button A!');
    setCount(count + 1);
  }

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
      A - {count} times
    </button>
  );
}

type ButtonBProps = {
  count: number;
  onClick: () => void;
};

function ButtonB({ count, onClick }: ButtonBProps) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
      B - {count} times
    </button>
    
  );
}