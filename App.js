/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import AppNavigation from './src/navigation/config/appNavigation';
import store from './src/config/redux/configureStore';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>

  )
}


export default App;
