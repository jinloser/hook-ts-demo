import React, { useEffect, useState } from 'react';

let count: number = 0;

const SwichCount: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [name1, setName1] = useState<string>('');
  useEffect(() => {
    count += 1;
  }, [name]);
  return (
    <>
      <p>Current Name:{name}</p>
      <p>Second Name:{name1}</p>
      <p>switchCount:{count}</p>
      <button onClick={() => setName('Jack')}>Jack</button>
      <button onClick={() => setName('Jack2')}>Jack2</button>
      <button onClick={() => setName1('Marry')}>Marry</button>
      <button onClick={() => setName1('Marry2')}>Marry2</button>
    </>
  );
};

export default SwichCount;
