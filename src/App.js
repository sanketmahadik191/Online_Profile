import '@ionic/react/css/core.css';
import './App.css';
import { Sidebar } from './componentes/Sidebar';
import { Main } from './componentes/Main';

function App() {
  return (
    <div className="App">
     <Sidebar></Sidebar>
     <Main></Main>
    </div>
  );
}

export default App;
