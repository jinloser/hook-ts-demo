import React, { useState } from 'react';

const Counter: React.FC<{ initial?: number }> = ({ initial = 0 }) => {
  const [count, setCount] = useState<number>(initial);

  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={() => setCount(count + 1)}>加</button>
      <button onClick={() => setCount(count - 1)}>减</button>
    </div>
  );
};

export default Counter;
