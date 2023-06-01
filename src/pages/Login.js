import React from 'react';
import {Component} from 'react';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
        };
        this.handleSubmit=this.handleSubmit.bind(this);
    }
     handleSubmit (e)  {
        e.preventDefault();
        const {  email, password } = this.state;
        console.log(email,password);
        fetch("http://localhost:5000/login", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            
            email:email,
            password:password,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "userRegister");
            if(data.status==="ok"){
                alert("Successfully Login");
                window.localStorage.setItem("token",data.data);
                window.localStorage.setItem("loggedIn",true);
                window.location.href="./userDetails";
            }
          });
          
      }
    

    

   render() {
  return (
    <div>
        <form className='form' onSubmit={this.handleSubmit}>
            <h1> Login</h1>
            <div>
                <label htmlFor='email'> Email</label>
                <input type='email'  onChange={(e)=>this.setState({email:e.target.value})}/>
            </div>
            <div>
                <label htmlFor='password'> Password</label>
                <input type='password'  onChange={(e)=>this.setState({password:e.target.value})}/>
            </div>
            <button type='submit'>Submit</button>
            
        </form>

    </div>
  )}
   
}

