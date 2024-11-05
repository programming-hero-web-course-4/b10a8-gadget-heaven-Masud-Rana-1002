import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const DynamicTitleComponent = () => {
  const [title, setTitle] = useState('Hello');

  const handleChangeTitle = () => {
    setTitle('Updated Dynamic Title');
  };

  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <h1>React Helmet Dynamic Title</h1>
      <button onClick={handleChangeTitle}>Change Title</button>
    </div>
  );
};

export default DynamicTitleComponent;
