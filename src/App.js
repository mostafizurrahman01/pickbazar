// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Shop from './Components/Shop/Shop';

// function App() {
//   return (
//     <div>
//       <Shop></Shop>
//     </div>
//   );
// }

// export default App;


// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

