import React from 'react';
import {postUsers,getUsers} from '../Services/Login-services';

export default class Register extends React.Component {
    constructor(){
      super();
      this.state={
        name:'',
        email: '',
        password:'',
        error:''
      }
      this.switchPages = this.switchPages.bind(this);
    }
    SubmitData(e){
      e.preventDefault();
      if(!this.state.email || !this.state.password || !this.state.name || (!this.state.password && !this.state.email && !this.state.name )){
        this.setState({
          error:"All Fields Are Mandatory. !!!"
        })
        return;
      }
      else{
        this.setState({
          error:null
        })
      }
      const body={
        name: this.state.name,
        email: this.state.email.trim(),
        password: this.state.password.trim()
      }
      postUsers(body)
      .then(res => res.json())
      .then(data =>{
        if(data.access_token){
          localStorage.setItem("token",data.access_token);
          console.log(data);
          this.props.history.push("/");
        }
        else{
          alert(data.message);
        }
      })
      .catch(e=>{
        console.error(e)
      })
    }

    LoginData(e){
    e.preventDefault();
    console.log("Submit data");
    if(!this.state.email || !this.state.password || (!this.state.password && !this.state.email )){
      this.setState({
        error:"All Fields Are Mandatory. !!!"
      })
      return;
    }
    else{
      this.setState({
        error:null
      })
    }
    const body={
      // name: this.state.name,
      email: this.state.email.trim(),
      password: this.state.password.trim()
    }
    getUsers(body)
    .then(res => res.json())
    .then(data =>{
      if(data.access_token){
        localStorage.setItem("token",data.access_token);
        console.log(this.props);
        this.props.isAuthValid();
        this.props.history.push("/details");
      }
      else{
        alert(data.message);
      }
    })
    .catch(e=>{
      console.error(e)
    })
  }

  switchPages(){
    if(window.location.pathname === "/signup"){
      this.props.history.push("/");
    }
    else{
      this.props.history.push("/signup");
    }
  }
    render(){
      return (
        <main className="login-wrapper">
          <h3>XYZ Company</h3>

          <h6>{this.props.header}</h6>
            <form onSubmit={(e)=>{(window.location.pathname === "/signup")  ? this.SubmitData(e) : this.LoginData(e) }}>
              {
              (window.location.pathname === "/signup") &&
              <div>
                <label className="label col-25">Name: </label>
                <input type="text" onChange={(e)=>this.setState({name:e.target.value})}/>
              </div>
              }
              <div>
                <label className="label col-25">Email:</label>
                <input type="email" onChange={(e)=>this.setState({email:e.target.value})}/>
              </div>
              <div>
                <label className="label col-25" onClick={()=>console.log(this.state)}>Password:</label>
                <input type="password" onChange={(e)=>this.setState({password:e.target.value})}/>
              </div>
              {
                this.state.error &&
                <div style={{fontSize:"9px",color:'red'}}><strong>{this.state.error}</strong></div>
              }
              
              <div className="margin-top-five">
                <input className="submit-button" type="submit" value={this.props.btnValue}/>
              </div>
            </form>
            <div className="border-top" onClick={this.switchPages}>
              <p style={{color:"rgb(65,131,196)", fontSize:"10px"}}><strong>{this.props.note}</strong></p>
            </div>
        </main>
      );
    }
  }


  