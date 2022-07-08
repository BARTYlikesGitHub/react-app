// rfc - shortcut to create function component with file name
import Todo from './Todo.js'

export default function TodoList({ todos, toggleToDo }) {

  return (
    todos.map(todo => {
      return <Todo key={todo.id}
        toggleToDo={toggleToDo}
        todo={todo} />
    })
  )
}
