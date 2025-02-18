import React, { useState } from "react";
import UserPool from "../UserPool";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    // this is where we add users to our user pool
    UserPool.signUp(email, password, [], null, (err, data) =>{
        if (err){
            console.log(err)
        }
        console.log(data)
        })
    };


  return (
    <text>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="submit">Signup</button>
      </form>
    </text>
  );
};

export default Signup;
