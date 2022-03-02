import React, { useEffect, useRef, useState } from 'react';

const CountRef: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const countRef = useRef<number>(count);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  const handleCount = () => {
    setTimeout(() => {
      alert('current count: ' + countRef.current);
    }, 3000);
  };

  return (
    <>
      <p>pre count:{countRef.current}</p>
      <p>current count:{count}</p>
      <button onClick={() => setCount(count + 1)}>加</button>
      <button onClick={() => handleCount()}>弹框显示</button>
    </>
  );
};

export default CountRef;
