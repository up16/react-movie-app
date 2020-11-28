import { Provider } from 'react-redux';
import store from './redux/store';
import './App.scss';
import Header from './components/header/Header';
import Main from './components/main/Main';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <div className="app">
        <Main />
        <h1>Setup React Redux</h1>
      </div>
    </Provider>
  );
};

export default App;
