import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'arthur';
  const newname = name.toUpperCase();

  function sum(a, b){
    return a + b;
  }

  const url = 'https://Via.placeholder.com/150';

  
  return (
    <div className="App">
      <h1>hello word</h1>
      <p>Olá, {newname}</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt='minha imagem'/>
    </div>
  );
}

export default App;
