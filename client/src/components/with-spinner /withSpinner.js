import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';

const WithSpinner =
  (Component) =>
  (isLoading, ...rest) =>
    isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <Component {...rest} />
    );

export default WithSpinner;
