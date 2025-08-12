// rafce

import { useGetTodosQuery, useGetUserQuery, useGetUsersQuery } from "./api";

const App = () => {
  const { data } = useGetUsersQuery();
  const { data: todos } = useGetTodosQuery();
  const { data: user } = useGetUserQuery(8);

  return (
    <div>
      <h1>User</h1>
      {user?.name}
      <h1>Users</h1>
      <ul>
        <li>{data?.map((user) => <li>{user.name}</li>)}</li>
      </ul>
      <h1>Todos</h1>
      <ul>
        <li>{todos?.map((todo) => <li>{todo.title}</li>)}</li>
      </ul>
    </div>
  );
};

export default App;
