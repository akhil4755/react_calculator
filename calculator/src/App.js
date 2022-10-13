import Button from './components/Button'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Update <code>src/App.js</code> and reload
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React JS
        </a>
        <Button value="Calculate" />
      </header>
    </div>
  );
}

export default App;
