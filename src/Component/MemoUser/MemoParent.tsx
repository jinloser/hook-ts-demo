import { Button } from 'antd';
import React, { useState } from 'react';
import MemoChild from './MemoChild';

const MemoParent: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [random, setRandom] = useState<number>(0);

  return (
    <>
      <Button
        onClick={() => {
          setTime(new Date().getTime());
        }}
      >
        获取当前时间
      </Button>
      <Button
        onClick={() => {
          setRandom(Math.random());
        }}
      >
        获取当前随机数
      </Button>
      <MemoChild time={time}>{random}</MemoChild>
    </>
  );
};

export default MemoParent;
