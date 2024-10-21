import logo from './logo.svg';
import './App.css';
import HomePage from './Component/HomePage';
import { store } from './Store/Store';
import { Provider } from 'react-redux'

function App() {
  return (
      <HomePage/>
  );
}

export default App;
