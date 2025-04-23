// Counter.tsx
import React from 'react';
import { useState } from 'react';

const Counter = () => {
  const [count, set] = useState(0);
  return (
    <button
      className="px-4 py-2 rounded bg-indigo-600 text-white"
      onClick={() => set((c) => c + 1)}
    >
      Count&nbsp;{count}
    </button>
  );
};

export default Counter;
