import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import KanbanBoard from './components/KanbanBoard';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AddProjectTask from './components/AddProjectTask';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <Route exact path="/" component={KanbanBoard}></Route>
        <Route exact path="/addProjectTask" component={AddProjectTask}></Route>
      </div>
    </Router>
  );
}

export default App;
