import {useState} from "react";
import {useAuth} from "../contexts/AuthProvider";

export function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {login, loginWithGitHub} = useAuth()

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
    login(email, password)
  }

  return (
    <div>
      <h3>Login</h3>
      <form action="" onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={handleEmailChange}/>
        <input type="password" value={password} onChange={handlePasswordChange}/>
        <input type="submit" value="Submit"/>
      </form>
      <button onClick={loginWithGitHub}>Log in with GitHub instead? :D</button>
    </div>
  );
}