import React, { useEffect, useMemo } from 'react';
import { memoChildData } from '../../utils/index.type';

const MemoChild: React.FC<memoChildData> = ({ time, children }) => {
  useEffect(() => {
    console.log('effect function here...');
  }, [time]);

  const changeTime = (time: number) => {
    console.log('changeTime excuted...');
    return new Date(time).toISOString();
  };

  const newTime: string = useMemo(() => changeTime(time), [time]);

  return (
    <>
      <p>Time is:{newTime}</p>
      <p>Random id:{children}</p>
    </>
  );
};

export default React.memo(MemoChild);
