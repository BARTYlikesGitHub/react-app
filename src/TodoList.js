// rfc - shortcut to create function component with file name
import React from 'react'
import Todo from './Todo'
import './index.css'

export default function TodoList({ todos, toggleToDo }) {

  return (
    todos.map(todo => {
      return <Todo key={todo.id}
        toggleToDo={toggleToDo}
        todo={todo} />
    })
  )
}
