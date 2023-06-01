import React, { useState} from "react";


const Signup=()=>{
    const [details,setDetails]=useState({
        fname:"",
        lname:"",
        email:"",
        password:""

    })
    const handleChange=(e)=>{
        const {name, value}=e.target;
        setDetails((prev)=>{
            return{...prev,[name]:value};
        })


     };
     const handleSubmit = (e) => {
        e.preventDefault();
        const { fname, lname, email, password } = details;
        fetch("http://localhost:5000/register", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            fname:fname,
            lname:lname,
            email:email,
            password:password,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "userRegister");
          })
          .catch((err) => console.log(err));
      };
    
        const signIn=()=>{
            window.location.href='./login';
        }
    

    return(

        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h1> Sign-Up</h1>
                <div>
                    <label htmlFor='fname'>FirstName</label>{""}
                    <input type='text'  name='fname'  onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='lname'>LastName</label>{""}
                    <input type='text' name='lname' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>{""}
                    <input type='email' name='email' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>{""}
                    <input type='password' name='password' onChange={handleChange}/>
                
                </div>
                <button type='submit'> Submit </button>
                <p className='para'>if already have account sign-in</p>
                <button onClick={ signIn}  type='submit'> sign-in </button>

            </form>
        </div>
    );
    

};

export default Signup;