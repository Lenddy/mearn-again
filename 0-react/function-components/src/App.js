import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <Person  name = {"Lenddy"} age = {19}>
        <p>there is no more information about me </p>
      </Person>
    </div>
  );
}

export default App;
