import logo from './logo.svg';
import './App.css';
import UseRecuderExample from './components/UseRecuderExample';
import UseMemoExample from './components/UseMemoExample';
import UseRefExample from './components/UseRefExample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UseRecuderExample />
        <UseMemoExample />
        <UseRefExample />
      </header>
    </div>
  );
}

export default App;
