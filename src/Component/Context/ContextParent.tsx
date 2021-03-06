import React, { useState } from 'react';
import { APPContext } from '../../utils/context-manager';
import ContextChild from './ContextChild';

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    });
  }).catch((err) => {
    console.log(console.log(err));
  });
};

const ContextParent: React.FC = () => {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  return (
    <>
      <APPContext.Provider value={{ setStep, setCount, setNumber, fetchData }}>
        <ContextChild step={step} count={count} number={number} />
      </APPContext.Provider>
    </>
  );
};

export default React.memo(ContextParent);
