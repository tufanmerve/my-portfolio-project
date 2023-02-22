import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import { Skills } from './components/Skills';
import Project from './components/Project';



function App() {
  return (

    <>
    <div><NavBar/></div>
    <div><Banner/></div>
    <div><Skills/></div>
    <div><Project/></div>
    </>

  );
}

export default App;
