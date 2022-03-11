import React from 'react';
import './App.css';
import Article from './Component/Article';
import ColorParent from './Component/ColorContext/ColorParent';
import Counter from './Component/Counter';
import CountRef from './Component/CountRef';
import Handle from './Component/Handle';
import MemoParent from './Component/MemoUser/MemoParent';
import Reducer from './Component/Reducer';
import SwichCount from './Component/SwichCount';

const App: React.FC = () => {
  const states = React.createContext<string>('content');
  return (
    <>
      <Counter />
      <Article title={'自定义123'} content={'自定义内容'} />
      <SwichCount />
      <Handle />
      <CountRef />
      <MemoParent />
      <Reducer />
      <ColorParent />
    </>
  );
};

export default App;
