import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
 const [users, setUsers] = useState<User[]>([]);
 const [error, setError] = useState('');

 useEffect(() => {
  axios.get<User[]>('https://jsonplaceholder.typicode.com/xusers')
  .then((res) => setUsers(res.data))
  .catch(err => setError(err.message));
 }, [])

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ol className="list-group list-group-numbered">
        {users.map(user => <li className="list-group-item" key={user.id}>{user.name}</li>)}
      </ol>
    </>

  )
}

export default App;