import { useEffect, useState } from "react";
import axios from "axios";

export interface DeleteTodoProps {
  id: number;
}

//This is a test

const DeleteTodo = ({ id }: DeleteTodoProps) => {
  function deleteTodo() {
    const url = `https://6ozl6dmem7.execute-api.ap-southeast-2.amazonaws.com/todos/${id}`;
    console.log("url", url);
    axios
      .delete(url)
      .then((response) => {
        console.log("This was deleted", response);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <button onClick={deleteTodo}>delete?</button>
    </div>
  );
};

export default DeleteTodo;
