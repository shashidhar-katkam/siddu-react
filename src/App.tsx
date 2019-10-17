import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.scss';
import routes from "./routes";
// import  Dashboard  from "./views/Dashboard";
// import  EditContact  from "./Views/EditContact";
// import  CreateContact  from "./Views/CreateContact";
 
const App: React.FC = () => {
  return (
    <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component= {route.component}
          />
        );
      })}
    </div>
  </Router>
  
  // <Router>
  // <Route path="/" exact component={Dashboard} />
  // <Route path="/create" exact component={CreateContact} />
  // <Route path="/edit/:id" exact component={EditContact} />
  // {/* <Route path="/edit/:id" exact component={(props:any) => <EditContact required="some string" {...props} />}  /> */}
  
  // </Router>
  );
}



export default App;
