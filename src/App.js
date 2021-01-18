import React, { useState , useEffect} from 'react';
import Header from '../src/Compoenent/Header';
import './App.css';
import { Redirect,useHistory, Switch, Route,} from 'react-router-dom';
// import '../src/HelperCss/margin-helper.css';
import Register from './Compoenent/Register';
import {unregister} from './Compoenent/Interceptor';

function App(){

  const [isAuth,setIsAuth] = useState(false);
  const history= useHistory();

  useEffect(()=>{
    console.log(isAuth);
  },[isAuth])


  function isAuthValid(){
     setIsAuth(true);
  }

    return (
      <div className="App">
        <header className="App-header" id="bckgrnd" style={{backgroundColor:"#282c34"}}>
       
        { !isAuth &&
         <Switch>
              <Route exact path="/">
                <Register history={history} header="Log in"  isAuthValid={isAuthValid} btnValue="Login" note="Donot Have an account? Register Here" />
              </Route>

              <Route exact path="/signup">
                <Register history={history}  header="Create/Register your accout with us"  isAuthValid={isAuthValid} btnValue="Register" note="Already Have an account? Login Here" />
              </Route>

              <Redirect to="/" />
          </Switch>
        }
     
        {
          isAuth &&
          <Switch>
            <Route exact path="/details">
              <Header history={history}/>
          </Route>
         </Switch>
        } 
            
        </header>
      </div>
    );
  }


export default App;
