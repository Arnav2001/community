// components/ClientProviders.js
'use client';

import React from 'react';
import '@mantine/core/styles.css';
import { Provider } from 'react-redux';
import { MantineProvider, createTheme } from '@mantine/core';
import store from '../app/redux/store';

const theme = createTheme({
  colors: {
    gray: [
      "#f5f5f5",
      "#e7e7e7",
      "#cdcdcd",
      "#b2b2b2",
      "#9a9a9a",
      "#8b8b8b",
      "#848484",
      "#717171",
      "#656565",
      "#000000"
    ]
  },
  primaryColor: 'gray',
  primaryShade: { light: 9, dark: 1 }
});

const ClientProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <MantineProvider theme={theme}>
        {children}
      </MantineProvider>
    </Provider>
  );
};

export default ClientProviders;
