
import { useState, useRef } from "react";
import TodoList from "./TodoList";
import {v4 as uuidv4} from "uuid"; //ユニークキー生成用

function App() {
  // 状態管理
  // const [todos, setTodos] = useState(["Todo1", "Todo2"]);
  const [todos, setTodos] = useState([
    // {id: 1, name: "Todo1", completed: false}
  ]);

  // input属性の中身を取得できる
  const todoNameRef = useRef();

  //タスクの追加する
  const handleAddTodo = () => {
    // console.log(todoNameRef)
    const name = todoNameRef.current.value

    //入力がない場合は何もしない
    if (name === "") return

    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), name: name, completed: false}]
    })
    // 初期化
    todoNameRef.current.value = null
  }

  // チェックを入れたタスクを完了状態にする
  const toggleTodo = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find((todo)=>todo.id === id) //一致するIDを一つ一つ探索
    todo.completed = !todo.completed //一致するtodoを更新
    setTodos(newTodos) //todos配列の中身を更新
  }

  // チェックを入れたタスクを削除する
  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  return (
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input type="text" ref={todoNameRef}></input>
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスク: 
        <div>
          {todos.filter((todo) => !todo.completed).length}
        </div>
      </div>
    </div>
  );
}

export default App;
