import { useState } from "react";
import axios from "axios"; // Don't forget to import axios

export default function Register() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  async function register(ev) {
    ev.preventDefault();
    await axios.post('/register', { username, password });
  }

  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form className="w-64 mx-auto mb-12" onSubmit={register}>
        <input
          value={username}
          onChange={ev => setUserName(ev.target.value)}
          type="text"
          placeholder="username"
          className="block w-full rounded-sm mb-2"
        />
        <input
          value={password}
          onChange={ev => setPassword(ev.target.value)}
          type="password"
          placeholder="password"
          className="block w-full rounded-sm mb-2"
        />
        <button className="bg-blue-500 text-white block w-full p-2">Register</button>
      </form>
    </div>
  );
}
