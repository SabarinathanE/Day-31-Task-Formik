import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import LibraryProvider from './Context/Library';
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <LibraryProvider>
  <Router>
    <App/>
  </Router>
  </LibraryProvider>,
)
