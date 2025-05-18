import logo from './logo.svg';
import './App.css';
import HelloWord from './componetes/helloword.js'
import Salve from './componetes/salvemeunome.js'
import Pessoa from './componetes/Pessoas.js'
import List from './componetes/List.js'
import Evento from './componetes/Evento.js';
import Form from './componetes/Form.js'

function App() {


  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento/>
      <Form/>
      
    </div>
  );
}

export default App;
