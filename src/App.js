
import './App.css';
import Counter from './components/Counter'
import ApiFetch from './components/ApiFetch'

function App() {
  return (
    <div className="App">
      <Counter initialNumber={0} />
      <ApiFetch userName={'Niki-Sal'} />
    </div>
  );
}

export default App;