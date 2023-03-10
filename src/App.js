import './App.css';
import AnotherComponent from './components/AnotherComponent';
import FirstComponent from './components/FirstComponent';
import Imagens from './components/Imagens';
import Hooks from './components/Hooks';
import List from './components/List'
import RenderCond from './components/RenderCond';
import Fragment from './components/Fragment';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
        <h1>Hello React!</h1>
        <FirstComponent/>
        <AnotherComponent/>
        <Imagens/>
        <Hooks/>
        <List/>
        <RenderCond x={5} y={3}/>
        <Fragment/>
        <Container>
          <h1>Este é filho do Container</h1>
        </Container>
    </div>
  );
}

export default App;
