import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['estudar', 'fazer atividades', 'fazer projetos'];

function App() {
  return (
    <div>
      {[compromissos.map(compromisso => Task(compromisso))]}
    </div>
  );
}

export default App;
