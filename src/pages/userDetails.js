import React,{Component} from 'react';


export default class UserDetails extends Component{
  constructor(props){
    super(props);
    this.state={
      userData:"",
    };
  }
    componentDidMount(){
        fetch("http://localhost:5000/userData", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            token:window.localStorage.getItem("token"),
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "userData");
            this.setState({userData:data.data});
            
          });
          
      }
      logOut=()=>{
        window.localStorage.clear();
        window.location.href="./Signup";
      };
      render(){
        return(
            <div>
                <h1>hiiiiii
                  {/* {this.state.userData.fname} */}
                  </h1>
                <h1>Welcome 
                  {/* {this.State.userData.email} */}
                  </h1>
                  <button onClick={this.logOut}  className='btn'> Logout</button>

            </div>
        )
      }
    

}