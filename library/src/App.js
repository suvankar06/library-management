import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SignUp from "./components/SignUp";
import Footer from './components/Footer';
import React from 'react';
import Dashboard from './components/Dashboard';
import Books from './components/Books';
//import PrivateRoute from './components/Utils/PrivateRoute';
//import PublicRoute from './components/Utils/PublicRoute';
//import { getToken, removeUserSession, setUserSession } from './components/Utils/Common';
//import axios from 'axios';




function App() {
 /* const [authLoading, setAuthLoading] = useState(true);
 
  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
 
    axios.get(`http://localhost:3000/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);
 
  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }*/
  return (
   <>
   <Router>
      <Navbar />
        <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/Sign-up' component={SignUp} />
         <Route path='/Dashboard' component={Dashboard} />
         <Route path='/Books' component={Books} />
        </Switch>
        <Footer/>
   </Router>
   
    </>
  );
}

export default App;
