import './App.css';
import Users from './components/Users';
import Cat from './Assets/Cat.png'


function App() {
  return (
    <div className="App">

      <header className="App-header">
        <h1>GitHub Search</h1>
        <img src={Cat} alt='cat'/>
      </header>

      <main className='App-main'>

        <Users />

      </main>
    </div>
  );
}

export default App;
