import Inicio from './Components/Inicio'
import Admin from './Components/Admin'
import Login from './Components/Login'
import Menu from './Components/Menu'
import Registrar from './Components/Registrar'
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <div>
    <Router>
      <Menu></Menu>
      <Switch>
        <Route exact path="/" component={Inicio}></Route>
        <Route path="/Login" component={Login}></Route>
        <Route path="/Registrar" component={Registrar}></Route>
        <Route path="/Admin" component={Admin}></Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
