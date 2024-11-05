import React from 'react';
import { Helmet } from 'react-helmet';

const MyComponent = () => {
  return (
    <div>
      <Helmet>
        <title>My Dynamic Page Title</title>
        <meta name="description" content="This is a dynamic description for my page." />
      </Helmet>
      <h1>Welcome to My Page</h1>
      <p>This page has a dynamic title and meta description.</p>
    </div>
  );
};

export default MyComponent;