"use client"
import React, { useState } from "react"

// interface LoginFormProps {
//     onSubmit:(email: string, password:string) => void;
// }
    
const LoginForm = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState ('');

    const handleEmailChange = (e:React.ChangeEvent <HTMLInputElement> ) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e:React.ChangeEvent <HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
    };
  return (
    <form onSubmit={handleSubmit}>
        <div className="form-group">
           
            <label htmlFor="exampleInputEmail1">Password</label>
            <input type="pasword" value={password} />
        </div>
    </form>
  )
}

export default LoginForm


