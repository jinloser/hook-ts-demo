import React, { useContext, useEffect } from 'react';
import { APPContext } from '../../utils/context-manager';

interface PropsParam {
  step: number;
  number: number;
  count: number;
}
const ContextChild: React.FC<PropsParam> = ({ step, number, count }) => {
  console.log(useContext(APPContext));
  const { setStep, setNumber, setCount, fetchData } = useContext(APPContext);
  useEffect(() => {
    fetchData().then((res: any) => {
      console.log(`FETCH DATA: ${res}`);
    });
  }, []);
  return (
    <>
      <div>
        <p>step is : {step}</p>
        <p>number is : {number}</p>
        <p>count is : {count}</p>
        <hr />
        <div>
          <button
            onClick={() => {
              setStep(step + 1);
            }}
          >
            step ++
          </button>
          <button
            onClick={() => {
              setNumber(number + 1);
            }}
          >
            number ++
          </button>
          <button
            onClick={() => {
              setCount(step + number);
            }}
          >
            number + step
          </button>
        </div>
      </div>
    </>
  );
};

export default ContextChild;
