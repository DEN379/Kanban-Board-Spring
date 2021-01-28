import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import KanbanBoard from './components/KanbanBoard';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AddProjectTask from './components/AddProjectTask';
import {Provider} from 'react-redux';
import store from "./store";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar></NavBar>
          <Route exact path="/" component={KanbanBoard}></Route>
          <Route exact path="/addProjectTask" component={AddProjectTask}></Route>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
