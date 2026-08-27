import { useState, useEffect } from 'react';
import User from './components/User';
import './App.css';
import './components/user.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((dados) => setUsers(dados.users));
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto' }}>
      <h1>Lista de Usuários</h1>
      {users.map((u) => (
        <User key={u.id} {...u} />
      ))}
    </div>
  );
}

export default App;