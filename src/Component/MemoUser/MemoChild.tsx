import React from 'react';

type Data = {
  time: number;
};
const MemoChild: React.FC<Data> = ({ time, children }) => {
  const changeTime = (time: number) => {
    console.log('changeTime excuted...');
    return new Date(time).toISOString();
  };
  return (
    <>
      <p>Time is:{changeTime(time)}</p>
      <p>Random id:{children}</p>
    </>
  );
};

export default MemoChild;
