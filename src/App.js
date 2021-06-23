import './App.css';
import { Route, Switch } from 'react-router';
import Mark from './components/mark';
import Submit from './components/submit';
import Upload from './components/upload';
import Error from './Error';
import {NavLink} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Welcome to LMS Portal</h1>
      
        <NavLink activeClassName="active_class" to="/uploadassignment">Upload Assignment</NavLink>
        <NavLink activeClassName="active_class" to="/submitassignment">Submit Assignment</NavLink>
        <NavLink activeClassName="active_class" to="/markassignment">Mark Assignment</NavLink>
      
      <Switch>
        <Route exact path="/"/>
        <Route path='/uploadassignment' component={Upload}/>
        <Route path='/submitassignment' component={Submit}/>
        <Route path='/markassignment' component={Mark}/>
        <Route component={Error}/>
      </Switch>
    </div>
  );
}

export default App;
