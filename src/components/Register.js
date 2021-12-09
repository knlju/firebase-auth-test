import {useState} from "react";
import {useAuth} from "../contexts/AuthProvider";

export function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {register} = useAuth()

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(email);
    console.log(password);
    register(email, password)
  }

  return (
    <div>
      <h3>Register</h3>
      <form action="" onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={handleEmailChange}/>
        <input type="password" value={password} onChange={handlePasswordChange}/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}