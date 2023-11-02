import './App.css';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import AllWarehouse from './pages/AllWarehouse';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home/>}/>
        <Route exact path="/details/:id" Component={AllWarehouse}/>
      </Routes>
    </div>
  );
}

export default App;
