import React from 'react';
import GlobalStyles from './config/themes';
import { RouterProvider } from './routes';
import Menu from './components/menu';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Menu />
      <RouterProvider />
    </Provider>
  );
}

export default App;
