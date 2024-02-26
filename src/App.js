import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: "react를 배워봅시다.",
    },
  ]);
  const [content, setContent] = useState("");

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  const handleAdd = () => {
    const newTodo = {
      id: uuidv4(),
      content: content,
    };
    setTodos([...todos, newTodo]);
    setContent("");
  };
  return (
    <div className="app-container">
      <div>
        <input type="text" value={content} onChange={handleContentChange} />
        <button onClick={handleAdd}>추가하기</button>
      </div>
      <h1>Todo List</h1>
      <div className="todo-list">
        {todos.map((todo) => {
          return (
            <div key={todo.id} className="todo-box">
              {todo.content}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
