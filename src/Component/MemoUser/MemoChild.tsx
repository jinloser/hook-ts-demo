import React, { useMemo } from 'react';

type Data = {
  time: number;
};
const MemoChild: React.FC<Data> = ({ time, children }) => {
  const changeTime = (time: number) => {
    console.log('changeTime excuted...');
    return new Date(time).toISOString();
  };

  const newTime: string = useMemo(() => {
    return changeTime(time);
  }, [time]);
  return (
    <>
      <p>Time is:{newTime}</p>
      <p>Random id:{children}</p>
    </>
  );
};

export default MemoChild;
