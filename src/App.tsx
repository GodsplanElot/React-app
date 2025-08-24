import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
 const [users, setUsers] = useState<User[]>([]);

 useEffect(() => {
  axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
  .then((res) => setUsers(res.data));
 }, [])

  return <ol className="list-group list-group-numbered">
    {users.map(user => <li className="list-group-item" key={user.id}>{user.name}</li>)}
  </ol>
}

export default App;