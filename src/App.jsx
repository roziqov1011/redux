
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import {Demo} from './components/Demo'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Demo></Demo>
      </Provider>
    </div>
  );
}

export default App;
