import React, { useContext } from 'react';

const ColorContext = React.createContext<string>('');
const ColorParent: React.FC = () => {
  return (
    <>
      <ColorContext.Provider value="#1890ff">
        <ColorChild></ColorChild>
      </ColorContext.Provider>
    </>
  );
};

const ColorChild: React.FC = () => {
  const color = useContext(ColorContext);
  return (
    <>
      <div style={{ background: color }}>Background color is:{color}</div>
    </>
  );
};

export default ColorParent;
