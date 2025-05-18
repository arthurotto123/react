import logo from './logo.svg';
import './App.css';
import HelloWord from './componetes/helloword.js'
import Salve from './componetes/salvemeunome.js'
import Pessoa from './componetes/Pessoas.js'
import List from './componetes/List.js'

function App() {

  const nome = "maria"

  return (
    <div className="App">
      <HelloWord />
      <Salve name="Arthur"/>
      <Salve name="lucas"/>
      <Salve name={nome}/>
      <Pessoa nome={nome} idade="20" profissao="programador" foto="https://via.placeholder.com/150"/>
      <List/>
    </div>
  );
}

export default App;
