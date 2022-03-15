import React, { useEffect } from 'react';

const Handle: React.FC = () => {
  useEffect(() => {
    const handle = () => {
      document.title = Math.random().toString();
      console.log('render');
    };
    window.addEventListener('resize', handle);
    return () => {
      window.removeEventListener('resize', handle);
    };
  }, []);

  return <></>;
};

export default Handle;
