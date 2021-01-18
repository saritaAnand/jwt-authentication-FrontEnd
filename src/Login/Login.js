import React from 'react';
// import logo from './logo.svg';
import {getUsers} from '../Services/Login-services';

export default class Login extends React.Component {
  constructor(){
    super();
    this.state={
      name:'',
      email: '',
      password:''
    }
  }
  SubmitData(e){
    e.preventDefault();
    console.log("Submit data");
    const body={
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }
    getUsers(body)
    .then(res => res.data)
    .then(data =>{
      if(data){
        console.log(data);
      }
    })
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={(e)=>this.SubmitData(e)}>
            <div>
              <label>User Name</label>
              <input type="text" onChange={(e)=>this.setState({name:e.target.value})}/>
            </div>
            <div>
              <label>Email</label>
              <input type="text" onChange={(e)=>this.setState({email:e.target.value})}/>
            </div>
            <div>
              <label onClick={()=>console.log(this.state)}>Password</label>
              <input type="password" onChange={(e)=>this.setState({password:e.target.value})}/>
            </div>
            <input type="submit" />
          </form>
        </header>
      </div>
    );
  }
}
