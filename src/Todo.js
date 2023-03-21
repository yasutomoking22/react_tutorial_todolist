import React from 'react'

function Todo({todo, toggleTodo}) {
    const handleTodoClick = () => {
        toggleTodo(todo.id)
    }

  return (
    <div>
        <label>
            <input 
              type="checkbox" 
              checked={todo.completed} 
              readOnly
              onChange={handleTodoClick}>
            </input>
        </label>
        {todo.name}
    </div>
  )
};

export default Todo;