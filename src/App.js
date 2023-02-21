import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import { Skills } from './components/Skills';
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import DashboardLayout from './layouts/DashBoard';



function App() {
  return (

    <BrowserRouter>

      <Routes>
        <Route path='/' element={<DashboardLayout />}>
          <Route index element={<Banner />} />
          <Route path='skills' element={<Skills />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
