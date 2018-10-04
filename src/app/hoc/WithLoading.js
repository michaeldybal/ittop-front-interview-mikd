import React from 'react';
import LoadingIndicator from '../components/LoadingIndicator';

const WithLoading = Component => ({ isLoading, children, ...props }) => {
  if (!isLoading) {
    return <Component {...props}>
      {children}
    </Component>;
  }
  return (
    <LoadingIndicator isLoading={isLoading} />
  )
};

export default WithLoading;