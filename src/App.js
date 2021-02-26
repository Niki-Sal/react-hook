
import './App.css';
import Counter from './components/Counter'
import APIFetch from './components/APIFetch'

function App() {
  return (
    <div className="App">
      <Counter initialNumber={0} />
      <APIFetch userName={'Niki-Sal'}/>
    </div>
  );
}

export default App;
