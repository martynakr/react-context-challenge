import logo from './logo.svg';
import './App.css';
import Form from './container/Form';
import Header from './container/Header';
import ToggleProvider from './Context/ToggleContext';

function App() {
  return (
    <ToggleProvider>
      <div className="App">
          <Header/>
          <Form/>
        </div>
      </ToggleProvider>
    
  );
}

export default App;
