import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { LandingPage } from './pages/LandingPage';
import Dashboard from './layouts/Dashboard/Dashboard';






function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;

