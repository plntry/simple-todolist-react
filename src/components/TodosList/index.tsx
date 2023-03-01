import { useSelector } from 'react-redux'
import { selectTodos } from '../../store/todosSlice'
import TodoItem from '../TodoItem'
import './TodosList.css'

function TodosList () {
  const todos = Object.values(useSelector(selectTodos))[0]

  return (
    <>
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>DESCRIPTION</th>
                <th>STATUS</th>
            </tr>
        </thead>
        <tbody>
            {(todos.map((todo: ITodo) => {
              return (
                <tr key={todo.id}>
                  <TodoItem
                      key={todo.id}
                      id={todo.id}
                      title={todo.title}
                      description={todo.description}
                      status={todo.status}
                  />
                </tr>
              )
            }))}
        </tbody>
      </table>
    </>
  )
}

export default TodosList
