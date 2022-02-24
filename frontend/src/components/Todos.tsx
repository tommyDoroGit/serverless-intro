import axios from "axios";
import { useEffect, useState } from "react";

interface Todo {
  completed: boolean;
  todo: string;
  id: number;
}

const Todos = () => {
  const [todos, setTodos] = useState<[Todo] | null>(null);

  useEffect(() => {
    axios
      .get("https://6ozl6dmem7.execute-api.ap-southeast-2.amazonaws.com/todos")
      .then((response) => {
        setTodos(response.data);
      });
  }, [todos]);

  if (!todos) return null;

  return (
    <div>
      <h2>These are Todos</h2>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <div>{t.todo}</div>
            <div>{t.completed && <div>Completed</div>}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
