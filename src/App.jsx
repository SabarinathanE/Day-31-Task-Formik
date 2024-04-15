import Navbar from './component/Navbar';
import { Route,Routes } from 'react-router-dom';
import Books from './Pages/Books';
import Authors from './Pages/Authers';
import AddBooks from './Pages/AddBooks';
import './App.css';
import AddAuthor from './Pages/AddAuthor';

function App() {


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' Component={Books}/>
        <Route path='/Authors' Component={Authors}/>
        <Route path='/AddBooks' Component={AddBooks}/>
        <Route path='/AddAuthor' Component={AddAuthor}/>
      </Routes>
    </div>
    
  )
}

export default App
