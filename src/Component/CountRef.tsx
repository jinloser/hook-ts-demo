import React, { useEffect, useRef, useState } from 'react';

const CountRef: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const countRef = useRef<number>(count);
  const inputEl = useRef<HTMLInputElement>(null);

  const onFocusClick = () => {
    inputEl.current?.focus();
    console.log(inputEl);
  };

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
      <div>
        <input type="text" ref={inputEl} />
        <button onClick={onFocusClick}>Focus the input</button>
      </div>
    </>
  );
};

export default CountRef;
