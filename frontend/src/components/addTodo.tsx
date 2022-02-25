import { useState } from "react";
import axios from "axios";

const AddTodo = () => {
  const [todo, setTodo] = useState<string | undefined>(undefined);
  const [isComplete, setIsComplete] = useState<string | undefined>();

  async function createPost() {
    await axios
      .post(
        "https://6ozl6dmem7.execute-api.ap-southeast-2.amazonaws.com/",
        {
          todo: todo,
          complete: isComplete,
        },
        {
          headers: {
            "Content-Type": "text/plain",
          },
        }
      )
      .then((response) => {
        console.log("post", response);
      })
      .catch((error) => console.log(error));
  }

  const createPostHandler = () => {
    if (todo !== undefined) {
      createPost();
    } else {
      alert("There was no todo");
    }
  };

  return (
    <div>
      <input
        placeholder="add Todo"
        onChange={(event) => setTodo(event.target.value)}
      />
      <select onChange={(event) => setIsComplete(event.target.value)}>
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
      <button onClick={() => createPost()}>Create Todo</button>
    </div>
  );
};

export default AddTodo;
