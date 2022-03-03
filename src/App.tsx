import React from 'react';
import './App.css';
import Article from './Component/Article';
import Counter from './Component/Counter';
import CountRef from './Component/CountRef';
import Handle from './Component/Handle';
import MemoParent from './Component/MemoUser/MemoParent';
import SwichCount from './Component/SwichCount';

const App: React.FC = () => {
  return (
    <>
      <Counter />
      <Article title={'自定义123'} content={'自定义内容'} />
      <SwichCount />
      <Handle />
      <CountRef />
      <MemoParent />
    </>
  );
};

export default App;
