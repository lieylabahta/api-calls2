import Todos from './Todos';
import Posts from './Posts';

import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
<div className="totalContainer">
    <div className="Container">

    <Link className='link' to='/Todos'>Todos</Link>
      <Link className='link' to='/Posts'>Posts</Link>
      
     
    </div>
    <div className='result'>
      <Switch>
      <Route  path='/Todos'><Todos/>Todos</Route>
        <Route  path='/Posts'><Posts/>Posts</Route>
        
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
