
import './App.css';
import AddUser from './Components/AddUser';
import Admin from './Components/Admin';
import AllUsers from './Components/AllUsers';
import EditUser from './Components/EditUser';
import Navbar from './Components/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element = {<Admin/>}/>
        <Route exact path='/all' element = {<AllUsers/>}/>
        <Route exact path='/add' element = {<AddUser/>}/>
        <Route exact path='/edit/:id' element = {<EditUser/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
