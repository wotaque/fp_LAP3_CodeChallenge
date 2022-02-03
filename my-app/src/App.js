import './App.css';
import Users from './components/Users';
import Cat from './Assets/Cat.png'


function App() {
  return (
    <div className="App">

      <header className="App-header">
        <span><img id='cat' src={Cat} alt='cat' height='60px'/>GitHub Search</span>
        
      </header>

      <main className='App-main'>

        <Users />

      </main>
    </div>
  );
}

export default App;
