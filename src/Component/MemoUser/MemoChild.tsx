import React, { useCallback, useEffect, useMemo } from 'react';

type Data = {
  time: number;
  children: number;
};
const MemoChild: React.FC<Data> = ({ time, children }) => {
  useEffect(() => {
    console.log('effect function here...');
  }, [time]);

  const changeTime = (time: number) => {
    console.log('changeTime excuted...');
    return new Date(time).toISOString();
  };

  const newTime: string = useMemo(() => changeTime(time), [time]);

  const getNewTime = useCallback(() => {
    return changeTime(time);
  }, [time]);

  return (
    <>
      <p>Time is:{getNewTime()}</p>
      <p>Random id:{children}</p>
    </>
  );
};

export default React.memo(MemoChild);
