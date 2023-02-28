import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import { ContactForm } from './Form/ContactForm';
import { LandingPage } from './pages/LandingPage';
import Dashboard from './layouts/Dashboard/Dashboard';
import { Skills } from './components/Skills';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}>
          <Route index element={<LandingPage/>}/>
          {/* <Route path='home' element={}/> */}
          <Route path='skills' element={<Skills/>}/>
          <Route path='contact-form' element={<ContactForm/>}/>
        </Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;

